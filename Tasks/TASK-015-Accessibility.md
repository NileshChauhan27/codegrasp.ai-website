# TASK-015 — Accessibility

## Objective
Ensure the entire marketing site meets keyboard, screen-reader, motion-reduction, and contrast standards.

## Acceptance Criteria
- [ ] Add a "Skip to main content" link at the top of the body that moves focus to `<main>`.
- [ ] All interactive controls (links, buttons, feature switches, architecture fallback play/pause, video iframe, roadmap cards) are keyboard-focusable and operable.
- [ ] Visible focus rings: 2 px offset, accent teal color (`#2d8b8b`), on all focusable elements.
- [ ] Implement `prefers-reduced-motion` support:
  - Disable scroll-driven architecture animation; show static final state.
  - Convert entrance animations to opacity-only or remove them.
  - Stop ambient glow hue rotation and mesh drift.
- [ ] Use semantic HTML landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` with IDs for anchors.
- [ ] Feature showcase uses ARIA `tablist`/`tab`/`tabpanel` roles with `aria-selected`, `aria-controls`, and `aria-labelledby`.
- [ ] Architecture diagram has `role="img"`, `<title>`, and `<desc>` describing the PRD-to-code flow.
- [ ] Demo video has an iframe `title` and a transcript link below it.
- [ ] Mobile navigation sheet traps focus while open and restores focus on close.
- [ ] Verify all text meets WCAG 2.1 AA contrast:
  - Body text (`#a1a1aa`) on `#212427`.
  - Headings (`#f4f4f5`) on `#212427`.
  - Code snippets and small labels.
- [ ] Run an automated accessibility check (e.g., `axe-core` or Lighthouse) and fix any critical/serious issues.

## Notes
- Accessibility is not a polish pass; it must be designed into the components from the start.
