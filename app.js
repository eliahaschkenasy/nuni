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
    btn.textContent = t().breath_stop;
    inhale();
  }
  function stop() {
    running = false;
    clearTimeout(timer);
    ball.classList.remove("inhale", "exhale");
    btn.textContent = t().breath_start;
    label.textContent = c().breathDefault || t().breath_default;
  }

  if (btn) {
    btn.addEventListener("click", () => (running ? stop() : start()));
  }

  /* Keep live labels correct when the language changes mid-exercise */
  window.addEventListener("nuni:langchange", () => {
    if (!btn) return;
    if (running) {
      btn.textContent = t().breath_stop;
    }
    // When idle, i18n.js already reset the default strings for us.
  });
  window.addEventListener("nuni:audiencechange", () => {
    if (!btn) return;
    stop();
  });
});
