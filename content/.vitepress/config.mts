import { defineConfig, type HeadConfig } from 'vitepress';

const SITE = 'https://graphmodeler.com';

/** False until the launch: while it is, every page tells search engines to stay away. */
const LAUNCHED = false;

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
    return head;
  },

  themeConfig: {
    logo: '/app-icon.svg',
    siteTitle: 'Graph Modeler',

    nav: [
      { text: 'Documentation', link: '/docs/', activeMatch: '/docs/' },
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
