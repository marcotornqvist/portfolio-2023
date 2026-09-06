// Usage: node scripts/generate-logo.cjs /path/to/Geist[wght].ttf
// Geist at the original header weight, size and tracking, outlined for portability.
const fs = require('node:fs');
const font = require('fontkit')
  .openSync(process.argv[2])
  .getVariation({ wght: 550 });
const size = (23 / 42) * 64;
const scale = size / font.unitsPerEm;
const tracking = (-2 / 42) * 64;
const glyphs = font.layout('mt.').glyphs;
const width = glyphs.reduce(
  (sum, glyph, index) => sum + glyph.advanceWidth * scale + (index === 1 ? 0 : tracking),
  0,
);
let x = (64 - width) / 2 - 1.5;
const baseline = 32 + ((font.ascent + font.descent) * scale) / 2;
const fixed = (k) => ({ a: 0, k });
const animated = (keys) => ({
  a: 1,
  k: keys.map(([t, s], index) => ({
    t,
    s,
    ...(index < keys.length - 1
      ? { o: { x: 0.25, y: 0 }, i: { x: 0.25, y: 1 } }
      : {}),
  })),
});
const green = [49 / 255, 86 / 255, 66 / 255, 1];
const paper = [247 / 255, 247 / 255, 242 / 255, 1];
const layer = (name, shapes, p, s, r = fixed(0), o = fixed(100)) => ({
  ddd: 0,
  ind: 0,
  ty: 4,
  nm: name,
  sr: 1,
  ks: { a: fixed([0, 0, 0]), p, s, r, o },
  ao: 0,
  shapes,
  ip: 0,
  op: 96,
  st: 0,
  bm: 0,
});
const fill = (color) => ({
  ty: 'fl',
  c: fixed(color),
  o: fixed(100),
  r: 1,
  bm: 0,
});
const layers = [];
let svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>Marco Törnqvist</title><circle cx="32" cy="32" r="32" fill="#315642"/>';
glyphs.forEach((glyph, index) => {
  const contours = [];
  let contour;
  const point = (a, b) => [a * scale, -b * scale];
  const add = (p) => {
    contour.v.push(p);
    contour.i.push([0, 0]);
    contour.o.push([0, 0]);
  };
  for (const { command, args } of glyph.path.commands) {
    if (command === 'moveTo') {
      contour = { v: [], i: [], o: [], c: true };
      contours.push(contour);
      add(point(...args));
    }
    if (command === 'lineTo') add(point(...args));
    if (command === 'quadraticCurveTo' || command === 'bezierCurveTo') {
      const prev = contour.v.at(-1);
      let c1 = point(args[0], args[1]);
      const end = point(...args.slice(-2));
      const c2 =
        command === 'quadraticCurveTo'
          ? end.map((v, j) => v + ((c1[j] - v) * 2) / 3)
          : point(args[2], args[3]);
      if (command === 'quadraticCurveTo')
        c1 = prev.map((v, j) => v + ((c1[j] - v) * 2) / 3);
      contour.o[contour.o.length - 1] = c1.map((v, j) => v - prev[j]);
      add(end);
      contour.i[contour.i.length - 1] = c2.map((v, j) => v - end[j]);
    }
  }
  const delay = 10 + index * 7;
  layers.push(
    layer(
      'mt.'[index],
      [...contours.map((c) => ({ ty: 'sh', ks: fixed(c) })), fill(paper)],
      animated([
        [0, [x, baseline + 16, 0]],
        [delay, [x, baseline + 16, 0]],
        [delay + 17, [x, baseline - 3, 0]],
        [delay + 27, [x, baseline, 0]],
      ]),
      index === 2
        ? animated([
            [0, [0, 0, 100]],
            [delay, [0, 0, 100]],
            [delay + 17, [125, 125, 100]],
            [delay + 27, [100, 100, 100]],
          ])
        : fixed([100, 100, 100]),
      fixed(0),
      animated([
        [0, [0]],
        [delay, [0]],
        [delay + 10, [100]],
      ]),
    ),
  );
  svg += `<path fill="#f7f7f2" transform="translate(${x} ${baseline}) scale(${scale} ${-scale})" d="${glyph.path.toSVG()}"/>`;
  // Give the period optical separation from the foot of the t at small sizes.
  x += glyph.advanceWidth * scale + (index === 1 ? 0 : tracking);
});
layers.push(
  layer(
    'Green disc',
    [{ ty: 'el', p: fixed([0, 0]), s: fixed([64, 64]) }, fill(green)],
    fixed([32, 32, 0]),
    animated([
      [0, [0, 0, 100]],
      [18, [100, 100, 100]],
    ]),
  ),
);
layers.forEach((l, i) => (l.ind = i + 1));
fs.writeFileSync(
  'public/assets/logo-entrance.json',
  JSON.stringify({
    v: '5.12.2',
    fr: 60,
    ip: 0,
    op: 96,
    w: 64,
    h: 64,
    nm: 'Marco — Geist entrance',
    ddd: 0,
    assets: [],
    layers,
  }),
);
svg += '</svg>\n';
fs.writeFileSync('public/assets/logo.svg', svg);
fs.writeFileSync('app/icon.svg', svg);
