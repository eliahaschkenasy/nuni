/* ==========================================================================
   Nuni – wordless story player
   Advances through the scenes on a timeline, with big controls and a
   read-aloud caption for grown-ups (the film itself needs no reading).
   ========================================================================== */

const CAPTIONS = {
  he: [
    "🌅 בוקר טוב! נוני מתעורר.",
    "💧 היום אין ארוחת בוקר – אבל מותר לשתות מים!",
    "🚗 נוסעים לבית החולים.",
    "🧑‍⚕️ אח נחמד מקבל את נוני ונותן לו פיג'מה.",
    "🛏️ לנוני יש מיטה משלו.",
    "😴 מסכה רכה, סופרים 3־2־1… ונוני נרדם.",
    "💙 נוני ישן, והרופא המרדים שומר עליו כל הזמן.",
    "🎉 נוני מתעורר – הכול נגמר, וכל הכבוד!"
  ],
  en: [
    "🌅 Good morning! Nuni wakes up.",
    "💧 No breakfast today — but water is okay to drink!",
    "🚗 Off to the hospital.",
    "🧑‍⚕️ A kind nurse welcomes Nuni and gives him pyjamas.",
    "🛏️ Nuni gets his very own bed.",
    "😴 A soft mask, count 3-2-1… and Nuni falls asleep.",
    "💙 Nuni sleeps, and the sleep doctor watches over him the whole time.",
    "🎉 Nuni wakes up — it's all done, and well done!"
  ],
  ar: [
    "🌅 صباح الخير! نوني يستيقظ.",
    "💧 لا فطور اليوم — لكن يُسمح بشرب الماء!",
    "🚗 نذهب إلى المستشفى.",
    "🧑‍⚕️ ممرّض لطيف يستقبل نوني ويعطيه بيجامة.",
    "🛏️ لنوني سرير خاص به.",
    "😴 قناع ناعم، نعدّ ٣-٢-١… وينام نوني.",
    "💙 ينام نوني، وطبيب التخدير يراقبه طوال الوقت.",
    "🎉 يستيقظ نوني — انتهى كل شيء، أحسنت!"
  ],
  ru: [
    "🌅 Доброе утро! Нуни просыпается.",
    "💧 Сегодня без завтрака — но воду пить можно!",
    "🚗 Едем в больницу.",
    "🧑‍⚕️ Добрый сотрудник встречает Нуни и даёт ему пижаму.",
    "🛏️ У Нуни своя кроватка.",
    "😴 Мягкая маска, считаем 3-2-1… и Нуни засыпает.",
    "💙 Нуни спит, а врач-анестезиолог всё время рядом.",
    "🎉 Нуни просыпается — всё позади, молодец!"
  ],
  fr: [
    "🌅 Bonjour ! Nuni se réveille.",
    "💧 Pas de petit-déjeuner aujourd'hui — mais Nuni peut boire de l'eau !",
    "🚗 En route pour l'hôpital.",
    "🧑‍⚕️ Un gentil membre du personnel accueille Nuni et lui donne un pyjama.",
    "🛏️ Nuni a son propre lit.",
    "😴 Un masque tout doux, on compte 3-2-1… et Nuni s'endort.",
    "💙 Nuni dort, et le médecin anesthésiste veille sur lui tout le temps.",
    "🎉 Nuni se réveille — c'est terminé, bravo !"
  ]
};

/* Gentle narration for pre-readers, one calm line per scene, in every language.
   Read aloud by the browser's built-in voice (no audio files, works offline). */
