# TASK-002 — Design Tokens & Global Styles

## Objective
Define and document all visual design tokens so every later component uses the same colors, typography, spacing, and motion constants.

## Acceptance Criteria
- [ ] Implement the color tokens from the design spec in `tailwind.config.ts` as CSS variables or direct Tailwind colors:
  - `background: #212427`
  - `surface: #1c1f22`
  - `surface-hover: #24282c`
  - `border: rgba(255,255,255,0.06)` and `border-hover: rgba(45,139,139,0.35)`
  - `text-primary: #f4f4f5`
  - `text-secondary: #a1a1aa`
  - `text-tertiary: #71717a`
  - `accent: #2d8b8b`
  - `accent-glow-start: #2d8b8b`
  - `accent-glow-end: #7c3aed`
  - `warning: #f59e0b`
  - `success: #22c55e`
- [ ] Add typography utilities (Display 72/48px, H1–H3, Body, Caption, Code) using the Inter and JetBrains Mono font families.
- [ ] Add the spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- [ ] Add reusable animation timing helpers/easings in a `lib/motion.ts` file:
  - Enter easing `cubic-bezier(0.16, 1, 0.3, 1)`
  - Exit easing `cubic-bezier(0.7, 0, 0.84, 0)`
  - Bouncy easing `cubic-bezier(0.34, 1.56, 0.64, 1)`
  - Stagger delay constants: 50–80 ms.
- [ ] Add `.sr-only` and `.skip-link` helpers for accessibility.
- [ ] Add a `Container` wrapper component with max-width responsive rules and horizontal padding.
- [ ] Create a `Section` wrapper component with consistent vertical padding (96 px desktop, 64 px mobile) and optional `id` prop for anchor navigation.
- [ ] Verify a temporary test page renders text in the correct fonts, colors, and spacing.

## Notes
- Avoid styling individual sections yet; this task provides the shared primitives.
