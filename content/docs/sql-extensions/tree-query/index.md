---
title: "Walk a tree"
description: "TREE QUERY follows a hierarchy stored as rows, such as an org chart or a route map, down from a starting row or up from it. See the columns, the depth limit and examples."
---

# Walk a tree

A hierarchy is often stored as plain rows: each employee names a supervisor, each route names the next stop. A normal query can list the rows, but it cannot say
"show everything below this one". `TREE QUERY` can. It runs a query for the starting value, then runs it again for every value the first run
finds, and so on down, and keeps every row it comes across.

## The columns

| Column | What it holds |
| --- | --- |
| `TREE QUERY` | The query to run at each step, as text. It must contain `{WHERE VALUE}`, which is replaced by the value being followed. |
| `WHERE VALUE` | The value to start from: the CEO's ID, or the first station. |
| `WHERE COLUMN` | The name of the column in the rows the query returns that holds the next value to follow. |
| `MAX DEPTH` | Optional. How many steps away from the start to go. Without it the walk goes on to the end, up to 100 steps. |

The query is text, so each single quote inside it is written twice: `''{WHERE VALUE}''`. The rows it returns are the ones that make the graph,
so they name `Item`, `Related Item` and the other usual columns.

## Examples

A sheet `Routes` has two columns, `From Node` and `To Node`, one row for each link, in no order. This makes the whole graph, and nothing about it says where to start:

```sql
SELECT [From Node] AS [Item], [To Node] AS [Related Item] FROM [Routes$]
```

To draw only what can be reached from the node `A0`, give the query as a tree query:

```sql
SELECT
  'SELECT [To Node], [From Node] AS [Item], [To Node] AS [Related Item]
     FROM [Routes$] WHERE [From Node] = ''{WHERE VALUE}''' AS [TREE QUERY],
  'A0'       AS [WHERE VALUE],
  'To Node'  AS [WHERE COLUMN]
```

The query is run for `A0`, which finds its links. Each link's `To Node` is then followed in turn, depth first. Links that cannot be reached from `A0` are not in the graph.
The column named in `WHERE COLUMN`, `To Node`, is returned by the query only so the walk can read it.

To stop after three steps, add a column:

```sql
  3 AS [MAX DEPTH]
```

From `A0` that keeps `A0` to `A1`, `A1` to `A2` and `A2` to `A3`, and the other links of the first three steps, and leaves out everything further on.

To go the other way, from `A9` back to everything that leads to it, swap the two columns and follow `From Node`:

```sql
SELECT
  'SELECT [From Node], [From Node] AS [Item], [To Node] AS [Related Item]
     FROM [Routes$] WHERE [To Node] = ''{WHERE VALUE}''' AS [TREE QUERY],
  'A9'         AS [WHERE VALUE],
  'From Node'  AS [WHERE COLUMN]
```

## Things to know

- **A loop ends.** A value that has been followed is not followed again, so a hierarchy that circles back, such as a route that returns to an earlier stop, does not go on forever. The links that make the loop are still in the graph.
- **A value found twice is walked once.** Where two paths meet, the links of each are kept and what lies beyond is read once.
- **Two walks can share a script.** A line can walk down and another line can walk up from the same starting value, and both sets of rows are in the graph.
- **Placeholders can set it up.** A `SET PLACEHOLDER` line can hold the starting value and the depth, so one value at the top of the script says whose chart it is.
  The text of a placeholder is put into the query before it runs, so it can also be used inside the query text.

## Where to see it

The [org chart](/examples/org-chart-from-a-spreadsheet/) example uses two tree queries, one down the reporting lines from a chosen employee and one up, with the employee and the depths set by placeholders. Its download holds the whole script.
See also [The SQL tab](/docs/sql/) and [Placeholders](/docs/placeholders/).
