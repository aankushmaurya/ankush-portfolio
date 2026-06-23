const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public', 'Mylogo.jpeg');
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
          background: { r: 255, g: 255, b: 255, alpha: 1 } // Using white background as it's a jpeg
        })
        .toFile(outputPath);
      console.log(`Successfully generated ${icon.name}`);
    } catch (err) {
      console.error(`Error generating ${icon.name}:`, err);
    }
  }
}

generateIcons();
