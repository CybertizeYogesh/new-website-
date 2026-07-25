import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const webpPath = path.join(ROOT_DIR, 'public', 'assets', 'images', 'favicon.webp');
const icoPath = path.join(ROOT_DIR, 'public', 'favicon.ico');

const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b2b3c" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff4d26" />
      <stop offset="100%" stop-color="#ff6b3d" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Outer Rounded Square Container -->
  <rect x="24" y="24" width="464" height="464" rx="115" fill="url(#bgGrad)" filter="url(#glow)"/>
  <rect x="32" y="32" width="448" height="448" rx="107" fill="none" stroke="#ff4d26" stroke-width="12" stroke-opacity="0.85"/>

  <!-- Top Accent Ribbon -->
  <path d="M 145 95 L 367 95 C 385 95 392 110 380 125 L 355 160 C 348 168 338 168 328 168 L 184 168 C 174 168 164 168 157 160 L 132 125 C 120 110 127 95 145 95 Z" fill="url(#accentGrad)" />

  <!-- Bold Crisp 'Gati' Brand Typography -->
  <text x="256" y="325" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="144" fill="#ffffff" text-anchor="middle" letter-spacing="-3">Gati</text>

  <!-- Underline Accent Pill -->
  <rect x="145" y="362" width="222" height="22" rx="11" fill="url(#accentGrad)"/>
</svg>`;

async function generateFavicon() {
  const svgBuffer = Buffer.from(svgContent);

  // Generate WebP favicon (512x512)
  await sharp(svgBuffer)
    .resize(512, 512)
    .webp({ quality: 95 })
    .toFile(webpPath);
  console.log('✅ Favicon WebP generated with Gati branding:', webpPath);

  // Generate ICO/PNG favicon (64x64)
  await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toFile(icoPath);
  console.log('✅ Favicon ICO generated:', icoPath);
}

generateFavicon().catch(err => console.error('Favicon generation error:', err));
