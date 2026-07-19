# DAMS Marketing Website — Design Specification

**Domain:** `{SITE_DOMAIN}` (example default: `aicodecontext.com`)  
**Product:** DAMS — Defensive Agentic Memory System v2.0  
**Context:** DAMS is the first implementation of a codebase-intelligence research initiative. The project studies the top products in the space (retrieval engines, agent harnesses, knowledge-graph systems, observability tools) and synthesizes their best concepts into practical, local-first AI tools.  
**Goal:** Convince Microsoft for Startups reviewers that DAMS already exists, is technically impressive, is actively developed, and justifies Azure credits.  
**Scope:** One premium dark-mode landing page (~8 sections). No multi-page SaaS sprawl.

---

## 1. Overall Design Philosophy

**Codebase-intelligence research lab, shipped as DAMS v2.0.**

The reviewer spends 1–2 minutes. Every element must answer: _"Is this real, technically hard, and worth credits?"_

- **Quality over quantity:** ~8 carefully crafted sections, not a sprawling SaaS site.
- **Premium dark mode:** Deep charcoal base (`#212427`), subtle depth, glass accents.
- **Workflow-first narrative:** The page immediately shows the real DAMS loop — PRD → tasks → queries → cache → scratchpad → agent writes code.
- **Engineering vocabulary:** Real feature names from the PRD and working workflow (`dams atomize`, `Warm SQLite Cache`, `Generate Queries`, `Ephemeral Scratchpad`, `Graphify Dependencies`). No "boost productivity" fluff.
- **Proof over promises:** Metrics from the PRD (71.5× token reduction via Graphify, 4.3 pt retrieval gain via cAST chunking, three-layer token budget, freshness scoring).
- **Motion with purpose:** Animations in the Vercel / Linear / Langfuse school — alive, but never attention-seeking.

---

## 2. User Journey (1–2 Minute Reviewer Experience)

| Time      | Section                | What the Reviewer Sees                                                                                 | Impression                           |
| --------- | ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| 0–5 s     | Header + Hero          | Identity + core workflow promise.                                                                      | Real product identity.               |
| 5–15 s    | Hero metrics + CTAs    | Local-first, Dockerized, actively researched, v2.0.                                                    | Substantial, mature.                 |
| 15–45 s   | Demo Video             | 4-minute placeholder showing the PRD-to-code workflow in the Kanban Dashboard.                         | Founder can present and ship.        |
| 45–90 s   | Feature Showcase       | 10 interactive switches mapped to the workflow + DAMS internals.                                       | Technically impressive, shipped.     |
| 90–110 s  | Architecture Animation | Scroll-driven flow from PRD → Kanban → queries → cache → scratchpad → agent with native tools blocked. | Architecture thinking, not a toy.    |
| 110–115 s | Research Lab           | DAMS is the flagship; more local-first variants are planned.                                           | Long-term vision beyond one project. |
| 115–120 s | CTA + Footer           | GitHub, docs, contact.                                                                                 | Easy to verify, no friction.         |

---

## 3. Website Sitemap

Single-page application, scroll-to-anchor navigation.

```
/
├── #hero
├── #demo
├── #features
├── #architecture
├── #research
├── #why
├── #developer
├── #stack
└── #cta
```

---

## 4. Complete Page Layout

### 4.1 Sticky Header

**Position:** Fixed top, z-index 50, full width.  
**Height:** 64 px desktop, 56 px mobile.  
**Behavior:** Initially transparent; on scroll > 48 px morphs to `rgba(33,36,39,0.78)` + `backdrop-blur(12px)` + 1 px bottom border `rgba(255,255,255,0.06)`.

**Content (left to right):**

