# SITE_CONFIG_REFERENCE.md

## Domain Configuration

To make the production domain easy to change, all URL references must be imported from a single source of truth.

### Recommended Implementation

Create `lib/site.ts` in the Next.js project:

```typescript
export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || 'aicodecontext.com';

export const SITE_URL = `https://${SITE_DOMAIN}`;

export const SITE_NAME = 'DAMS — Defensive Agentic Memory System';

export const SITE_DESCRIPTION =
  'DAMS is a local, Dockerized codebase-intelligence workbench that atomizes PRDs into tasks, warms a SQLite cache with code snippets, and lets AI agents write the next feature without re-reading the codebase.';
```

### Usage

Import the constants wherever the production URL is needed:

```typescript
import { SITE_URL, SITE_DOMAIN, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site';

// In metadata
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`/og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`/og.png`],
  },
};
```

### Changing the Domain Later

1. Update `NEXT_PUBLIC_SITE_DOMAIN` in the deployment environment (Vercel / Cloudflare / Azure).
2. Or change the fallback value in `lib/site.ts`.
3. Update the custom domain setting in the hosting dashboard.
4. Update DNS records to point to the new deployment.
5. Regenerate `sitemap.xml` and verify canonical URLs.
6. Run a smoke test on `https://{SITE_DOMAIN}`.

### Default Example

The default example domain throughout this project is `aicodecontext.com`. It should be treated as a placeholder until the final domain is confirmed.
