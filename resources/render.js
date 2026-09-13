const sharp = require('sharp');
const path = require('path');

async function run() {
  await sharp(path.join(__dirname, 'icon.svg'), { density: 384 })
    .resize(1024, 1024)
    .png()
    .toFile(path.join(__dirname, 'icon.png'));

  await sharp(path.join(__dirname, 'splash.svg'), { density: 384 })
    .resize(2732, 2732)
    .png()
    .toFile(path.join(__dirname, 'splash.png'));

  console.log('rendered icon.png and splash.png');
}

run().catch((e) => { console.error(e); process.exit(1); });
