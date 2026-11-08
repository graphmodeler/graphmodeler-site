---
title: "Walk a tree"
description: "Follow a hierarchy stored as rows, such as an org chart or a route map, down from a starting row or up from it, with a recursive WITH query or with TREE QUERY. See both, with examples."
---

# Walk a tree

A hierarchy is often stored as plain rows: each employee names a supervisor, each route names the next stop. A normal query can list the rows, but it cannot say
"show everything below this one". Two things can, and they give the same edges.

- **`WITH RECURSIVE`** is plain SQL. It is the way to write a new script, and it can do whatever SQL can: count the levels, join the names of the people, start from several rows.
- **`TREE QUERY`** is an extension from the [Excel tool](/docs/from-excel/), made at a time when its SQL had no recursion. It is kept so that those scripts run unchanged, and it
  needs no knowledge of recursion.

A `WITH` query runs in Graph Modeler 1.1.0 and later. In 1.0.1 and earlier a line of the script must begin with `SELECT`, so use `TREE QUERY` there.

## With WITH RECURSIVE

A recursive query has two parts joined by `UNION`. The first part is the **start**: the rows of the starting node. The second part is the **step**: it takes the rows found so far and finds the
rows that follow from them, and it is run again on what it finds, until it finds nothing. The result is every row of the walk.

A sheet `Routes` has two columns, `From Node` and `To Node`, one row for each link, in no order. This draws everything that can be reached from the node `A0`, to three links away:

```sql
WITH RECURSIVE walk([From Node], [To Node], depth) AS (
  SELECT [From Node], [To Node], 1 FROM [Routes$] WHERE [From Node] = 'A0'
  UNION ALL
  SELECT r.[From Node], r.[To Node], w.depth + 1
  FROM [Routes$] r JOIN walk w ON r.[From Node] = w.[To Node]
  WHERE w.depth < 3
)
SELECT [From Node] AS [Item], [To Node] AS [Related Item] FROM walk
```

The start finds the links out of `A0`. The step finds the links out of the nodes the last round reached, and `depth` counts the rounds, so `w.depth < 3` stops it after three. The result is `A0` to `A1`, `A1` to `A2`,
`A1` to `A4`, `A2` to `A3`, `A2` to `A6` and `A4` to `A5`. The last `SELECT` names the columns of the graph as any query does, and may add `Label`, `Style Name` and the rest, or use `depth` to
make a label or a `sortv`.

To go the other way, from `A9` back to everything that leads to it, swap the two columns:

```sql
WITH RECURSIVE walk([From Node], [To Node]) AS (
  SELECT [From Node], [To Node] FROM [Routes$] WHERE [To Node] = 'A9'
  UNION
  SELECT r.[From Node], r.[To Node] FROM [Routes$] r JOIN walk w ON r.[To Node] = w.[From Node]
)
SELECT [From Node] AS [Item], [To Node] AS [Related Item] FROM walk
```

### Make it end

A walk ends when a round finds nothing new. Data that loops, such as a route that returns to an earlier stop, never runs out, so a recursive query needs one of two things:

- **`UNION` and not `UNION ALL`.** `UNION` drops a row it has already found, so a loop is walked once. The query above uses it, and finds the eight links that lead to `A9`. A walk forward from `A0` written the same way, with no depth, finds all 20 links of the sample,
  including the loop `A10` to `A11` to `A12` to `A10`, and stops.
- **A depth limit**, as in the first example. Use it when the rows carry a column such as `depth`, which makes every row different so that `UNION` cannot drop them.

A query that never ends is stopped. A statement returns at most 100,000 rows, and the line then fails with a message that says to give the query a depth limit or to use `UNION`. The limit cannot help a query that has to finish before it
returns its first row, such as one that sorts the whole result.

## With TREE QUERY

`TREE QUERY` runs a query for the starting value, then runs it again for every value the first run finds, and so on down, and keeps every row it comes across.

| Column | What it holds |
| --- | --- |
| `TREE QUERY` | The query to run at each step, as text. It must contain `{WHERE VALUE}`, which is replaced by the value being followed. |
| `WHERE VALUE` | The value to start from: the CEO's ID, or the first station. |
| `WHERE COLUMN` | The name of the column in the rows the query returns that holds the next value to follow. |
| `MAX DEPTH` | Optional. How many steps away from the start to go. Without it the walk goes on to the end, up to 100 steps. |

The query is text, so each single quote inside it is written twice: `''{WHERE VALUE}''`. The rows it returns are the ones that make the graph, so they name `Item`, `Related Item` and the other usual columns.

The same walk from `A0`, to three links away:

```sql
SELECT
  'SELECT [To Node], [From Node] AS [Item], [To Node] AS [Related Item]
     FROM [Routes$] WHERE [From Node] = ''{WHERE VALUE}''' AS [TREE QUERY],
  'A0'       AS [WHERE VALUE],
  'To Node'  AS [WHERE COLUMN],
  3          AS [MAX DEPTH]
```

The query is run for `A0`, which finds its links. Each link's `To Node` is then followed in turn, depth first. The column named in `WHERE COLUMN`, `To Node`, is returned by the query only so the walk can read it.
To go the other way, from `A9`, swap the two columns and follow `From Node`:

```sql
SELECT
  'SELECT [From Node], [From Node] AS [Item], [To Node] AS [Related Item]
     FROM [Routes$] WHERE [To Node] = ''{WHERE VALUE}''' AS [TREE QUERY],
  'A9'         AS [WHERE VALUE],
  'From Node'  AS [WHERE COLUMN]
```

- **A loop ends by itself.** A value that has been followed is not followed again, so a route that returns to an earlier stop does not go on forever. The links that make the loop are still in the graph.
- **A value found twice is walked once.** Where two paths meet, the links of each are kept and what lies beyond is read once.

## Which to use

For a new script, write a recursive query. It is the same SQL as the rest of the script, it can count the levels and join in the names, and what you learn applies to any SQL database. Use `TREE QUERY` when a script comes from the Excel tool,
which runs without a change, or when you want the shortest way to a tree and the loop and depth handling done for you. Both can share a script, and a line can walk down while another walks up.

A `SET PLACEHOLDER` line can hold the starting value and the depth in either form, so one value at the top of the script says whose chart it is. The text of a placeholder is put into the query before it runs, so it can also be used inside the query text.

## Where to see it

The [org chart](/examples/org-chart-from-a-spreadsheet/) example walks the reporting lines down and up from a chosen employee, with the employee and the depths set by placeholders. Its download holds the whole script.
See also [The SQL tab](/docs/sql/) and [Placeholders](/docs/placeholders/).
