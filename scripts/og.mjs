// Regenerates public/og.png, the site-wide Open Graph card: `npm run og`.
// ponytail: run by hand, not at build time. sharp rasterises SVG text with
// whatever fonts the machine has, and CI (ubuntu-latest) has neither Cascadia
// Code nor a CJK face — so the card is generated locally and committed.
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const MONO = 'Cascadia Code, Cascadia Mono, monospace';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0a0a0a"/>
  <rect x="0" y="0" width="${WIDTH}" height="10" fill="#22d3ee"/>
  <text x="90" y="300" font-family="${MONO}" font-size="82" font-weight="700" fill="#f9fafb">vremyavnikuda</text>
  <text x="90" y="374" font-family="${MONO}" font-size="38" fill="#22d3ee">systems software &#183; rust &#183; linux</text>
  <text x="90" y="548" font-family="${MONO}" font-size="30" fill="#6b7280">vremyavnikuda.tech</text>
</svg>`;

const info = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log(`public/og.png ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)}KB`);
