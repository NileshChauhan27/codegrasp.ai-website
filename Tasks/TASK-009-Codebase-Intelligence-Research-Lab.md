# TASK-009 — Codebase Intelligence Research Lab & Roadmap

## Objective
Create the section that frames DAMS v2.0 as the flagship product of a codebase-intelligence research initiative and communicates future product variants.

## Acceptance Criteria
- [ ] Section anchored to `#research`.
- [ ] Heading: `Codebase Intelligence Research Lab`.
- [ ] Subheading text: `We study the top projects in codebase intelligence — retrieval engines, agent harnesses, knowledge graphs, observability, and local LLM tooling — and build practical, local-first products from what we learn.`
- [ ] Three roadmap cards (responsive grid: 3 columns desktop, 1 column mobile):
  - **DAMS v2.0** (shipped) — Flagship product. PRD-to-code task automation with defensive memory. Card has teal left accent and `Shipped` badge.
  - **DAMS-Edge** — Embedded-database variant for teams that need fully offline, on-device codebase intelligence. Card uses dimmer white border.
  - **DAMS-FT** — Fine-tuned local LLM variant optimized for code research, query generation, and context summarization. Card uses dimmer white border.
- [ ] Each card includes:
  - Title.
  - Short description.
  - Status badge (`Shipped`/`In research`/`Planned`).
- [ ] Scroll reveal animation: cards stagger in (100 ms apart) using Framer Motion `whileInView`.
- [ ] Hover interaction: future cards lift slightly (-2 px) and border brightens.
- [ ] Mention in the subheading or a supporting line that DAMS ships as a container because OS-level PATH shims interfered with the host OS — reinforcing the defensive/host-safe design choice.
- [ ] Ensure cards are keyboard-focusable and have visible focus rings.

## Notes
- This section answers the reviewer's implicit question: "Is this just one project, or is there a roadmap?"
