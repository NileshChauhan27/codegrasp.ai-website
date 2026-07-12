# TASK-017 — SEO, Performance, and Metadata

## Objective
Optimize the marketing site for search engines, social sharing, and fast loading.

## Acceptance Criteria
- [ ] Configure `app/layout.tsx` metadata:
  - Title: `DAMS — Defensive Agentic Memory System for AI Coding Agents`
  - Description: `DAMS is a local, Dockerized codebase-intelligence workbench that atomizes PRDs into tasks, warms a SQLite cache with code snippets, and lets AI agents write the next feature without re-reading the codebase.`
  - Open Graph and Twitter card fields populated.
  - `theme-color: #212427`.
  - Canonical URL: `https://{SITE_DOMAIN}` where `SITE_DOMAIN` is imported from `lib/site.ts` (default: `aicodecontext.com`).
- [ ] Add `robots.txt` allowing all crawlers.
- [ ] Add `sitemap.xml` with all section anchors.
- [ ] Verify OG image is `public/og.png` and referenced correctly.
- [ ] Preload the `Inter` and `JetBrains Mono` fonts using `next/font/google`.
- [ ] Lazy-load the YouTube iframe and the architecture animation assets until they enter the viewport.
- [ ] Optimize SVG assets: remove unnecessary groups, use currentColor where possible, compress with `svgo`.
- [ ] Set image sizes and `priority` for the logo only; all other images are lazy.
- [ ] Run Lighthouse and aim for:
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95
- [ ] Add JSON-LD structured data for `SoftwareApplication` or `Organization` if appropriate.
- [ ] Ensure all external links (GitHub, docs) have `rel="noopener noreferrer"`.

## Notes
- SEO matters because Microsoft reviewers may Google the project before deciding.
