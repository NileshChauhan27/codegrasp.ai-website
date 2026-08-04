# CodeGrasp.ai — Codebase Intelligence Research Lab & Marketing Portal

[![Website](https://img.shields.io/badge/Website-codegrasp.ai-0D9488?style=flat-square)](https://codegrasp.ai)
[![Docs](https://img.shields.io/badge/Docs-v2.3-7C3AED?style=flat-square)](https://codegrasp.ai/docs/)
[![Framework](https://img.shields.io/badge/Next.js-16.2.10-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**CodeGrasp.ai** is the official marketing portal and interactive research lab showcase for **DAMS (Defensive Agentic Memory System)** — a local-first memory, safety, and AST retrieval layer engineered for autonomous AI coding agents.

---

## 🌟 Key Highlights Demonstrated

- **Persistent Agentic Memory:** Prevents AI coding session context collapse through freshness-scored steering files (`DAMS.md`) and token-budgeted memory layers.
- **AST Knowledge Graph Navigation:** Integrates Gortex AST call graph analysis to map dependencies with zero false positives.
- **DAMS-FT (Fine-Tuned Local Router):** Features the **Bonsai-8B** local model routing engine with **100% tool selection accuracy** and **27%–40% token compression** via the GCX1 wire protocol.
- **PreToolUse Security Shield:** Intercepts and blocks native text search tools at runtime, dynamically rerouting AI models to high-performance graph endpoints.
- **Interactive 3D Pipeline & Kanban Stages:** Provides interactive visual demonstrations of codebase intelligence workflows.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router + Static Export)
- **UI & Logic:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, Vanilla CSS Design System, Geist & Geist Mono Typography
- **Animations:** Framer Motion, GSAP
- **Icons & Components:** Lucide React, Simple Icons, Base UI
- **Static Documentation:** Embedded 8-page sovereign documentation portal (`/public/docs/`)

---

## 🚀 Local Development Guide

### Prerequisites
- Node.js 18.x or 20.x+
- npm, pnpm, or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
```
The static export will be generated in the `dist/` directory.

### 4. Test Production Export Locally
```bash
npx serve dist
```
Open [http://localhost:3000](http://localhost:3000) to test the generated static bundle.

---

## 🌐 Production Deployment

The project is configured for static export (`output: "export"`) and can be deployed to any standard web server, CDN, or DirectAdmin shared hosting (`public_html`).

- **Live URL:** [https://codegrasp.ai](https://codegrasp.ai)
- **Documentation Portal:** [https://codegrasp.ai/docs/](https://codegrasp.ai/docs/)
- **Core Repository:** [github.com/NileshChauhan27/dams](https://github.com/NileshChauhan27/dams)

---

## 📄 License

Private / Proprietary — CodeGrasp.ai Research Lab.
