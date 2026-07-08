# Monty's — Landing Page

A small front site for **Monty's** (bagels &amp; appetizing, Texas Hill Country),
built from the Claude Design prototype.

Built with **React + Vite** so it deploys as a static site and can grow as
needed.

## Quick start

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Project structure

```
index.html              # app shell + Google Fonts + meta tags
src/
  main.jsx              # React entry
  App.jsx               # page composition
  index.css             # all styles
  assets/
    montys-logo.png     # hand-drawn "Monty's" wordmark (transparent PNG)
    montys-crew.png     # the crew illustration (transparent PNG)
  components/
    Hero.jsx            # wordmark logo + tagline + crew illustration
    OrderCta.jsx        # "Order on Hotplate" button (the page's one job)
    Footer.jsx          # "Find us @montysatx"
```

## Design notes

- A two-color, hand-drawn look: cobalt **ink** on eggshell **paper**
  (`--ink #0F47C4`, `--paper #F7F5EF`).
- The wordmark and crew illustration are the real brand art (transparent PNGs
  in `src/assets/`), not rendered type.
- Type: everything is **Fraunces** (Google Fonts variable: italic + weight +
  optical size) — one supporting voice so nothing competes with the wordmark.
  Tagline and footer are italic; the drop note and button are roman.
- Elements are nudged off-axis (`rotate(±1–2.5deg)`) to keep the hand-drawn
  feel.

## Hotplate

- The whole page drives to one CTA: **Order on Hotplate** (`OrderCta.jsx`).
  Update `HOTPLATE_URL` there with the real storefront link.

## Deploy

`npm run build` outputs a static `dist/` you can host anywhere (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, S3, …).

## Roadmap

- Confirm the real Hotplate storefront URL in `OrderCta.jsx`.
- Add a scroll of bagel photos once shots are ready.
- Reintroduce the "Follow @montysatx to catch the next drop" line under the
  CTA if it earns its place visually.
