---
title: "Number rows and clusters"
description: "The counters {rsc}, {clc} and {scc} put the number of a row, a cluster or a subcluster into a value as a query makes the rows. Use them to keep an order or to give each cluster a style of its own."
---

# Number rows and clusters

A query can write a number into a value as it makes the rows. Three counters do it: `{rsc}` for the row, `{clc}` for the cluster and `{scc}` for the subcluster. Graph Modeler replaces each with its number before the row
reaches the Data tab. They are the way to give every row a place in an order, and every cluster a style of its own, from one query.

| Counter | The number of |
| --- | --- |
| `{rsc}` | The row, counting from 1 in the results of its query. |
| `{clc}` | The cluster, counting from 1 in the order the clusters are opened. |
| `{scc}` | The subcluster, counting from 1 inside its cluster. |

The [Placeholders](/docs/placeholders/) page has the full rules, including `{level}`, and how the counters differ when the clusters are numbered `Cluster1`, `Cluster2` and on.

## Keeping an order

Some layouts place the parts of a graph in the order of an attribute called `sortv`. The `osage` layout with an array pack mode does, for the boxes in a column and for the nodes in a box. A query can number them as it goes:

```sql
SELECT [Name] AS [Item], 'sortv={rsc}' AS [Attributes],
       [Region] AS [Cluster], [Region] AS [Cluster Label], 'sortv={clc}' AS [Cluster Attributes],
       [Area] AS [Subcluster], 'sortv={scc}' AS [Subcluster Attributes]
FROM [people]
ORDER BY [Region], [Area], [Name]
```

Every person gets `sortv` set to their place in the results: 1, 2, 3 and on to the last row. Every region gets its own number, 1 for the first, and every area gets its number inside its region, so each region starts again at 1. The layout then keeps the order the `ORDER BY` gave,
instead of leaving it to Graphviz.

## A style for each cluster

A cluster takes its look from a pair of styles, as [Styles](/docs/styles/#naming-clusters) explains. A counter in the style name makes a different pair for each cluster:

```sql
SELECT [Name] AS [Item], [Region] AS [Cluster], [Region] AS [Cluster Label],
       'Region_{clc}' AS [Cluster Style Name], [Area] AS [Subcluster], 'Area_{scc}' AS [Subcluster Style Name]
FROM [people]
ORDER BY [Region], [Area], [Name]
```

The first region is `Region_1`, so it takes the styles `Region_1 Begin` and `Region_1 End`, and the second takes `Region_2 Begin` and `Region_2 End`. The areas are numbered inside their region, so the first area of each region is `Area_1`.
Two regions that each have a first area share `Area_1`, which is how a family of borders is reused: define a few, and each region cycles through the same ones.

Define both styles of every pair the query can make, so count the clusters the data will make and write a pair for each, or use a counter that starts again, such as `{scc}`. A cluster whose styles do not exist is drawn without its box, and a cluster that has only one of
the pair is reported as a cluster that was opened and never closed.

## Where they work

- **Inside a quoted value.** Write the counter in text, as `'sortv={rsc}'` or `'row {rsc}'`. A counter in an SQL expression, such as `{rsc} & ' x'`, is not text yet when the query runs and makes it fail.
- **Each query starts again.** `{rsc}` is 1 for the first row of every query, except that the detail queries of an [`ITERATE`](/docs/sql-extensions/iterate/) carry on counting.
- **In a cluster's style name and attributes,** `{clc}` and `{scc}` work for `Cluster` and `Subcluster`. With `Cluster1` and deeper they work in every cluster column, and `{level}` gives the depth.

## Where to see it

The [rock bands by decade](/examples/rock-bands-by-decade/) example numbers its bands, decades and genres with these counters, so the boxes come out in order. Its download holds the whole script.
