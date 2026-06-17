# Image Generation Prompts

---

## Section Images (fal.ai — Flux Pro or Nano Banana Pro)
**Dimensions:** 1920 × 1080

### Hero Fallback Still
```
Epic cinematic wide shot of global energy infrastructure at golden hour, LNG tanker on 
open ocean, offshore platform in distance, dramatic clouds, deep navy and gold tones, 
no text, no people, ultra photorealistic, aerial perspective
```
**Save as:** `hero-fallback.jpg`

---

## Exploded View — Before & After

**Workflow:**
1. Generate **Before** with Flux Pro (text-to-image)
2. Feed **Before** image into an edit model (Flux Fill Pro or Kling image-to-video) with the **After** prompt
3. Animate Before → After in Kling/VEO → extract JPEG frames for scroll scrub

**Edit model on fal.ai:** search "Flux Fill Pro" or "Flux Dev Redux"
**Dimensions:** 1024 × 1024 (square works best for exploded views — centered subject)

---

### Pillar 1 — LNG Arbitrage

**BEFORE** _(text-to-image, Flux Pro)_
```
Single LNG cryogenic storage tank, pristine 3D product render, centered on pure white 
background, soft studio lighting with subtle shadow beneath, all components tightly 
assembled — dome top, cylindrical body, pipe fittings, insulation layers visible, 
photorealistic industrial detail, no text, no people, nothing else in frame
```
**Save as:** `explode-lng-before.png`

**AFTER** _(edit model — supply above image as source)_
```
The same LNG cryogenic storage tank now exploded outward from its center, every component 
floating apart in all directions — dome lifted up, cylindrical panels peeling outward, 
pipe fittings and valves drifting sideways, insulation layers separating, all pieces 
still recognizable and evenly spaced, pure white background, same studio lighting, 
nothing exits the frame, clean technical diagram aesthetic
```
**Save as:** `explode-lng-after.png`


---

### Pillar 2 — Strategic Equity

**BEFORE** _(text-to-image, Flux Pro)_
```
A single glowing 3D sphere made of interconnected gold nodes and fine network lines, 
perfectly assembled, centered on pure white background, soft directional lighting, 
premium investment aesthetic, no text, no people, nothing else in frame, ultra sharp render
```
**Save as:** `explode-equity-before.png`

**AFTER** _(edit model — supply above image as source)_
```
The same gold network sphere now exploded outward, individual nodes and connecting lines 
floating apart in all directions from the center, evenly distributed across the frame, 
each piece still glowing, pure white background, same lighting, nothing exits the frame, 
feels like a constellation of energy
```
**Save as:** `explode-equity-after.png`

---

### Pillar 3 — Charging + Data-Center Power

**BEFORE** _(text-to-image, Flux Pro)_
```
Single EV fast charger unit, pristine 3D product render, centered on pure white 
background, soft studio lighting, all components tightly assembled — screen panel, 
charging cable and connector, power housing unit, status indicator lights, 
photorealistic industrial detail, no text, no people, nothing else in frame
```
**Save as:** `explode-charging-before.png`

**AFTER** _(edit model — supply above image as source)_
```
The same EV charger now exploded outward from its center, every component floating 
apart — screen panel lifted up, cable and connector drifting to the side, power housing 
panels peeling away, status lights floating, all pieces still recognizable and evenly 
spaced, pure white background, same studio lighting, nothing exits the frame, clean 
technical diagram aesthetic
```
**Save as:** `explode-charging-after.png`

---

## Video Animation (Kling / VEO / Google Flow)
**Dimensions:** 1920 × 1080, export MP4

For each pillar: supply the **Before** image and use this prompt — Kling will animate the transition:

```
Animate this object slowly exploding outward from center, component parts separating 
cleanly in all directions including vertically and horizontally, smooth motion, 
nothing exits the frame, hold on the exploded state at the end
```

| Pillar | Source image | Save video as |
|---|---|---|
| LNG | `explode-lng-before.png` | `video/explode-lng.mp4` |
| Strategic Equity | `explode-equity-before.png` | `video/explode-equity.mp4` |
| Charging + Data | `explode-charging-before.png` | `video/explode-charging.mp4` |
