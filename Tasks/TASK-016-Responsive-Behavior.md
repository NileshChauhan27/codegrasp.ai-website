# TASK-016 — Responsive Behavior

## Objective
Ensure the site looks and functions correctly on desktop, tablet, and mobile.

## Acceptance Criteria
- [ ] Use Tailwind breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
- [ ] Verify each section at desktop, tablet, and mobile sizes:
  - **Header:** full nav on desktop/tablet; hamburger sheet on mobile.
  - **Hero:** 72 px headline desktop, 56 px tablet, 48 px mobile; CTAs stack on mobile.
  - **Demo video:** 1152 px max desktop, full-width with side margin tablet, full-width 16 px margin mobile.
  - **Feature showcase:** stage 60% + switches 40% desktop; 55/45 tablet; horizontal pill row above full-width stage on mobile.
  - **Architecture:** full radial diagram desktop/tablet; simplified vertical/compact flow on mobile with auto-play loop.
  - **Research Lab:** 3-column cards desktop/tablet; stacked on mobile.
  - **Why/Stack/Footer:** multi-column desktop/tablet; single column mobile.
- [ ] Feature showcase mobile behavior:
  - Horizontal scrollable pill row at top.
  - Tap updates stage panel.
  - Optional swipe left/right on stage panel to cycle features.
- [ ] Architecture mobile behavior:
  - Reduce node count or switch to a vertical flow if radial is overcrowded.
  - Provide play/pause control.
- [ ] Test on real devices or browser dev-tools (iPhone SE, iPad, 1440px desktop).
- [ ] Ensure no horizontal overflow at any breakpoint.
- [ ] Ensure touch targets are ≥ 44×44 px on mobile.

## Notes
- The feature showcase is the most complex responsive piece; prioritize it.