- **Logo:** Vertical stylized brain silhouette with a search loupe / magnifying glass overlapping the lower-right quadrant. Single-color SVG, 32 px height. The brain represents memory; the loupe represents code search / codebase intelligence.
- **Wordmark:** `DAMS` in `font-weight: 650`, `font-size: 18 px`, tracking `-0.02 em`. Optional desktop tagline `Defensive Memory` in `text-tertiary`.
- **Nav links (desktop):** GitHub · Documentation · Demo · Research · Contact.
- **Mobile:** Hamburger sheet with the same anchors.

### 4.2 Hero Section

**Height:** 100vh minimum, with 160 px bottom padding so the next section overlaps slightly.

**Layout:** Centered column, max-width 912 px.

**Background:**

- Base: `#212427`.
- Subtle radial gradient (very soft) center-top: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(45,139,139,0.12), transparent)`.
- Animated mesh/particle field of tiny dots connected by faint lines (SVG). Dots drift slowly; lines draw only between nearby dots. Opacity 0.15–0.25.

**Content:**

- **Eyebrow:** `DAMS v2.0 — Local-first codebase intelligence for AI coding agents.` (`text-secondary`, uppercase tracking `0.08 em`).
- **Headline:** `Stop searching. Start shipping features.`
  - `font-size: 72 px` desktop, `48 px` mobile, `line-height: 1.05`, `font-weight: 700`.
- **Subheadline:** One paragraph, max 200 characters: `DAMS atomizes your PRD into tasks, warms a SQLite cache with the exact code snippets and Graphify references your agent needs, and blocks noisy native search tools — so the LLM builds the next feature without re-reading the codebase from scratch.`
- **CTAs:**
  - Primary: `Read the Documentation` → external docs repo anchor.
  - Secondary: `See it on GitHub` → external GitHub.
- **Trust pills (horizontal row, wrap):**
  - `Local-first`
  - `Dockerized`
  - `Codebase-intelligence research`
  - `v2.0 shipped`

### 4.3 Demo Video Section

**Layout:** Centered, max-width 1152 px.

**Visual container:**

- Rounded 20 px card with `overflow: hidden`.
- Border: 1 px `rgba(255,255,255,0.08)`.
- Ambient colored glow behind the card using a blurred pseudo-element: teal → violet gradient, opacity 0.18, animating very slowly (8 s cycle).
- YouTube embed with `aspect-ratio: 16 / 9`.

**Text above video:**

- Heading: `See DAMS run a feature from PRD to code`
- Subtext: `Create a project, atomize the PRD into Kanban cards, generate queries, warm the SQLite cache, and let the agent write code from a curated scratchpad while native search stays blocked. (4-minute walkthrough — full demo recording incoming.)`

### 4.4 Feature Showcase (Centerpiece)

A DAMS-specific evolution of the Langfuse "Launch, observe, improve — repeat" interaction pattern.

**Layout (desktop):**

- Full viewport-height section, `min-height: 100vh`.
- Two-zone composition:
  - **Left / dominant central zone (60%):** Large "stage" panel that displays the currently selected feature's animated visualization, title, description, and a key metric.
  - **Right sidebar (40%):** Vertical stack of 10 large interactive switches/cards.

**Interaction model:**

- One switch is always active.
- Hovering a non-active switch previews it; clicking/tapping commits the selection.
- The stage cross-fades and re-layouts with the new visualization.
- Each switch is large enough to grab attention: minimum 76 px height, 16 px padding, full width.

**10 Showcase Cards mapped to the actual DAMS workflow and PRD features:**

| #   | Feature Title                                | Description                                                                                                                                                                                                                                                                              | Key Metric / Proof       |
| --- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 1   | PRD Atomization                              | `dams atomize PRD.md` decomposes a product spec into a dependency-aware task tree tracked in `.dams/context/tasks/`.                                                                                                                                                                     | `PRD → tasks → registry` |
| 2   | Kanban Task Dashboard                        | The DAMS Web UI renders each task as a Kanban card. Select a card to start a focused research session.                                                                                                                                                                                   | `visual task board`      |
| 3   | Generate Queries                             | From the selected task description, DAMS produces 10–15 codebase research queries and fills the Code Research tab.                                                                                                                                                                       | `10–15 queries / task`   |
| 4   | Warm SQLite Cache                            | Sends queries to Chunkhound; results are persisted in the local DuckDB/SQLite cache so the agent never searches cold.                                                                                                                                                                    | `local DuckDB/SQLite`    |
| 5   | Ephemeral Scratchpad                         | Chunkhound returns the exact code snippets for the current task; no repeated codebase re-reading.                                                                                                                                                                                        | `task-scoped snippets`   |
| 6   | Graphify Dependencies                        | Graphify surfaces related files, call-graph nodes, and communities around the selected task.                                                                                                                                                                                             | `71.5× token reduction`  |
| 7   | cAST Chunking + Hybrid Search                | Structure-aware AST chunking preserves function/class boundaries; semantic + regex hybrid reranked locally by Ollama.                                                                                                                                                                    | `+4.3 pt retrieval gain` |
| 8   | Agent-Native Tool Interception               | MCP Interception Proxy installs fake/proxy tools for `grep`, `glob`, `ast-grep` inside open-source harnesses (oh-my-pi, pi.dev, Zed, Goose). Native tools are routed to DAMS by default and can be toggled back on programmatically when DAMS search cannot return satisfactory results. | `protocol-level proxy`   |
| 9   | Context Compiler + Safety Gate               | Compiles AGENTS.md with a three-layer token budget and freshness scoring; `dams check` enforces safety contracts, GritQL structural checks, and regression traps.                                                                                                                        | `8K budget · auto-heal`  |
| 10  | Docker-Sovereign Deployment + Steering Files | Ships as a full dev container because OS-level PATH shims interfered with the host OS. `dams configure-agents` writes playbooks across Claude Code, Cline, Cursor, Continue.dev, OpenCode, Kilo Code.                                                                                    | `host-safe · 6+ agents`  |

**Switch visual style:**

- Default state: dark surface `#1c1f22`, 1 px border `rgba(255,255,255,0.06)`, slight inner shadow.
- Hover: border brightens to accent teal at 0.35 opacity; translateX `+4 px`; icon scales 1.05.
- Active: left accent bar (3 px) in teal; background slightly lighter (`#24282c`); persistent glow.

