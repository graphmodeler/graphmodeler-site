---
title: "Group rows into clusters"
description: "Cluster columns in a SELECT put rows into boxes inside boxes. See the two ways to write them, one for two levels and one for any number, and the placeholders that number the clusters."
---

# Group rows into clusters

A **cluster** is a box drawn around some nodes, and clusters can sit inside clusters. On the [Data](/docs/data/) tab a cluster is a pair of rows, `{` to open it and `}` to close it, with the rows
of its nodes between them. A query does not have to write those rows. Name the cluster in a column of the `SELECT`, and Graph Modeler adds the opening and closing rows, in the right places, for every
distinct value.

There are two ways to write it. The first has two levels and the second has as many as you need.

## Two levels: Cluster and Subcluster

| Column | What it holds |
| --- | --- |
| `CLUSTER` | The value that groups the rows. Rows with the same value go into one cluster. This column switches the clusters on. |
| `CLUSTER LABEL` | The text on the box. |
| `CLUSTER STYLE NAME` | The name of a style for the box. |
| `CLUSTER ATTRIBUTES` | Attributes for the box, such as `sortv=1`. |
| `CLUSTER TOOLTIP` | The text shown when the pointer is over the box, in an SVG. |
| `SUBCLUSTER`, `SUBCLUSTER LABEL`, `SUBCLUSTER STYLE NAME`, `SUBCLUSTER ATTRIBUTES`, `SUBCLUSTER TOOLTIP` | The same, for a box inside the cluster. |

A file `sites.csv` has the columns `Name`, `Region`, `Area` and `Building`. This puts each person in their region, and in an area inside it:

```sql
SELECT [Name] AS [Item], [Region] AS [Cluster], 'Region: ' & [Region] AS [Cluster Label],
       'Region' AS [Cluster Style Name], [Area] AS [Subcluster]
FROM [sites]
```

Each region becomes a box with the label `Region: North` or `Region: South`, and the style `Region`. Inside it, each area is a box with its people.

- **The order.** The clusters come in the order their values first appear in the rows, and the rows keep their order inside them.
- **What is in a cluster.** The subclusters come first. The rows of the cluster that have no subcluster come after them, and a row with no cluster is outside every box, after the last one.
- **One description for each box.** A box takes its label, style, attributes and tooltip from the first row that has its value, so every row of a cluster should say the same.
- **A label is not added for you.** The value that groups the rows is not shown on the box. Put the text you want in `CLUSTER LABEL`, which can be the same column.

## Any number of levels: Cluster1, Cluster2 and on

Number the columns. `CLUSTER1` is the outermost box, `CLUSTER2` is inside it, `CLUSTER3` is inside that, and so on, for as many levels as the data has. The numbers must run on from 1 without a gap:
when a number is missing, the clustering stops there.

| Column | What it holds |
| --- | --- |
| `CLUSTER1`, `CLUSTER2`, ... | The value that groups the rows at each level. |
| `CLUSTER1 LABEL`, `CLUSTER2 LABEL`, ... | The text on the box. |
| `CLUSTER1 STYLE NAME`, `CLUSTER2 STYLE NAME`, ... | The name of a style for the box. |
| `CLUSTER1 ATTRIBUTES`, `CLUSTER2 ATTRIBUTES`, ... | Attributes for the box. |
| `CLUSTER1 TOOLTIP`, `CLUSTER2 TOOLTIP`, ... | The text shown over the box in an SVG. |

The same file, with three levels:

```sql
SELECT [Name] AS [Item], [Region] AS [Cluster1], [Area] AS [Cluster2], [Building] AS [Cluster3]
FROM [sites]
```

North holds Leeds, which holds the Hall, and York, which holds the Tower. South holds Bath, which holds a Hall and a Tower.

- **Gaps are allowed in the data.** A row with an empty value at a level sits in the box of the level above. Eve has a region and nothing else, so she is directly inside South, beside the Bath box, and Fay, who has none, is outside every box.
- **The order is by value.** Unlike the two-level form, the rows are first sorted by their cluster values, `CLUSTER1` first and ignoring capitals, so the boxes come in alphabetical order whatever the order of the rows. To place the boxes
  in another order, give them an attribute that the layout sorts by, such as `'sortv=' & [Rank]`.
- **A limit.** The first 25 levels are used. A line of the script, `SET CLUSTER LEVEL LIMIT = 2`, uses only the first two cluster columns and merges the rest into them, so the same query gives a shallower picture without being edited.

If a result has `CLUSTER1`, the numbered form is used. Write a query one way or the other.

## Style names

A cluster style name is the name of a pair of styles, one that opens the box and one that closes it. Graph Modeler adds a word to the name for each: `Region` is looked up as `Region Begin` for the opening and `Region End` for the closing.
The words and the way they are joined are set in [Settings](/docs/settings/), and [Styles](/docs/styles/#naming-clusters) says how to write the styles. The first one carries the box's colors and, if you like, its label.
Since version 1.0.1 a style name is matched ignoring capital letters and repeated spaces, so `'Region '` with a space at the end still finds `Region Begin`.

## Counting clusters

The placeholders that number things can be written in the values of the cluster columns, and Graph Modeler fills in the numbers.

| Placeholder | The number |
| --- | --- |
| `{clc}` | The cluster's number, counting from 1 in the order the clusters are opened. In the numbered form the boxes of every level are counted together. |
| `{scc}` | In the two-level form, the number of the subcluster inside its cluster. In the numbered form, the number of the box among the boxes inside the same parent. |
| `{level}` | The level of the cluster, 1 for the outermost. |
| `{rsc}` | The row's place in the results. |

In the two-level form they work in the style name and in the attributes, and in the numbered form in the label and the tooltip as well. `'Level {level}, number {clc}' AS [Cluster2 Label]` puts `Level 2, number 3` on the third box if it is a second-level one.
A common use is `'sortv={clc}' AS [Cluster Attributes]`, which tells layouts that sort their boxes, such as `osage`, to keep them in the order of the query.
See [Placeholders](/docs/placeholders/).

## Where to see it

The [kanban board](/examples/kanban-board/) puts a column of tasks in a cluster for each status. The [bands by decade](/examples/rock-bands-by-decade/) example nests a box for each genre inside a box for each decade, and the
[London Underground](/examples/london-underground-views/) example groups stations by district and postcode area. Each download holds the whole script.
