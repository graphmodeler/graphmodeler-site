---
title: "SQL extensions"
description: "Columns with special names turn a SELECT into a loop, an iteration or a walk down a tree. See what the SQL extensions of Graph Modeler do and where each one is explained."
---

# SQL extensions

A query on the [SQL tab](/docs/sql/) normally turns each row of its result into a row of the graph. The **extensions** are columns with special names that
make a query do more: repeat itself for every number in a range, run a second query for every value a first query returns, or follow a hierarchy down from a
starting point. They are what lets a few short queries build a timeline, an org chart or a route map from a table that holds none of it.

A **command** is a line of the script, such as `RESET` or `PUBLISH`, and is described on the [SQL tab](/docs/sql/#commands) page. An **extension** is part of a
`SELECT`.

## How they work

- **A column switches it on.** Add a column such as `TRUE AS [ENUMERATE]` to the `SELECT`, with the columns that go with it.
- **The names are forgiving.** Capital letters, spaces, underscores and hyphens do not matter: `[Start At]`, `[START_AT]` and `[startat]` are the same column.
- **TRUE means on.** A switch column is on when it holds `TRUE`, `yes` or a number that is not 0.
- **The other columns work as usual.** The query still names `Item`, `Related Item`, `Label`, `Style Name` and the rest, and they make the rows of the graph.
- **A query inside a query is text.** `ITERATE` and `TREE QUERY` pass a whole query as a value, so a single quote inside it is written twice: `''{id}''`.

A script written for the [Excel tool](/docs/from-excel/) that uses them runs here without a change.

## The extensions

<ExtensionCards />

The [SQL tab](/docs/sql/#clusters-sequences-and-trees) page lists the others briefly: `CREATE EDGES`, `CREATE RANK` and `CONCATENATE`.
The [Placeholders](/docs/placeholders/) page lists the counters, such as `{step}` and `{id}`, that these queries use.
