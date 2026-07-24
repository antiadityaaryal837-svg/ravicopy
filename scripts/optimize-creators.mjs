/**
 * Convert creator images (JPG/PNG) → WebP at 192×192 (2x for HiDPI)
 * Run with: node scripts/optimize-creators.mjs
 */
import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

const creatorsSrc = join(root, 'public', 'creators');
const files = readdirSync(creatorsSrc).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Converting ${files.length} creator images...`);
let done = 0;

for (const file of files) {
  const src = join(creatorsSrc, file);
  const outName = basename(file, extname(file)) + '.webp';
  const dst = join(creatorsSrc, outName);

  if (existsSync(dst)) {
    done++;
    process.stdout.write(`\r  ${done}/${files.length} done`);
    continue;
  }

  try {
    await sharp(src)
      .resize(192, 192, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(dst);
    done++;
    process.stdout.write(`\r  ${done}/${files.length} done`);
  } catch (err) {
    console.error(`\n  ❌ Failed: ${file}`, err.message);
  }
}

console.log(`\n✅  Creator images converted to WebP (192×192)`);
