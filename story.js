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
    "🧑‍⚕️ Добрая медсестра встречает Нуни и даёт ему пижаму.",
    "🛏️ У Нуни своя кроватка.",
    "😴 Мягкая маска, считаем 3-2-1… и Нуни засыпает.",
    "💙 Нуни спит, а врач-анестезиолог всё время рядом.",
    "🎉 Нуни просыпается — всё позади, молодец!"
  ]
};

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
  const caption  = document.getElementById("caption");

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
  }

  function render() {
    // which scene are we in?
    let i = ends.findIndex((e) => elapsed < e);
    if (i === -1) i = scenes.length - 1;
    showScene(i);
    progress.style.width = Math.min(100, (elapsed / total) * 100) + "%";
  }

  function frame(ts) {
    if (!playing) return;
    if (!last) last = ts;
    elapsed += ts - last;
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
  }

  playBtn.addEventListener("click", () => (playing ? pause(false) : play()));
  replayBtn.addEventListener("click", () => { elapsed = 0; index = -1; Music.restart(); play(); });

  const musicBtn = document.getElementById("musicBtn");
  musicBtn.addEventListener("click", () => {
    const on = Music.toggle();
    musicBtn.textContent = on ? "🔊" : "🔇";
    musicBtn.classList.toggle("is-off", !on);
  });

  // Keep the caption in the chosen language
  window.addEventListener("nuni:langchange", setCaption);

  // Start
  render();
  play();
});
