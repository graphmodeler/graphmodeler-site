---
title: "Align nodes on a rank"
description: "CREATE RANK gathers the rows of a query into one line that tells Graphviz to put those nodes level with each other. See the columns, the rank values and an example."
---

# Align nodes on a rank

With the `dot` layout, Graphviz puts the nodes in ranks, rows from the top of the diagram to the bottom, or columns from left to right. It chooses the rank of each node from the edges, which is
usually what you want. Sometimes it is not: the members of a team should stand in one row, the stages of a project should line up, a start and an end should sit at the two ends. `CREATE RANK` gathers the
rows of a query into one line that tells Graphviz which nodes belong on the same rank, so a query can say it for every node of a kind.

## The columns

| Column | What it holds |
| --- | --- |
| `CREATE RANK` | `TRUE`. The column switches it on, and its value is not read. |
| `RANK` | The kind of rank, taken from the first row. |
| `Item` | The ID of a node. Every row of the query adds its `Item` to the rank. |

The values of `RANK` are Graphviz's:

| Value | What it does |
| --- | --- |
| `same` | The nodes are on the same rank. |
| `min` | The nodes are on the first rank, or the same as the first rank. |
| `source` | The nodes are on the first rank, and no other node is on it. |
| `max` | The nodes are on the last rank, or the same as the last rank. |
| `sink` | The nodes are on the last rank, and no other node is on it. |

Capital letters are changed to small ones, so `'SAME'` works.

## An example

A file `people.csv` has a `Name` and a `Region` column. This puts the people of the North on the same rank:

```sql
SELECT [Name] AS [Item], TRUE AS [CREATE RANK], 'same' AS [RANK]
FROM [people]
WHERE [Region] = 'North'
```

The query makes one row, however many people it finds. Its `Item` is `>`, which is raw DOT on the [Data](/docs/data/) tab, and its `Label` holds the line:

```
{ rank="same"; "Anna"; "Ben"; "Cara"; }
```

Graphviz reads the line as "these three go on the same rank".

## Things to know

- **The items are node IDs.** The names must be those of the nodes, which a query or a row of the Data tab makes. A name that matches no node makes a new node, with the default look.
- **One rank for each query.** All the rows of a query go into one line. To make a rank for each year, department or other group, run the query once for each group with [`ITERATE`](/docs/sql-extensions/iterate/), which is what its example does.
- **Only the `dot` layout uses ranks.** The other layout engines ignore the line. See the [Diagram](/docs/diagram/) page.
- **A missing `RANK` is an empty one.** Without the column the line is `rank=""`, which does nothing useful. Always give it a value.
- **No rows, no line.** A query that finds nothing adds nothing.
- **Names with quotes** are written as they are, so a name that contains a double quotation mark makes a line Graphviz cannot read.
- **`CREATE EDGES` wins.** If a query has both columns, it makes edges and no rank.

## Where to see it

The [timeline roadmap](/examples/timeline-roadmap/) example makes a rank for each year, so that the events that start in a year stand level with its year node. Its download holds the whole script.
