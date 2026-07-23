import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const PAGE_FILES = [
  'src/app/about-us/page.tsx',
  'src/app/bike-transportation/page.tsx',
  'src/app/car-transportation/page.tsx',
  'src/app/contact-us/page.tsx',
  'src/app/domestic-moving/page.tsx',
  'src/app/house-relocation/page.tsx',
  'src/app/international-moving/page.tsx',
  'src/app/office-relocation/page.tsx',
  'src/app/packers-and-movers-in-begur/page.tsx',
  'src/app/packers-and-movers-in-bellandur/page.tsx',
  'src/app/packers-and-movers-in-bommasandra/page.tsx',
  'src/app/packers-and-movers-in-electronic-city/page.tsx',
  'src/app/packers-and-movers-in-hulimangala/page.tsx',
  'src/app/packers-and-movers-in-marathahalli/page.tsx',
  'src/app/packing-unpacking/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-and-conditions/page.tsx',
  'src/app/warehouse-service/page.tsx'
];

async function run() {
  for (const relPath of PAGE_FILES) {
    const fullPath = path.resolve(ROOT_DIR, relPath);
    if (!fs.existsSync(fullPath)) continue;

    let content = await fs.promises.readFile(fullPath, 'utf8');
    if (content.includes("',,")) {
      content = content.replaceAll("',,", "',");
      await fs.promises.writeFile(fullPath, content, 'utf8');
      console.log(`Fixed double comma in: ${relPath}`);
    }
  }
}

run().catch(err => console.error(err));
