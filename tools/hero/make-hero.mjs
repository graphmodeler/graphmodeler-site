// Makes the animated hero pictures of the home page, content/public/hero-light.svg and hero-dark.svg, from the static drawings beside this file:
//
//   node tools/hero/make-hero.mjs
//
// The static drawings (hero-light-static.svg, hero-dark-static.svg) are the finished pictures: rows of data on top, the graph below. A part that
// moves has a `data-p` name in them, and the story below says when each name appears. Change the drawing there, and run this again. Both
// drawings must have the same parts with the same names; only their colors differ. The animation is plain CSS inside the SVG, so it runs in an
// <img>, needs no script, is a few kilobytes, and follows the theme because each theme has its own file.
//
// The story, as in the program: a row is typed, and what it makes is drawn at once. Each row takes the same time, so the picture keeps one beat.
//   row 1, a cluster (teal dot)   -> the cluster box and its nodes appear together, in one swoop
//   row 2, an edge (orange dot)   -> an arrow, and the decision at its end
//   row 3, a node (blue dot)      -> the database
//   row 4, an edge (orange dot)   -> three arrows: into the cluster, a dashed one to the database, and one inside the cluster
// then everything fades and it starts again. With "reduce motion" set nothing moves and the finished picture is shown.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, '..', '..', 'content', 'public');
const CYCLE = 13.2; // seconds
const FADE_START = 12.4;
const FADE_END = 12.9;
const BEAT = 2.5; // seconds from the start of one row to the start of the next
const FIRST_ROW = 0.5;

const pct = (seconds) => `${((seconds / CYCLE) * 100).toFixed(2)}%`;

/** A part, by its data-p name, and how it appears. */
const parts = new Map();
const add = (name, kind, at, extra = {}) => parts.set(name, { kind, at, ...extra });

// One row: the dot of the kind pops, the bars are typed from the left, the pill of the style fades in. Returns when the row is done.
const row = (number, start, bars) => {
  add(`r${number}-dot`, 'pop', start);
  let t = start + 0.2;
  for (const bar of bars) {
    add(bar, 'type', t, { length: 0.4 });
    t += 0.45;
  }
  add(`r${number}-pill`, 'fade', t, { length: 0.3 });
  return t + 0.3;
};

// An arrow is drawn from its tail, and its head fades in as the line arrives.
const arrow = (name, at, length = 0.3) => {
  add(`${name}-line`, 'draw', at, { length });
  add(`${name}-head`, 'fade', at + length - 0.05, { length: 0.15 });
};

let done = row(1, FIRST_ROW, ['r1-bar']);
add('cluster', 'pop', done + 0.05);

done = row(2, FIRST_ROW + BEAT, ['r2-bar1', 'r2-bar2']);
arrow('e1', done + 0.05, 0.25);
add('decision', 'pop', done + 0.35);

done = row(3, FIRST_ROW + 2 * BEAT, ['r3-bar']);
add('database', 'pop', done + 0.05);

done = row(4, FIRST_ROW + 3 * BEAT, ['r4-bar1', 'r4-bar2']);
arrow('e2', done + 0.05);
add('dashed', 'fade', done + 0.6, { length: 0.3 });
arrow('e3', done + 1.0);

/** The keyframes of one part. Each part has its own, because the times of a loop are percentages of the loop. */
function keyframes(name, part) {
  const t = part.at;
  const d = part.length ?? 0.3;
  const end = `${pct(FADE_START)}{opacity:1}${pct(FADE_END)},100%{opacity:0}`;
  switch (part.kind) {
    case 'pop':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:0;transform:scale(0.55)}${pct(t + 0.25)}{opacity:1;transform:scale(1.12)}${pct(t + 0.4)}{transform:scale(1)}${end}}`;
    case 'type':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:1;transform:scaleX(0)}${pct(t + d)}{transform:scaleX(1)}${pct(FADE_START)}{opacity:1;transform:scaleX(1)}${pct(FADE_END)},100%{opacity:0;transform:scaleX(1)}}`;
    case 'fade':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:0}${pct(t + d)}{opacity:1}${end}}`;
    case 'draw':
      return `@keyframes ${name}{0%,${pct(t)}{opacity:1;stroke-dashoffset:100}${pct(t + d)}{stroke-dashoffset:0}${pct(FADE_START)}{opacity:1;stroke-dashoffset:0}${pct(FADE_END)},100%{opacity:0;stroke-dashoffset:0}}`;
    default:
      throw new Error(`unknown kind ${part.kind}`);
  }
}

function animate(source, theme) {
  const names = [...parts.keys()];
  const seen = new Set();
  const css = names.map((name, index) => `${keyframes(`k${index}`, parts.get(name))}`);
  const result = source.replace(/<([a-z]+)([^>]*?) data-p="([^"]+)"/g, (whole, tag, before, name) => {
    const part = parts.get(name);
    if (!part) throw new Error(`${theme}: the drawing has a part named "${name}" that the story does not know`);
    seen.add(name);
    const id = `k${names.indexOf(name)}`;
    const extra = part.kind === 'draw' ? ' pathLength="100" stroke-dasharray="100"' : '';
    const origin = part.kind === 'type' ? 'a l' : 'a';
    return `<${tag}${before} class="${origin}"${extra} style="animation-name:${id}"`;
  });
  const lost = names.filter((name) => !seen.has(name));
  if (lost.length) throw new Error(`${theme}: the story names parts that the drawing does not have: ${lost.join(', ')}`);
  const style = `  <style>
    .a{animation-duration:${CYCLE}s;animation-iteration-count:infinite;animation-timing-function:ease-out;transform-box:fill-box;transform-origin:center}
    .l{transform-origin:left center}
    ${css.join('\n    ')}
    @media (prefers-reduced-motion:reduce){.a{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important}}
  </style>`;
  // After the <title>, so that the first line of the drawing is still the <svg> element.
  const lines = result.split('\n');
  const at = lines.findIndex((line) => line.includes('</title>'));
  lines.splice(at + 1, 0, style);
  return lines.join('\n');
}

for (const theme of ['light', 'dark']) {
  const source = fs.readFileSync(path.join(here, `hero-${theme}-static.svg`), 'utf8').replace(/\r\n/g, '\n');
  const file = path.join(out, `hero-${theme}.svg`);
  fs.writeFileSync(file, animate(source, theme));
  console.log(`wrote ${path.relative(process.cwd(), file)} (${fs.statSync(file).size} bytes)`);
}
