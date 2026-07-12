# TASK-005 — Hero Section

## Objective
Build the hero section that immediately communicates the 5-step DAMS workflow and establishes credibility.

## Acceptance Criteria
- [ ] Render the hero at 100vh minimum height, centered column layout, max-width ~912 px, bottom padding 160 px.
- [ ] Background must include:
  - Base `#212427`.
  - Subtle radial gradient `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(45,139,139,0.12), transparent)`.
  - Animated SVG mesh/particle field: tiny dots connected by faint lines, 0.15–0.25 opacity, slow drift. Lines only connect dots within a small distance threshold.
- [ ] Component load animation with Framer Motion:
  - Fade in + translateY 24 px.
  - Stagger order: eyebrow → headline → subheadline → buttons → pills.
  - Stagger delay 80 ms.
- [ ] Copy:
  - Eyebrow: `DAMS v2.0 — Local-first codebase intelligence for AI coding agents.`
  - Headline: `Stop searching. Start shipping features.` (72 px desktop / 48 px mobile, weight 700, line-height 1.05)
  - Subheadline: `DAMS atomizes your PRD into tasks, warms a SQLite cache with the exact code snippets and Graphify references your agent needs, and blocks noisy native search tools — so the LLM builds the next feature without re-reading the codebase from scratch.`
- [ ] Two CTAs:
  - Primary: `Read the Documentation`
  - Secondary: `See it on GitHub`
- [ ] Trust pills row: `Local-first`, `Dockerized`, `Codebase-intelligence research`, `v2.0 shipped`.
- [ ] Respect `prefers-reduced-motion`: pause the mesh drift and reduce entrance motion to simple opacity fades.
- [ ] Hero anchors to `#hero`.
- [ ] All text meets WCAG AA contrast; buttons are keyboard-operable.

## Notes
- The hero must sell the workflow in under 15 seconds; keep the subheadline scannable and jargon-light.
