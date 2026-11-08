---
title: "Split long labels"
description: "SPLIT LENGTH and LINE ENDING break a long label into lines of a chosen length as a query makes the rows. See the columns, the line endings and what to watch for."
---

# Split long labels

A long label makes a node wide and a diagram sprawl. `SPLIT LENGTH` breaks the label into lines as the query makes the row, so the text of a task, a station or an event
stays in a compact node without anyone adding line breaks by hand to the data.

## The columns

| Column | What it holds |
| --- | --- |
| `SPLIT LENGTH` | The most characters to put on a line. A number above 0 switches the splitting on. |
| `LINE ENDING` | The text that joins the lines. Optional: without it the lines are joined with `\n`. |

Both columns are on the row they apply to, so one query can split some labels and not others, or use different lengths.

```sql
SELECT [Task] AS [Item], [Description] AS [Label], 14 AS [SPLIT LENGTH]
FROM [tasks$]
```

A description such as `This is a very long label that stretches the node` becomes four lines: `This is a very`, `long label`, `that stretches` and `the node`.

## Where it breaks

- **At spaces only.** A line is as long as it can be without passing the limit, and ends at the last space before it. A word that is longer than the limit stays whole, on a line of its own:
  with a length of 10, `Internationalization of the extraordinarily long identifiers` gives `Internationalization`, `of the`, `extraordinarily`, `long` and `identifiers`.
- **Breaks that are already there stay.** A `\n`, `\r`, `\l`, a `<br/>` or a real new line in the text is kept as a break, and each part is split on its own. All of them are replaced by the line ending you chose.
- **Spaces are tidied.** Repeated spaces become one, and the text is trimmed.
- **Counters come first.** A placeholder such as `{rsc}` is replaced before the label is measured, so the length is that of the finished text.
- **Only labels.** The columns act on `Label` and `External Label`. A tooltip, a head label or a tail label is left as it was written.
- **No splitting.** A `SPLIT LENGTH` that is 0, negative or not a number leaves the label alone.

## Line endings

The line ending decides how Graphviz aligns each line, or what kind of break it is.

| Line ending | What it does |
| :---: | --- |
| `\n` | A new line, with the lines centered. This is the default. |
| `\l` | A new line, with the lines aligned to the left. |
| `\r` | A new line, with the lines aligned to the right. |
| `\|` | The break of a record shape, which writes its fields side by side or one under the other. |
| `<br/>` | The break of an HTML-like label. |

Write them as the two characters shown, a backslash and a letter, and not as a new line. Any other text can be a line ending too.

```sql
SELECT [Task] AS [Item], [Description] AS [Label], 14 AS [SPLIT LENGTH], '\l' AS [LINE ENDING]
FROM [tasks$]
```

This gives the same four lines, aligned to the left.

## HTML-like labels

A label written as HTML, such as `<<b>Fix Crash on Save</b><br/><br/>Resolve the crash>`, can be split with `'<br/>' AS [LINE ENDING]`. The `<br/>` already in it are kept, and new ones are added where the lines break. Two things to know:

- **The markup counts.** The tags are part of the text that is measured, so a length of 24 allows less visible text on a line that holds a tag.
- **A space inside a tag can be a break.** Splitting does not know what a tag is, so a tag with spaces in it, such as `<font face='Verdana'>`, may be cut in two. Keep the markup in the label simple, or put the font in the style.

## Where to see it

The [kanban board](/examples/kanban-board/) splits the text of each note at 24 characters with `<br/>` as the line ending, so it fits the note. The [timeline roadmap](/examples/timeline-roadmap/)
splits the labels of its edges at 20 characters. Each download holds the whole script.
