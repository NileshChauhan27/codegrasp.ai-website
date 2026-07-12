export function createSvg() {
  const width = 1200;
  const height = 630;
  const cx = width / 2;
  const cy = height / 2;

  let rings = "";
  for (let r = 100; r < 400; r += 60) {
    rings += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2d8b8b" stroke-opacity="0.12" stroke-width="1" />`;
  }
  for (let angle = 0; angle < 360; angle += 30) {
    const rad = (angle * Math.PI) / 180;
    rings += `<line x1="${cx + Math.cos(rad) * 80}" y1="${
      cy + Math.sin(rad) * 80
    }" x2="${cx + Math.cos(rad) * 400}" y2="${
      cy + Math.sin(rad) * 400
    }" stroke="#2d8b8b" stroke-opacity="0.12" stroke-width="1" />`;
  }

  // Brain-like shape using a rotated oval + inner arcs
  let folds = "";
  for (let dy = -90; dy <= 90; dy += 35) {
    folds += `<path d="M ${cx - 60} ${cy + dy} Q ${cx} ${cy + dy - 30} ${
      cx + 60
    } ${cy + dy}" fill="none" stroke="#2d8b8b" stroke-opacity="0.35" stroke-width="2" />`;
    folds += `<path d="M ${cx - 50} ${cy + dy + 15} Q ${cx} ${cy + dy + 45} ${
      cx + 50
    } ${cy + dy + 15}" fill="none" stroke="#2d8b8b" stroke-opacity="0.25" stroke-width="2" />`;
  }

  // Random-ish particles
  const particles = [
    [120, 140],
    [180, 220],
    [240, 480],
    [340, 120],
    [380, 520],
    [960, 500],
    [1020, 400],
    [1080, 180],
    [1120, 300],
    [90, 540],
  ];
  let pSvg = "";
  for (const [px, py] of particles) {
    pSvg += `<circle cx="${px}" cy="${py}" r="3" fill="#2d8b8b" fill-opacity="0.8" />`;
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2d8b8b" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#212427" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#212427" stop-opacity="0" />
      <stop offset="100%" stop-color="#0a0c0e" stop-opacity="0.75" />
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#212427" />
  <rect x="${cx - 200}" y="${cy - 200}" width="400" height="400" fill="url(#glow)" />
  ${rings}
  <ellipse cx="${cx}" cy="${cy}" rx="85" ry="145" fill="#151718" stroke="#2d8b8b" stroke-width="3" />
  ${folds}
  <circle cx="${cx + 55}" cy="${cy + 95}" r="28" fill="none" stroke="#f4f4f5" stroke-width="5" />
  <line x1="${cx + 75}" y1="${cy + 115}" x2="${cx + 110}" y2="${cy + 150}" stroke="#f4f4f5" stroke-width="6" stroke-linecap="round" />
  ${pSvg}
  <rect width="${width}" height="${height}" fill="url(#vignette)" />
</svg>
  `.trim();
}
