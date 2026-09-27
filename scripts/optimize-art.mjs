import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const dir = 'src/assets/images';
const files = (await readdir(dir)).filter((f) => f.endsWith('.png'));

for (const file of files) {
  const input = path.join(dir, file);
  const tmp = path.join(dir, `tmp-${file}`);
  await sharp(input)
    .resize({ width: 900, height: 1200, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 80, palette: true })
    .toFile(tmp);
  await sharp(tmp).toFile(input);
  const { unlink } = await import('fs/promises');
  await unlink(tmp);
  console.log('ok', file);
}