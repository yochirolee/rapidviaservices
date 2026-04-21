# shadcn preset & full-site migration

## Preset applied: `b4gMYn4Ai`

This project uses the **shadcn/ui** preset from [ui.shadcn.com/create](https://ui.shadcn.com/create). The preset encodes theme tokens (colors, radius, fonts, **radix-nova** style, etc.).

### Re-apply or update the preset

```bash
npx shadcn@latest init --preset b4gMYn4Ai -y --force --reinstall
```

- **`--reinstall`** — overwrites `src/components/ui/*` with registry versions (review diffs in git).
- **`--force`** — updates `components.json` even if already initialized.

### What changed in this repo

| Area | Change |
|------|--------|
| `components.json` | `style`: **radix-nova**, fonts / menu options from preset |
| `src/app/globals.css` | `@import "tw-animate-css"`, `@import "shadcn/tailwind.css"`, preset `:root` / `.dark` in `@layer base` |
| `src/app/layout.tsx` | `Inter` + `className` on `<html>`, **`TooltipProvider`** wrapping app |
| `tailwind.config.ts` | Semantic colors use **`var(--token)`** where tokens are **oklch** (not `hsl(var())`) |
| `package.json` | `shadcn`, `tw-animate-css`, `radix-ui`, updated `recharts`, `lucide-react`, etc. |
| `src/hooks/use-mobile.ts` | Added for **Sidebar**; duplicate `use-mobile.tsx` removed |

### Site-wide shadcn usage (marketing + tracking)

Refactored to use `@/components/ui/*` where practical:

- **Header** — `Sheet`, `Button`, `Separator`
- **Footer** — `Separator`, `Button` (link variant), outline icon buttons for socials
- **Hero** — `Button`, `Badge`
- **Section / SectionTitle** — `cn`, semantic typography
- **OurServices** — `Card`, `Badge`
- **About1** — `Badge`, theme tokens
- **FAQ** — `Accordion`, `Button` (links), `Separator`
- **Testimonials** — `Card`, `Avatar`
- **Stats** — `Card`
- **Pricing** — `Card`, `Badge`, `Separator`, `Check` (lucide)
- **CTA** — `Card`
- **Tracking search** — `Card`, `Button`, `Input`, `Label`, `Alert`
- **BenefitBullet** — bordered icon container (`muted` / `border`)

Optional next steps: adopt **Sidebar** for a dashboard-style area, or add **ThemeProvider** + dark mode toggle.

### Mixed Content / HM API

HM history still uses `/api/historial/[hbl]` in production (see `useFetchHMHistory`). Do not point the client at `http://` HM URLs from an HTTPS site.

### Troubleshooting

- **“Looks like no CSS”** — ensure `tailwind` colors use `var(--…)` for **oklch** variables (see `tailwind.config.ts`).
- **Tooltips** — app must stay inside **`TooltipProvider`** (already in `layout.tsx`).
