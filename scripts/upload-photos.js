const OSS = require('ali-oss');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const client = new OSS({
  region: 'oss-cn-shanghai',
  bucket: 'littledai',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
});

const PHOTOS_DIR = path.join(__dirname, '..', 'photos');
const MASONRY_FILE = path.join(__dirname, '..', 'source', '_data', 'masonry.yml');

async function upload() {
  const files = fs.readdirSync(PHOTOS_DIR).filter(f =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
  );

  if (files.length === 0) {
    console.log('No new photos in photos/ directory.');
    return;
  }

  console.log(`Found ${files.length} photo(s), uploading to OSS...\n`);

  const newEntries = [];
  for (const file of files) {
    const ossPath = file;
    const result = await client.put(ossPath, path.join(PHOTOS_DIR, file));
    const url = result.url;
    newEntries.push({ image: url, title: '', description: '' });
    console.log(`  ✓ ${file}`);
  }

  const raw = yaml.load(fs.readFileSync(MASONRY_FILE, 'utf8'));
  const existing = (Array.isArray(raw) ? raw : []).filter(e => e.image);
  const updated = [...existing, ...newEntries];
  fs.writeFileSync(MASONRY_FILE, yaml.dump(updated, { lineWidth: -1 }));

  for (const file of files) {
    fs.unlinkSync(path.join(PHOTOS_DIR, file));
  }

  console.log(`\nDone. ${files.length} photo(s) added to masonry.yml.`);
  console.log('Preview with: npm run server');
}

upload().catch(err => {
  console.error('Upload failed:', err.message);
  process.exit(1);
});
