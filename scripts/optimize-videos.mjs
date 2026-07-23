import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

// Dynamically import ffmpeg-static path
let ffmpegPath;
try {
  const ffmpegStatic = await import('ffmpeg-static');
  ffmpegPath = ffmpegStatic.default || ffmpegStatic;
} catch (err) {
  console.error('\n❌ ERROR: "ffmpeg-static" module is missing. Please run:\n   npm install ffmpeg-static\n');
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

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

const VIDEO_GIF_EXTENSIONS = new Set(['.mp4', '.mov', '.avi', '.mkv', '.webm', '.m4v', '.gif']);
const CODE_EXTENSIONS = new Set(['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md']);

/**
 * Format bytes into human-readable string (KB/MB)
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Compress and convert video/GIF to WebM (VP9) or MP4 (H.264)
 */
async function compressMedia(inputPath, outputPath, isGif = false, format = 'mp4') {
  let args = [];

  if (isGif) {
    // Convert GIF to MP4 / WebM with silent audio & yuv420p color space
    if (format === 'webm') {
      args = [
        '-y',
        '-i', inputPath,
        '-c:v', 'libvpx-vp9',
        '-b:v', '0',
        '-crf', '32',
        '-pix_fmt', 'yuva420p',
        '-an',
        outputPath
      ];
    } else {
      args = [
        '-y',
        '-i', inputPath,
        '-movflags', 'faststart',
        '-pix_fmt', 'yuv420p',
        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
        '-c:v', 'libx264',
        '-crf', '24',
        '-preset', 'medium',
        '-an',
        outputPath
      ];
    }
  } else {
    // Video Optimization (Preserves audio track, H.264 faststart or WebM VP9)
    if (format === 'webm') {
      args = [
        '-y',
        '-i', inputPath,
        '-c:v', 'libvpx-vp9',
        '-crf', '30',
        '-b:v', '0',
        '-c:a', 'libopus',
        '-b:a', '128k',
        outputPath
      ];
    } else {
      args = [
        '-y',
        '-i', inputPath,
        '-c:v', 'libx264',
        '-crf', '23',
        '-preset', 'medium',
        '-movflags', '+faststart',
        '-c:a', 'aac',
        '-b:a', '128k',
        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
        outputPath
      ];
    }
  }

  await execFileAsync(ffmpegPath, args);
}

/**
 * Scan directory recursively
 */
async function scanDirectory(dir, mediaFiles = [], codeFiles = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        await scanDirectory(fullPath, mediaFiles, codeFiles);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (VIDEO_GIF_EXTENSIONS.has(ext)) {
        mediaFiles.push(fullPath);
      } else if (CODE_EXTENSIONS.has(ext)) {
        codeFiles.push(fullPath);
      }
    }
  }
  return { mediaFiles, codeFiles };
}

/**
 * Main execution script
 */
