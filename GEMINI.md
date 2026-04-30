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

## Rebrand
- New brand name: **Spectre Equity**
- Domain: `spectreequity.com`
- Derek's email: `derek@spectreequity.com`

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
