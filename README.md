# saimohan.dev — personal site

Minimalist single-page landing built with **Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui**.

## Develop

```bash
bun install   # first time only
bun dev       # http://localhost:3000
```

Other scripts:

```bash
bun run build   # production build
bun run start   # serve the build
bun run lint    # eslint
```

## Edit content

All editable content lives in **`lib/data.ts`**. Update your profile, experience, projects, skills, and socials there — the page rerenders automatically.

```
lib/
├── data.ts       # ← edit this: profile, experience, projects, skills, socials
├── types.ts      # type definitions
└── utils.ts      # cn() helper
```

## Project structure

```
app/
├── layout.tsx              # root layout, fonts, SEO metadata, JSON-LD
├── page.tsx                # composes the six sections
└── globals.css             # Tailwind v4 + design tokens

components/
├── nav.tsx                 # sticky top nav
├── footer.tsx
├── animated-section.tsx    # IntersectionObserver fade-in wrapper
├── social-icon.tsx         # social brand icons (inline SVG)
├── sections/               # one file per page section
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── contact.tsx
└── ui/                     # shadcn primitives (button, card, badge, tooltip, separator)
```

## Theme

Monochrome palette with a single blue accent (`#2563EB`). Defined as CSS variables in `app/globals.css` — change `--accent-blue` (and the matching `oklch` value) to retune the accent.

Typography:
- Headings: **Space Grotesk**
- Body: **Archivo**

Both loaded via `next/font` (no external requests).

## Deploy

### Vercel (recommended)

```bash
bunx vercel
```

Push to a GitHub repo and import it at [vercel.com/new](https://vercel.com/new). Zero config needed.

### Anywhere else

```bash
bun run build
bun run start
```
