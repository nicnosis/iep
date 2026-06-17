# Image & Video Generation Prompts

_All assets save into `assets/images/` or `assets/video/` as noted._

---

## Hero Video (Kling / VEO / Google Flow)
**Dimensions:** 1920 × 1080, export MP4  
**Duration target:** 20–30 seconds, seamless loop  
**Save as:** `assets/video/hero.mp4`

### Option A — LNG Tanker / Open Ocean
```
Cinematic aerial drone shot slowly pulling back from a massive LNG tanker on open ocean 
at golden hour, dramatic clouds, deep navy water, orange-gold light catching the ship's 
hull and vapor plumes, no text, no people visible, ultra photorealistic, smooth slow 
camera motion, feels premium and industrial
```

### Option B — Offshore Platform at Dusk
```
Low aerial orbit around an offshore energy platform at dusk, platform lights flickering 
on as sky fades to deep navy, reflections in dark water below, dramatic atmospheric haze, 
no text, no people, cinematic color grade — navy and amber, slow smooth motion, loops 
cleanly
```

### Option C — Gas-to-Power Infrastructure
```
Slow cinematic push through a large industrial power plant corridor at night, pipes and 
machinery lit by warm sodium vapor lights against dark sky, steam rising, sense of massive 
scale and engineered precision, no text, no people, ultra photorealistic, premium 
documentary aesthetic
```

**Current hero:** `assets/video/hero.mp4` (existing clip — replace when better version ready)

---

## Section Stills (fal.ai — Flux Pro or Nano Banana Pro)
**Dimensions:** 1920 × 1080

### Hero Fallback Still
```
Epic cinematic wide shot of global energy infrastructure at golden hour, LNG tanker on 
open ocean, offshore platform in distance, dramatic clouds, deep navy and gold tones, 
no text, no people, ultra photorealistic, aerial perspective
```
**Save as:** `assets/images/hero-fallback.jpg`

---

## Exploded View — Before & After Stills

**Workflow:**
1. Generate **Before** with Flux Pro (text-to-image)
2. Feed **Before** into an edit model (Flux Fill Pro or Flux Dev Redux) with the **After** prompt
3. Animate Before → After in Kling/VEO → extract JPEG frames for scroll scrub

**Edit model on fal.ai:** search "Flux Fill Pro" or "Flux Dev Redux"  
**Dimensions:** 1024 × 1024 (square — centered subject)  
**Background:** Pure white on all three (blends into cream section bg)

---

### Pillar 1 — LNG Arbitrage

**BEFORE** _(text-to-image, Flux Pro)_
```
Single LNG cryogenic storage tank, pristine 3D product render, centered on pure white 
background, soft studio lighting with subtle shadow beneath, all components tightly 
assembled — dome top, cylindrical body, pipe fittings, insulation layers visible, 
photorealistic industrial detail, no text, no people, nothing else in frame
```
**Save as:** `assets/images/explode-lng-before.png`

**AFTER** _(edit model — supply above image as source)_
```
The same LNG cryogenic storage tank now exploded outward from its center, every component 
floating apart in all directions — dome lifted up, cylindrical panels peeling outward, 
pipe fittings and valves drifting sideways, insulation layers separating, all pieces 
still recognizable and evenly spaced, pure white background, same studio lighting, 
nothing exits the frame, clean technical diagram aesthetic
```
**Save as:** `assets/images/explode-lng-after.png`

---

### Pillar 2 — Strategic Equity

**BEFORE** _(text-to-image, Flux Pro)_
```
A single glowing 3D sphere made of interconnected gold nodes and fine network lines, 
perfectly assembled, centered on pure white background, soft directional lighting, 
premium investment aesthetic, no text, no people, nothing else in frame, ultra sharp render
```
**Save as:** `assets/images/explode-equity-before.png`

**AFTER** _(edit model — supply above image as source)_
```
The same gold network sphere now exploded outward, individual nodes and connecting lines 
floating apart in all directions from the center, evenly distributed across the frame, 
each piece still glowing, pure white background, same lighting, nothing exits the frame, 
feels like a constellation of energy
```
**Save as:** `assets/images/explode-equity-after.png`

---

### Pillar 3 — Charging + Data-Center Power

**BEFORE** _(text-to-image, Flux Pro)_
```
Single EV fast charger unit, pristine 3D product render, centered on pure white 
background, soft studio lighting, all components tightly assembled — screen panel, 
charging cable and connector, power housing unit, status indicator lights, 
photorealistic industrial detail, no text, no people, nothing else in frame
```
**Save as:** `assets/images/explode-charging-before.png`

**AFTER** _(edit model — supply above image as source)_
```
The same EV charger now exploded outward from its center, every component floating 
apart — screen panel lifted up, cable and connector drifting to the side, power housing 
panels peeling away, status lights floating, all pieces still recognizable and evenly 
spaced, pure white background, same studio lighting, nothing exits the frame, clean 
technical diagram aesthetic
```
**Save as:** `assets/images/explode-charging-after.png`

---

## Exploded View Videos (Kling / VEO)
**Dimensions:** 1920 × 1080, export MP4

Supply the **Before** image and use this prompt:

```
Animate this object slowly exploding outward from center, component parts separating 
cleanly in all directions including vertically and horizontally, smooth motion, 
nothing exits the frame, hold on the exploded state at the end
```

| Pillar | Source image | Save video as |
|---|---|---|
| LNG | `assets/images/explode-lng-before.png` | `assets/video/explode-lng.mp4` |
| Strategic Equity | `assets/images/explode-equity-before.png` | `assets/video/explode-equity.mp4` |
| Charging + Data | `assets/images/explode-charging-before.png` | `assets/video/explode-charging.mp4` |

---

## Existing Assets
| File | Status |
|---|---|
| `assets/images/exploded/lng-before.png` | Ready — use for Pillar 1 Kling animation |
| `assets/images/exploded/lng-after1.png` | Ready — use as After frame reference |
| `assets/video/hero.mp4` | Live on site now |
| `assets/video/hero-windmills.mp4` | Alternate — not in use |