**Stage panel:**

- Background: radial gradient using the feature's accent color at low opacity.
- Center: animated SVG visualization unique to each feature (e.g., PRD splitting into cards, query spiral filling a cache, scratchpad sliding into view, agent tool icon being blocked and rerouted).
- Bottom-left overlay: feature title, one-line description, metric badge.
- Use `AnimatePresence` for entering/exiting visualizations.

### 4.5 System Architecture Animation

A scroll-driven radial diagram inspired by Sourcegraph's connected-codebase concept, but redesigned around the DAMS workflow.

**Visual concept:**

- **Outer ring:** `User`, `PRD`, `Git History`, `Target Codebase`.
- **Processing ring:** `PRD Atomizer`, `Kanban Dashboard`, `Generate Queries`, `Warm SQLite Cache`, `Chunkhound`, `Graphify`.
- **Inner ring:** `Ephemeral Scratchpad`, `Graphify Dependencies`, `Steering Files`, `Context Compiler`.
- **Center node:** `AI Agent` (largest, pulsing).
- **Defensive layer gate:** `Agent-Native Tool Interception` sits between the agent and native tools. By default it routes `grep` / `glob` / `ast-grep` to DAMS, with a programmatic toggle to fall back to native search when DAMS cannot return satisfactory results.

**Scroll phases (each ~20vh):**

1. **Init:** The target codebase, PRD, and user nodes appear.
2. **Atomize:** PRD splits into task particles flowing to the Kanban Dashboard.
3. **Research:** A selected task emits query particles that travel to Chunkhound and Graphify.
4. **Cache warm:** Chunkhound returns snippets into the SQLite Cache and Scratchpad.
5. **Steer:** Steering-files particles flow to the AI Agent.
6. **Defensive gate:** Native tool calls (`grep`, `glob`) hit the interception gate and are rerouted to DAMS. Safe data particles flow to the agent.
7. **Steady state:** Agent node pulses; continuous slow flow of snippets and dependencies.

