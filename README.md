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
    BagelScroll.jsx     # horizontal snap-scroll shelf of bagel shots
    Footer.jsx          # "Find us @montysatx"
```

## Design notes

- A two-color, hand-drawn look: cobalt **ink** on eggshell **paper**
  (`--ink #0F47C4`, `--paper #F7F5EF`).
- The wordmark and crew illustration are the real brand art (transparent PNGs
  in `src/assets/`), not rendered type.
- Display/heading type is **Caveat** (tagline, CTA, card captions); body/UI is
  **Hanken Grotesk** (both via Google Fonts).
- Elements are nudged off-axis (`rotate(±1–2.5deg)`) to keep the hand-drawn
  feel; the bagel cards alternate tilt directions down the shelf.

## Hotplate + photos

- The whole page drives to one CTA: **Order on Hotplate** (`OrderCta.jsx`).
  Update `HOTPLATE_URL` there with the real storefront link.
- `BagelScroll.jsx` currently renders drawn bagel tiles; when photos of the
  bagels are ready, swap each tile's `<BagelDoodle />` for an `<img>` (the
  `.card-ph img` styles already handle the crop).

## Deploy

`npm run build` outputs a static `dist/` you can host anywhere (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, S3, …).

## Roadmap

- Confirm the real Hotplate storefront URL in `OrderCta.jsx`.
- Drop real bagel photos into the `BagelScroll` shelf.
