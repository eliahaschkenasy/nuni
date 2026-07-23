/* ==========================================================================
   Nuni – wordless story player
   Advances through the scenes on a timeline, with big controls and a
   read-aloud caption for grown-ups (the film itself needs no reading).
   ========================================================================== */

const CAPTIONS = {
  he: [
    "🌅 בוקר טוב! נוני מתעורר.",
    "🍎 היום אין ארוחת בוקר – אבל מותר לשתות מיץ תפוחים!",
    "🚗 נוסעים לבית החולים.",
    "🧑‍⚕️ אח/ות נחמד/ה מקבל/ת את נוני ונותן/ת לו פיג'מה.",
    "🛏️ לנוני יש מיטה משלו.",
    "😴 מסכה רכה, סופרים 3־2־1… ונוני נרדם.",
    "💙 נוני ישן, והרופא/ה המרדימ/ה שומר/ת עליו כל הזמן.",
    "🎉 נוני מתעורר – הכול נגמר, וכל הכבוד!"
  ],
  en: [
    "🌅 Good morning! Nuni wakes up.",
    "🍎 No breakfast today — but apple juice is okay to drink!",
    "🚗 Off to the hospital.",
    "🧑‍⚕️ A kind nurse welcomes Nuni and gives him pyjamas.",
    "🛏️ Nuni gets his very own bed.",
    "😴 A soft mask, count 3-2-1… and Nuni falls asleep.",
    "💙 Nuni sleeps, and the sleep doctor watches over him the whole time.",
    "🎉 Nuni wakes up — it's all done, and well done!"
  ],
  ar: [
    "🌅 صباح الخير! نوني يستيقظ.",
    "🍎 لا فطور اليوم — لكن يُسمح بشرب عصير التفاح!",
    "🚗 نذهب إلى المستشفى.",
    "🧑‍⚕️ ممرّض لطيف يستقبل نوني ويعطيه بيجامة.",
    "🛏️ لنوني سرير خاص به.",
    "😴 قناع ناعم، نعدّ ٣-٢-١… وينام نوني.",
    "💙 ينام نوني، وطبيب التخدير يراقبه طوال الوقت.",
    "🎉 يستيقظ نوني — انتهى كل شيء، أحسنت!"
  ],
  ru: [
    "🌅 Доброе утро! Нуни просыпается.",
    "🍎 Сегодня без завтрака — но яблочный сок пить можно!",
    "🚗 Едем в больницу.",
    "🧑‍⚕️ Добрая медсестра встречает Нуни и даёт ему пижаму.",
    "🛏️ У Нуни своя кроватка.",
    "😴 Мягкая маска, считаем 3-2-1… и Нуни засыпает.",
    "💙 Нуни спит, а врач-анестезиолог всё время рядом.",
    "🎉 Нуни просыпается — всё позади, молодец!"
  ]
};

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
    requestAnimationFrame(frame);
  }

  function pause(ended) {
    playing = false;
    stage.classList.add("paused");
    playBtn.textContent = "▶";
  }

  playBtn.addEventListener("click", () => (playing ? pause(false) : play()));
  replayBtn.addEventListener("click", () => { elapsed = 0; index = -1; play(); });

  // Keep the caption in the chosen language
  window.addEventListener("nuni:langchange", setCaption);

  // Start
  render();
  play();
});