async function run() {
  console.log('🎥 Starting Video & GIF Optimization Automation...\n');
  console.log(`Using FFmpeg binary at: ${ffmpegPath}\n`);

  const { mediaFiles, codeFiles } = await scanDirectory(ROOT_DIR);

  if (mediaFiles.length === 0) {
    console.log('✨ No video or GIF files found to optimize.');
    return;
  }

  console.log(`📹 Found ${mediaFiles.length} media file(s) to optimize.`);
  console.log(`📝 Found ${codeFiles.length} code file(s) to check for references.\n`);

  const report = [];
  const conversionMap = new Map();
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  // Phase 1: Convert & Compress Media
  for (const oldPath of mediaFiles) {
    const parsed = path.parse(oldPath);
    const isGif = parsed.ext.toLowerCase() === '.gif';

    // Target extension: .mp4 (or .webm based on requirement)
    const targetExt = isGif ? '.mp4' : parsed.ext.toLowerCase();
    const tempOutputPath = path.join(parsed.dir, `${parsed.name}_optimized${targetExt}`);
    const finalOutputPath = path.join(parsed.dir, `${parsed.name}${targetExt}`);

    const relOld = path.relative(ROOT_DIR, oldPath);
    console.log(`Optimizing: ${relOld}...`);

    try {
      const originalStat = await fs.promises.stat(oldPath);
      const originalSize = originalStat.size;
      totalOriginalSize += originalSize;

      // Perform FFmpeg Compression
      await compressMedia(oldPath, tempOutputPath, isGif, targetExt === '.webm' ? 'webm' : 'mp4');

      const optimizedStat = await fs.promises.stat(tempOutputPath);
      const optimizedSize = optimizedStat.size;

      // Replace target file if size improved or format converted
      if (oldPath !== finalOutputPath) {
        // If extension changed (e.g. .gif -> .mp4 or .mov -> .mp4)
        await fs.promises.rename(tempOutputPath, finalOutputPath);
      } else {
        // Overwrite original with optimized version
        await fs.promises.rename(tempOutputPath, oldPath);
      }

      totalOptimizedSize += optimizedSize;

      const reductionPercent = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(2);
      const oldFilename = parsed.base;
      const newFilename = path.parse(finalOutputPath).base;

      conversionMap.set(oldFilename, newFilename);

      report.push({
        status: 'SUCCESS',
        originalName: oldFilename,
        optimizedName: newFilename,
        origSize: originalSize,
        optSize: optimizedSize,
        reduction: `${reductionPercent}%`,
        relPath: relOld
      });

      console.log(`  └─ ✅ Success: ${formatBytes(originalSize)} ➔ ${formatBytes(optimizedSize)} (${reductionPercent}% reduction)`);

    } catch (err) {
      console.error(`  └─ ❌ Failed to optimize ${relOld}:`, err.message);
      if (fs.existsSync(tempOutputPath)) {
        await fs.promises.unlink(tempOutputPath).catch(() => {});
      }
      report.push({
        status: 'FAILED',
        originalName: parsed.base,
        optimizedName: '-',
        origSize: 0,
        optSize: 0,
        reduction: '0%',
        relPath: relOld,
        error: err.message
      });
    }
  }

  // Phase 2: Update Code References
  console.log('\n🔄 Updating media references in source code files...');
  let updatedCodeFilesCount = 0;

  for (const codePath of codeFiles) {
    try {
      let content = await fs.promises.readFile(codePath, 'utf8');
      let modified = false;

      for (const [oldName, newName] of conversionMap.entries()) {
        if (oldName !== newName && content.includes(oldName)) {
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

  // Phase 3: Cleanup old original files if extension was changed
  console.log('\n🧹 Cleaning up old original files if extension changed...');
  let deletedCount = 0;
  for (const [oldName, newName] of conversionMap.entries()) {
    if (oldName !== newName) {
      for (const oldPath of mediaFiles) {
        if (path.basename(oldPath) === oldName && fs.existsSync(oldPath)) {
          await fs.promises.unlink(oldPath).catch(() => {});
          deletedCount++;
        }
      }
    }
  }

  // Detailed Summary Log
  console.log('\n======================================================');
  console.log('📊 MEDIA OPTIMIZATION SUMMARY REPORT');
  console.log('======================================================');
  console.table(
    report.map((r) => ({
      'Original File': r.originalName,
      'Optimized File': r.optimizedName,
      'Original Size': formatBytes(r.origSize),
      'Optimized Size': formatBytes(r.optSize),
      'Reduction': r.reduction,
      'Status': r.status
    }))
  );

  const totalSaved = totalOriginalSize - totalOptimizedSize;
  const overallPercent = totalOriginalSize > 0 ? (((totalSaved) / totalOriginalSize) * 100).toFixed(2) : 0;

  console.log('\n📈 Overall Results:');
  console.log(`   - Original Total Size : ${formatBytes(totalOriginalSize)}`);
  console.log(`   - Optimized Total Size: ${formatBytes(totalOptimizedSize)}`);
  console.log(`   - Total Space Saved   : ${formatBytes(totalSaved)} (${overallPercent}% reduction)`);
  console.log(`   - Code Files Updated  : ${updatedCodeFilesCount}`);
  console.log('======================================================\n');
}

run().catch((err) => console.error('Fatal error:', err));
