// Makes the animated hero pictures of the home page, content/public/hero-light.svg and hero-dark.svg, from the static drawings beside this file:
//
//   node tools/hero/make-hero.mjs
//
// The static drawings (hero-light-static.svg, hero-dark-static.svg) are the pictures as they were: rows of data on top, the graph below, the
// `{ }` of the Knowledge Graph. Change the drawing there, and run this again. The animation is plain CSS inside the SVG, so it runs in an
// <img>, needs no script, is a few kilobytes, and follows the theme because each theme has its own file.
//
// The story, as in the program: a row is typed, and what it makes is drawn at once. A loop of about thirteen seconds:
//   row 1, a node (blue dot)        -> the first node
//   row 2, an edge (orange dot)     -> an arrow, and the node at its end
//   row 3, a cluster (teal dot)     -> the box, and a node in it
//   row 4, an edge (orange dot)     -> two arrows, and a second node in the box
// then the database and the `{ }` of the Knowledge Graph pop, everything fades, and it starts again. The arrow between the grid and the graph
// nudges down each time a row lands. With "reduce motion" set nothing moves and the finished picture is shown.
//
// Both drawings must have the same lines, so a line number names the same part in each. The numbers below are lines of the static files, and
// the colors of the third and fourth rows are taken from other rows (the static drawing has a node, an edge, a node and a cluster).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, '..', '..', 'content', 'public');
const CYCLE = 13.2; // seconds
const FADE_START = 12.4;
const FADE_END = 12.9;

const pct = (seconds) => `${((seconds / CYCLE) * 100).toFixed(2)}%`;

/** A part, by its line in the static drawing, and how it appears. */
const parts = [];
const add = (lines, kind, at, extra = {}) => parts.push({ lines: [].concat(lines), kind, at, ...extra });

// One row: the dot of the kind pops, the bars are typed from the left, the pill of the style fades in. Returns when the row is done.
const row = (start, dot, bars, pill) => {
  add(dot, 'pop', start);
  let t = start + 0.2;
  for (const bar of bars) {
    add(bar, 'type', t, { length: 0.4 });
    t += 0.45;
  }
  add(pill, 'fade', t, { length: 0.3 });
  return t + 0.3;
};

// The bar that makes the fourth row an edge, a copy of the second row's second bar: it has no line of its own in the static drawing.
const COPY = 'copy';

// Row 1: a node (blue). It makes the first node.
let done = row(0.5, 12, [13], 14);
add(38, 'pop', done + 0.05);

// Row 2: an edge (orange). It makes an arrow, and the node at its end.
done = row(2.4, 16, [17, 18], 19);
add(47, 'draw', done + 0.05, { length: 0.25 });
add(48, 'fade', done + 0.25, { length: 0.15 });
add(39, 'pop', done + 0.35);

// Row 3: a cluster (teal). It makes the box, and a node in it.
done = row(5.0, 21, [22], 23);
add(36, 'fade', done + 0.05, { length: 0.4 });
add(44, 'pop', done + 0.5);

// Row 4: an edge (orange). It makes two arrows, and a second node in the box.
done = row(7.2, 25, [26, COPY], 27);
add(49, 'draw', done + 0.05, { length: 0.3 });
add(50, 'fade', done + 0.3, { length: 0.15 });
add(45, 'pop', done + 0.4);
add(53, 'draw', done + 0.7, { length: 0.3 });
add(54, 'fade', done + 0.95, { length: 0.15 });

// The database, and the Knowledge Graph.
add([41, 42], 'pop', 10.0);
add([51, 52], 'fade', 10.3, { length: 0.3 });
add([57, 58], 'pop', 10.9, { bounce: true });

// The arrow between the grid and the graph nudges down as each row lands. It is always there.
add([30, 31], 'nudge', 0, { times: [1.45, 3.85, 6.0, 8.3] });

