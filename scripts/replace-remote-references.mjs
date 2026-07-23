import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const REPLACEMENTS = [
  {
    old: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    new: '/assets/images/avatar-1.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    new: '/assets/images/avatar-2.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    new: '/assets/images/avatar-3.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    new: '/assets/images/about-hero.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop',
    new: '/assets/images/about-showcase.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop',
    new: '/assets/images/contact-hero.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop',
    new: '/assets/images/packing-wood-crating.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop',
    new: '/assets/images/legal-hero.webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    new: '/assets/images/footer-bg.webp'
  },
  {
    old: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    new: '/assets/fontawesome/css/all.min.css'
  }
];

const CODE_EXTENSIONS = new Set(['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md']);
const IGNORE_DIRS = new Set(['node_modules', '.git', '.next', 'dist', 'build', 'out', '.vscode', '.gemini', 'brain']);

async function scanDirectory(dir, codeFiles = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        await scanDirectory(fullPath, codeFiles);
      }
    } else if (entry.isFile()) {
      if (CODE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        codeFiles.push(fullPath);
      }
    }
  }
  return codeFiles;
}

async function run() {
  console.log('🔄 Replacing remote URL references with local assets...\n');
  const codeFiles = await scanDirectory(ROOT_DIR);
  let updatedCount = 0;

  for (const codePath of codeFiles) {
    let content = await fs.promises.readFile(codePath, 'utf8');
    let modified = false;

    for (const rule of REPLACEMENTS) {
      if (content.includes(rule.old)) {
        content = content.replaceAll(rule.old, rule.new);
        modified = true;
      }
    }

    if (modified) {
      await fs.promises.writeFile(codePath, content, 'utf8');
      updatedCount++;
      console.log(`  └─ ✅ Updated: ${path.relative(ROOT_DIR, codePath)}`);
    }
  }

  console.log(`\n🎉 Updated ${updatedCount} code files to use local assets.`);
}

run().catch(err => console.error('Fatal error:', err));
