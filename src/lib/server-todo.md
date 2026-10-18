# Server code dropped in the Astro port

The Astro build is `output: 'static'`. These pieces of `genai/` (TanStack
Start) were server/runtime-only and were not ported.

- TODO: `genai/src/server.ts` — SSR fetch wrapper that normalized h3-swallowed
  500s into an HTML error page. No equivalent needed for static output; if
  SSR is ever added, use an Astro middleware / `500.astro`.
- TODO: `genai/src/lib/error-capture.ts`, `error-page.ts`,
  `lovable-error-reporting.ts` — Lovable runtime error capture/reporting.
  Dropped (Lovable-platform specific).
- TODO: `genai/src/routes/__root.tsx` `ErrorComponent` — client error
  boundary with "Try again" (router.invalidate). Dropped; `NotFoundComponent`
  was ported to `src/pages/404.astro`.
- TODO: `genai/src/router.tsx`, `start.ts`, `routeTree.gen.ts` and the
  `QueryClientProvider` — TanStack router/query wiring. Replaced by Astro
  file-based routing; no page used react-query.
- TODO: Contact form (`src/components/pages/ContactPage.tsx`) has no backend —
  `handleSubmit` only flips local state. Needs a real form endpoint (form
  service or a Cloudflare Worker/Pages Function) before submissions are
  delivered.
