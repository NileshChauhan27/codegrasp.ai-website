import sharp from "sharp";
import fs from "fs";

// Use the transparent logo-mark.svg we just generated
const svgPath = "public/logo-mark.svg";
const base = fs.readFileSync(svgPath);

// Generate png files
await sharp(base).resize(96, 96).png().toFile("public/favicon.png");
await sharp(base).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(base).resize(512, 512).png().toFile("public/icon-512.png");

// Generate favicon.ico (32x32 PNG wrapped in ICO format)
const png32 = await sharp(base).resize(32, 32).png().toBuffer();

function pngToIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // Reserved
  header.writeUInt16LE(1, 2);     // Type (1 = ICO)
  header.writeUInt16LE(1, 4);     // Image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);        // Width (32)
  entry.writeUInt8(32, 1);        // Height (32)
  entry.writeUInt8(0, 2);         // Color palette (0 = no palette)
  entry.writeUInt8(0, 3);         // Reserved
  entry.writeUInt16LE(1, 4);      // Color planes
  entry.writeUInt16LE(32, 6);     // Bits per pixel (32)
  entry.writeUInt32LE(pngBuffer.length, 8); // Size of PNG data
  entry.writeUInt32LE(22, 12);    // Offset of PNG data (header + 1 entry = 6 + 16 = 22)

  return Buffer.concat([header, entry, pngBuffer]);
}

const icoBuffer = pngToIco(png32);
fs.writeFileSync("app/favicon.ico", icoBuffer);

console.log("Generated favicon files (transparent PNGs and favicon.ico)");