**Implementation note:** SVG lines use `stroke-dasharray` + `stroke-dashoffset`; particles are `circle` elements animated along motion paths with `GSAP MotionPathPlugin`.

### 4.6 Codebase Intelligence Research Lab

**Purpose:** Frame DAMS v2.0 as the flagship implementation of an ongoing research initiative and signal future products.

**Layout:** Centered intro paragraph + 3 roadmap cards.

**Content:**

- **Heading:** `Codebase Intelligence Research Lab`
- **Subheading:** `We study the top projects in codebase intelligence — retrieval engines, agent harnesses, knowledge graphs, observability, and local LLM tooling — and build practical, local-first products from what we learn.`
- **Roadmap cards:**
  - **DAMS v2.0** — Flagship product. PRD-to-code task automation with defensive memory. _(Shipped)_
  - **DAMS-Edge** — Embedded-database variant for teams that need fully offline, on-device codebase intelligence.
  - **DAMS-FT** — Fine-tuned local LLM variant optimized for code research, query generation, and context summarization.

Visual treatment: cards have a subtle glass border; the shipped card gets a teal left accent; future cards have a dimmer white border.

### 4.7 Why DAMS

Three short value props, horizontal row on desktop, stacked on mobile.

1. **Stop re-reading the codebase** — Query once, cache forever. The agent uses the scratchpad, not endless `grep` loops.
2. **Tasks stay coherent across sessions** — Kanban cards carry decisions, dependencies, and regression traps.
3. **Safe by default** — Native search tools are intercepted at the harness level by default, safety contracts are checked before commits ship, and the entire stack runs in a Docker container so host-OS shims never interfere with the developer machine. Native tools remain available as a programmatic fallback when DAMS search is not enough.

### 4.8 Developer-first

Left: heading + short copy. Right: stylized terminal snippet showing the core workflow.

```bash
$ dams init
$ dams atomize PRD.md
$ dams recompile
$ dams check
$ dams ui
```

The snippet uses a terminal aesthetic with JetBrains Mono.

### 4.9 Built on Modern AI Stack

A logo grid of technologies from PRD §10:
Python, React, FastAPI, Ollama, Chunkhound, Graphify, DuckDB, Typer, GritQL, ragas, MCP, Obsidian.

Each logo is monochrome, low opacity by default, full white on hover. Tooltip on hover shows the tech name.

### 4.10 CTA Section

Full-width dark card with subtle gradient.  
**Heading:** `Ship the next feature without re-reading the codebase.`  
Buttons: `Read the Documentation`, `Contact`.

### 4.11 Footer

Minimal three-column grid: Product, Resources, Connect.  
Bottom row: copyright + `Built by studying open-source codebase-intelligence projects and extending them into practical AI tooling.`

---

## 5. Detailed Section-by-Section Interaction Description

### Hero

- **Load sequence:** fade in + translateY 24 px, staggered 80 ms per element (eyebrow → headline → subheadline → buttons → pills).
- **Background mesh:** continuous subtle drift; paused when `prefers-reduced-motion` is true.
- **CTAs:** primary button lifts on hover (-2 px translateY); secondary button border brightens.

### Demo Video

- **Scroll reveal:** card scales from 0.98 → 1 and opacity 0 → 1.
- **Ambient glow:** slow 8 s hue rotation within teal → violet range.

### Feature Showcase

- **Default active feature:** Feature #1 PRD Atomization on load.
- **Hover preview:** 200 ms delay; non-committed preview shows a subtle ghost state in the stage.
- **Click commit:** stage content cross-fades (300 ms); switch gets active state.
- **Keyboard:** Tab moves through switches; Enter/Space selects; arrow keys navigate within the list (ARIA `tablist` / `tabpanel`).
- **Reduced motion:** no translateX or scale; only opacity/background changes.

