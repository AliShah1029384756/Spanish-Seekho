(() => {
"use strict";
const $ = (id) => document.getElementById(id);
const input = $("wordInput");
const statusBox = $("status");
const results = $("results");
const languageSelect = $("explainLanguage");
const searchButton = $("searchButton");
const STORAGE_KEY = "ss-word-explorer-cache-v1";
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
let activeRequest = 0;

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
    keys.slice(30).forEach((oldKey) => delete cache[oldKey]);
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
  const url = "https://api.dictionaryapi.dev/api/v2/entries/es/" + encodeURIComponent(term);
  try {
    const payload = await fetchJSON(url);
    const result = normaliseDictionary(payload, term);
    if (result) return result;
  } catch (_) {}
  // Secondary fallback: Spanish Wiktionary page summary.
  const wikiUrl = "https://es.wiktionary.org/api/rest_v1/page/summary/" + encodeURIComponent(term);
  const wiki = await fetchJSON(wikiUrl);
  const extract = String(wiki.extract || "").trim();
  if (!extract || wiki.type === "disambiguation") {
    throw new Error("No dictionary entry was found. Try another spelling or a shorter word.");
  }
  return {
    word: wiki.title || term,
    phonetic: "",
    audio: "",
    meanings: [{ partOfSpeech: "Wiktionary entry", definitions: [{ definition: extract, example: "", synonyms: [], antonyms: [] }] }],
    source: "Spanish Wiktionary",
    sourceUrl: wiki.content_urls?.desktop?.page || ("https://es.wiktionary.org/wiki/" + encodeURIComponent(term))
  };
}
async function translate(text, target) {
  if (!text) return "";
  const lang = target === "ur" || target === "roman" ? "ur" : "en";
  const url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text.slice(0, 450)) + "&langpair=es%7C" + lang;
  try {
    const data = await fetchJSON(url);
    const translated = data?.responseData?.translatedText;
    if (!translated || data?.responseStatus !== 200) return "";
    return translated;
  } catch (_) { return ""; }
}
function speakSpanish(text) {
  if (!("speechSynthesis" in window)) {
    setStatus("Your browser does not support speech playback. You can still read the pronunciation guide.", "error");
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
function renderResult(data, translation, target, cached = false) {
  const isUrdu = target === "ur";
  const translationLabel = target === "en" ? "English meaning" : isUrdu ? "اردو معنی" : "Roman Urdu meaning";
  const allSynonyms = unique(data.meanings.flatMap(m => m.definitions.flatMap(d => d.synonyms)));
  const allAntonyms = unique(data.meanings.flatMap(m => m.definitions.flatMap(d => d.antonyms)));
  const meaningHTML = data.meanings.map(meaning => {
    const defs = meaning.definitions.slice(0, 8).map((d, index) => `
      <div class="sense">
        <div class="definition"><b>${index + 1}.</b> ${escapeHTML(d.definition)}</div>
        ${d.example ? `<div class="example"><strong>${escapeHTML(d.example)}</strong><span>Example sentence from dictionary</span></div>` : ""}
      </div>`).join("");
    return `<section class="detail-section"><h3 class="section-title">${escapeHTML(meaning.partOfSpeech || "Meaning")}</h3>${defs}</section>`;
  }).join("");
  const tags = (label, values) => values.length ? `<section class="detail-section"><h3 class="section-title">${label}</h3><div class="tag-list">${values.map(v => `<span class="tag">${escapeHTML(v)}</span>`).join("")}</div></section>` : "";
  const firstDefinition = data.meanings[0]?.definitions[0]?.definition || "";
  const definitionTranslation = firstDefinition ? awaitlessTranslationPlaceholder(firstDefinition) : "";
  results.innerHTML = `
    <article class="result-card">
      <div class="word-heading">
        <div><h2>${escapeHTML(data.word)}</h2><div class="word-meta">${data.phonetic ? "Pronunciation: " + escapeHTML(data.phonetic) + " · " : ""}Spanish · ${data.meanings.map(m => escapeHTML(m.partOfSpeech)).filter(Boolean).join(", ")}</div></div>
        <div class="word-actions">
          <button class="tool-button" id="playWord" type="button">▶ Listen</button>
          ${data.audio ? '<button class="tool-button" id="playAudio" type="button">♫ Dictionary audio</button>' : ""}
        </div>
      </div>
      <p class="translation-main" ${isUrdu ? 'dir="rtl" lang="ur"' : ""}>${escapeHTML(translation || "Translation is not available right now.")}</p>
      <div class="translation-sub">${translationLabel}${cached ? " · Saved result" : ""}</div>
      ${meaningHTML}
      ${tags("Synonyms", allSynonyms)}
      ${tags("Antonyms", allAntonyms)}
      <section class="detail-section"><h3 class="section-title">More language help</h3><p class="empty-detail">Noun gender, plural forms, idioms, collocations and full verb tables are not supplied by this dictionary response. These can be added through reviewed specialist data sources in a later update.</p></section>
      <div class="source-line">Dictionary source: <a href="${escapeHTML(data.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(data.source)}</a>. Translation service: MyMemory. Machine translations can be approximate.</div>
    </article>`;
  $("playWord").addEventListener("click", () => speakSpanish(data.word));
  if (data.audio) $("playAudio")?.addEventListener("click", () => {
    const audio = new Audio(data.audio);
    audio.play().catch(() => setStatus("Dictionary audio could not be played on this device.", "error"));
  });
}
function awaitlessTranslationPlaceholder() { return ""; }

async function search(term = input.value) {
  const query = String(term || "").trim();
  if (!query) { setStatus("Please enter a Spanish word or phrase.", "error"); input.focus(); return; }
  if (query.length > 90) { setStatus("Please search a shorter word or phrase (up to 90 characters).", "error"); return; }
  input.value = query;
  const requestId = ++activeRequest;
  const target = languageSelect.value;
  const cacheKey = query.toLocaleLowerCase("es") + "|" + target;
  const cached = cacheRead(cacheKey);
  results.hidden = true;
  if (cached) {
    renderResult(cached.dictionary, cached.translation, target, true);
    results.hidden = false;
    setStatus("Showing a saved result. It may be outdated; search again while online for a fresh lookup.");
    return;
  }
  setStatus("Searching online dictionary and translation services…", "loading");
  searchButton.disabled = true;
  searchButton.textContent = "Searching…";
  try {
    const dictionary = await lookupDictionary(query);
    if (requestId !== activeRequest) return;
    const translation = await translate(dictionary.word, target);
    if (requestId !== activeRequest) return;
    cacheWrite(cacheKey, { dictionary, translation });
    renderResult(dictionary, translation, target, false);
    results.hidden = false;
    setStatus("Dictionary result loaded. Some word details may not be available from the source.");
  } catch (error) {
    if (requestId !== activeRequest) return;
    if (cached) {
      renderResult(cached.dictionary, cached.translation, target, true);
      results.hidden = false;
      setStatus("Live lookup failed. Showing the saved result instead.", "error");
    } else {
      setStatus(error.name === "AbortError" ? "The online lookup took too long. Please try again." : (error.message || "Could not load this word. Check your internet connection and try again."), "error");
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