---
project: reimagineyourengine.com
prd_version: 2
project_version: v1.A
status: in-progress
owner: Vijo
last_updated: 2026-10-24
---

# reimagineyourengine.com — PRD

## 1. Problem

Derek Hoyt (Reimagine Your Engine, Redding CA) needs a professional web
presence that communicates his experience, capabilities, and approach to
mechanical problem-solving — "from manure weirs to reusable rocket engines."
It is a credibility site, not a lead-generation funnel.

## 2. Users

Existing contacts, referrals, and industry colleagues; plant/maintenance
managers, reliability engineers, and equipment owners dealing with failing
engines, pumps, compressors, blowers, and hydraulic systems.

## 3. Goals & non-goals

**Goals:**
- Present Derek's approved Concept 3 branding and tagline **REBUILD. REUSE. REIMAGINE.**
- Feature Derek's own homepage statement verbatim as the centerpiece.
- Communicate root-cause, systems-level troubleshooting credibly, without unverified claims.
- Be ready for the production-domain cutover (`reimagineyourengine.com`, confirmed 2026-10-24).

**Non-goals:**
- Presenting Derek as offering licensed/regulated professional engineering services (PE status unverified).
- Invented case studies, testimonials, credentials, or numbers.
- Hoyt Lubrication Upgrades / AMSOIL messaging (separate business).
- Aggressive sales messaging; switching live DNS.

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | client-approved brand + homepage | Concept 3 branding, approved tagline, Derek's statement verbatim, licensing-safe copy, production-ready SEO |
| v2 | developer attribution | discreet LaMill credit in the footer, client-consented |

## 5. Phases

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | decisions lock | assets = `Reimagine_Your_Engine_Brand_Assets.zip` (2026-10-24); production domain `reimagineyourengine.com` confirmed; staging `*.pages.dev` noindexed; contact-form backend deferred | ✅ |
| **v1.B** | branding | Concept 3 logo variants in header/footer/hero, favicons + app icons + manifest, brand color tokens (`#10B981` `#111827` `#6B7280` `#E5E7EB` `#FFFFFF`), Inter, tagline | ✅ |
| **v1.C** | homepage | order: logo → name → tagline → Derek's 3 paragraphs verbatim → capabilities/experience; remove conflicting copy | ✅ |
| **v1.D** | copy audit | PE/licensing terminology + unverified-claim review; flag client text, don't rewrite it | ✅ |
| **v1.E** | SEO | titles/descriptions, OG/Twitter image, centralized site URL, staging noindex, structured data only where factual | ✅ |
| **v1.F** | QA | build + tests, verbatim-text test, responsive + a11y basics | ✅ |
| **v2.A** | decisions lock | client consent confirmed 2026-10-24; footer credit, plain brand anchor "LaMill", followed link to `https://lamill.io/` | ✅ |
| **v2.B** | footer credit | "Website by LaMill" in the footer bottom row, muted styling, every page | ✅ |

## 6. Open questions

- *(append-only log; mark answered with date but never delete)*
- Contact details (phone, email, address, legal entity) — **answered 2026-10-24:** phone + email supplied; location shown as Redding, California (from brief); no street address or legal entity published. Domain confirmed 2026-10-24 as `reimagineyourengine.com`; project id/dir/repo still `reimagineyourengine` (misspelled).
- Contact form has no backend — submissions are not delivered. Deferred out of v1.
- Vector/master logo files — supplied PNGs are raster crops (per asset README); stacked variants have crop defects.
- California PE status unverified — see v1.D findings in `docs/Prompts.md` 2026-10-24 entry.
