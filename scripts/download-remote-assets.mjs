import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const IMAGES_TO_DOWNLOAD = [
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    localPath: 'public/assets/images/avatar-1.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    localPath: 'public/assets/images/avatar-2.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    localPath: 'public/assets/images/avatar-3.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    localPath: 'public/assets/images/about-hero.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop',
    localPath: 'public/assets/images/about-showcase.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop',
    localPath: 'public/assets/images/contact-hero.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop',
    localPath: 'public/assets/images/packing-wood-crating.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop',
    localPath: 'public/assets/images/legal-hero.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    localPath: 'public/assets/images/footer-bg.webp'
  }
];

async function downloadFile(url, destPath) {
  const absoluteDest = path.resolve(ROOT_DIR, destPath);
  await fs.promises.mkdir(path.dirname(absoluteDest), { recursive: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText} for ${url}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(absoluteDest, buffer);
  console.log(`  └─ ✅ Downloaded: ${destPath} (${(buffer.length / 1024).toFixed(2)} KB)`);
}

async function run() {
  console.log('📥 Downloading all remote external assets locally...\n');

  // Step 1: Download Unsplash Images
  console.log('🖼️ Downloading remote images...');
  for (const item of IMAGES_TO_DOWNLOAD) {
    try {
      await downloadFile(item.url, item.localPath);
    } catch (err) {
      console.error(`  └─ ❌ Failed to download ${item.url}:`, err.message);
    }
  }

  // Step 2: Download FontAwesome CSS & Webfonts
  console.log('\n🔤 Downloading FontAwesome 6.5.1 CSS & Webfonts...');
  const faCssUrl = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  const faCssDest = 'public/assets/fontawesome/css/all.min.css';

  try {
    const res = await fetch(faCssUrl);
    let cssText = await res.text();

    // Find all webfont URLs in FontAwesome CSS
    const fontMatches = cssText.match(/url\(([^)]+)\)/g) || [];
    const fontUrls = new Set();

    for (const match of fontMatches) {
      let cleanUrl = match.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
      if (cleanUrl.startsWith('../webfonts/')) {
        const fontFileName = cleanUrl.split('/').pop().split('?')[0].split('#')[0];
        fontUrls.add(fontFileName);
      }
    }

    // Download FontAwesome webfonts
    for (const fontFileName of fontUrls) {
      const fontUrl = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/${fontFileName}`;
      const fontDest = `public/assets/fontawesome/webfonts/${fontFileName}`;
      try {
        await downloadFile(fontUrl, fontDest);
      } catch (e) {
        console.error(`  └─ ⚠️ Could not download font ${fontFileName}:`, e.message);
      }
    }

    // Save FontAwesome CSS locally
    const absoluteFaCss = path.resolve(ROOT_DIR, faCssDest);
    await fs.promises.mkdir(path.dirname(absoluteFaCss), { recursive: true });
    await fs.promises.writeFile(absoluteFaCss, cssText, 'utf8');
    console.log(`  └─ ✅ Downloaded: ${faCssDest}`);

  } catch (err) {
    console.error('  └─ ❌ Failed to download FontAwesome CSS:', err.message);
  }

  console.log('\n✅ All remote external assets downloaded successfully.');
}

run().catch(err => console.error('Fatal error:', err));
