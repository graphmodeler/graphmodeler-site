import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type HeadConfig } from 'vitepress';

const PUBLIC = fileURLToPath(new URL('../public', import.meta.url));
const EXAMPLES = fileURLToPath(new URL('../examples', import.meta.url));

/**
 * The examples that say `draft: true` in their front matter. A draft is written and looked at with `npm run dev`, and is left out of
 * the finished site altogether (no page, no card in the gallery, no entry in the sitemap), so it can be committed half done.
 */
function draftExamples(): string[] {
  try {
    return readdirSync(EXAMPLES, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .filter((entry) => {
        try {
          const text = readFileSync(join(EXAMPLES, entry.name, 'index.md'), 'utf8');
          const front = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1] ?? '';
          return /^draft:\s*true\s*$/m.test(front);
        } catch {
          return false;
        }
      })
      .map((entry) => `examples/${entry.name}/**`);
  } catch {
    return [];
  }
}
const BUILDING = process.argv.includes('build');

/** The size of a PNG, read from its header, so that a screenshot can say how big it is before it has loaded. */
const pngSizes = new Map<string, { width: number; height: number } | undefined>();
function pngSize(src: string) {
  if (!pngSizes.has(src)) {
    try {
      const bytes = readFileSync(join(PUBLIC, src));
      pngSizes.set(src, { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) });
    } catch {
      pngSizes.set(src, undefined);
    }
  }
  return pngSizes.get(src);
}

/** Gives a screenshot tag its width and height (so the page does not jump as pictures arrive) and loads it only when it is near the screen. */
function describeShot(tag: string): string {
  const src = /\ssrc="(\/shots\/[^"]+\.png)"/.exec(tag)?.[1];
  const size = src && pngSize(src);
  if (!size) return tag;
  const extra = [
    /\swidth=/.test(tag) ? '' : ` width="${size.width}" height="${size.height}"`,
    /\sloading=/.test(tag) ? '' : ' loading="lazy" decoding="async"',
  ].join('');
  return tag.replace(/\s*\/?>$/, `${extra}>`);
}

const SITE = 'https://graphmodeler.com';

/** False until the launch: while it is, every page tells search engines to stay away. */
const LAUNCHED = true;

/**
 * The Graph Modeler site, at graphmodeler.com. Every page is a folder with an index page in it, so its address ends in a
 * slash, which is how the app links to it (see docs/website.md in the app's repository for the list of pages).
 */