const NARRATION = {
  he: [
    "בוקר טוב! נוני מתעורר.",
    "היום אין ארוחת בוקר, אבל מותר לנוני לשתות קצת מים.",
    "עכשיו נוני נוסע לבית החולים.",
    "איש צוות נחמד אומר שלום, ונותן לנוני פיג'מה רכה.",
    "לנוני יש מיטה משלו.",
    "מסכה רכה מתקרבת. בואו נספור יחד. שלוש… שתיים… אחת… ונוני נרדם.",
    "נוני ישן. רופא ההרדמה נמצא לידו כל הזמן.",
    "נוני מתעורר. הכול נגמר. כל הכבוד, נוני!"
  ],
  en: [
    "Good morning! Nuni wakes up.",
    "There is no breakfast today. But Nuni can drink a little water.",
    "Now Nuni goes to the hospital.",
    "A kind member of staff says hello, and gives Nuni soft pyjamas.",
    "Nuni gets his very own bed.",
    "A soft mask comes down. Let's count together. Three… two… one… and Nuni falls asleep.",
    "Nuni is sleeping. The sleep doctor stays close the whole time.",
    "Nuni wakes up. It's all done. Well done, Nuni!"
  ],
  ar: [
    "صباح الخير! نوني يستيقظ.",
    "لا يوجد فطور اليوم، لكن يمكن لنوني أن يشرب قليلاً من الماء.",
    "الآن يذهب نوني إلى المستشفى.",
    "أحد أفراد الطاقم اللطفاء يقول مرحباً، ويعطي نوني بيجامة ناعمة.",
    "لنوني سرير خاص به.",
    "ينزل قناع ناعم. لنعدّ معاً. ثلاثة… اثنان… واحد… وينام نوني.",
    "نوني نائم. طبيب التخدير يبقى بقربه طوال الوقت.",
    "نوني يستيقظ. انتهى كل شيء. أحسنت يا نوني!"
  ],
  ru: [
    "Доброе утро! Нуни просыпается.",
    "Сегодня нет завтрака, но Нуни можно попить немного воды.",
    "Теперь Нуни едет в больницу.",
    "Добрый сотрудник здоровается и даёт Нуни мягкую пижаму.",
    "У Нуни есть своя кроватка.",
    "Опускается мягкая маска. Давай посчитаем вместе. Три… два… один… и Нуни засыпает.",
    "Нуни спит. Врач-анестезиолог всё время рядом.",
    "Нуни просыпается. Всё закончилось. Молодец, Нуни!"
  ],
  fr: [
    "Bonjour ! Nuni se réveille.",
    "Il n'y a pas de petit-déjeuner aujourd'hui, mais Nuni peut boire un peu d'eau.",
    "Maintenant, Nuni va à l'hôpital.",
    "Un gentil membre du personnel dit bonjour et donne à Nuni un pyjama tout doux.",
    "Nuni a son propre lit.",
    "Un masque tout doux descend. Comptons ensemble. Trois… deux… un… et Nuni s'endort.",
    "Nuni dort. Le médecin anesthésiste reste tout près pendant tout ce temps.",
    "Nuni se réveille. C'est terminé. Bravo, Nuni !"
  ]
};

/* BCP-47 tags used to ask the speech engine for a matching voice. */
const NARRATION_LANG = { he: "he-IL", en: "en-US", ar: "ar-SA", ru: "ru-RU", fr: "fr-FR" };

/* --------------------------------------------------------------------------
   Narrator – reads each scene aloud in the current language with the
   browser's speech engine. Off by default; the toggle counts as the user
   gesture some browsers require before speaking. Which languages actually
   speak depends on the voices installed on the device.
   -------------------------------------------------------------------------- */
const Narrator = (() => {
  const synth = window.speechSynthesis;
  let on = false, spokenFor = -1;

  const curLang = () => (window.NUNI && window.NUNI.lang) || "he";
  const allVoices = () => (synth ? synth.getVoices() : []);

  // warm the voice list so the first click has voices ready
  if (synth && synth.addEventListener) {
    synth.addEventListener("voiceschanged", allVoices);
    allVoices();
  }

  function pickVoice(lang) {
    const rx = new RegExp("^" + lang + "(-|_|$)", "i");
    const matches = allVoices().filter((v) => rx.test(v.lang));
    if (!matches.length) return null;
    // prefer a warmer, more natural voice when the device offers one
    const nice = matches.find((v) =>
      /(Google|Natural|Neural|Premium|Enhanced|Samantha|Aria|Zira|Female)/i.test(v.name));
    return nice || matches[0];
  }

  function speak(i) {
    if (!on || !synth) return;
    if (i === spokenFor) return;         // don't repeat the same scene
    spokenFor = i;
    synth.cancel();
    const lang = curLang();
    const lines = NARRATION[lang] || NARRATION.he;
    const u = new SpeechSynthesisUtterance(lines[Math.min(i, lines.length - 1)] || "");
    u.lang = NARRATION_LANG[lang] || "en-US";
    u.rate = 0.92; u.pitch = 1.12; u.volume = 1;
    const v = pickVoice(lang);
    if (v) u.voice = v;
    synth.speak(u);
  }

  return {
    supported: !!synth,
    isOn: () => on,
    toggle() { on = !on; if (!on) this.stop(); return on; },
    speak,
    reset() { spokenFor = -1; },
    stop() { if (synth) synth.cancel(); spokenFor = -1; }
  };
})();

