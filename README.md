# MOBIX — Prototype

A static, front-end-only prototype of MOBIX: "Tech. Compared Differently."

No build step, no backend, no database — just HTML/CSS/JS reading from a
demo product list in `js/data.js`. That makes it a good fit for GitHub Pages,
the same way NexusScan is hosted.

## What's actually working

- **Home** — hero, categories, trending, price drops, best-for-you
- **Search** — `#/search` — text + category filtering
- **Product pages** — `#/product/<id>` — MOBIX Match score, Best For / Not Ideal
  For, Device DNA bars, "Find Similar" (better camera / battery / cheaper /
  more powerful), specs, source + last-updated line
- **Compare** — `#/compare?a=<id>&b=<id>` — Who Wins per category, a live
  result, and "Change What Matters" sliders that recalculate the winner
  in real time
- **Find My Device** — `#/find` — 4-step guided wizard (category → budget →
  priority sliders → use case) ending in a ranked match
- **Should I Upgrade?** — `#/upgrade?to=<id>` — pick your current device,
  see the % change per category and a verdict (including "keep your
  current device" when it's not worth it)
- **Light/dark theme toggle** in the top nav
- **Installable on Android** — `manifest.json` + icons let Chrome offer "Add to Home Screen," opening MOBIX as its own app
- **33 demo devices** across Phones, Laptops, Components (GPUs), Consoles, Handhelds, Tablets, and Monitors — each with a generic category icon (not real product photos — those are copyrighted and can't be reproduced here without a license)

All scores and specs are clearly labeled demo data — nothing here is a real
benchmark. The product schema in `data.js` is intentionally close to the
one in the full roadmap, so swapping in a real dataset later mostly means
replacing that file's contents.

## What's NOT built yet (intentionally, per the roadmap)

Gaming Reality, True Cost, Regret Score, Future-Proof, Marketing Translator,
Global Variant Check, MOBIX Challenges (the homepage card is static),
accounts, saved comparisons, price alerts, and any real backend/database.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (public, so Pages can serve it for free).
2. Upload every file in this folder, **keeping the folder structure**
   (`index.html` at the repo root, `css/style.css`, `js/data.js`,
   `js/app.js`). On the GitHub website or app: **Add file → Upload files**,
   then drag in the whole extracted folder.
3. Go to the repo's **Settings → Pages**.
4. Under "Source," choose the `main` branch and `/ (root)` folder, then Save.
5. GitHub gives you a URL like `https://yourusername.github.io/repo-name/`
   — it can take a minute or two to go live the first time.

No build command, no `npm install`, nothing else needed — it's just static
files.
