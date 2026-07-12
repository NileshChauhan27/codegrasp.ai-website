# TASK-010 — Why DAMS

## Objective
Build a concise value-proposition section that summarizes why the DAMS workflow matters.

## Acceptance Criteria
- [ ] Section anchored to `#why`.
- [ ] Heading: `Why DAMS`.
- [ ] Three value prop cards in a row on desktop, stacked on mobile:
  1. **Stop re-reading the codebase** — Query once, cache forever. The agent uses the curated scratchpad instead of endlessly looping `grep`.
  2. **Tasks stay coherent across sessions** — Kanban cards carry decisions, dependencies, and regression traps from one session to the next.
  3. **Safe by default** — Native search tools are intercepted at the harness level by default; safety contracts are checked before commits ship; the entire stack runs in a Docker container so host-OS shims never interfere with the developer machine. Native tools remain available as a programmatic fallback when DAMS search is not enough.
- [ ] Each card has:
  - Large number or icon at the top.
  - Bold heading.
  - One short paragraph.
- [ ] Staggered scroll reveal (80 ms between cards).
- [ ] Hover state: card lifts slightly and border brightens.
- [ ] Ensure good contrast and keyboard accessibility.

## Notes
- Keep the third value prop as the defensive-architecture summary: harness interception, container isolation, and fallback toggle.
