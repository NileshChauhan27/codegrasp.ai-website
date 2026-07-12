# TASK-004 — Sticky Header & Mobile Navigation

## Objective
Build the fixed site header with the DAMS logo, navigation links, and a mobile hamburger sheet.

## Acceptance Criteria
- [ ] Implement a `Header` component fixed at the top, full width, height 64 px desktop and 56 px mobile, z-index 50.
- [ ] Use the custom `Logo` component:
  - Must render the vertical brain + magnifying glass mark at 32 px height.
  - Wordmark `DAMS` in Inter, font-weight 650, 18 px, tracking -0.02 em.
  - Optional desktop tagline `Defensive Memory` in `text-tertiary`.
- [ ] Header is initially transparent; on scroll past 48 px it transitions to a frosted-glass background (`rgba(33,36,39,0.78)`, `backdrop-blur(12px)`, 1 px bottom border `rgba(255,255,255,0.06)`).
- [ ] Navigation links: GitHub, Documentation, Demo, Research, Contact.
  - Use a smooth scroll to the relevant `#section` anchors.
  - GitHub opens in a new tab.
- [ ] Mobile: hamburger button reveals a slide-down navigation sheet with the same links and a close affordance; trap focus while open.
- [ ] Header uses a `<header>` landmark and a skip-link target.
- [ ] All interactive elements have visible focus rings (2 px offset, accent color).
- [ ] Header is visible and functional across breakpoints (desktop, tablet, mobile) and does not overlap hero text after its own height.

## Notes
- The header is the first brand moment; the logo must be crisp and immediately recognizable.
