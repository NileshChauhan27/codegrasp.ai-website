# TASK-007 — Feature Showcase (Centerpiece)

## Objective
Build the most important section of the site: a large interactive switch grid where each switch represents a real DAMS workflow feature from the PRD.

## Acceptance Criteria
- [ ] Section anchored to `#features`, full viewport height (`min-height: 100vh`), generous padding.
- [ ] Desktop layout: two-zone composition.
  - Left/dominant stage panel (60% width): displays active feature title, description, metric, and animated SVG visualization.
  - Right sidebar (40% width): vertical stack of 10 large interactive switches, minimum 76 px height each.
- [ ] Implement exactly 10 switches in this order:
  1. **PRD Atomization** — `dams atomize PRD.md` decomposes a product spec into dependency-aware task tree tracked in `.dams/context/tasks/`.
  2. **Kanban Task Dashboard** — Web UI renders each task as a Kanban card; selecting a card starts a focused research session.
  3. **Generate Queries** — From selected task description, DAMS produces 10–15 codebase research queries and fills the Code Research tab.
  4. **Warm SQLite Cache** — Sends queries to Chunkhound; persists results in local DuckDB/SQLite cache so agent never searches cold.
  5. **Ephemeral Scratchpad** — Curated task-scoped code snippets returned by Chunkhound; no repeated codebase re-reading.
  6. **Graphify Dependencies** — Related files, call-graph nodes, and Leiden communities surfaced for the selected task.
  7. **cAST Chunking + Hybrid Search** — Structure-aware AST chunking (4.3 pt retrieval gain), semantic + regex hybrid, Ollama local reranker.
  8. **Agent-Native Tool Interception** — MCP Interception Proxy installs fake/proxy tools for `grep`/`glob`/`ast-grep` inside open-source harnesses (oh-my-pi, pi.dev, Zed, Goose). Native tools route to DAMS by default; can be toggled back programmatically when DAMS search is unsatisfactory.
  9. **Context Compiler + Safety Gate** — Compiles AGENTS.md with a three-layer token budget and freshness scoring; `dams check` enforces safety contracts, GritQL structural checks, and regression traps.
  10. **Docker-Sovereign Deployment + Steering Files** — Ships as a full dev container because OS-level PATH shims interfered with the host OS; `dams configure-agents` writes playbooks for Claude Code, Cline, Cursor, Continue.dev, OpenCode, Kilo Code.
- [ ] Each switch shows:
  - Icon (Lucide or custom SVG).
  - Feature title.
  - One-line description.
  - Hover state: border brightens to teal, translateX +4 px, icon scales 1.05.
  - Active state: 3 px teal left accent bar, lighter background, persistent glow.
- [ ] Stage panel:
  - Background radial gradient low-opacity matching feature accent.
  - Animated SVG visualization unique to each feature (e.g., PRD splitting into cards; query spiral filling cache; scratchpad sliding in; tool icon blocked and rerouted).
  - Title, description, metric badge at bottom-left overlay.
  - `AnimatePresence` cross-fade on feature change (300 ms).
- [ ] Interactions:
  - One switch always active (default: #1).
  - Hover previews a feature (200 ms delay); click commits.
  - Keyboard: Tab/Arrow navigation, Enter/Space selects. Use `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`.
- [ ] Reduced motion: disable translateX/scale; use background/border and opacity changes only.
- [ ] Tablet: preserve side-by-side at 55/45 split.
- [ ] Mobile: horizontal scrollable pill row at top; tap updates a full-width stage panel below. Swipe left/right on stage panel may cycle features.

## Notes
- This section is the credibility anchor. Every feature name, metric, and behavior must be traceable to PRD language.
- Stage visualizations do not need to be production-perfect on first pass, but they must be recognizable and animated.
