# Monty's — Landing Page

A small front site for **Monty's** (bagels + shmear, Texas Hill Country),
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
    GrainOverlay.jsx    # film-grain overlay
    Hero.jsx            # hero section
    Wordmark.jsx        # stacked "Monty's" wordmark + tagline
    MarketCard.jsx      # navy "stall ticket" card (when/where)
    Footer.jsx          # social footer
```

## Design notes

- Colors, spacing, and type are ported verbatim from the prototype
  (`--navy #1E2A3E`, `--cream #EFE3CB`, `--brick #B04A2E`).
- Display/heading type is **Sansita**; body/UI is **Hanken Grotesk**; labels
  use **IBM Plex Mono** (all via Google Fonts). The prototype lists *Söhne*
  first — a licensed font that isn't bundled — so it gracefully falls back to
  Hanken Grotesk, exactly as the prototype renders.

## Deploy

`npm run build` outputs a static `dist/` you can host anywhere (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, S3, …).

## Roadmap

- **Square ordering** — the design doesn't include an order button yet. When
  you're ready, an "Order on Square" CTA can drop into `MarketCard.jsx` (or the
  hero) linking to your Square Online / checkout URL.
