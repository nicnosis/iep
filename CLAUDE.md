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