/** The keyframes of one part. Each part has its own, because the times of a loop are percentages of the loop. */
function keyframes(name, part) {
  const t = part.at;
  const d = part.length ?? 0.3;
  const end = `${pct(FADE_START)}{opacity:1}${pct(FADE_END)},100%{opacity:0}`;
  switch (part.kind) {
    case 'pop': {
      const settle = part.bounce
        ? `${pct(t + 0.3)}{opacity:1;transform:scale(1.2)}${pct(t + 0.5)}{transform:scale(0.96)}${pct(t + 0.65)}{transform:scale(1)}${pct(12.2)}{transform:scale(1)}`
        : `${pct(t + 0.25)}{opacity:1;transform:scale(1.12)}${pct(t + 0.4)}{transform:scale(1)}`;
      return `@keyframes ${name}{0%,${pct(t)}{opacity:0;transform:scale(0.55)}${settle}${end}}`;
    }
    case 'type':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:1;transform:scaleX(0)}${pct(t + d)}{transform:scaleX(1)}${pct(FADE_START)}{opacity:1;transform:scaleX(1)}${pct(FADE_END)},100%{opacity:0;transform:scaleX(1)}}`;
    case 'fade':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:0}${pct(t + d)}{opacity:1}${end}}`;
    case 'draw':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:1;stroke-dashoffset:100}${pct(t + d)}{stroke-dashoffset:0}${pct(FADE_START)}{opacity:1;stroke-dashoffset:0}${pct(FADE_END)},100%{opacity:0;stroke-dashoffset:0}}`;
    case 'nudge': {
      // Always visible; a small step down and back at each time.
      const stops = part.times.map((time) => `${pct(time - 0.01)}{transform:translateY(0)}${pct(time + 0.15)}{transform:translateY(6px)}${pct(time + 0.4)}{transform:translateY(0)}`);
      return `@keyframes ${name}{0%{transform:translateY(0)}${stops.join('')}100%{transform:translateY(0)}}`;
    }
    default:
      throw new Error(`unknown kind ${part.kind}`);
  }
}

const FILL = /fill="(#[0-9a-fA-F]+)"/;

/** Give a row the kind and style it plays in the story, by taking the colors of the dot and the pill from another row. */
function reskin(lines) {
  const fillOf = (number) => FILL.exec(lines[number - 1])[1];
  const paint = (number, color) => {
    lines[number - 1] = lines[number - 1].replace(FILL, `fill="${color}"`);
  };
  const [cluster, edge, edgePill, clusterPill] = [fillOf(25), fillOf(16), fillOf(19), fillOf(27)];
  paint(21, cluster); // row 3 is a cluster: the teal dot of row 4 ...
  paint(23, clusterPill); // ... and its pill
  paint(25, edge); // row 4 is an edge: the orange dot of row 2 ...
  paint(27, edgePill); // ... and its pill
}

function animate(source) {
  const lines = source.split('\n');
  const copyOf = lines[17]; // line 18: the second bar of row 2
  reskin(lines);
  const css = [];
  let copyLine;
  parts.forEach((part, index) => {
    const name = `k${index}`;
    css.push(keyframes(name, part));
    for (const number of part.lines) {
      const extra = part.kind === 'draw' ? ' pathLength="100" stroke-dasharray="100"' : '';
      const origin = part.kind === 'type' ? ' class="a l"' : ' class="a"';
      if (number === COPY) {
        copyLine = copyOf.replace('y="125"', 'y="185"').replace(/^(\s*<[a-z]+)/, `$1${origin} style="animation-name:${name}"`);
        continue;
      }
      const i = number - 1;
      const tag = /^(\s*<[a-z]+)/.exec(lines[i]);
      if (!tag) throw new Error(`line ${number} is not an element: ${lines[i]}`);
      lines[i] = lines[i].replace(tag[1], `${tag[1]}${origin}${extra} style="animation-name:${name}"`);
    }
  });
  // The copied bar goes after the fourth row's first bar (line 26).
  lines.splice(26, 0, copyLine);
  const style = `  <style>
    .a{animation-duration:${CYCLE}s;animation-iteration-count:infinite;animation-timing-function:ease-out;transform-box:fill-box;transform-origin:center}
    .l{transform-origin:left center}
    ${css.join('\n    ')}
    @media (prefers-reduced-motion:reduce){.a{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important}}
  </style>`;
  // After the <title>, so that the first line of the drawing is still the <svg> element.
  const at = lines.findIndex((line) => line.includes('</title>'));
  lines.splice(at + 1, 0, style);
  return lines.join('\n');
}

for (const theme of ['light', 'dark']) {
  const source = fs.readFileSync(path.join(here, `hero-${theme}-static.svg`), 'utf8').replace(/\r\n/g, '\n');
  const file = path.join(out, `hero-${theme}.svg`);
  fs.writeFileSync(file, animate(source));
  console.log(`wrote ${path.relative(process.cwd(), file)} (${fs.statSync(file).size} bytes)`);
}