### Architecture Animation

- **Scroll-linked:** animation progress tied to scroll position via GSAP ScrollTrigger `scrub: 1`.
- **Mobile fallback:** auto-play loop (18 s) with touch pause.

### Research Lab

- **Scroll reveal:** cards stagger in 100 ms apart.
- **Hover:** future cards lift slightly and border brightens.

---

## 6. Animation Architecture

| Purpose                                | Tool                                        | Why                                                                                     |
| -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Component transitions, hover, gestures | **Framer Motion**                           | React-native, layout animations, `AnimatePresence`, ideal for the feature-switch stage. |
| Scroll-driven architecture diagram     | **GSAP + ScrollTrigger + MotionPathPlugin** | Precise timeline scrubbing, SVG path drawing, particle flow control.                    |
| Hero mesh                              | SVG + GSAP                                  | Keep all scroll/motion code in one consistent toolkit.                                  |
| General reveal-on-scroll               | Framer Motion `whileInView`                 | Simpler than Intersection Observer.                                                     |

**Why GSAP over Three.js?** The architecture diagram is a 2D connected graph. SVG + GSAP is smaller, sharper, and easier to make accessible. Three.js is only justified for a future 3D data-viz Easter egg.

---

## 7. Interaction Architecture

- **Feature switches:** ARIA `tablist` semantics; `aria-selected` per switch; `aria-controls` to stage panel.
- **Video embed:** standard `<iframe>` fallback; focusable.
- **Architecture diagram:** `role="img"`, `<title>` and `<desc>` describing the PRD-to-code data flow.
- **CTAs:** all buttons are `<button>` or anchor tags with visible 2 px accent focus rings.
- **Mobile nav:** disclosure pattern, trap focus within sheet while open.
- **Research Lab roadmap cards:** simple link/button cards with clear hover/focus states.

---

## 8. Motion Guidelines

| Property                   | Value                               | Use case                              |
| -------------------------- | ----------------------------------- | ------------------------------------- |
| Micro-interaction duration | 150–200 ms                          | Hover, focus, button press.           |
| Layout transition duration | 300–400 ms                          | Feature stage swaps, section reveals. |
| Ambient loop duration      | 8–15 s                              | Glows, particle drift, agent pulse.   |
| Easing (enter)             | `cubic-bezier(0.16, 1, 0.3, 1)`     | Content reveals, "snap-in" feel.      |
| Easing (exit)              | `cubic-bezier(0.7, 0, 0.84, 0)`     | Text exiting.                         |
| Easing (bouncy)            | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Icon pop on switch hover only.        |
| Stagger delay              | 50–80 ms                            | Lists, pills, nodes.                  |

Avoid continuous `box-shadow` animation; animate opacity of a pseudo-element instead. Respect `prefers-reduced-motion: reduce` by converting motion to opacity-only or disabling.

---

## 9. Color System

**Base palette (dark mode only):**

| Role                             | Color            | Hex / Value              |
| -------------------------------- | ---------------- | ------------------------ |
| Background (page)                | deep charcoal    | `#212427`                |
| Surface 1 (cards, panels)        | slightly lighter | `#1c1f22`                |
| Surface 2 (hover, active switch) | mid charcoal     | `#24282c`                |
| Border default                   | low white        | `rgba(255,255,255,0.06)` |
| Border hover                     | accent muted     | `rgba(45,139,139,0.35)`  |
| Text primary                     | near white       | `#f4f4f5`                |
| Text secondary                   | medium gray      | `#a1a1aa`                |
| Text tertiary                    | dark gray        | `#71717a`                |
| Accent primary                   | teal/cyan        | `#2d8b8b`                |
| Accent glow                      | teal → violet    | `#2d8b8b` to `#7c3aed`   |
| Safety / warning                 | amber            | `#f59e0b`                |
| Success                          | soft green       | `#22c55e`                |