/* --------------------------------------------------------------------------
   Gentle lullaby, synthesised in the browser (no audio files to load).
   Browsers only allow sound after a user gesture, so playback resumes on the
   first tap/click anywhere on the page.
   -------------------------------------------------------------------------- */
const Music = (() => {
  const BEAT = 0.58;
  // a calm pentatonic melody, [frequency, beats]
  const MEL = [
    [659.25, 1], [783.99, 1], [880.00, 2], [783.99, 1], [659.25, 1], [587.33, 2],
    [523.25, 1], [659.25, 1], [783.99, 2], [880.00, 1], [783.99, 1], [659.25, 2],
    [587.33, 2], [523.25, 2]
  ];
  const BASS = [130.81, 196.00, 174.61, 196.00]; // C3 G3 F3 G3

  let ctx = null, master = null, timer = null;
  let noteIndex = 0, nextTime = 0, enabled = true, wanted = false;

  function ensure() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    // resume on the first user interaction (autoplay policy)
    const wake = () => {
      if (ctx.state === "suspended") ctx.resume();
      document.removeEventListener("pointerdown", wake);
      document.removeEventListener("keydown", wake);
    };
    document.addEventListener("pointerdown", wake);
    document.addEventListener("keydown", wake);
  }

  function tone(freq, t, dur, gain, type) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.05);
  }

  function tick() {
    if (!ctx) return;
    const ahead = ctx.currentTime + 1.2;
    while (nextTime < ahead) {
      const [f, b] = MEL[noteIndex % MEL.length];
      tone(f, nextTime, b * BEAT * 0.95, 0.20, "triangle");
      if (noteIndex % 4 === 0) {
        tone(BASS[((noteIndex / 4) | 0) % BASS.length], nextTime, BEAT * 3.6, 0.10, "sine");
      }
      nextTime += b * BEAT;
      noteIndex++;
    }
  }

  function apply() {
    if (!ctx) return;
    const on = enabled && wanted;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(on ? 0.20 : 0, now + (on ? 1.2 : 0.5));
    if (on) {
      if (ctx.state === "suspended") ctx.resume();
      if (nextTime < ctx.currentTime) nextTime = ctx.currentTime + 0.1;
      if (!timer) { tick(); timer = setInterval(tick, 250); }
    }
  }

  return {
    setPlaying(p) { wanted = p; ensure(); apply(); },
    toggle() { enabled = !enabled; ensure(); apply(); return enabled; },
    restart() { if (ctx) { noteIndex = 0; nextTime = ctx.currentTime + 0.1; } }
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  const stage    = document.getElementById("stage");
  const scenes   = Array.from(stage.querySelectorAll(".scene"));
  const playBtn  = document.getElementById("playBtn");
  const replayBtn= document.getElementById("replayBtn");
  const progress = document.getElementById("progress");
  const track    = document.getElementById("progressTrack");
  const handle   = document.getElementById("progressHandle");
  const caption  = document.getElementById("caption");
  let scrubbing  = false;

  // Durations come straight from each scene's --dur (single source of truth)
  const durs = scenes.map((s) => {
    const v = getComputedStyle(s).getPropertyValue("--dur");
    return (parseFloat(v) || 12) * 1000;
  });
  const total = durs.reduce((a, b) => a + b, 0);
  const ends = [];
  durs.reduce((acc, d, i) => (ends[i] = acc + d), 0);

  let elapsed = 0;
  let playing = false;
  let last = 0;
  let index = -1;

  const lang = () => (window.NUNI && window.NUNI.lang) || "he";

  function setCaption() {
    const list = CAPTIONS[lang()] || CAPTIONS.he;
    caption.textContent = list[Math.min(index, list.length - 1)] || "";
  }

  function showScene(i) {
    if (i === index) return;
    index = i;
    scenes.forEach((s, n) => s.classList.toggle("active", n === i));
    setCaption();
    if (playing && !scrubbing) Narrator.speak(i);
  }

  function render() {
    // which scene are we in?
    let i = ends.findIndex((e) => elapsed < e);
    if (i === -1) i = scenes.length - 1;
    showScene(i);
    const pct = Math.min(100, (elapsed / total) * 100);
    progress.style.width = pct + "%";
    // the fill grows from the start edge already; place the handle centre at the
    // same point using a physical offset so it lines up in RTL as well as LTR
    handle.style.left = (isRTL() ? 100 - pct : pct) + "%";
    track.setAttribute("aria-valuenow", Math.round(pct));
  }

  function frame(ts) {
    if (!playing) return;
    if (!last) last = ts;
    if (!scrubbing) elapsed += ts - last;   // hold time still while dragging
    last = ts;

    if (elapsed >= total) {
      elapsed = total;
      render();
      pause(true); // reached the end
      return;
    }
    render();
    requestAnimationFrame(frame);
  }

  function play() {
    if (elapsed >= total) elapsed = 0; // replay if finished
    playing = true;
    last = 0;
    stage.classList.remove("paused");
    playBtn.textContent = "⏸";
    Music.setPlaying(true);
    requestAnimationFrame(frame);
  }

  function pause(ended) {
    playing = false;
    stage.classList.add("paused");
    playBtn.textContent = "▶";
    Music.setPlaying(false);
    Narrator.stop();
  }

  playBtn.addEventListener("click", () => (playing ? pause(false) : play()));
  replayBtn.addEventListener("click", () => { elapsed = 0; index = -1; Music.restart(); Narrator.reset(); play(); });

  const musicBtn = document.getElementById("musicBtn");
  musicBtn.addEventListener("click", () => {
    const on = Music.toggle();
    musicBtn.textContent = on ? "🔊" : "🔇";
    musicBtn.classList.toggle("is-off", !on);
  });

  // Optional narration for little ones who can't read yet
  const narrateBtn = document.getElementById("narrateBtn");
  if (!Narrator.supported) {
    narrateBtn.style.display = "none";
  } else {
    narrateBtn.addEventListener("click", () => {
      const on = Narrator.toggle();
      narrateBtn.textContent = on ? "🗣️" : "🔈";
      narrateBtn.classList.toggle("is-off", !on);
      narrateBtn.setAttribute("aria-pressed", on ? "true" : "false");
      // start speaking the current scene right away when turned on mid-film
      if (on && playing && index >= 0) { Narrator.reset(); Narrator.speak(index); }
    });
  }

  // ---- Seeking: drag or click the bar to jump through the film ----
  const isRTL = () =>
    (document.documentElement.getAttribute("dir") || document.dir) === "rtl";

  function fractionFromX(clientX) {
    const r = track.getBoundingClientRect();
    let f = (clientX - r.left) / r.width;
    if (isRTL()) f = 1 - f;              // bar fills from the right in RTL
    return Math.max(0, Math.min(1, f));
  }

  function seekTo(f) {
    elapsed = Math.max(0, Math.min(1, f)) * total;
    index = -1;                         // force the scene + caption to refresh
    Narrator.stop();
    render();
  }

  track.addEventListener("pointerdown", (e) => {
    scrubbing = true;
    track.setPointerCapture(e.pointerId);
    seekTo(fractionFromX(e.clientX));
    e.preventDefault();
  });
  track.addEventListener("pointermove", (e) => {
    if (scrubbing) seekTo(fractionFromX(e.clientX));
  });
  function endScrub(e) {
    if (!scrubbing) return;
    scrubbing = false;
    try { track.releasePointerCapture(e.pointerId); } catch (_) {}
    last = 0;                           // avoid a time jump when playback resumes
    if (playing && index >= 0) Narrator.speak(index);
  }
  track.addEventListener("pointerup", endScrub);
  track.addEventListener("pointercancel", endScrub);

  // Keyboard: arrows step between scenes, Home/End jump to the ends
  track.addEventListener("keydown", (e) => {
    let cur = ends.findIndex((en) => elapsed < en);
    if (cur === -1) cur = scenes.length - 1;
    let handled = true;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const step = (e.key === "ArrowRight") !== isRTL() ? 1 : -1;
      const target = Math.max(0, Math.min(scenes.length - 1, cur + step));
      seekTo((target === 0 ? 0 : ends[target - 1]) / total);
    } else if (e.key === "Home") {
      seekTo(0);
    } else if (e.key === "End") {
      seekTo(1);
    } else {
      handled = false;
    }
    if (handled) { e.preventDefault(); if (playing && index >= 0) Narrator.speak(index); }
  });

  // Keep the caption + narration in the chosen language, and re-place the
  // handle since the fill direction flips between RTL and LTR
  window.addEventListener("nuni:langchange", () => {
    setCaption();
    render();
    Narrator.reset();                 // next line speaks in the new language
    if (Narrator.isOn() && playing && index >= 0) Narrator.speak(index);
  });

  // Start
  render();
  play();
});
