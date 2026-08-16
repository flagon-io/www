# www

The public marketing site for **Flagon**, the unified developer platform,
currently a coming-soon page. The product itself is developed separately.
Built with [Next.js 16](https://nextjs.org) (App Router), React 19, Tailwind CSS v4,
and the Geist typeface. Deployed on [Vercel](https://vercel.com).

> Stop building your platform. Start shipping on it.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint with ESLint                 |

## Brand

| Token      | Value                        |
| ---------- | ---------------------------- |
| Accent     | `#14b8a6` (bright `#2dd4bf`) |
| Background | `#09090b`                    |
| Typeface   | Geist / Geist Mono           |
| Mark       | Tankard: body, lid, handle   |

The look leans on crisp hairline rules, corner crosshair marks, and a fine
technical grid, in the spirit of Vercel and Cloudflare.

Icons come from [lucide-react](https://lucide.dev) (UI) and
[simple-icons](https://simpleicons.org) via
[`@icons-pack/react-simple-icons`](https://github.com/icons-pack/react-simple-icons)
(brands). Logo assets live in [`public/`](public):

- `public/logo.svg`, the tankard mark (color-locked, transparent)
- `public/logo-wordmark.svg`, horizontal mark plus wordmark lockup
- `src/app/icon.svg`, favicon (Next.js convention)

Share images are generated dynamically at
[`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).

## Structure

```text
src/
  app/
    layout.tsx            # fonts + metadata
    page.tsx              # the coming-soon page
    terms/ privacy/       # draft legal pages
    globals.css           # theme tokens, hex lattice, animations
    icon.svg              # favicon
    opengraph-image.tsx   # dynamic share card
    robots.ts / sitemap.ts
  components/
    frame.tsx             # shared shell: backdrop + railed column
    hex-field.tsx         # hexagonal lattice backdrop
    site-header.tsx       # logo + social nav
    site-footer.tsx       # legal / incorporation / social
    legal-layout.tsx      # prose wrapper for legal pages
    logo.tsx              # the tankard mark component
    plus.tsx              # crosshair divider mark
  lib/
    site.ts               # site config: copy + links
```

## Deploy

Push to a Git repo and import it into Vercel, or:

```bash
npx vercel        # preview
npx vercel --prod # production
```

No environment variables are required.
