import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const PAGE_CANONICAL_MAP = [
  { file: 'src/app/about-us/page.tsx', slug: '/about-us' },
  { file: 'src/app/bike-transportation/page.tsx', slug: '/bike-transportation' },
  { file: 'src/app/car-transportation/page.tsx', slug: '/car-transportation' },
  { file: 'src/app/contact-us/page.tsx', slug: '/contact-us' },
  { file: 'src/app/domestic-moving/page.tsx', slug: '/domestic-moving' },
  { file: 'src/app/house-relocation/page.tsx', slug: '/house-relocation' },
  { file: 'src/app/international-moving/page.tsx', slug: '/international-moving' },
  { file: 'src/app/office-relocation/page.tsx', slug: '/office-relocation' },
  { file: 'src/app/packers-and-movers-in-begur/page.tsx', slug: '/packers-and-movers-in-begur' },
  { file: 'src/app/packers-and-movers-in-bellandur/page.tsx', slug: '/packers-and-movers-in-bellandur' },
  { file: 'src/app/packers-and-movers-in-bommasandra/page.tsx', slug: '/packers-and-movers-in-bommasandra' },
  { file: 'src/app/packers-and-movers-in-electronic-city/page.tsx', slug: '/packers-and-movers-in-electronic-city' },
  { file: 'src/app/packers-and-movers-in-hulimangala/page.tsx', slug: '/packers-and-movers-in-hulimangala' },
  { file: 'src/app/packers-and-movers-in-marathahalli/page.tsx', slug: '/packers-and-movers-in-marathahalli' },
  { file: 'src/app/packing-unpacking/page.tsx', slug: '/packing-unpacking' },
  { file: 'src/app/privacy-policy/page.tsx', slug: '/privacy-policy' },
  { file: 'src/app/terms-and-conditions/page.tsx', slug: '/terms-and-conditions' },
  { file: 'src/app/warehouse-service/page.tsx', slug: '/warehouse-service' },
];

async function run() {
  console.log('🏷️ Adding canonical tags to all page metadata...\n');
  let count = 0;

  for (const item of PAGE_CANONICAL_MAP) {
    const filePath = path.resolve(ROOT_DIR, item.file);
    if (!fs.existsSync(filePath)) continue;

    let content = await fs.promises.readFile(filePath, 'utf8');

    if (!content.includes('alternates:')) {
      // Inject alternates canonical before ending brace of metadata object
      const canonicalSnippet = `  alternates: {\n    canonical: 'https://speedexrelocation.com${item.slug}',\n  },\n};`;
      content = content.replace(/keywords:[^;]+?\n\};/, (match) => {
        return match.replace(/\n\};$/, `,\n${canonicalSnippet}`);
      });

      await fs.promises.writeFile(filePath, content, 'utf8');
      count++;
      console.log(`  └─ ✅ Added canonical to: ${item.file}`);
    }
  }

  console.log(`\n🎉 Process Complete! Updated canonical tags in ${count} page components.`);
}

run().catch(err => console.error('Fatal error:', err));
