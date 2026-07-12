import sharp from "sharp";
import { createLogoMarkSvg } from "../lib/logo-mark-svg.js";

const svg = createLogoMarkSvg();
const base = Buffer.from(svg);

await sharp(base).resize(96, 96).png().toFile("public/favicon.png");
await sharp(base).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(base).resize(512, 512).png().toFile("public/icon-512.png");

console.log("Generated favicon files");
