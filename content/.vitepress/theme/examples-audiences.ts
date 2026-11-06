/** The groups an example can be written for. The key goes in an example's `audience` list; the label is what the reader sees. */
export const AUDIENCES: { key: string; label: string }[] = [
  { key: 'consultants', label: 'Consultants' },
  { key: 'architects', label: 'Architects' },
  { key: 'knowledge-graph', label: 'Knowledge graphs' },
];

export function audienceLabel(key: string): string {
  return AUDIENCES.find((a) => a.key === key)?.label ?? key;
}

/** 5 November 2026, in English whatever the reader's language, so that the page and the feed agree. */
export function longDate(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
