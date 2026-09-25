/* ==========================================================================
   Nuni – interactions: mobile nav + balloon-breathing exercise
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Balloon breathing ---- */
  const btn = document.querySelector(".breath-btn");
  const ball = document.querySelector(".breath-ball");
  const label = document.querySelector(".breath-instruction");

  let running = false;
  let timer = null;

  const t = () => window.NUNI.t; // always read the live dictionary
  const c = () => window.NUNI.core?.[window.NUNI.audience] || window.NUNI.t;

  function schedule(fn, ms) {
    timer = setTimeout(fn, ms);
  }

  function inhale() {
    if (!running) return;
    ball.classList.remove("exhale");
    ball.classList.add("inhale");
    label.textContent = c().breathIn || t().breath_in;
    schedule(hold, 4000);
  }
  function hold() {
    if (!running) return;
    label.textContent = c().breathHold || t().breath_hold;
    schedule(exhale, 1600);
  }
  function exhale() {
    if (!running) return;
    ball.classList.remove("inhale");
    ball.classList.add("exhale");
    label.textContent = c().breathOut || t().breath_out;
    schedule(inhale, 4000);
  }

  function start() {
    running = true;
    btn.textContent = c().breathStop || t().breath_stop;
    inhale();
  }
  function stop() {
    running = false;
    clearTimeout(timer);
    ball.classList.remove("inhale", "exhale");
    btn.textContent = c().breathStart || t().breath_start;
    label.textContent = c().breathDefault || t().breath_default;
  }

  if (btn) {
    btn.addEventListener("click", () => (running ? stop() : start()));
  }

  /* Keep live labels correct when the language changes mid-exercise */
  window.addEventListener("nuni:langchange", () => {
    if (!btn) return;
    if (running) {
      btn.textContent = c().breathStop || t().breath_stop;
    }
    // When idle, i18n.js already reset the default strings for us.
  });
  window.addEventListener("nuni:audiencechange", () => {
    if (!btn) return;
    stop();
  });

  /* ---- Read-aloud for the youngest audience ---- */
  const readButton = document.querySelector(".read-page-btn");
  const readAloudSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  const speech = readAloudSupported ? window.speechSynthesis : null;
  let readingPage = false;
  let readingSession = 0;
  let pageUtterances = [];
  let speechVoices = [];

  const refreshSpeechVoices = () => {
    speechVoices = speech ? speech.getVoices() : [];
  };

  if (speech) {
    refreshSpeechVoices();
    if (speech.addEventListener) speech.addEventListener("voiceschanged", refreshSpeechVoices);
  }

  const resetReadButton = () => {
    readingPage = false;
    if (readButton) {
      readButton.textContent = readAloudSupported ? t().read_aloud : t().read_unavailable;
      readButton.setAttribute("aria-pressed", "false");
    }
  };

  const stopReadingPage = () => {
    readingSession += 1;
    if (speech) speech.cancel();
    pageUtterances = [];
    resetReadButton();
  };

  const pageTextSegmentsForReading = () => {
    const selectors = [
      ".hero h1", ".hero .lead",
      '.audience-hub[data-audiences="little"] h2',
      '.audience-hub[data-audiences="little"] .audience-path strong',
      '.audience-hub[data-audiences="little"] .audience-path small',
      '.audience-hub[data-audiences="little"] .audience-guidance',
      "#what h2", "#what p:not([hidden])",
      "#journey h2", "#journey .step h3", "#journey .step p",
      "#feelings h2", "#feelings .two-col > div:first-child p",
      "#feelings .breath-card h3", "#feelings .breath-instruction",
      "#faq h2", "#faq summary"
    ];
    return selectors.flatMap((selector) => [...document.querySelectorAll(selector)])
      .filter((element) => !element.closest("[hidden]"))
      .map((element) => element.textContent.trim())
      .filter(Boolean);
  };

  const voiceForLanguage = (languageTag) => {
    const base = languageTag.toLowerCase().split("-")[0];
    return speechVoices.find((voice) => voice.lang.toLowerCase() === languageTag.toLowerCase())
      || speechVoices.find((voice) => voice.lang.toLowerCase().split("-")[0] === base)
      || null;
  };

  const finishReadingPage = (session, cancelQueue = false) => {
    if (session !== readingSession) return;
    if (cancelQueue && speech) speech.cancel();
    pageUtterances = [];
    resetReadButton();
  };

  if (readButton) {
    readButton.setAttribute("aria-pressed", "false");
    if (!readAloudSupported) {
      readButton.disabled = true;
      readButton.textContent = t().read_unavailable;
    } else {
      readButton.addEventListener("click", () => {
        if (readingPage) {
          stopReadingPage();
          return;
        }
        const segments = pageTextSegmentsForReading();
        if (!segments.length) return;

        const session = ++readingSession;
        const speechLanguages = { he: "he-IL", en: "en-US", ar: "ar-SA", ru: "ru-RU", fr: "fr-FR" };
        const languageTag = speechLanguages[window.NUNI.lang] || document.documentElement.lang;
        const voice = voiceForLanguage(languageTag);
        pageUtterances = segments.map((text, index) => {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = languageTag;
          utterance.rate = window.NUNI.lang === "he" ? 0.82 : 0.9;
          utterance.pitch = 1;
          if (voice) utterance.voice = voice;
          if (index === segments.length - 1) {
            utterance.onend = () => finishReadingPage(session);
          }
          utterance.onerror = (event) => {
            if (event.error !== "canceled") finishReadingPage(session, true);
          };
          return utterance;
        });

        readingPage = true;
        readButton.textContent = t().read_stop;
        readButton.setAttribute("aria-pressed", "true");
        if (speech.paused) speech.resume();
        pageUtterances.forEach((utterance) => speech.speak(utterance));
      });
    }
  }

  window.addEventListener("nuni:langchange", stopReadingPage);
  window.addEventListener("nuni:audiencechange", stopReadingPage);
});
