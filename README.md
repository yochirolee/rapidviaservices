# RapidVia Web

Clean copy of the **RapidVia Services** marketing + tracking site: Next.js 14 (App Router), **Tailwind CSS v4**, **shadcn/ui** (`radix-nova` preset), and the same content, APIs, and styling as the source project.

## Prerequisites

- Node.js 20+
- npm or Yarn 4

## Install (clean)

```bash
cd rapidvia-web
npm install
```

The `postinstall` script removes empty nested `@radix-ui/*` folders that can break module resolution.

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build && npm run start
```

## Environment

Copy `.env.example` to `.env.local` and set any API URLs / keys for tracking and historial proxies.

## shadcn / UI

- **Config:** `components.json` — style `radix-nova`, CSS variables, `@/components/ui`.
- **Styles:** `src/app/globals.css` — Tailwind v4, theme tokens (navy + red primary).
- **Add components:** `npx shadcn@latest add <component>`

## Layout

| Path | Purpose |
|------|---------|
| `src/app` | Routes, layout, globals.css |
| `src/components` | Marketing, tracking, `ui/` |
| `src/data` | Site copy and config |
| `src/app/api` | tracking lookup, historial proxy |

## Git

No `.git` was copied. Run `git init` when ready.

Created from `rapidviaservices` with fresh installs (no lockfile in copy).