**Usage rules:**

- 90% of color is grayscale + teal.
- Violet only for architecture diagram accents and ambient glows.
- Amber reserved for warnings, violation states, and "trap" iconography.
- Avoid pure black; darkest allowed is `#151718`.

---

## 10. Typography System

**Font families:**

- **Primary UI:** `Inter` (or `Geist`). Clean, modern, readable at small sizes.
- **Monospace/code:** `JetBrains Mono` for CLI snippets, metrics, and code samples.

**Scale (desktop / mobile):**

| Token             | Desktop | Mobile | Weight | Line-height |
| ----------------- | ------- | ------ | ------ | ----------- |
| Display           | 72 px   | 48 px  | 700    | 1.05        |
| H1                | 56 px   | 36 px  | 700    | 1.1         |
| H2                | 40 px   | 28 px  | 600    | 1.2         |
| H3                | 28 px   | 22 px  | 600    | 1.25        |
| Body              | 16 px   | 16 px  | 400    | 1.6         |
| Body large        | 18 px   | 18 px  | 400    | 1.6         |
| Caption / eyebrow | 12 px   | 12 px  | 500    | 1.4         |
| Code              | 14 px   | 13 px  | 400    | 1.5         |

**Spacing scale:** based on 4 px unit: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

---

## 11. Iconography Recommendations

- **UI icons:** `lucide-react`. Consistent 1.5 px stroke, 24 px default size.
- **Feature icons:** `lucide-react` variants (FileText, LayoutKanban, Search, Database, StickyNote, Network, Code2, Shield, Route, Cpu) or custom inline SVGs where a unique metaphor is needed.
- **Tech stack logos:** `simple-icons` monochrome SVGs.
- **Logo:** custom SVG — vertical stylized brain silhouette with a magnifying glass overlapping the lower-right quadrant. Single-path style, no gradients, legible at 32 px and 64 px. Provide `public/logo.svg` and `public/logo-mark.svg`.

---

## 12. Responsive Strategy

**Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.

| Section          | Desktop                               | Tablet                   | Mobile                                                                               |
| ---------------- | ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------ |
| Header           | full nav visible                      | full nav visible         | hamburger sheet                                                                      |
| Hero             | 72 px headline                        | 56 px headline           | 48 px headline, stacked CTAs                                                         |
| Demo video       | 1152 px max                           | full width with margin   | full width, 16 px margin                                                             |
| Feature showcase | stage 60% / switches 40% side-by-side | stage 55% / switches 45% | vertical stack: horizontal switch pills above stage; stage full-width; tap to update |
| Architecture     | radial diagram, scroll-driven         | radial diagram, smaller  | simplified compact flow, auto-play loop                                              |
| Research Lab     | 3 cards in row                        | 3 cards in row           | stacked cards                                                                        |
| Why/Stack/Footer | multi-column                          | multi-column             | stacked single-column                                                                |

**Feature showcase — mobile behavior:**

- Horizontal scrollable row of compact feature pills at top.
- Tapping a pill scrolls it into view and updates the stage panel below.
- Stage panel is swipeable left/right to cycle features.

---

## 13. Accessibility Recommendations

1. **Keyboard:** All interactive controls focusable and operable by keyboard. Focus ring 2 px offset in accent teal.
2. **Reduced motion:** Honor `prefers-reduced-motion: reduce` — disable scroll-driven animations, replace with simple opacity fades or static diagrams.
3. **Contrast:** Maintain WCAG 2.1 AA — body text `#a1a1aa` on `#212427` passes; ensure code snippets and small labels also pass.
4. **ARIA landmarks:** `<main>`, `<nav>`, `<footer>`, and section labels.
5. **Feature showcase:** `role="tablist"` for switch list, `role="tabpanel"` for stage.
6. **Architecture diagram:** `role="img"`, `<title>` and `<desc>` describing the PRD-to-code workflow.
7. **Video embed:** Include accessible transcript link below the player.
8. **Skip link:** "Skip to main content".

