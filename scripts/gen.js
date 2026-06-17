#!/usr/bin/env node
// Usage: node scripts/gen.js --prompt "..." [--model nano-banana-2|nano-banana-pro] [--name output-name] [--ratio 16:9] [--res 1K] [--tag "02 Strategic Equity"]

import { fal } from '@fal-ai/client';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load .env manually (avoid dependency on dotenv if not installed)
const envPath = path.join(ROOT, '.env');
if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
        const [k, ...v] = line.split('=');
        if (k && v.length) process.env[k.trim()] = v.join('=').trim();
    }
}

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) { console.error('FAL_KEY not set in .env'); process.exit(1); }

fal.config({ credentials: FAL_KEY });

// Parse args
const args = process.argv.slice(2);
const get = (flag) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : null; };

const prompt  = get('--prompt');
const model   = get('--model') || 'nano-banana-2';
const ratio   = get('--ratio') || '16:9';
const res     = get('--res')   || '1K';
const fmt     = 'jpeg';
const tag     = get('--tag')   || 'Untagged';
let   name    = get('--name');

if (!prompt) { console.error('--prompt required'); process.exit(1); }

const ENDPOINT = `fal-ai/${model}`;
const STILLS_DIR  = path.join(ROOT, 'assets/gen/stills');
const MANIFEST_JS = path.join(ROOT, 'assets/gen/manifest.js');

fs.mkdirSync(STILLS_DIR, { recursive: true });

// Generate
console.log(`Generating with ${ENDPOINT}…`);
const result = await fal.subscribe(ENDPOINT, {
    input: { prompt, aspect_ratio: ratio, resolution: res, output_format: fmt, num_images: 1 },
    logs: true,
});

const imageUrl = result.data.images[0].url;

// Download image
if (!name) name = `${Date.now()}`;
const filename = `${name}.jpg`;
const outPath  = path.join(STILLS_DIR, filename);

await new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outPath);
    https.get(imageUrl, (res) => res.pipe(file).on('finish', resolve).on('error', reject));
});
console.log(`Saved → ${outPath}`);

// Update manifest.js (global var so viewer works as file://)
const existing = fs.existsSync(MANIFEST_JS)
    ? JSON.parse(fs.readFileSync(MANIFEST_JS, 'utf8').replace(/^const MANIFEST = /, '').replace(/;$/, ''))
    : [];
existing.unshift({ file: filename, prompt, model, ratio, res, tag, ts: new Date().toISOString() });
fs.writeFileSync(MANIFEST_JS, `const MANIFEST = ${JSON.stringify(existing, null, 2)};`);
console.log(`Manifest updated (${existing.length} images)`);
