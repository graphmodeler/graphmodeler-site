# The SQL tab

The SQL tab builds the rows of the Data tab from queries, so a graph can come from data you already keep in an Excel workbook or an
Access database. Each line of the script is a command or a `SELECT`. **Run SQL** runs the lines in order and replaces the rows of the
Data tab with what they produce, as one step that **Undo** puts back.

<img class="shot shot-light" src="/shots/sql-light.png" alt="The SQL tab after a run, with a mark beside each line">
<img class="shot shot-dark" src="/shots/sql-dark.png" alt="The SQL tab in the dark theme">

## Where the data comes from

- **Excel workbooks** (`.xlsx`). Each worksheet is a table named after it, and its first row gives the column names. Write
  `FROM [Steps$]` or `FROM [Steps]`.
- **Access databases** (`.mdb` and `.accdb`). Each table is a table, with its own column names: `FROM [timeline]`. Only the tables are
  read. Saved queries, linked tables and password-protected databases are not supported.

Queries run on SQLite and cannot change the file or any other file. A file name that is not complete is taken from the
folder the project is saved in.

### Which file a line uses

The first of these that applies:

1. The **Data File** on the line itself.
2. The file named on the last `SET DATA FILE` line above it.
3. The file chosen in the **Data source list** on the toolbar, in the folder chosen beside it.
4. No file. The statement then has no tables, which is enough for `SELECT 'node' AS [Item]`.

Naming the file on each line is how one script puts several files together: the same query against `Jan.xlsx` and then `Feb.xlsx`, or
some columns from one file and some from another.

## Writing a query

Name the columns of the result after the columns of the Data tab, in any case and with or without spaces: `Item`, `Label`,
`External Label`, `Tail Label`, `Head Label`, `Tooltip`, `Related Item`, `Style Name` and `Attributes`. Other columns are ignored.

```sql
SELECT [Step] AS [Item], [Kind] AS [Style Name] FROM [Steps$]
```

```sql
SELECT [From] AS [Item], [To] AS [Related Item], [Label], [Kind] AS [Style Name] FROM [Flows$]
```

The two lines above, run against a workbook with a `Steps` sheet and a `Flows` sheet, make the graph in the screenshot: the first line
makes the nodes and the second makes the edges. The rows come out in the order the lines are written.

Queries written for the [Excel tool](/docs/from-excel/) this app grew out of mostly run unchanged. `&` joins text, double quotes can hold a string, and the Jet functions
`Len`, `Mid`, `UCase`, `LCase`, `Nz`, `CLng`, `CInt`, `CDbl`, `CStr`, `IsNumeric`, `Left`, `Right` and `Switch` are there. Some
things Jet does and SQLite does not are not, such as `Format` and `DateDiff`, and the message of the line says so.

## Commands

| Line | What it does |
| --- | --- |
| `RESET` | Throws away the rows produced so far. |
| `SET DATA FILE` | The line's Data File is used for the lines after it. |
| `SET PLACEHOLDER name = value` | Puts `value` where `{name}` is written in the lines after it. |
| `SET CLUSTER LEVEL LIMIT = n` | Limits how many levels of clusters a query makes. |
| `PUBLISH` | Writes the files, as the Publish button does, with the rows produced so far. |
| `PREVIEW` | After the script, draws the diagram and shows the Diagram tab. |
| `PREVIEW AS KNOWLEDGE GRAPH` | After the script, shows the Knowledge Graph tab. |

### PUBLISH

```
PUBLISH                                  the chosen view, as the Write buttons say
PUBLISH ALL VIEWS                        every view, as the Write buttons say
PUBLISH AS KNOWLEDGE GRAPH               the chosen view, the Knowledge Graph only
PUBLISH ALL VIEWS AS KNOWLEDGE GRAPH     every view, the Knowledge Graph only
PUBLISH AS UNDIRECTED GRAPH              the chosen view, drawn undirected for this publish
PUBLISH ALL VIEWS AS DIRECTED GRAPH Q3   every view, drawn directed, with the file name prefix Q3
```

A word or words at the end are the prefix of the file name, for this publish only. A script can publish, `RESET`, make other rows, and
publish again. If a file name has a counter, each publish takes the next number, so no line overwrites another.

## How each line went

A mark beside the **#** shows how a line ran, and fills in as the script goes:

- A **green box with a check** is a line that ran.
- A **red box with a cross** is a line that failed. Hover over it to read why. Every failure is also listed in the left pane, with its
  row number.
- A line that is commented out, or left out by the filter, has no mark.

A mark goes away when you edit its line, because nothing yet says whether the change put it right. The broom button takes every mark
away. A line that is neither a `SELECT` nor a command fails, and its message lists the commands.

## Filters

Each line can carry a tag in a **filter column**, and a script can have several filter columns. Choose a filter column and a tag
on the toolbar, and only the lines with that tag run. The others are skipped. A project can have a column for each task it does,
such as "weekly" and "audit", and one script holds them all.

## Clusters, sequences and trees

Some result columns do more than fill a cell.

- **Clusters.** `Cluster` and `Subcluster` columns put rows into nested clusters, with `Cluster Label`, `Cluster Style Name`,
  `Cluster Attributes` and `Cluster Tooltip` to describe them. `Cluster1`, `Cluster2` and so on go deeper. `%clc%` and `%scc%`
  stand for the cluster and subcluster number.
- **`ENUMERATE`** repeats a row for every number in a range (`START AT`, `STOP AT`, `STEP BY`), with `{step}` in any value.
  **`CREATE EDGES`** links consecutive rows into a chain. **`CREATE RANK`** collects the items of a query into one line that tells
  Graphviz to align them.
- **`ITERATE`** runs one query for each ID that another query returns, for header and detail data. **`CONCATENATE`** joins many
  detail rows into one value.
- **`TREE QUERY`** follows a hierarchy stored as rows, such as an org chart or a route map, down from a starting row.

These come from the [Excel tool](/docs/from-excel/), and a script that uses them runs here.
