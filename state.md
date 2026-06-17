# Context

_Updated: 2026-06-17 (evening)_

Pillar 3 (Charging & Data) has no animation — canvas exists but `base: null`. Pillars 1 and 2 are live with 60-frame JPEG sequences. Pillar 2 uses `cropBottom: 0.09` to hide VEO watermark.

---

# To-Do

## Backend / Forms

- **Contact form + CTAs have no backend** — "Request Information" button and invest form currently open HubSpot link in new tab. Needs a real form handler or confirmed HubSpot embed.
- **Derek's email may have changed** — currently hardcoded as `derek@spectreequity.com` in footer and CLAUDE.md. Confirm with Derek before next deploy.

## Assets

- **Pillar 3 EV charger still** — not generated yet. Show JSON → user approves → fire 2 variations, tag `03 Charging & Data`
- **Pillar 3 exploded view video** — blocked on user. User generates in Kling/Flow → `assets/video/explode/charging-unit.mp4` → extract frames → wire canvas-2
- **Map widget (Pillar 3)** — idea stage. SVG/interactive US map of EV corridor target zones, no company names
- **Hero video** — placeholder. Replace with cinematic LNG footage via Flow/VEO
