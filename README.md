# Portfolio Ltd — Apps Site

Single source of truth for all Portfolio Ltd apps: what each app is, screenshots, how it works, tech stack, FAQ, changelog, and a stable privacy-policy URL per app (for App Store Connect / Play Console).

Built with [Astro](https://astro.build). Static output, zero client-side JS.

## Commands

```sh
npm install      # once
npm run dev      # local dev at http://localhost:4321
npm run build    # static build into dist/
npm run preview  # preview the production build
```

## How to add a new app

1. **Create the content file** — copy any file in `src/content/apps/` (e.g. `streaks.md`) to `src/content/apps/<slug>.md`. The filename is the URL slug (`/apps/<slug>/`). Edit the frontmatter (name, tagline, platforms, order, techStack, faq, changelog, storeLinks) and the markdown body ("What it is" / "How it works").
2. **Add the privacy policy** — copy a file in `src/content/privacy/` to `src/content/privacy/<slug>.md` (same slug!). It renders at `/apps/<slug>/privacy`.
3. **Add assets** — put `icon.svg` (or `.png`, update the frontmatter path) and `screenshot-*.png/svg` in `public/apps/<slug>/`, and reference them in the frontmatter.

That's it — the homepage grid and all pages are generated automatically.

### Notes

- **Store links**: leave `storeLinks` entries out until the app is published — the page shows "Coming soon to the App Store/Google Play" automatically based on `platforms`. Add the URL when live.
- **Privacy policies are drafts**: the current policies are sensible privacy-first templates. **Review each one against the app's real behavior before submitting the URL to Apple/Google.**
- **App descriptions/FAQs/changelogs are drafts too** — written from the app names; edit them to match reality.
- Screenshots live in `public/apps/<slug>/` and are listed in each app's `screenshots` frontmatter. Phone captures need no extra config; for wide Mac/desktop captures add `kind: desktop` to that entry so the gallery sizes it correctly:

  ```yaml
  screenshots:
    - src: /apps/anchor/screenshot-1.png
      alt: "Today dashboard"                # phone (default)
    - src: /apps/anchor/mac-1.png
      alt: "Menu bar app on Mac"
      kind: desktop                          # wide capture, rendered shorter
  ```
- Support email defaults to `hello@sagarchandagarwal.com` (override per app via `supportEmail`; also appears in `src/layouts/Base.astro` footer and `src/pages/index.astro` contact section).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo. Astro is auto-detected; no config needed.
3. (Optional) Add your custom domain in the Vercel project settings, and update `site` in `astro.config.mjs`.

Every push to `main` auto-deploys.
