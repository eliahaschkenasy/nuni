/* ==========================================================================
   Nuni – Meet the equipment
   Tap a card to reveal what it is and hear a gentle, friendly sound for it.
   All sounds are synthesised in the browser (no files, works offline).
   ========================================================================== */

const GearSound = (() => {
  let ctx = null;
  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    if (ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  // a single soft tone with a gentle attack/decay envelope
  function tone(freq, start, dur, gain, type = "sine") {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.linearRampToValueAtTime(gain, start + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(start); o.stop(start + dur + 0.05);
  }

  // short burst of soft filtered noise – a gentle "shh" / air sound
  function breath(start, dur, peak) {
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * 0.5;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 900;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.linearRampToValueAtTime(peak, start + dur * 0.4);
    g.gain.linearRampToValueAtTime(0.0001, start + dur);
    src.connect(lp); lp.connect(g); g.connect(ctx.destination);
    src.start(start); src.stop(start + dur);
  }

  const sounds = {
    // soft breathing through the mask
    mask() { const t = ctx.currentTime; breath(t, 0.9, 0.18); breath(t + 1.0, 0.9, 0.14); },
    // gentle "beep beep" like the finger light
    oximeter() { const t = ctx.currentTime; tone(880, t, 0.16, 0.12, "sine"); tone(880, t + 0.32, 0.16, 0.12, "sine"); },
    // soft rising squeeze of the arm hug
    cuff() { const t = ctx.currentTime; breath(t, 0.8, 0.16); tone(160, t, 0.8, 0.05, "sine"); },
    // heartbeat lub-dub
    steth() { const t = ctx.currentTime; tone(70, t, 0.18, 0.22, "sine"); tone(64, t + 0.24, 0.24, 0.20, "sine"); },
    // little friendly click
    band() { const t = ctx.currentTime; tone(1200, t, 0.05, 0.10, "triangle"); tone(700, t + 0.06, 0.06, 0.08, "triangle"); },
    // sparkle of the magic cream
    cream() { const t = ctx.currentTime; [659, 784, 988, 1319].forEach((f, i) => tone(f, t + i * 0.09, 0.22, 0.09, "triangle")); }
  };

  return {
    supported: !!(window.AudioContext || window.webkitAudioContext),
    play(name) { if (!ac()) return; (sounds[name] || (() => {}))(); }
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gear").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("open");
      card.setAttribute("aria-expanded", "true");
      GearSound.play(card.dataset.sound);
      // little pop each time it's tapped
      card.classList.remove("playing");
      void card.offsetWidth;           // restart the animation
      card.classList.add("playing");
    });
    card.addEventListener("animationend", () => card.classList.remove("playing"));
  });
});
