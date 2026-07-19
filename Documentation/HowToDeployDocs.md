# How to Deploy the DAMS Documentation to the Live Website

This guide explains how to publish the DAMS documentation (currently served
locally at `http://localhost:3000/docs`) to a public URL — `https://docs.aicodecontext.com`
or as a subpath of the main site.

> **Status:** The domain `aicodecontext.com` is registered but **not yet deployed**.
> The docs content is complete and lives in `dams-marketing/public/docs/`. This
> document covers the remaining steps: build, host, DNS, and wiring the links.

---

## 1. What gets deployed

| Location | Purpose |
| --- | --- |
| `dams-marketing/public/docs/` | **Source** of the docs (8 HTML pages + `styles.css`) |
| `dams-marketing/dist/docs/` | **Build output** — `npm run build` copies `public/docs` here (via `distDir: "dist"`) |
| `dams-marketing/lib/site.ts` → `DOCS_URL` | The URL the in-site "Documentation" links point to |

The docs are **plain static HTML/CSS** — no build step of their own. Any static
host serves them as-is.

---

## 2. Choose a topology

### Option A — Subdomain `docs.aicodecontext.com` (recommended)
Deploy **only the docs** to the root of the subdomain.
- Visiting `https://docs.aicodecontext.com/` serves `index.html`.
- Relative nav links (`architecture.html`, etc.) resolve correctly at the root.
- Set `DOCS_URL = "https://docs.aicodecontext.com"`.

### Option B — Subpath `aicodecontext.com/docs`
Deploy the **entire site** (`dist/`) so the marketing site and docs share one host.
- Keep the `/docs` → `/docs/index.html` redirect already configured in `next.config.ts`.
- Set `DOCS_URL = "https://aicodecontext.com/docs"`.

---

## 3. Build

From `dams-marketing/`:

```bash
npm install
npm run build
# Output: dams-marketing/dist/   (includes dist/docs/)
```

For **Option A**, deploy the folder `dams-marketing/dist/docs/` (or `public/docs/`).
For **Option B**, deploy the whole `dams-marketing/dist/` folder.

---

## 4. Hosting options

### 4.1 Azure Static Web Apps (recommended for Microsoft for Startups)
Fits the Azure/Founders Hub ecosystem; free tier, automatic HTTPS, global CDN.

1. In the Azure Portal create a **Static Web App**.
2. Connect it to your GitHub repo (`DAMS_Marketing`).
3. Build details:
   - App location: `dams-marketing`
   - Output location: `dist` (for Option B) — or `dist/docs` (Option A)
   - Build command: `npm run build`
4. On first deploy Azure writes a workflow to
   `.github/workflows/azure-static-web-apps-*.yml`. For **Option A**, set the
   workflow's `output_location` to `dist/docs`.
5. Azure shows a generated `.azurestaticapps.net` URL — use it to verify before DNS.

### 4.2 GitHub Pages
1. Push the repo to GitHub.
2. For **Option A**, add a workflow that builds and publishes `dist/docs` to Pages
   (or use `peaceiris/actions-gh-pages` to publish `public/docs`).
3. Enable Pages in repo Settings → **Source: GitHub Actions**.
4. URL: `https://<user>.github.io/<repo>/` (subpath) — for a clean `docs.aicodecontext.com`
   you still need the custom domain step below.

### 4.3 Netlify / Cloudflare Pages / Vercel
- **Netlify:** drag-and-drop the `dist/docs` folder, or connect the repo with
  build command `npm run build` and publish directory `dist/docs` (Option A) or `dist` (Option B).
- **Cloudflare Pages / Vercel:** same — build `npm run build`, publish `dist/docs` or `dist`.

---

## 5. Point the domain (`docs.aicodecontext.com`)

At your domain registrar (where `aicodecontext.com` was purchased):

1. Add a **subdomain** `docs` (host/name = `docs`).
2. Set its record to a **CNAME** pointing at the host's address:
   - Azure SWA: the `.azurestaticapps.net` hostname
   - Netlify: the `.netlify.app` hostname
   - Cloudflare Pages: the `.pages.dev` hostname
   - GitHub Pages: `https://<user>.github.io` (and add the custom domain in Pages settings)
3. In the host's dashboard, add the **custom domain** `docs.aicodecontext.com` and
   let it issue a free TLS certificate (auto for Azure/Netlify/Cloudflare).
4. Wait for DNS propagation (minutes to a few hours). Verify with:
   ```bash
   dig docs.aicodecontext.com +short
   curl -I https://docs.aicodecontext.com/
   ```

---

## 6. Wire the links

Once the public URL is live, update `dams-marketing/lib/site.ts`:

```ts
// Option A (subdomain)
export const DOCS_URL = "https://docs.aicodecontext.com";

// Option B (subpath)
export const DOCS_URL = "https://aicodecontext.com/docs";
```

Then rebuild and redeploy:

```bash
npm run build
# redeploy dist/ (or dist/docs/) to the host
```

The CTA button (`components/sections/cta.tsx`) and footer
(`components/sections/footer.tsx`) both read `DOCS_URL`, so both links update at once.

---

## 7. Verify the live docs

```bash
# Should return 200 and contain the docs title
curl -s https://docs.aicodecontext.com/ | grep -o "DAMS Documentation"

# Each page resolves
for p in index architecture concepts cli mcp security faq; do
  curl -s -o /dev/null -w "$p.html -> %{http_code}\n" https://docs.aicodecontext.com/$p.html
done
```

Also click **Documentation** on the live marketing site and confirm it opens the docs.

---

## 8. Notes & gotchas

- **Local redirect is irrelevant once deployed to a subdomain root.** The `/docs`
  redirect in `next.config.ts` is only needed for the **Option B subpath** topology.
  On a subdomain root, static hosts serve `index.html` automatically at `/`.
- **Relative links are intentional.** All nav uses relative paths
  (`architecture.html`), so the same files work at a subpath (`/docs/architecture.html`)
  and at a subdomain root (`/architecture.html`).
- **`DOCS_URL` is the single source of truth** for both doc links — change it in one place.
- **HTTPS is mandatory** for the MCP/agent ecosystem and for browser trust; all listed
  hosts provide free automatic certificates.
- **Cache:** after redeploy, hard-refresh (Cmd/Ctrl+Shift+R) to bypass the CDN cache.

---

## 9. Quick decision summary

| If you want… | Deploy | `DOCS_URL` | DNS |
| --- | --- | --- | --- |
| Clean `docs.aicodecontext.com` | `dist/docs` to a subdomain | `https://docs.aicodecontext.com` | CNAME `docs` → host |
| One host for site + docs | whole `dist` | `https://aicodecontext.com/docs` | (main site already at root) |
