import sharp from 'sharp';
import https from 'https';
import fs from 'fs';
import path from 'path';

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-11%20at%208.58.49%20AM-6FSzHvVWtEHLurHlhK9MBo5sJGBdVd.png';
const outputPath = './public/logo-transparent.png';

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Download the image
const downloadImage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    });
  });
};

async function removeCheckerboardBackground() {
  console.log('Downloading image...');
  const imageBuffer = await downloadImage(imageUrl);
  
  console.log('Processing image...');
  
  // Get image metadata and raw pixel data
  const image = sharp(imageBuffer);
  const { width, height, channels } = await image.metadata();
  
  // Extract raw pixel data with alpha channel
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  console.log(`Image size: ${info.width}x${info.height}, channels: ${info.channels}`);
  
  // Create new buffer for processed image
  const newData = Buffer.from(data);
  
  // Checkerboard colors (light gray and white pattern)
  const isCheckerboardColor = (r, g, b) => {
    // Light gray squares (~204, 204, 204) and white squares (~255, 255, 255)
    // Also check for medium gray (~153, 153, 153)
    const isLightGray = Math.abs(r - 204) < 15 && Math.abs(g - 204) < 15 && Math.abs(b - 204) < 15;
    const isWhite = r > 245 && g > 245 && b > 245;
    const isMediumGray = Math.abs(r - 153) < 15 && Math.abs(g - 153) < 15 && Math.abs(b - 153) < 15;
    const isDarkGray = Math.abs(r - 128) < 20 && Math.abs(g - 128) < 20 && Math.abs(b - 128) < 20;
    
    // Check if it's a neutral gray (R ≈ G ≈ B)
    const isNeutral = Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && Math.abs(r - b) < 10;
    
    return isNeutral && (isLightGray || isWhite || isMediumGray || isDarkGray);
  };
  
  // Process each pixel
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    if (isCheckerboardColor(r, g, b)) {
      // Make pixel transparent
      newData[i + 3] = 0; // Set alpha to 0
    }
  }
  
  // Create the output image
  await sharp(newData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png()
    .toFile(outputPath);
  
  console.log(`Saved transparent logo to ${outputPath}`);
}

removeCheckerboardBackground().catch(console.error);
