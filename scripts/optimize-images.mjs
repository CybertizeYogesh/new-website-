import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Dynamically import sharp
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (err) {
  console.error('\n❌ ERROR: "sharp" module is missing. Please run:\n   npm install sharp\n');
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const MAX_FILE_SIZE_BYTES = 120 * 1024; // 120 KB limit

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  'out',
  '.vscode',
  '.gemini',
  'brain'
]);

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const CODE_EXTENSIONS = new Set(['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md']);

/**
 * Optimizes an image to WebP format strictly under 120 KB
 */
async function compressImageToWebp(inputPath, outputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  let quality = 85;
  let targetWidth = metadata.width;
  let buffer;

  // Step 1: Adjust Quality Dynamically
  while (quality >= 40) {
    buffer = await sharp(inputPath)
      .resize({ width: targetWidth, fit: 'inside', withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();

    if (buffer.length <= MAX_FILE_SIZE_BYTES) {
      await fs.promises.writeFile(outputPath, buffer);
      return { success: true, finalSize: buffer.length, quality, width: targetWidth };
    }
    quality -= 10;
  }

  // Step 2: Scale down dimensions if quality adjustments alone didn't reach target size
  while (targetWidth > 400) {
    targetWidth = Math.floor(targetWidth * 0.85);
    buffer = await sharp(inputPath)
      .resize({ width: targetWidth, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 65 })
      .toBuffer();

    if (buffer.length <= MAX_FILE_SIZE_BYTES) {
      await fs.promises.writeFile(outputPath, buffer);
      return { success: true, finalSize: buffer.length, quality: 65, width: targetWidth };
    }
  }

  // If extremely small size requested, save best attempt
  await fs.promises.writeFile(outputPath, buffer);
  return { success: buffer.length <= MAX_FILE_SIZE_BYTES, finalSize: buffer.length, quality: 65, width: targetWidth };
}

/**
 * Scan directory recursively
 */
async function scanDirectory(dir, imageFiles = [], codeFiles = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        await scanDirectory(fullPath, imageFiles, codeFiles);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTENSIONS.has(ext)) {
        imageFiles.push(fullPath);
      } else if (CODE_EXTENSIONS.has(ext)) {
        codeFiles.push(fullPath);
      }
    }
  }
  return { imageFiles, codeFiles };
}

/**
 * Main execution script
 */
async function run() {
  console.log('🔍 Scanning project directory for images and code references...\n');

  const { imageFiles, codeFiles } = await scanDirectory(ROOT_DIR);

  if (imageFiles.length === 0) {
    console.log('✨ No .jpg, .jpeg, or .png images found.');
    return;
  }

  console.log(`🖼️  Found ${imageFiles.length} images to convert.`);
  console.log(`📝 Found ${codeFiles.length} code files to check for references.\n`);

  const conversionMap = new Map(); // Old relative path -> New relative path or filename mapping

  // Phase 1: Convert & Compress Images
  for (const oldPath of imageFiles) {
    const parsed = path.parse(oldPath);
    const newPath = path.join(parsed.dir, `${parsed.name}.webp`);

    console.log(`Processing: ${path.relative(ROOT_DIR, oldPath)}...`);

    try {
      const result = await compressImageToWebp(oldPath, newPath);
      const sizeKB = (result.finalSize / 1024).toFixed(2);

      if (result.finalSize <= MAX_FILE_SIZE_BYTES) {
        console.log(`  └─ ✅ Converted to WebP (${sizeKB} KB, Quality: ${result.quality}%)`);
      } else {
        console.log(`  └─ ⚠️ Converted to WebP (${sizeKB} KB - closest fit under constraints)`);
      }

      // Record filename mapping for code replacement
      const oldFilename = parsed.base;
      const newFilename = `${parsed.name}.webp`;
      conversionMap.set(oldFilename, newFilename);

    } catch (err) {
      console.error(`  └─ ❌ Failed to convert ${oldPath}:`, err.message);
    }
  }

  // Phase 2: Update Code References
  console.log('\n🔄 Updating image extensions in source code files...');
  let updatedCodeFilesCount = 0;

  for (const codePath of codeFiles) {
    try {
      let content = await fs.promises.readFile(codePath, 'utf8');
      let modified = false;

      for (const [oldName, newName] of conversionMap.entries()) {
        if (content.includes(oldName)) {
          // Replace exact image occurrences
          const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          content = content.replace(regex, newName);
          modified = true;
        }
      }

      if (modified) {
        await fs.promises.writeFile(codePath, content, 'utf8');
        updatedCodeFilesCount++;
        console.log(`  └─ Updated: ${path.relative(ROOT_DIR, codePath)}`);
      }
    } catch (err) {
      console.error(`  └─ ❌ Could not update ${codePath}:`, err.message);
    }
  }

  console.log(`\n✅ Updated ${updatedCodeFilesCount} source code files.`);

  // Phase 3: Cleanup Originals
  console.log('\n🧹 Cleaning up original image files...');
  let deletedCount = 0;

  for (const oldPath of imageFiles) {
    const parsed = path.parse(oldPath);
    const newPath = path.join(parsed.dir, `${parsed.name}.webp`);

    if (fs.existsSync(newPath) && fs.statSync(newPath).size > 0) {
      try {
        await fs.promises.unlink(oldPath);
        deletedCount++;
      } catch (err) {
        console.error(`  └─ Could not delete ${oldPath}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Process Complete! Deleted ${deletedCount} original image files.`);
}

run().catch((err) => console.error('Fatal error:', err));
