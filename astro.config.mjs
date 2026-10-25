// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Production origin (confirmed 2026-10-24). Single source of truth — pages read
// it via Astro.site. SITE_URL overrides it for a one-off build elsewhere; the
// pages.dev staging host is noindexed in public/_headers, not re-canonicalized.
const SITE_URL = process.env.SITE_URL || 'https://reimagineyourengine.com';

export default defineConfig({
  site: SITE_URL,
  // trailingSlash: 'always' — directory format serves /<page>/ and
  // @astrojs/sitemap lists /<page>/, so a page's <link rel="canonical">
  // MUST also end in a slash. A canonical of /<page> (no slash) 308-redirects
  // to /<page>/ — Google then can't settle on a canonical and the page comes
  // back "URL is unknown to Google". Make it explicit so every page's
  // canonical matches its served URL. Enforced by CHECK_161.
  trailingSlash: 'always',
  integrations: [sitemap(), react()],
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
