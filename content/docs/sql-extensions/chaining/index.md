---
title: "Chain nodes with edges"
description: "CREATE EDGES turns an ordered list of values into a chain of edges, one from each value to the next. See how to use it for timelines, steps and versions, and what each edge carries."
---

# Chain nodes with edges

Many lists are an order: the steps of a process, the versions of a program, the years of a timeline. A query can return them in order, but a list has no edges. `CREATE EDGES` makes them: each
row is joined to the row after it, so a column of values becomes a chain, `A` to `B`, `B` to `C`, `C` to `D`.

## The columns

| Column | What it holds |
| --- | --- |
| `CREATE EDGES` | `TRUE`. The column switches it on, and its value is not read. |
| `Item` | The ID of a node. Each row is a link in the chain. |

The order of the rows is the order of the chain, so a query that chains needs an `ORDER BY`. The query makes edges and not nodes: it makes a row of the Data tab for each edge, with the two IDs. Graphviz draws a node for each ID it finds,
and a second query can make the nodes themselves when they need a label or a style.

## An example

A file `steps.csv` has a `Position`, a `Step` and an `Owner` column, with four steps: Draft, Review, Approve and Publish. This chains them in order:

```sql
SELECT [Step] AS [Item], TRUE AS [CREATE EDGES]
FROM [steps]
ORDER BY [Position]
```

It makes three edges, `Draft` to `Review`, `Review` to `Approve` and `Approve` to `Publish`. There is none for `Publish`, because nothing follows it.

## What each edge carries

An edge takes the other columns of the row it points **to**. Add the owner as a label and a style:

```sql
SELECT [Step] AS [Item], [Owner] AS [Label], 'Handoff' AS [Style Name], TRUE AS [CREATE EDGES]
FROM [steps]
ORDER BY [Position]
```

The edge from `Draft` to `Review` is labeled `Editor`, the owner of `Review`, the edge from `Review` to `Approve` is labeled `Manager`, and the edge from `Approve` to `Publish` is labeled `Web team`. The first row gives only its `Item`: the writer's
name is not on any edge, because no edge points to `Draft`. `Label`, `Style Name`, `Tooltip` and `Attributes` all work this way, and so does `{rsc}`, which numbers the edges from 1.

## Things to know

- **A `Related Item` is not used.** The chain makes it, and a column of that name is replaced.
- **Two rows make one edge, and one row makes none.** A query that finds a single row adds nothing.
- **Use `DISTINCT` for a list with repeats.** A value that appears twice in a row is joined to itself, with an edge that loops back to the same node, and one that appears in two places is in two places in the chain.
- **A range of numbers** can be chained without a table, with `ENUMERATE`. See [Enumerate values](/docs/sql-extensions/enumerate/), which chains the years of a timeline.

## Where to see it

The [timeline roadmap](/examples/timeline-roadmap/) example chains one node for each year, from the first to the last, with invisible edges, so the years form a row. Its download holds the whole script.
