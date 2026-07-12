# TASK-018 — Build, Test, and Deploy

## Objective
Build the static marketing site, run validation checks, and deploy it to production at the configured domain (`{SITE_DOMAIN}`; default example: `aicodecontext.com`).

## Acceptance Criteria
- [ ] Configure `next.config.js` for static export: `output: 'export'`, `distDir: 'dist'`.
- [ ] Run `npm run build` successfully with no TypeScript, ESLint, or build errors.
- [ ] Verify the `dist/` folder contains `index.html`, assets, and all referenced static files.
- [ ] Run a final Lighthouse audit (Performance, Accessibility, Best Practices, SEO) and document scores.
- [ ] Verify all internal anchors (`#hero`, `#demo`, `#features`, `#architecture`, `#research`, `#why`, `#developer`, `#stack`, `#cta`) scroll to the correct sections.
- [ ] Verify all external links (GitHub, docs) open correctly in a new tab.
- [ ] Test the site again on desktop, tablet, and mobile viewports post-build.
- [ ] Deploy to the chosen host (Vercel, Cloudflare Pages, or Azure Static Web Apps):
  - Point custom domain `{SITE_DOMAIN}` to the deployment.
  - Enable HTTPS and force redirect HTTP → HTTPS.
- [ ] Verify DNS resolution and SSL certificate.
- [ ] Run a final smoke test by loading `https://{SITE_DOMAIN}` in a browser.

## Notes
- Do not deploy half-finished sections; the whole page should reach the specified quality bar before going live.
- Keep deployment logs or screenshots for the final handoff.
