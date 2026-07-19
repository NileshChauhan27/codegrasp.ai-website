# How to Run the DAMS Marketing Site

This guide explains how to set up, run, build, and troubleshoot the DAMS marketing site located at `dams-marketing/`.

The site is built with **Next.js 16** (using Turbopack) and **Tailwind CSS v4**. It is a static-first landing page for the DAMS codebase intelligence product.

---

## 1. Project Location

All commands below assume you are inside the Next.js application directory:

```bash
cd dams-marketing
```

If you are at the workspace root (`/data/Programming/Projects/RAG_Context/DAMS_Marketing`), run:

```bash
cd dams-marketing
```

To confirm you are in the correct directory:

```bash
pwd
# Should end with: /dams-marketing
ls
# Should show: app/  components/  public/  package.json  tsconfig.json  next.config.ts  ...
```

---

## 2. Prerequisites

You need:

- **Node.js** 18.18+ (Node 20+ recommended for Next.js 16)
- **npm** 9+ (comes bundled with Node.js)

### Check your versions

```bash
node --version
npm --version
```

If Node.js is not installed, install it via `nvm` or your distribution’s package manager.

---

## 3. Install Dependencies

Install all the npm packages defined in `package.json`:

```bash
npm install
```

This installs:
- `next`, `react`, `react-dom`
- `tailwindcss`, `@tailwindcss/postcss`
- `framer-motion`, `lucide-react`, `simple-icons`
- Dev tools: `typescript`, `eslint`, `@types/*`

---

## 4. Run the Site (Development Mode)

Start the local development server with hot-reload:

```bash
npm run dev
```

By default, Next.js serves at:

- `http://localhost:3000`

If port 3000 is in use, Next.js prints a message like:
`Port 3000 is in use ... using available port 3001 instead.`

You can stop the server at any time with `Ctrl+C`.

---

## 5. Build for Production

To produce an optimized production bundle:

```bash
npm run build
```

The output is placed in `dams-marketing/dist/` (per the `distDir` in `next.config.ts`).

---

## 6. Run the Production Build

After building, serve the optimized site:

```bash
npm run start
```

This serves the prebuilt static + SSR bundle at `http://localhost:3000` (or the next free port).

---

## 7. Linting

Run the Next.js ESLint config across the codebase:

```bash
npm run lint
```

---

## 8. Common Commands (Cheat Sheet)

| Command          | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `npm install`    | Install all npm dependencies                       |
| `npm run dev`    | Start dev server with HMR at `localhost:3000`     |
| `npm run build`  | Compile + prerender the production bundle          |
| `npm run start`  | Serve the prebuilt production bundle               |
| `npm run lint`   | Run ESLint on the codebase                        |

---

## 9. Troubleshooting

### 9.1 “Port 3000 is in use”

This means another process is holding port 3000. Next.js falls back to port 3001 / 3002 / ...

**Find and kill the process using port 3000:**

```bash
# Find what is using port 3000
ss -tulpn | grep 3000
# or
lsof -i :3000

# Kill it
kill -s KILL <PID>
# or in one shot
fuser -k 3000/tcp
```

Then re-run `npm run dev`.

### 9.2 “Cannot find module …” after pulling new code

```bash
rm -rf node_modules .next
npm install
npm run build
```

### 9.3 Tailwind / styling looks broken

Confirm Tailwind v4 is detected. `package.json` should contain `@tailwindcss/postcss`. After changes:

```bash
rm -rf .next
npm run dev
```

### 9.4 TypeScript / ESLint errors

```bash
npm run lint
```

Fix any reported issues, then run:

```bash
npm run build
```

### 9.5 Port issues in this workspace

Different parts of the project (other tools, background agents, etc.) may use ports in the 3000–3004 range. Use:

```bash
ss -tulpn | grep -E '300[0-4]'
```

to identify what is listening, and kill any stray `next-server` processes:

```bash
pkill -9 -f "next-server"
```

---

## 10. Project Structure (Quick Overview)

```
dams-marketing/
├─ app/                       # Next.js App Router (routes, layout, globals.css)
├─ components/                # UI components (shared, ui, sections)
│  ├─ sections/               # Page sections (hero, feature, architecture, etc.)
│  └─ ui/                     # shadcn/ui primitives (button, etc.)
├─ public/                    # Static assets (logo.svg, logos/, og.png)
├─ lib/                       # Utilities, features, tech-stack, motion
├─ next.config.ts             # Next.js config (distDir, images)
├─ tailwind config in globals.css
├─ package.json
└─ tsconfig.json
```

Key pages and components:

- `app/page.tsx` — Home page assembling the sections.
- `components/sections/architecture.tsx` — The interactive SVG flowchart.
- `components/sections/hero.tsx` — Hero animation.
- `components/sections/feature-switch-list.tsx` — Switchable feature tabs.
- `components/shared/logo.tsx` — DAMS logo.

---

## 11. License

Internal marketing site for the DAMS project. See `LICENSE` (if present) for terms.

