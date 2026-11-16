(() => {
  const labels = { roman: "Roman Urdu", urdu: "اردو", english: "English" };
  const valid = ["roman", "urdu", "english"];
  let language = localStorage.getItem("ss-language") || "roman";
  if (!valid.includes(language)) language = "roman";

  function applyLanguage() {
    const isUrdu = language === "urdu";
    document.documentElement.lang = isUrdu ? "ur" : "en";
    document.documentElement.dir = isUrdu ? "rtl" : "ltr";
    document.body.dir = isUrdu ? "rtl" : "ltr";
    const button = document.getElementById("languageButton");
    if (button) button.textContent = labels[language] + " \u25BE";
    document.querySelectorAll("[data-language-choice]").forEach(choice => {
      choice.setAttribute("aria-pressed", String(choice.dataset.languageChoice === language));
    });
  }

  function openPicker() {
    let dialog = document.getElementById("languageDialog");
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.id = "languageDialog";
      dialog.className = "language-dialog";
      dialog.innerHTML =
        '<form method="dialog" class="language-sheet"><div class="sheet-handle"></div><div class="sheet-heading"><div><span class="eyebrow">LANGUAGE / \u0632\u0628\u0627\u0646</span><h2>Choose your preference</h2><p>Yeh setting text direction aur saved language preference control karti hai.</p></div><button class="sheet-close" aria-label="Close">\u00D7</button></div><div class="language-options"><button type="button" data-language-choice="roman"><span>Roman Urdu</span><small>Roman Urdu layout</small><b>\u2713</b></button><button type="button" data-language-choice="urdu"><span lang="ur" dir="rtl">\u0627\u0631\u062F\u0648</span><small>\u0627\u0631\u062F\u0648 \u06A9\u06CC \u0633\u0645\u062A \u0645\u06CC\u06BA \u0635\u0641\u062D\u06C1</small><b>\u2713</b></button><button type="button" data-language-choice="english"><span>English</span><small>Left-to-right layout</small><b>\u2713</b></button></div></form>';
      document.body.append(dialog);
      dialog.addEventListener("click", event => {
        if (event.target === dialog) dialog.close();
        const choice = event.target.closest("[data-language-choice]");
        if (!choice) return;
        language = choice.dataset.languageChoice;
        localStorage.setItem("ss-language", language);
        applyLanguage();
        dialog.close();
      });
    }
    applyLanguage();
    dialog.showModal();
  }

  const languageButton = document.getElementById("languageButton");
  if (languageButton) languageButton.addEventListener("click", openPicker);
  applyLanguage();

  if (!document.querySelector(".mobile-nav")) {
    const path = location.pathname;
    const isLesson = /lesson-\d+\.html$/.test(path);
    const isPractice = /practice\.html$/.test(path);
    const nav = document.createElement("nav");
    nav.className = "mobile-nav";
    nav.setAttribute("aria-label", "Main navigation");
    nav.innerHTML =
      '<a href="../index.html"><span aria-hidden="true">\u2302</span><small>Home</small></a>' +
      '<a class="' + (!isLesson && !isPractice ? "active" : "") + '" href="index.html"' + (!isLesson && !isPractice ? ' aria-current="page"' : "") + '><span aria-hidden="true">\u25A4</span><small>Learn</small></a>' +
      '<a class="' + (isPractice ? "active" : "") + '" href="practice.html"' + (isPractice ? ' aria-current="page"' : "") + '><span aria-hidden="true">\u2726</span><small>Practice</small></a>' +
      '<a href="index.html#progressText"><span aria-hidden="true">\u25D4</span><small>Progress</small></a>' +
      '<button type="button" id="navLanguage"><span aria-hidden="true">\u6587</span><small>Language</small></button>';
    document.body.append(nav);
    document.getElementById("navLanguage").addEventListener("click", openPicker);
  }

  /* Spanish speech — shared for all lessons */
  let spanishVoice = null;
  let voicesReady = false;

  function pickSpanishVoice() {
    if (!("speechSynthesis" in window)) return null;
    const voices = speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    const prefer = [
      v => /es-ES/i.test(v.lang) && /google|microsoft|sabina|jorge|enrique|monica|paulina/i.test(v.name),
      v => /es-ES/i.test(v.lang),
      v => /^es[-_]/i.test(v.lang) && /google|microsoft/i.test(v.name),
      v => /^es[-_]/i.test(v.lang),
      v => /spanish/i.test(v.name)
    ];
    for (const test of prefer) {
      const found = voices.find(test);
      if (found) return found;
    }
    return null;
  }

  function refreshVoices() {
    spanishVoice = pickSpanishVoice();
    voicesReady = !!(speechSynthesis.getVoices() || []).length;
  }

  if ("speechSynthesis" in window) {
    refreshVoices();
    speechSynthesis.addEventListener("voiceschanged", refreshVoices);
    setTimeout(refreshVoices, 250);
    setTimeout(refreshVoices, 1000);
  }

  function speakSpanish(text, btn) {
    if (!text || !String(text).trim()) return;
    if (!("speechSynthesis" in window)) {
      alert("Is browser mein speech support nahi hai. Chrome / Edge try karein, ya device Settings \u2192 Language mein Spanish voice install karein.");
      return;
    }

    refreshVoices();

    try {
      speechSynthesis.cancel();
    } catch (e) {}

    const utter = new SpeechSynthesisUtterance(String(text).trim());
    utter.lang = spanishVoice && spanishVoice.lang ? spanishVoice.lang : "es-ES";
    utter.rate = 0.85;
    utter.pitch = 1;
    if (spanishVoice) utter.voice = spanishVoice;

    if (btn) {
      btn.classList.add("speaking");
      btn.setAttribute("aria-busy", "true");
      const clear = () => {
        btn.classList.remove("speaking");
        btn.removeAttribute("aria-busy");
      };
      utter.onend = clear;
      utter.onerror = clear;
    }

    const run = () => {
      try {
        speechSynthesis.speak(utter);
      } catch (err) {
        if (btn) {
          btn.classList.remove("speaking");
          btn.removeAttribute("aria-busy");
        }
        alert("Audio play nahi ho saka. Device par Spanish voice install karein (Settings \u2192 Language / Text-to-speech).");
      }
    };

    if (!voicesReady) {
      setTimeout(() => {
        refreshVoices();
        if (spanishVoice) utter.voice = spanishVoice;
        if (spanishVoice && spanishVoice.lang) utter.lang = spanishVoice.lang;
        run();
      }, 150);
    } else {
      setTimeout(run, 40);
    }
  }

  document.addEventListener(
    "click",
    event => {
      const btn = event.target.closest("[data-say]");
      if (!btn) return;
      event.preventDefault();
      speakSpanish(btn.getAttribute("data-say"), btn);
    },
    true
  );

  if (!document.getElementById("ss-speak-style")) {
    const style = document.createElement("style");
    style.id = "ss-speak-style";
    style.textContent =
      ".speak.speaking,.speak[aria-busy=true]{opacity:.7;outline:2px solid #c4a574;outline-offset:2px}" +
      "button.speak.speaking::after{content:' \u2026'}";
    document.head.append(style);
  }

  window.ssSpeakSpanish = speakSpanish;
})();
