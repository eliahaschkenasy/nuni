# Nuni — Getting ready for anesthesia, gently

A warm, child-friendly website that explains — for children and their parents — what
happens before, during and after anesthesia and an operation, so the experience feels
calmer and less scary. Inspired by the idea behind [narkoswebben.se](https://narkoswebben.se).

**Languages:** Hebrew (default), English, Arabic, Russian and French — with full right-to-left
support for Hebrew and Arabic. Your choice is remembered in the browser.

## What's inside

- **Four age-aware experiences** — ages 0–6, 7–12, 13–18, and parents each get
  tailored core explanations, navigation, visuals, questions and preparation steps.
- **Interactive anesthesia quizzes** — ten knowledge questions for ages 7–12 and
  eight realistic decision scenarios for ages 13–18, with immediate explanations.
- **What it is** — four age-specific explanations, from short child-friendly text to
  direct teen information and a parent-focused clinical overview.
- **The journey** — six steps rewritten for each audience.
- **Story film** (`story.html`) — a ~2-minute wordless animation of Nuni's day, for
  younger children (wakes up → prepares at home → hospital → pyjamas → own bed →
  soft mask → sleeps while the doctor watches → wakes happy).
  Big play/pause controls and a read-aloud caption for grown-ups.
- **Coloring pages** (`coloring.html`) — six printable line-art sheets.
- **Equipment** — friendly descriptions for little children and standard medical names
  with direct explanations for older children, teenagers and parents.
- **Feelings** — age-tailored reassurance; teenagers receive a neutral guided-breathing tool.
- **Questions** — separate FAQs for little children, older children, teenagers and parents.
- **For parents** — practical preparation, health updates, medicines, recovery and discharge.

## Tech

Plain static site — HTML, CSS and vanilla JavaScript, no build step.

| File | Purpose |
|------|---------|
| `index.html` | Page structure with `data-i18n` hooks |
| `styles.css` | Design; uses CSS logical properties so it mirrors for RTL |
| `i18n.js` | Five translations, audience content + language switching |
| `app.js` | Mobile nav + breathing exercise |

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## ⚕️ Disclaimer

This site provides **general, friendly information** to help prepare children. It is
**not medical advice**. Always follow the specific instructions given by your own
hospital and medical team.
