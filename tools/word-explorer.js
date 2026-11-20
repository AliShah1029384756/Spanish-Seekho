(() => {
"use strict";
const $ = (id) => document.getElementById(id);
const input = $("wordInput");
const statusBox = $("status");
const results = $("results");
const languageSelect = $("explainLanguage");
const searchButton = $("searchButton");
const STORAGE_KEY = "ss-word-explorer-cache-v2";
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
let activeRequest = 0;

// Small curated fallback for very common words (Roman Urdu + English + Urdu)
const FALLBACK = {
  "hola": { roman: "Hello / Assalam-o-alaikum", ur: "ہیلو / السلام علیکم", en: "Hello", note: "Common greeting" },
  "casa": { roman: "Ghar / Makaan", ur: "گھر / مکان", en: "House / Home", note: "Feminine noun" },
  "aprender": { roman: "Seekhna", ur: "سیکھنا", en: "To learn", note: "Verb" },
  "bonito": { roman: "Khoobsurat / Pyara", ur: "خوبصورت / پیارا", en: "Beautiful / Pretty", note: "Adjective (masculine)" },
  "gracias": { roman: "Shukriya", ur: "شکریہ", en: "Thank you", note: "" },
  "adiós": { roman: "Khuda hafiz / Alvida", ur: "خدا حافظ / الوداع", en: "Goodbye", note: "" },
  "por favor": { roman: "Meharbani se / Please", ur: "مہربانی سے", en: "Please", note: "" },
  "sí": { roman: "Haan", ur: "ہاں", en: "Yes", note: "" },
  "no": { roman: "Nahi", ur: "نہیں", en: "No", note: "" },
  "amigo": { roman: "Dost (mard)", ur: "دوست (مرد)", en: "Friend (male)", note: "" },
  "amiga": { roman: "Dost (aurat)", ur: "دوست (عورت)", en: "Friend (female)", note: "" },
  "agua": { roman: "Paani", ur: "پانی", en: "Water", note: "Feminine noun (but uses el)" },
  "comida": { roman: "Khana", ur: "کھانا", en: "Food", note: "" },
  "tiempo": { roman: "Waqt / Mausam", ur: "وقت / موسم", en: "Time / Weather", note: "" },
  "día": { roman: "Din", ur: "دن", en: "Day", note: "" },
  "noche": { roman: "Raat", ur: "رات", en: "Night", note: "" },
  "mañana": { roman: "Subah / Kal (future)", ur: "صبح / کل", en: "Morning / Tomorrow", note: "" },
  "hoy": { roman: "Aaj", ur: "آج", en: "Today", note: "" },
  "ayer": { roman: "Kal (past)", ur: "کل (ماضی)", en: "Yesterday", note: "" },
  "bien": { roman: "Theek / Achha", ur: "ٹھیک / اچھا", en: "Well / Good", note: "" },
  "mal": { roman: "Bura / Kharab", ur: "برا / خراب", en: "Bad", note: "" },
  "grande": { roman: "Bara", ur: "بڑا", en: "Big / Large", note: "" },
  "pequeño": { roman: "Chhota", ur: "چھوٹا", en: "Small", note: "" },
  "corazón": { roman: "Dil", ur: "دل", en: "Heart", note: "" },
  "amor": { roman: "Mohabbat / Pyar", ur: "محبت / پیار", en: "Love", note: "" }
};

const savedLanguage = localStorage.getItem("ss-language");
if (savedLanguage && ["roman","urdu","english"].includes(savedLanguage)) {
  languageSelect.value = savedLanguage === "english" ? "en" : savedLanguage === "urdu" ? "ur" : "roman";
}

function setStatus(message, kind = "") {
  statusBox.textContent = message;
  statusBox.className = "status" + (kind ? " " + kind : "");
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));
}
function cacheRead(key) {
  try {
    const cache = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const item = cache[key];
    if (item && Date.now() - item.savedAt < CACHE_TTL) return item.data;
  } catch (_) {}
  return null;
}
function cacheWrite(key, data) {
  try {
    const cache = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    cache[key] = { savedAt: Date.now(), data };
    const keys = Object.keys(cache).sort((a,b) => cache[b].savedAt - cache[a].savedAt);
    keys.slice(40).forEach((oldKey) => delete cache[oldKey]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch (_) {}
}
async function fetchJSON(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { "Accept":"application/json" } });
    if (!response.ok) throw new Error(response.status === 404 ? "No dictionary entry was found." : "An online source returned an error (" + response.status + ").");
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function cleanWiktionaryExtract(raw) {
  if (!raw) return "";
  let text = String(raw)
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Prefer the Spanish section if present
  const esMatch = text.match(/(?:^|\n)===\s*Español\s*===([\s\S]*?)(?=\n===\s*[^=]|$)/i);
  if (esMatch) text = esMatch[1].trim();

  // Remove other language sections that sometimes leak
  text = text.replace(/\n===\s*(Asturiano|Catalán|Hawaiano|Inglés|Francés|Italiano|Portugués|Gallego|Latín).*?(?=\n===|$)/gis, "");

  // Keep only the first few meaningful blocks (definitions + etymology lightly)
  const lines = text.split("\n").filter(l => l.trim());
  const kept = [];
  let senseCount = 0;
  for (const line of lines) {
    if (/^={2,}/.test(line)) continue; // skip remaining headings
    if (/^Etimología/i.test(line) && kept.length > 0) continue;
    if (/^\d+\s/.test(line) || /^(Sustantivo|Adjetivo|Verbo|Interjección|Adverbio|Preposición)/i.test(line)) {
      senseCount++;
      if (senseCount > 6) break;
    }
    kept.push(line);
    if (kept.join(" ").length > 900) break;
  }
  return kept.join("\n").trim().slice(0, 1100);
}

function normaliseDictionary(payload, term) {
  if (!Array.isArray(payload) || !payload.length) return null;
  const entry = payload[0];
  const phonetic = entry.phonetic || (entry.phonetics || []).find(p => p.text)?.text || "";
  const audio = (entry.phonetics || []).find(p => p.audio)?.audio || "";
  const meanings = (entry.meanings || []).map((meaning) => ({
    partOfSpeech: meaning.partOfSpeech || "",
    definitions: (meaning.definitions || []).map(d => ({
      definition: d.definition || "",
      example: d.example || "",
      synonyms: d.synonyms || [],
      antonyms: d.antonyms || []
    })).filter(d => d.definition)
  })).filter(m => m.definitions.length);
  if (!meanings.length) return null;
  return { word: entry.word || term, phonetic, audio, meanings, source: "Free Dictionary API", sourceUrl: "https://dictionaryapi.dev/" };
}

async function lookupDictionary(term) {
  // 1. Spanish Wiktionary MediaWiki API
  const apiUrl = "https://es.wiktionary.org/w/api.php?action=query&format=json&prop=extracts&explaintext=1&exsectionformat=plain&redirects=1&titles=" + encodeURIComponent(term) + "&origin=*";
  try {
    const payload = await fetchJSON(apiUrl);
    const pages = payload?.query?.pages || {};
    const page = Object.values(pages)[0];
    let extract = String(page?.extract || "").trim();
    if (page && !page.missing && extract) {
      extract = cleanWiktionaryExtract(extract);
      if (extract) {
        return {
          word: page.title || term,
          phonetic: "",
          audio: "",
          meanings: [{ partOfSpeech: "Spanish Wiktionary", definitions: [{ definition: extract, example: "", synonyms: [], antonyms: [] }] }],
          source: "Spanish Wiktionary",
          sourceUrl: "https://es.wiktionary.org/wiki/" + encodeURIComponent(page.title || term)
        };
      }
    }
  } catch (_) {}

  // 2. Wikimedia REST summary
  try {
    const wikiUrl = "https://es.wiktionary.org/api/rest_v1/page/summary/" + encodeURIComponent(term);
    const wiki = await fetchJSON(wikiUrl);
    const extract = cleanWiktionaryExtract(String(wiki.extract || "").trim());
    if (extract && wiki.type !== "disambiguation") {
      return {
        word: wiki.title || term,
        phonetic: "",
        audio: "",
        meanings: [{ partOfSpeech: "Wiktionary entry", definitions: [{ definition: extract, example: "", synonyms: [], antonyms: [] }] }],
        source: "Spanish Wiktionary",
        sourceUrl: wiki.content_urls?.desktop?.page || ("https://es.wiktionary.org/wiki/" + encodeURIComponent(term))
      };
    }
  } catch (_) {}

  // 3. dictionaryapi.dev
  try {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/es/" + encodeURIComponent(term);
    const payload = await fetchJSON(url);
    const result = normaliseDictionary(payload, term);
    if (result) return result;
  } catch (_) {}

  throw new Error("Is lafz ka result nahi mila. Spelling check karein, ya koi doosra Spanish word try karein.");
}

function isBadTranslation(text, original) {
  if (!text) return true;
  const t = text.trim().toLowerCase();
  const o = (original || "").toLowerCase();
  // Common garbage patterns from MyMemory
  if (t.length < 2) return true;
  if (t === o) return true;
  if (/^(query|translation|error|not found)/i.test(t)) return true;
  if (t.includes("which language") || t.includes("کونسی زبان") || t.includes("آپ کونسی")) return true;
  if (t.length > 80 && !t.includes(" ")) return true; // single long token usually bad
  return false;
}

async function translate(text, target) {
  if (!text) return "";
  const lang = target === "ur" || target === "roman" ? "ur" : "en";
  // Prefer short clean text
  const q = text.slice(0, 120).replace(/\n+/g, " ").trim();
  const url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(q) + "&langpair=es%7C" + lang;
  try {
    const data = await fetchJSON(url);
    if (data?.responseStatus !== 200) return "";
    let primary = String(data?.responseData?.translatedText || "").trim();
    if (isBadTranslation(primary, q)) {
      const alternatives = Array.isArray(data?.matches) ? data.matches : [];
      const match = alternatives.find(item => {
        const tr = String(item?.translation || "").trim();
        return tr && !isBadTranslation(tr, q);
      });
      primary = match ? String(match.translation).trim() : "";
    }
    return primary;
  } catch (_) { return ""; }
}

function speakSpanish(text) {
  if (!("speechSynthesis" in window)) {
    setStatus("Aapke browser mein speech support nahi hai. Pronunciation guide padh sakte hain.", "error");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.86;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function unique(items) {
  return [...new Set((items || []).filter(Boolean))].slice(0, 16);
}

function getFallbackMeaning(term, target) {
  const key = term.toLowerCase().normalize("NFC");
  const entry = FALLBACK[key] || FALLBACK[term.toLowerCase()];
  if (!entry) return null;
  if (target === "en") return entry.en;
  if (target === "ur") return entry.ur;
  return entry.roman; // roman
}

function renderResult(data, translation, target, cached = false, fromFallback = false) {
  const isUrdu = target === "ur";
  const isRoman = target === "roman";
  let translationLabel;
  if (target === "en") translationLabel = "English meaning";
  else if (target === "ur") translationLabel = "اردو معنی";
  else translationLabel = "Roman Urdu meaning";

  if (fromFallback) translationLabel += " · Curated";

  const allSynonyms = unique(data.meanings.flatMap(m => m.definitions.flatMap(d => d.synonyms)));
  const allAntonyms = unique(data.meanings.flatMap(m => m.definitions.flatMap(d => d.antonyms)));

  const meaningHTML = data.meanings.map(meaning => {
    const defs = meaning.definitions.slice(0, 6).map((d, index) => `
      <div class="sense">
        <div class="definition"><b>${index + 1}.</b> ${escapeHTML(d.definition)}</div>
        ${d.example ? `<div class="example"><strong>${escapeHTML(d.example)}</strong><span>Example</span></div>` : ""}
      </div>`).join("");
    return `<section class="detail-section"><h3 class="section-title">${escapeHTML(meaning.partOfSpeech || "Meaning")}</h3>${defs}</section>`;
  }).join("");

  const tags = (label, values) => values.length ? `<section class="detail-section"><h3 class="section-title">${label}</h3><div class="tag-list">${values.map(v => `<span class="tag">${escapeHTML(v)}</span>`).join("")}</div></section>` : "";

  const displayTranslation = translation || (target === "en" ? "Translation not available right now." : target === "ur" ? "ترجمہ دستیاب نہیں۔" : "Translation abhi available nahi hai.");

  results.innerHTML = `
    <article class="result-card">
      <div class="word-heading">
        <div>
          <h2>${escapeHTML(data.word)}</h2>
          <div class="word-meta">${data.phonetic ? "Pronunciation: " + escapeHTML(data.phonetic) + " · " : ""}Spanish · ${data.meanings.map(m => escapeHTML(m.partOfSpeech)).filter(Boolean).join(", ")}</div>
        </div>
        <div class="word-actions">
          <button class="tool-button" id="playWord" type="button">▶ Listen</button>
          ${data.audio ? '<button class="tool-button" id="playAudio" type="button">♫ Dictionary audio</button>' : ""}
        </div>
      </div>
      <p class="translation-main" ${isUrdu ? 'dir="rtl" lang="ur"' : ""}>${escapeHTML(displayTranslation)}</p>
      <div class="translation-sub">${translationLabel}${cached ? " · Saved result" : ""}</div>
      ${meaningHTML}
      ${tags("Synonyms", allSynonyms)}
      ${tags("Antonyms", allAntonyms)}
      <section class="detail-section">
        <h3 class="section-title">More language help</h3>
        <p class="empty-detail">Noun gender, plural forms, idioms, collocations aur full verb tables is dictionary response mein nahi aate. Ye baad mein specialist data se add kiye ja sakte hain.</p>
      </section>
      <div class="source-line">Dictionary source: <a href="${escapeHTML(data.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(data.source)}</a>. Translation: MyMemory + curated fallback. Machine translations approximate ho sakti hain.</div>
    </article>`;

  $("playWord").addEventListener("click", () => speakSpanish(data.word));
  if (data.audio) $("playAudio")?.addEventListener("click", () => {
    const audio = new Audio(data.audio);
    audio.play().catch(() => setStatus("Dictionary audio play nahi ho saka is device pe.", "error"));
  });
}

async function search(term = input.value) {
  const query = String(term || "").trim();
  if (!query) {
    setStatus("Please enter a Spanish word or phrase.", "error");
    input.focus();
    return;
  }
  if (query.length > 90) {
    setStatus("Please search a shorter word or phrase (up to 90 characters).", "error");
    return;
  }

  input.value = query;
  const requestId = ++activeRequest;
  const target = languageSelect.value;
  const cacheKey = query.toLocaleLowerCase("es") + "|" + target;
  const cached = cacheRead(cacheKey);

  results.hidden = true;

  // Instant curated fallback for common words
  const fallbackMeaning = getFallbackMeaning(query, target);

  if (cached) {
    renderResult(cached.dictionary, cached.translation, target, true);
    results.hidden = false;
    setStatus("Saved result dikhaya ja raha hai. Fresh lookup ke liye dobara search karein.");
    return;
  }

  setStatus("Online dictionary aur translation services se dhoondh rahe hain…", "loading");
  searchButton.disabled = true;
  searchButton.textContent = "Searching…";

  try {
    const dictionary = await lookupDictionary(query);
    if (requestId !== activeRequest) return;

    let translation = await translate(dictionary.word, target);
    if (requestId !== activeRequest) return;

    // Prefer curated fallback when online translation is bad or missing
    if (fallbackMeaning && (isBadTranslation(translation, dictionary.word) || !translation)) {
      translation = fallbackMeaning;
    }

    cacheWrite(cacheKey, { dictionary, translation });
    renderResult(dictionary, translation, target, false, !!fallbackMeaning && translation === fallbackMeaning);
    results.hidden = false;
    setStatus("Result load ho gaya. Kuch details source se missing ho sakti hain.");
  } catch (error) {
    if (requestId !== activeRequest) return;

    // Last resort: show curated meaning if available
    if (fallbackMeaning) {
      const miniDict = {
        word: query,
        phonetic: "",
        audio: "",
        meanings: [{ partOfSpeech: "Curated", definitions: [{ definition: "Common word — full dictionary entry available online.", example: "", synonyms: [], antonyms: [] }] }],
        source: "Spanish Seekho curated",
        sourceUrl: "https://alishah1029384756.github.io/Spanish-Seekho/"
      };
      renderResult(miniDict, fallbackMeaning, target, false, true);
      results.hidden = false;
      setStatus("Online dictionary fail hua, lekin curated meaning dikhaya gaya.", "error");
      return;
    }

    if (cached) {
      renderResult(cached.dictionary, cached.translation, target, true);
      results.hidden = false;
      setStatus("Live lookup fail. Saved result dikhaya ja raha hai.", "error");
    } else {
      setStatus(error.name === "AbortError"
        ? "Online lookup time out ho gaya. Dobara try karein."
        : (error.message || "Word load nahi ho saka. Internet check karein."), "error");
    }
  } finally {
    if (requestId === activeRequest) {
      searchButton.disabled = false;
      searchButton.textContent = "Search →";
    }
  }
}

searchButton.addEventListener("click", () => search());
input.addEventListener("keydown", (event) => { if (event.key === "Enter") search(); });
languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value === "en" ? "english" : languageSelect.value === "ur" ? "urdu" : "roman";
  localStorage.setItem("ss-language", lang);
  if (input.value.trim()) search(input.value);
});
document.querySelectorAll("[data-word]").forEach(button => button.addEventListener("click", () => {
  input.value = button.dataset.word;
  search(button.dataset.word);
}));
const params = new URLSearchParams(location.search);
const prefilled = params.get("word");
if (prefilled) { input.value = prefilled; search(prefilled); }
})();
