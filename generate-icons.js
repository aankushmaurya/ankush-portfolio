const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public', 'Mylogo.png');
const outputDir = path.join(__dirname, 'public');

const icons = [
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'apple-icon.png', size: 180 }, // standard for apple touch icon
];

async function generateIcons() {
  if (!fs.existsSync(inputImagePath)) {
    console.error('Input image not found:', inputImagePath);
    return;
  }

  for (const icon of icons) {
    const outputPath = path.join(outputDir, icon.name);
    try {
      await sharp(inputImagePath)
        .resize(icon.size, icon.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .toFile(outputPath);
      console.log(`Successfully generated ${icon.name}`);
    } catch (err) {
      console.error(`Error generating ${icon.name}:`, err);
    }
  }
}

generateIcons();
