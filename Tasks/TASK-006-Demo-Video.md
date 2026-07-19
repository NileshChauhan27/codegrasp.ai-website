# TASK-006 — Demo Video Section

## Objective
Build a premium YouTube embed section that visually houses the 4-minute DAMS workflow demo.

## Acceptance Criteria
- [ ] Create a `DemoVideo` section component anchored to `#demo`.
- [ ] Render a centered container, max-width 1152 px.
- [ ] Heading: `See DAMS run a feature from PRD to code`.
- [ ] Subtext: `Create a project, atomize the PRD into Kanban cards, generate queries, warm the SQLite cache, and let the agent write code from a curated scratchpad while native search stays blocked. (4-minute walkthrough — full demo recording incoming.)`
- [ ] Video card:
  - Rounded 20 px.
  - Border 1 px `rgba(255,255,255,0.08)`.
  - Ambient glow behind the card: blurred teal → violet gradient, opacity 0.18, 8 s slow hue/gradient animation.
  - Aspect ratio 16 / 9.
- [ ] Embed a placeholder YouTube video using a lazy-loaded `<iframe>`:
  - Use `loading="lazy"`.
  - Add `title="DAMS PRD-to-Code Demo"`.
  - Enable keyboard focus on the iframe.
- [ ] Scroll reveal animation: card scales 0.98 → 1 and opacity 0 → 1.
- [ ] Include an accessible transcript link below the video: `Read the demo transcript` (placeholder anchor).
- [ ] Respect `prefers-reduced-motion`: skip the glow hue animation and use opacity-only reveal.

## Notes
- The placeholder URL can be any generic YouTube link for now; later replace with the real DAMS demo.
