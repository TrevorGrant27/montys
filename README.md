# Monty's — Landing Page

A small front site for **Monty's** (bagels + shmear, Texas Hill Country). It's
a single-page landing built from the Claude Design prototype, with the SMS
signup wired to **Klaviyo**.

Built with **React + Vite** so it deploys as a static site and can grow as
needed (orders go to **Square**, texts go to **Klaviyo** — no backend to run).

## Quick start

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## SMS signup (Klaviyo)

The phone signup posts to Klaviyo's client-side
[`client/subscriptions`](https://developers.klaviyo.com/en/reference/create_client_subscription)
endpoint, which is meant to be called from the browser with only your **public**
API key. No private/secret key is used or exposed.

### Configure

1. Copy the example env file and fill in your values:
   ```bash
   cp .env.example .env
   ```
2. Set:
   - `VITE_KLAVIYO_PUBLIC_KEY` — your Klaviyo **public API key** (Site ID).
     Klaviyo → *Settings → API keys*.
   - `VITE_KLAVIYO_SMS_LIST_ID` — the list to subscribe numbers to.
     Klaviyo → *Audience → Lists & Segments → (list) → Settings*.
   - `VITE_KLAVIYO_REVISION` — optional; defaults to `2025-10-15`.
3. Restart `npm run dev` (Vite only reads env vars at startup).

> **Demo mode:** with no keys set, the form still validates input and shows
> the “Got it ✓” confirmation, but it does **not** send anything to Klaviyo and
> logs a warning in the console. Add the keys above to go live.

Make sure SMS is enabled on your Klaviyo account and the target list is set up
for SMS, otherwise Klaviyo will reject the subscription. Phone numbers are
normalized to E.164 (US `+1` is assumed for 10-digit numbers).

## Project structure

```
index.html              # app shell + Google Fonts + meta tags
.env.example            # Klaviyo config template (copy to .env)
src/
  main.jsx              # React entry
  App.jsx               # page composition
  index.css             # all styles (ported 1:1 from the design)
  components/
    GrainOverlay.jsx    # film-grain overlay
    Hero.jsx            # hero section
    Wordmark.jsx        # stacked "Monty's" wordmark + tagline
    MarketCard.jsx      # navy "stall ticket" card (when/where + signup)
    SignupForm.jsx      # Klaviyo-wired SMS form
    Footer.jsx          # social footer
  lib/
    klaviyo.js          # client-side Klaviyo subscribe helper
    phone.js            # phone -> E.164 normalization
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
Vercel, Cloudflare Pages, GitHub Pages, S3, …). Set the `VITE_KLAVIYO_*`
environment variables in your host's build settings.

## Roadmap

- **Square ordering** — the design doesn't include an order button yet. When
  you're ready, an "Order on Square" CTA can drop into `MarketCard.jsx` (or the
  hero) linking to your Square Online / checkout URL.
