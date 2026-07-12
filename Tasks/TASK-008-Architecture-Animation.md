# TASK-008 — System Architecture Animation

## Objective
Build a scroll-driven SVG animation that visualizes the full PRD-to-code workflow, the defensive interception layer, and the programmatic fallback toggle.

## Acceptance Criteria
- [ ] Section anchored to `#architecture`, full viewport height or tall enough (min-height 150vh) to allow scroll-driven animation.
- [ ] Create a radial SVG diagram with these nodes:
  - Outer ring: `User`, `PRD`, `Git History`, `Target Codebase`.
  - Processing ring: `PRD Atomizer`, `Kanban Dashboard`, `Generate Queries`, `Warm SQLite Cache`, `Chunkhound`, `Graphify`.
  - Inner ring: `Ephemeral Scratchpad`, `Graphify Dependencies`, `Steering Files`, `Context Compiler`.
  - Center: `AI Agent` (largest, pulsing).
  - Defensive gate: `Agent-Native Tool Interception` placed between the agent and a small set of native tool nodes (`grep`, `glob`, `ast-grep`).
- [ ] Use GSAP ScrollTrigger with `scrub: 1` to drive the animation in phases:
  1. **Init:** Outer and processing rings fade/scale in with stagger.
  2. **Atomize:** The `PRD` node splits into particles that flow to `Kanban Dashboard`.
  3. **Research:** A selected task emits query particles flowing to `Chunkhound` and `Graphify`.
  4. **Cache warm:** `Chunkhound` returns snippet particles into `Warm SQLite Cache` and `Ephemeral Scratchpad`.
  5. **Steer:** `Steering Files` particles flow to `AI Agent`.
  6. **Defensive gate:** Native tool calls (`grep`/`glob`/`ast-grep`) hit the interception gate; safe particles route to DAMS, then to the agent. Include a brief visualization of the fallback toggle: a small switch icon near the gate flips to show native tools can be re-enabled programmatically.
  7. **Steady state:** Continuous slow flow; agent node pulses softly.
- [ ] SVG lines use `stroke-dasharray` / `stroke-dashoffset` for draw-on effects.
- [ ] Data particles are small circles animated along motion paths using GSAP `MotionPathPlugin`.
- [ ] Provide `role="img"`, `<title>`, and `<desc>` explaining the diagram for assistive technologies.
- [ ] Mobile fallback: auto-play loop (18 s) with a pause/play button. Replace the radial layout with a simplified vertical or compact flow if radial is too dense.
- [ ] Respect `prefers-reduced-motion`: render a static version of the final diagram state, no particles or scroll scrubbing.

## Notes
- Keep performance high: reuse SVG elements, avoid continuous setState; drive particles with pure GSAP/tweening.
- The diagram must reinforce that DAMS is architecture thinking, not a toy.
