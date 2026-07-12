import sharp from "sharp";
import { createSvg } from "../lib/og-svg.js";

const svg = createSvg();

await sharp(Buffer.from(svg))
  .resize(1200, 630, { fit: "cover" })
  .png()
  .toFile("public/og.png");

console.log("Generated public/og.png");
