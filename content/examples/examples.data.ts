import { createContentLoader } from 'vitepress';

/** One published example, as the list on /examples/ needs it. Drafts are left out of the build altogether (see config.mts). */
export interface ExampleEntry {
  url: string;
  title: string;
  description: string;
  /** ISO date, newest first in the list. */
  date: string;
  /** Who it is written for: any of `consultants`, `architects`, `knowledge-graph`. */
  audience: string[];
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
        description: String(page.frontmatter['description'] ?? ''),
        date: page.frontmatter['date'] ? new Date(page.frontmatter['date'] as string).toISOString() : '',
        audience: (page.frontmatter['audience'] as string[] | undefined) ?? [],
      }))
      .sort((a, b) => b.date.localeCompare(a.date));
  },
});
