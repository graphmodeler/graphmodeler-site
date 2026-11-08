---
title: "Iterate query results"
description: "ITERATE runs a second query for each value a first query returns, so a script can draw a group of rows for each year, department or customer. See the columns and an example."
---

# Iterate query results

`ITERATE` runs one query for each value another query returns. The first query lists the values, the second is run once for each of them, and the rows of
every run go into the graph one after the other. It is how a script draws a group for each year, department or customer when it does not know in advance
what they are.

It is not the same as [enumerating](/docs/sql-extensions/enumerate/). An enumeration counts through a range of numbers and makes new data. An iteration goes
through values that are already in the data, and uses each one to ask a question.

## The columns

| Column | What it holds |
| --- | --- |
| `ITERATE` | `TRUE` to switch it on. |
| `SQL FOR ID` | A query that returns a column named `ID`: the values to go through. |
| `SQL FOR DATA` | A query that is run once for each ID, with `{id}` replaced by the value. |

The two queries are text, so each single quote inside them is written twice. The `ID` column is required: a query that returns none makes no rows.
A value that is empty, or already done, is skipped, and the line that holds the three columns makes no row of its own.

## An example

A sheet `shells` has a `Year` and a `Shell` column. This makes one `rank="same"` line for each year, which tells Graphviz to put the shells of a year level with each other:

```sql
SELECT
  'SELECT DISTINCT [Year] AS [ID] FROM [shells$] WHERE [Year] IS NOT NULL AND IsNumeric([Year])' AS [SQL FOR ID],
  'SELECT [Shell] AS [ITEM], TRUE AS [CREATE RANK], ''same'' AS [RANK]
     FROM [shells$] WHERE [Year] = ''{id}''' AS [SQL FOR DATA],
  TRUE AS [ITERATE]
```

The first query returns `1972`, `1976`, `1978` and the other years. The second is run for each of them, and its rows are gathered by `CREATE RANK` into one line:

```
{ rank="same"; "Thompson"; }
{ rank="same"; "Bourne"; "Mashey"; }
{ rank="same"; "Formshell"; "csh"; }
...
```

A plain query would put every shell in one line, because `CREATE RANK` gathers the rows of a query. Running the query once for each year gives a line for each.

## Things to know

- **The counters carry on.** `{rsc}`, the row's place in the results, goes on counting from one run to the next, so `sortv={rsc}` in a value orders the rows of the whole script and not of each run.
- **Each run is a query of its own.** The columns of `SQL FOR DATA` are the usual ones, so its rows can have labels, styles and attributes.
- **A mistake shows.** If one of the queries fails, the line fails, and its message says why.
- **The same columns, with `CONCATENATE`,** join the rows of each run into one value instead of making rows. The [SQL tab](/docs/sql/#clusters-sequences-and-trees) page says a line about it.

## Where to see it

The [timeline roadmap](/examples/timeline-roadmap/) example uses `ITERATE` to put the events of a year level with each other, and its download holds the whole script.
