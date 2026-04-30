---
last_updated: 2026-04-30T00:00:00Z
---

# IEP — International Energy Partners

## Project Overview
Static marketing website for International Energy Partners (IEP), an energy sector advisory firm. Deployed via GitHub Pages at the domain configured in `CNAME`.

## Stack
- Plain HTML/CSS (Tailwind via CDN)
- SCSS compiled with `sass` (`assets/css/custom.scss` → `custom.css`)
- Browser-sync for local dev
- `npm run dev` starts SCSS watcher + browser-sync together

## Structure
```
assets/        Web assets (CSS, JS, SVG logo)
images/        Photography and company logos
illustrator/   Source design files (.ai only)
video/         Hero video
index.html     Main landing page
memorandum.html  Secondary page
CNAME          GitHub Pages custom domain
```

## Dev Commands
```bash
npm run dev     # SCSS watch + browser-sync
npm run scss    # SCSS watch only
npm run serve   # browser-sync only
```

## Notes
- `config.js` is gitignored (local config, not committed)
- `*.css.map` files are gitignored
- `assets/spiral.svg` is the IEP logo used in the nav

## Brand Structure
- **Company:** International Energy Partners (IEP) — this is the primary brand
- **Fund I:** Spectre Equity — first fund within IEP, not the company name
- **Domain:** `spectreequity.com` (best available .com; `iep.energy` also owned)
- **Derek's email:** `derek@spectreequity.com`
- The website represents IEP as a company; Spectre Equity is introduced as the featured fund offering
- Do not use "Spectre Equity" as the top-level brand — it's Fund I within IEP

## Investment Thesis (from pitch deck)
Three pillars under the Spectre Fund:
1. **LNG arbitrage** — US Henry Hub → EU TTF/JKM price spread (~3–5×); paper ownership, pre-matched sell-side contracts
2. **Strategic equity** — sub-5% stealth positions in undervalued public clean-energy operators; target is CLNE (Clean Energy Fuels Corp, #1 CNG/LNG refueler for long-haul trucking)
3. **Charging + data-center power** — on-site gas-to-power for EV fast-charging corridors and municipal data centers

Key terms: $100K minimum, accredited investors only (SEC Reg D 506(c))

## Site Structure (one-pager)
Sections in working order — Featured Investment position relative to Three Pillars is still flexible:

| # | Section | Notes |
|---|---|---|
| 1 | **Nav** | IEP logo, anchor links, Invest CTA |
| 2 | **Hero** | Full-screen video, headline ("The Future, Financed" or iteration), CTA |
| 3 | **Mission / Thesis** | What IEP believes, why now, why them — 2–3 sentences |
| 4 | **Three Pillars** | LNG · Strategic Equity · Charging & Data |
| 5 | **Featured Investment** | CLNE acquisition thesis — do NOT name the ticker publicly; frame as "target acquisition" |
| 6 | **Market Stats + Insights** | Combined section: market opportunity stats (US #1 gas reserves, ~3–5× spread, etc.) + curated public data with IEP commentary |
| 7 | **About / Credibility** | IEP firm story + Derek's background (prior firms, years in energy) |
| 8 | **Invest / Contact** | Spectre Fund CTA, $100K minimum, accredited investors only |

## Research
- `research/moodboard.html` — 9 comparable energy fund brands with synthesis/takeaways for Spectre Equity
- `research/deck/` — pitch deck bundle from Claude Design (use for content/copy only, not visual direction)

## Design Skills (invoke when needed)
Installed via `npx skills add https://github.com/Leonxlnx/taste-skill`

| Skill | Invoke | Use for |
|---|---|---|
| design-taste-frontend | `/design-taste-frontend` | Premium frontend build (default for new UI work) |
| brandkit | `/brandkit` | Brand identity image generation |
| redesign-existing-projects | `/redesign-existing-projects` | Audit + upgrade existing pages |
| high-end-visual-design | `/high-end-visual-design` | Polished, expensive-feeling UI |

## ClickUp
- Workspace: `90141094754`
- IEP Folder: https://app.clickup.com/90141094754/v/f/90148497781/90144905010
- Main List: https://app.clickup.com/90141094754/v/li/901415339918
- Infra Setup List: https://app.clickup.com/90141094754/v/li/901415617794
