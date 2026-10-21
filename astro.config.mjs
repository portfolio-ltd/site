// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.ltd',
  trailingSlash: 'ignore',
  // Streaks was renamed to Notchday; keep old URLs (incl. the App Store privacy URL) working.
  redirects: {
    '/apps/streaks': '/apps/notchday',
    '/apps/streaks/privacy': '/apps/notchday/privacy',
  },
});