export default defineConfig({
  title: 'Graph Modeler',
  description: 'Model a graph in a spreadsheet-style editor, then draw it with Graphviz or publish it as a Knowledge Graph.',
  lang: 'en-US',
  cleanUrls: false,
  lastUpdated: false,
  srcExclude: BUILDING ? draftExamples() : [],
  markdown: {
    // The screenshots are written as <img> tags and as ![alt](/shots/...) images; both get the same treatment.
    config(md) {
      md.core.ruler.push('shot-attributes', (state) => {
        for (const token of state.tokens) {
          if (token.type === 'html_block') token.content = token.content.replace(/<img\b[^>]*>/g, describeShot);
          for (const child of token.children ?? []) {
            if (child.type === 'html_inline') child.content = child.content.replace(/<img\b[^>]*>/g, describeShot);
            if (child.type === 'image') {
              const size = pngSize(child.attrGet('src') ?? '');
              if (!size || !(child.attrGet('src') ?? '').startsWith('/shots/')) continue;
              child.attrSet('width', String(size.width));
              child.attrSet('height', String(size.height));
              child.attrSet('loading', 'lazy');
              child.attrSet('decoding', 'async');
            }
          }
        }
      });
    },
  },

  sitemap: {
    hostname: SITE,
    // The thank-you page is for buyers only (it is noindex), so it does not belong in the list of pages to find.
    transformItems: (items) => items.filter((item) => !item.url.includes('thanks')),
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/app-icon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', sizes: '48x48', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#0e7490', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#14181c', media: '(prefers-color-scheme: dark)' }],
    // Until the launch, keep search engines away: set LAUNCHED to true when the site is ready to be found.
    // (The thank-you page has its own noindex, which stays.)
    ...(LAUNCHED ? [] : [['meta', { name: 'robots', content: 'noindex, nofollow' }] as HeadConfig]),
  ],

  // Every page says where it lives and how it should look when its address is shared.
  transformHead({ pageData }) {
    if (pageData.isNotFound) return [];
    const url = `${SITE}/${pageData.relativePath.replace(/index\.md$/, '')}`;
    const title = pageData.frontmatter.title ?? pageData.title ?? 'Graph Modeler';
    const description = pageData.frontmatter.description ?? pageData.description;
    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Graph Modeler' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: `${SITE}/og-image.png` }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:image:alt', content: 'Graph Modeler: rows of data in a grid become a graph, drawn by Graphviz' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: `${SITE}/og-image.png` }],
    ];
    // Only the home page says who the site is: the name and logo that a search engine may show beside the address.
    if (pageData.relativePath === 'index.md') {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebSite', '@id': `${SITE}/#website`, name: 'Graph Modeler', url: `${SITE}/`, inLanguage: 'en-US' },
            {
              '@type': 'Organization',
              '@id': `${SITE}/#organization`,
              name: 'Graph Modeler',
              url: `${SITE}/`,
              logo: `${SITE}/apple-touch-icon.png`,
              contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@graphmodeler.com' },
            },
          ],
        }),
      ]);
    }
    return head;
  },

  // At the launch the site also gets a robots.txt that points to the sitemap. (While it is not launched, no file is written.)
  buildEnd({ outDir }) {
    // The files of a draft example (public/examples/<name>/) are copied as they are, and would be on the site, unlisted but reachable.
    for (const glob of draftExamples()) rmSync(join(outDir, glob.replace(/\/\*\*$/, '')), { recursive: true, force: true });
    if (!LAUNCHED) return;
    writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
  },

  themeConfig: {
    logo: '/app-icon.svg',
    siteTitle: 'Graph Modeler',

    nav: [
      { text: 'Documentation', link: '/docs/', activeMatch: '/docs/' },
      { text: 'Examples', link: '/examples/', activeMatch: '/examples/' },
      { text: 'Download', link: '/download/' },
      { text: 'Pricing', link: '/pricing/' },
      { text: 'Support', link: '/support/' },
      { text: 'License', link: '/license/' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Start here',
          items: [
            { text: 'Documentation', link: '/docs/' },
            { text: 'Getting started', link: '/docs/getting-started/' },
            { text: 'The left pane', link: '/docs/left-pane/' },
          ],
        },
        {
          text: 'The tabs',
          items: [
            { text: 'Data', link: '/docs/data/' },
            { text: 'Diagram', link: '/docs/diagram/' },
            { text: 'Knowledge Graph', link: '/docs/knowledge-graph/' },
            { text: 'DOT', link: '/docs/dot/' },
            { text: 'Designer', link: '/docs/designer/' },
            { text: 'Styles', link: '/docs/styles/' },
            { text: 'SQL', link: '/docs/sql/' },
            { text: 'SVG', link: '/docs/svg/' },
            { text: 'Settings', link: '/docs/settings/' },
            { text: 'About', link: '/docs/about/' },
          ],
        },
        {
          text: 'Topics',
          items: [
            { text: 'Placeholders', link: '/docs/placeholders/' },
            {
              text: 'SQL extensions',
              link: '/docs/sql-extensions/',
              collapsed: false,
              items: [
                { text: 'Group rows into clusters', link: '/docs/sql-extensions/clusters/' },
                { text: 'Enumerate values', link: '/docs/sql-extensions/enumerate/' },
                { text: 'Iterate query results', link: '/docs/sql-extensions/iterate/' },
                { text: 'Walk a tree', link: '/docs/sql-extensions/tree-query/' },
              ],
            },
            { text: 'Publishing', link: '/docs/publishing/' },
            { text: 'Units and packing', link: '/docs/units-and-packing/' },
            { text: 'Fonts', link: '/docs/fonts/' },
            { text: 'Coming from the Excel tool', link: '/docs/from-excel/' },
            { text: "What's new", link: '/docs/changelog/' },
          ],
        },
      ],
    },

    search: { provider: 'local' },

    outline: { level: [2, 3] },

    footer: {
      message:
        'Graph Modeler is provided free for personal use. A valid license is required for business or commercial use.<br />' +
        '<a href="/terms/">Terms of Service</a> · <a href="/privacy/">Privacy Policy</a> · <a href="/refunds/">Refund Policy</a>',
      copyright: 'Copyright © 2026 Jeffrey J. Long',
    },
  },
});
