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
  index.css             # all styles (ported 1:1 from the design)
  components/
    Hero.jsx            # hand-lettered "Monty's" wordmark + tagline
    Schedule.jsx        # when/where we're at the market
    Footer.jsx          # "Find us @montysatx"
```

## Design notes

- A two-color, hand-lettered look: cobalt **ink** on eggshell **paper**
  (`--ink #0F47C4`, `--paper #F7F5EF`).
- Display/heading type is **Caveat** (the hand-lettered wordmark, tagline, and
  schedule); body/UI is **Hanken Grotesk** (both via Google Fonts).
- The wordmark and schedule are nudged off-axis (`rotate(-2.5deg)` /
  `rotate(-1deg)`) for a hand-drawn feel; `--wm-scale` optically tunes the
  display sizes.

## Deploy

`npm run build` outputs a static `dist/` you can host anywhere (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, S3, …).

## Roadmap

- **Square ordering** — the design doesn't include an order button yet. When
  you're ready, an "Order on Square" CTA can drop into the hero linking to your
  Square Online / checkout URL.
