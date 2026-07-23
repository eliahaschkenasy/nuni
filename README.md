# Nuni — Getting ready for anesthesia, gently

A warm, child-friendly website that explains — for children and their parents — what
happens before, during and after anesthesia and an operation, so the experience feels
calmer and less scary. Inspired by the idea behind [narkoswebben.se](https://narkoswebben.se).

**Languages:** Hebrew (default), English, Arabic, Russian — with full right-to-left
support for Hebrew and Arabic. Your choice is remembered in the browser.

## What's inside

- **What it is** — a gentle explanation of anesthesia ("operation sleep").
- **The journey** — six illustrated steps from home to waking up.
- **Feelings** — reassurance plus an interactive *balloon breathing* calming exercise.
- **Questions** — the questions children commonly ask.
- **For parents** — practical tips and an important note to always follow your own
  hospital's instructions.

## Tech

Plain static site — HTML, CSS and vanilla JavaScript, no build step.

| File | Purpose |
|------|---------|
| `index.html` | Page structure with `data-i18n` hooks |
| `styles.css` | Design; uses CSS logical properties so it mirrors for RTL |
| `i18n.js` | All four translations + language switching |
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
