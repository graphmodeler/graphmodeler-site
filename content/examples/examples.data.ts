import { createContentLoader } from 'vitepress';

/** One published example, as a card on the Examples page needs it. Drafts are left out of the build altogether (see config.mts). */
export interface ExampleEntry {
  url: string;
  title: string;
  /** One line under the title on the card. */
  tagline: string;
  /** The picture on the card: a small image in `public`, 960 by 600. */
  thumbnail: string;
  /** The place on the page (1 is first); examples without one come last. */
  order: number | null;
}

declare const data: ExampleEntry[];
export { data };

export default createContentLoader('examples/*/index.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(pages): ExampleEntry[] {
    return pages
      .filter((page) => !page.frontmatter['draft'])
      .map((page) => ({
        url: page.url,
        title: String(page.frontmatter['title'] ?? ''),
        tagline: String(page.frontmatter['tagline'] ?? ''),
        thumbnail: String(page.frontmatter['thumbnail'] ?? ''),
        order: typeof page.frontmatter['order'] === 'number' ? (page.frontmatter['order'] as number) : null,
      }))
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title));
  },
});
