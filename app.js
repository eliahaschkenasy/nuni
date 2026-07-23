/* ==========================================================================
   Nuni – interactions: mobile nav + balloon-breathing exercise
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Mobile navigation ---- */
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after tapping a link
    header.querySelectorAll(".main-nav a").forEach((a) =>
      a.addEventListener("click", () => {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Balloon breathing ---- */
  const btn = document.querySelector(".breath-btn");
  const ball = document.querySelector(".breath-ball");
  const label = document.querySelector(".breath-instruction");

  let running = false;
  let timer = null;

  const t = () => window.NUNI.t; // always read the live dictionary

  function schedule(fn, ms) {
    timer = setTimeout(fn, ms);
  }

  function inhale() {
    if (!running) return;
    ball.classList.remove("exhale");
    ball.classList.add("inhale");
    label.textContent = t().breath_in;
    schedule(hold, 4000);
  }
  function hold() {
    if (!running) return;
    label.textContent = t().breath_hold;
    schedule(exhale, 1600);
  }
  function exhale() {
    if (!running) return;
    ball.classList.remove("inhale");
    ball.classList.add("exhale");
    label.textContent = t().breath_out;
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
    label.textContent = t().breath_default;
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
});
