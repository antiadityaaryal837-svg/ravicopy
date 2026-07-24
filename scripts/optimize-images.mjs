/**
 * Image optimization script
 * Converts JPG thumbnails to WebP (resized to 800x450) and PNG profile to WebP (resized to 200x200)
 * Run with: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

// ── 1. Convert /public/myicon.png → /public/myicon.webp (200x200, good quality) ─
const profileSrc = join(root, 'public', 'myicon.png');
const profileDst = join(root, 'public', 'myicon.webp');

if (existsSync(profileSrc)) {
  await sharp(profileSrc)
    .resize(200, 200, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(profileDst);
  console.log('✅  myicon.webp created');
} else {
  console.warn('⚠️  myicon.png not found, skipping');
}

// ── 2. Convert /public/thumbnail/*.jpg → /public/thumbnail/*.webp (800x450) ──
const thumbSrc = join(root, 'public', 'thumbnail');
const thumbDst = join(root, 'public', 'thumbnail');

if (!existsSync(thumbSrc)) {
  console.warn('⚠️  thumbnail directory not found, skipping');
  process.exit(0);
}

const files = readdirSync(thumbSrc).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
console.log(`\nConverting ${files.length} thumbnail images...`);

let done = 0;
for (const file of files) {
  const src = join(thumbSrc, file);
  const outName = basename(file, extname(file)) + '.webp';
  const dst = join(thumbDst, outName);

  // Skip if already converted
  if (existsSync(dst)) {
    done++;
    process.stdout.write(`\r  ${done}/${files.length} done`);
    continue;
  }

  try {
    await sharp(src)
      .resize(800, 450, { fit: 'cover', position: 'center' })
      .webp({ quality: 82 })
      .toFile(dst);
    done++;
    process.stdout.write(`\r  ${done}/${files.length} done`);
  } catch (err) {
    console.error(`\n  ❌ Failed: ${file}`, err.message);
  }
}

console.log(`\n✅  All thumbnails converted to WebP (800×450)`);
console.log('\nDone! Update your <img> src to use .webp files.');
