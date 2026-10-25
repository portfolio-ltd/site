// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.ltd',
  trailingSlash: 'ignore',
  // Renamed apps keep their old URLs (incl. App Store privacy URLs) working.
  redirects: {
    '/apps/streaks': '/apps/notchday',
    '/apps/streaks/privacy': '/apps/notchday/privacy',
    '/apps/anchor': '/apps/commitline',
    '/apps/anchor/privacy': '/apps/commitline/privacy',
  },
});
