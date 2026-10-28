import { defineConfig } from 'vitepress';

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
  sitemap: { hostname: 'https://graphmodeler.com' },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/app-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#0e7490' }],
    // Until the launch, keep search engines away. Remove this line when the site is ready to be found.
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ],

  themeConfig: {
    logo: '/app-icon.svg',
    siteTitle: 'Graph Modeler',

    nav: [
      { text: 'Documentation', link: '/docs/', activeMatch: '/docs/' },
      { text: 'Download', link: '/download/' },
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
