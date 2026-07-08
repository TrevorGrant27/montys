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
    Hero.jsx            # wordmark logo + crew illustration
    OrderCta.jsx        # pitch + details copy + "Order on Hotplate" button
```

## Design notes

- Cobalt **ink** on eggshell **paper** (`--ink #1300CA`, `--paper #F7F5EF`),
  with a single warm accent — **gold** (`--gold #F2B01E`) — used only on the
  order button so the one thing to click carries the one pop of color.
- The wordmark and crew illustration are the real brand art (transparent PNGs
  in `src/assets/`), not rendered type.
- Type: the pitch line is **Fraunces** (Google Fonts variable serif); the
  details paragraph is **Josefin Sans** for readability at small sizes.
- Elements are nudged off-axis (`rotate(±1–2.5deg)`) to keep the hand-drawn
  feel.

## Hotplate

- The whole page drives to one CTA: **Order on Hotplate** (`OrderCta.jsx`) —
  intentionally the only outbound link. Update `HOTPLATE_URL` there with the
  real storefront link.

## Deploy

`npm run build` outputs a static `dist/` you can host anywhere (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, S3, …).

## Roadmap

- Confirm the real Hotplate storefront URL in `OrderCta.jsx`.
- Add a vertical scroll of bagel photos once shots are ready.
