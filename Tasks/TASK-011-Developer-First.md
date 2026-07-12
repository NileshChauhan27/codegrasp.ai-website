# TASK-011 — Developer-First

## Objective
Showcase DAMS as a developer-friendly CLI and workbench, not a black-box SaaS.

## Acceptance Criteria
- [ ] Section anchored to `#developer`.
- [ ] Two-column layout on desktop (text left, terminal right), single column on mobile:
  - Heading: `Built for developers, not dashboards.`
  - Body text summarizing the CLI-first philosophy and how the Web UI complements it.
  - Right side: a styled terminal window containing the core workflow:
    ```bash
    $ dams init
    $ dams atomize PRD.md
    $ dams recompile
    $ dams check
    $ dams ui
    ```
- [ ] Terminal aesthetic:
  - Dark rounded frame.
  - Traffic-light window buttons (red/yellow/green).
  - JetBrains Mono font.
  - Syntax highlighting for commands, flags, and keywords.
- [ ] Animate the terminal in with the code appearing line-by-line on scroll.
- [ ] Reduced motion: show the full code block at once instead of line-by-line.
- [ ] Keyboard-focusable if the terminal is interactive; otherwise treat as decorative with `aria-label`.

## Notes
- This section reinforces the "real engineering product" impression for reviewers.
