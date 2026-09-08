// Regenerate the static vector and four-second Lottie from the approved artwork.
const fs = require('node:fs');
const { trace } = require('potrace');
const { parseSVG, makeAbsolute } = require('svg-path-parser');
const fixed = (k) => ({ a: 0, k });
const ramp = (start, end, from = 0, to = 100) => ({
  a: 1,
  k: [
    {
      t: start,
      s: [from],
      e: [to],
      o: { x: 0.33, y: 0 },
      i: { x: 0.67, y: 1 },
    },
    { t: end, s: [to] },
  ],
});
trace(
  'public/assets/images/marco-illustration.png',
  {
    threshold: 130,
    turdSize: 12,
    optTolerance: 0.4,
    color: '#242d26',
    background: 'transparent',
  },
  (error, svg) => {
    if (error) throw error;
    const path = svg.match(/d="([^"]+)"/)[1];
    const contours = [];
    let contour;
    const add = (x, y) => {
      contour.v.push([x, y]);
      contour.i.push([0, 0]);
      contour.o.push([0, 0]);
    };
    for (const cmd of makeAbsolute(parseSVG(path))) {
      if (cmd.code === 'M') {
        contour = { v: [], i: [], o: [], c: true };
        contours.push(contour);
        add(cmd.x, cmd.y);
      } else if (cmd.code === 'C') {
        const previous = contour.v.at(-1);
        contour.o[contour.o.length - 1] = [
          cmd.x1 - previous[0],
          cmd.y1 - previous[1],
        ];
        add(cmd.x, cmd.y);
        contour.i[contour.i.length - 1] = [cmd.x2 - cmd.x, cmd.y2 - cmd.y];
      } else if (['L', 'H', 'V'].includes(cmd.code)) {
        add(cmd.x, cmd.y);
      } else if (cmd.code !== 'Z')
        throw new Error(`Unsupported path command ${cmd.code}`);
    }
    const shape = (c) => ({ ty: 'sh', ks: fixed(c) });
    const transform = {
      ty: 'tr',
      p: fixed([0, 0]),
      a: fixed([0, 0]),
      s: fixed([100, 100]),
      r: fixed(0),
      o: fixed(100),
      sk: fixed(0),
      sa: fixed(0),
    };
    const ink = [36 / 255, 45 / 255, 38 / 255, 1];
    const layer = (ind, nm, shapes, opacity) => ({
      ddd: 0,
      ind,
      ty: 4,
      nm,
      sr: 1,
      ks: {
        o: opacity,
        r: fixed(0),
        p: fixed([0, 0, 0]),
        a: fixed([0, 0, 0]),
        s: fixed([100, 100, 100]),
      },
      ao: 0,
      shapes,
      ip: 0,
      op: 240,
      st: 0,
      bm: 0,
    });
    const strokes = [...contours]
      .sort(
        (a, b) =>
          Math.min(...a.v.map((p) => p[1])) - Math.min(...b.v.map((p) => p[1])),
      )
      .map((c, index) => {
        const start = Math.round((index / contours.length) * 110);
        return {
          ty: 'gr',
          nm: `Ink contour ${index + 1}`,
          it: [
            shape(c),
            {
              ty: 'st',
              c: fixed(ink),
              o: fixed(100),
              w: fixed(2.4),
              lc: 2,
              lj: 2,
              ml: 4,
            },
            {
              ty: 'tm',
              s: fixed(0),
              e: ramp(start, start + 90),
              o: fixed(0),
              m: 1,
            },
            transform,
          ],
        };
      });
    const data = {
      v: '5.13.0',
      fr: 60,
      ip: 0,
      op: 240,
      w: 1254,
      h: 1254,
      nm: 'Marco — ink portrait reveal',
      ddd: 0,
      assets: [],
      layers: [
        layer(
          1,
          'Finished ink',
          [
            ...contours.map(shape),
            // Match Potrace's SVG fill-rule="evenodd" so nested contours
            // remain holes (eye whites, lip interiors, pupil highlights).
            { ty: 'fl', c: fixed(ink), o: fixed(100), r: 2 },
          ],
          ramp(170, 239),
        ),
        layer(2, 'Drawing contours', strokes, ramp(210, 239, 100, 0)),
      ],
    };
    fs.writeFileSync(
      'public/assets/portrait-entrance.json',
      JSON.stringify(data),
    );
    fs.writeFileSync('public/assets/images/marco-illustration.svg', svg);
    console.log(
      `Generated ${contours.length} contours; four seconds at 60 fps.`,
    );
  },
);