---

## 14. Suggested Technology Stack

| Layer      | Choice                                                   | Justification                                                         |
| ---------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| Framework  | **Next.js 14+ App Router**                               | Static export, fast first paint, image optimization, easy deployment. |
| Styling    | **Tailwind CSS v3+**                                     | Utility-first, matches Linear/Vercel aesthetic, easy dark mode.       |
| Components | **shadcn/ui** (select primitives)                        | Radix-based accessibility; fully owned CSS, easy to theme.            |
| Animation  | **Framer Motion + GSAP**                                 | Best-of-breed for component and scroll animation respectively.        |
| Icons      | **Lucide React** + custom SVGs                           | Consistent, lightweight, modern.                                      |
| Fonts      | **Inter / JetBrains Mono** via `next/font/google`        | No layout shift, optimized.                                           |
| Hosting    | **Vercel** (or Cloudflare Pages / Azure Static Web Apps) | Fast edge delivery for a static marketing site.                       |

---

## 15. Future Enhancements (Optional)

- Replace the YouTube placeholder with a self-hosted 4-minute PRD-to-code demo.
- Add an interactive "playground" mini-widget that simulates the "Generate Queries → Warm SQLite Cache" flow.
- Show live GitHub activity (last commit, open issues, stars) if the repo is public.
- Add a changelog section to demonstrate active development.
- Publish deep-dive write-ups on each top codebase-intelligence product studied.

---

## Appendix A — Logo Guidance

**Logo description for implementation:**

- A vertical stylized brain silhouette (side/vertical view).
- A magnifying glass / search loupe overlaps the lower-right quadrant of the brain.
- Single-color line-art or solid shape; the lens area can be cut out to reveal the page background.
- Must be legible at 32 px height and scale to favicon 64 px.
- Provide `public/logo.svg` (wordmark + mark) and `public/logo-mark.svg` (mark only).

**Symbolism:** The brain = memory / agentic context. The magnifying glass = codebase search / codebase intelligence.

---

## Appendix B — Final Copy Bank

**Eyebrow:** `DAMS v2.0 — Local-first codebase intelligence for AI coding agents.`

**Headline:** `Stop searching. Start shipping features.`

**Subheadline:** `DAMS atomizes your PRD into tasks, warms a SQLite cache with the exact code snippets and Graphify references your agent needs, and blocks noisy native search tools — so the LLM builds the next feature without re-reading the codebase from scratch.`

**Demo heading:** `See DAMS run a feature from PRD to code`

**Demo subtext:** `Create a project, atomize the PRD into Kanban cards, generate queries, warm the SQLite cache, and let the agent write code from a curated scratchpad while native search stays blocked. (4-minute walkthrough — full demo recording incoming.)`

**Feature showcase labels:**

1. `PRD Atomization`
2. `Kanban Task Dashboard`
3. `Generate Queries`
4. `Warm SQLite Cache`
5. `Ephemeral Scratchpad`
6. `Graphify Dependencies`
7. `cAST Chunking + Hybrid Search`
8. `Agent-Native Tool Interception`
9. `Context Compiler + Safety Gate`
10. `Docker-Sovereign Deployment + Steering Files`

**Why DAMS headings:**

- Stop re-reading the codebase
- Tasks stay coherent across sessions
- Safe by default

**Research Lab heading:** `Codebase Intelligence Research Lab`

**Research Lab subheading:** `We study the top projects in codebase intelligence — retrieval engines, agent harnesses, knowledge graphs, observability, and local LLM tooling — and build practical, local-first products from what we learn.`

**CTA heading:** `Ship the next feature without re-reading the codebase.`

**Footer tagline:** `Built by studying open-source codebase-intelligence projects and extending them into practical AI tooling.`

---

**End of Specification**
