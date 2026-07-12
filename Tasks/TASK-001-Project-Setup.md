# TASK-001 — Project Setup

## Objective
Initialize the DAMS marketing site repository with Next.js, Tailwind CSS, shadcn/ui, Framer Motion, GSAP, and the configured font and icon dependencies.

## Acceptance Criteria
- [ ] Run `npx create-next-app@latest dams-marketing --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"` in the marketing folder `/data/Programming/Projects/RAG_Context/DAMS_Marketing/`.
- [ ] Install dependencies: `framer-motion`, `gsap`, `@gsap/react` (or MotionPathPlugin separately if required), `lucide-react`, `simple-icons`.
- [ ] Add Google fonts via `next/font/google`: `Inter` (weights 400/500/600/700) and `JetBrains Mono` (400/500).
- [ ] Initialize shadcn/ui: `npx shadcn-ui@latest init`, choose neutral/zinc base color, CSS variables enabled.
- [ ] Create the recommended folder structure: `app/`, `components/`, `components/sections/`, `components/ui/`, `lib/`, `public/`, `styles/`.
- [ ] Add an empty `globals.css` that imports Tailwind layers, applies the dark background `#212427` to `html`/`body`, and sets `color-scheme: dark`.
- [ ] Configure `tailwind.config.ts` with the custom colors, font families, and spacing scale from the design specification.
- [ ] Ensure the project builds without errors (`npm run build`).

## Notes
- Keep `output: 'export'` in `next.config.js` only if static hosting is finalized; otherwise leave it as the default until the deployment task.
- Do not create any page sections here; only setup and design-token plumbing.
