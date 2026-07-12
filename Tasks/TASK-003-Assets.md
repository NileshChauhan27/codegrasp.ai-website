# TASK-003 — Logo, Favicon, and Visual Assets

## Objective
Create and optimize the visual assets needed before any UI section is built.

## Acceptance Criteria
- [ ] Create a custom SVG logo:
  - Vertical stylized brain silhouette.
  - Magnifying glass / search loupe overlapping the lower-right quadrant.
  - Single-color line-art or solid shape; lens may be a knockout revealing the page background.
  - Legible at 32 px and 64 px.
- [ ] Export two files to `public/logo.svg` (mark + wordmark) and `public/logo-mark.svg` (mark only).
- [ ] Create favicon set:
  - `public/favicon.ico`
  - `public/apple-touch-icon.png` (180×180)
  - `public/icon.svg` (maskable/scalable)
  - Use the logo-mark for favicons.
- [ ] Add an Open Graph / Twitter image: `public/og.png` (1200×630) showing the DAMS wordmark, tagline, and dark background.
- [ ] Prepare placeholder technology logos (monochrome SVG only) for the stack grid in `public/logos/`:
  - Python, React, FastAPI, Ollama, Chunkhound, Graphify, DuckDB, Typer, GritQL, ragas, MCP, Obsidian.
  - Use simple-icons where available; custom SVGs where not.
- [ ] Compress all images and SVGs; ensure no assets exceed 100 KB unless the OG image.
- [ ] Verify each logo and icon renders correctly in both light and dark contexts (the whole site is dark, but assets should still use currentColor or white).

## Notes
- Do not use external image URLs for mission-critical assets. Keep everything in `public/` for reliability.
- The brain + magnifying glass concept is core brand identity; do not replace it with a generic icon.
