# Placeholders

A **placeholder** is a word in braces, such as `{label}`, that Graph Modeler replaces with a value when it builds the graph. They let one
piece of text serve many rows: a style can wrap every label in the same markup, and a query can number its rows and clusters. This page
lists the placeholders that are built in, says where each one works, and shows how to make your own.

All placeholders are written the same way, `{name}`, and capital letters do not matter: `{Label}` is the same as `{label}`. A placeholder
that nothing replaces is left as it was typed, so a mistake is easy to see.

## Where placeholders work

| Where | Placeholders | Replaced by |
| --- | --- | --- |
| The **Format** of a style on the [Styles](/docs/styles/) tab | `{label}`, `{xlabel}`, `{taillabel}`, `{headlabel}` | The row's own text |
| The values a query returns on the [SQL](/docs/sql/) tab | `{rsc}`, `{clc}`, `{scc}`, `{level}`, `{step}` | A count |
| The detail query of `ITERATE` | `{id}` | The ID being worked on |
| The queries after a `SET PLACEHOLDER` line | `{name}`, for a name you choose | The value you gave it |
| The file names that [Publish](/docs/publishing/) writes, and the prefix a `PUBLISH` line gives | `{prefix}`, `{view}`, `{version}`, `{date}` and others | Parts of the name |

The rest of this page goes through the first four. The file name placeholders have their own table on the
[Publishing](/docs/publishing/#the-template) page.

## In labels

A style's **Format** may set a label for the things that use it. If the format has `{label}` in it, the label of the row goes there. This
is how a style puts the same frame around every label, such as a bold word, a bracket or a picture:

```text
shape=box label="Team: {label}"
```

A row with the label `Billing` is then drawn as `Team: Billing`. The four placeholders are:

| Placeholder | Is replaced by |
| --- | --- |
| `{label}` | The row's **Label** |
| `{xlabel}` | The row's **External Label** |
| `{taillabel}` | The row's **Tail Label**, on an edge |
| `{headlabel}` | The row's **Head Label**, on an edge |

They can be used in a style's label, external label, tail label, head label or tooltip. They are most useful in HTML-like labels, where a
table can hold a picture beside the text:

```text
label=<<table border="0" cellborder="0"><tr><td><img src="server.png"/></td><td>{label}</td></tr></table>>
```

The style [preview](/docs/styles/) on the Styles tab has no row to take a label from, so it shows a placeholder as it was typed. The
same placeholders are used when the [Knowledge Graph](/docs/knowledge-graph/) is made, so the labels there match the diagram.

## In the values of a SQL query

A query on the SQL tab can number the rows it produces, and the clusters it makes. Write the placeholder in any text value of the result,
and the number is put there as the rows are made.

| Placeholder | Is replaced by |
| --- | --- |
| `{rsc}` | The position of the row in the results of its statement: 1 for the first, 2 for the second. Each statement starts again at 1. The count carries on across the detail queries of an `ITERATE`. |
| `{clc}` | The number of the cluster. With `Cluster1`, `Cluster2` and deeper columns, a running total of the clusters opened so far, at every level. |
| `{scc}` | The number of the subcluster inside its cluster, starting again at 1 in each cluster. With `Cluster1`, `Cluster2` and deeper columns, the number of the cluster among those at its level inside its parent. |
| `{level}` | How deep a cluster is, with `Cluster1`, `Cluster2` and deeper columns: 1 for the outermost. |
| `{step}` | The number in an `ENUMERATE` loop, as it goes from `START AT` to `STOP AT`. |
| `{id}` | In the `SQL FOR DATA` query of an `ITERATE`, the ID being worked on. |

`{rsc}` and `{step}` may be used in any value. `{clc}` and `{scc}` are for the cluster columns: **Cluster Style Name** and
**Cluster Attributes**, and the same two for subclusters. When the clusters are written as `Cluster1`, `Cluster2` and deeper, they work in
every cluster column and in the values of the rows as well. Some examples:

```sql
SELECT [Task] AS [Item], 'sortv={rsc}' AS [Attributes] FROM [plan$]
```

Every node gets `sortv` set to its position in the results, so layouts that sort by it keep the order of the sheet.

```sql
SELECT [Name] AS [Item], [Region] AS [Cluster], 'sortv={clc}' AS [Cluster Attributes] FROM [sites$]
```

Each region's cluster gets `sortv` set to its own number.

```sql
SELECT TRUE AS [ENUMERATE], MIN(CLng([Year])) AS [START AT], MAX(CLng([Year])) AS [STOP AT],
       1 AS [STEP BY], '{step}' AS [Item], '{step}' AS [Label]
FROM [shells$]
```

One node for each year, from the earliest in the sheet to the latest. The [SQL tab](/docs/sql/#clusters-sequences-and-trees) says more about `ENUMERATE` and `ITERATE`.

### The Excel tool's spelling

The Excel tool wrote the three counters between percent signs: `%clc%`, `%scc%` and `%rsc%`. Graph Modeler writes them in braces like all
the others, and the old spelling still works wherever the new one does. A script from the Excel tool needs no change, and a project or an exchange
file that has the old spelling in its settings is given the new one when it is opened. Use either, but the braces are the form to learn.

## Your own placeholders

A line in a SQL script can define a placeholder of its own:

```sql
SET PLACEHOLDER year = 2026
```

From then on, every `{year}` in the **queries** after that line is replaced by `2026` before the query is run:

```sql
SELECT [Name] AS [Item] FROM [sales$] WHERE [Year] = {year}
```

This keeps a value that changes, such as the year or the month to look at, in one place at the top of the script. The replacement is
plain text, so write the value as the query needs it: `'West'` with its quotes for a text value, and without quotes for a number. A later
`SET PLACEHOLDER` with the same name replaces the value for the lines that follow it. Placeholders you define work in queries, not in the
values the queries return.
