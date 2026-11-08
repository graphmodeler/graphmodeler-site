---
title: "Concatenate values"
description: "CONCATENATE joins the rows of a detail query into one value, such as a label that lists every country of a continent or every member of a team. See the columns and examples."
---

# Concatenate values

[Iterating](/docs/sql-extensions/iterate/) runs a detail query for every value of a first query and keeps all the rows each run makes. **Concatenation** keeps one row instead. For each row of the first
query it runs the detail query, joins the values the detail query returns into one text, and puts that text into a column of the row. It is how a node
gets a label that lists the countries of a continent, the people of a team or the songs of a playlist, from a table that has one row for each country, person or song.

## The columns

A concatenation is an `ITERATE` with five more columns. `ITERATE`, `SQL FOR ID` and `SQL FOR DATA` are described on the [Iterate query results](/docs/sql-extensions/iterate/) page, and the first query must return an `ID` column.

| Column | What it holds |
| --- | --- |
| `CONCATENATE` | `TRUE` to join the rows of each run into one value, instead of keeping them. |
| `FIELD` | The name of the column of the detail query whose values are joined. |
| `ASSIGN TO` | The name of the column that receives the joined text. |
| `PREFIX` | Optional. Text put before the first value. |
| `SEPARATOR` | Optional. Text put between the values. |
| `SUFFIX` | Optional. Text put after the last value. |

`FIELD` and `ASSIGN TO` are both needed. Without them the query is an ordinary iteration.

## Examples

A sheet `countries` has a `Country`, a `ContinentCode` and a `Continent` column. This makes one node for each continent, with its countries listed one under the other:

```sql
SELECT
  TRUE AS [ITERATE],
  'SELECT DISTINCT [ContinentCode] AS [ID], [Continent] AS [Item], [Continent] AS [External Label],
          [Continent] AS [Label], ''Rectangle'' AS [Style Name]
     FROM [countries$]' AS [SQL FOR ID],
  'SELECT [Country] AS [Label] FROM [countries$] WHERE [ContinentCode] = ''{id}''' AS [SQL FOR DATA],
  TRUE    AS [CONCATENATE],
  'Label' AS [FIELD],
  'Label' AS [ASSIGN TO],
  '\n'    AS [SEPARATOR]
```

The first query makes a row for each continent, with its name as the label. The second returns the countries of one continent, and `FIELD` says that its `Label` column is the one to join. The joined text goes into
the `Label` column of the continent's row, in place of the continent's name, with `\n` between the countries. Each continent is one row, a node with a list of its countries.

Added to the same query, a `PREFIX` and a `SUFFIX` make the text a label for a record-shaped node, where `|` separates the fields:

```sql
  '{' AS [PREFIX], '|' AS [SEPARATOR], '}' AS [SUFFIX]
```

The label of Antarctica is now `{Antarctica|Bouvet Island|South Georgia and the South Sandwich Islands|Heard Island and McDonald Islands|French Southern Territories}`.

Spaces at the ends of a prefix, a separator and a suffix are kept, so the text can be a sentence. (Before version 1.1.0 they were dropped.)

```sql
  'The countries in Antarctica are ' AS [PREFIX], ', ' AS [SEPARATOR], '.' AS [SUFFIX]
```

The label is now `The countries in Antarctica are Antarctica, Bouvet Island, South Georgia and the South Sandwich Islands, Heard Island and McDonald Islands, French Southern Territories.`

The joined text can go in any column, not only the one it was read from. Joining the names into the `Tooltip` column, with `', '` as the separator, leaves the label alone and shows the list when the pointer is over the node.

## Things to know

- **Use `DISTINCT` in the first query.** Each row of the first query makes a row, and the detail query is run for each. A first query that returns a continent five times makes five identical nodes. An ordinary `ITERATE` skips an ID it has seen, and a concatenation does not.
- **Empty values are left out.** A row of the detail query with nothing in `FIELD` adds nothing, and no separator.
- **A header with no detail rows** gets the prefix and suffix and nothing between them.
- **The row keeps its other columns.** Whatever the first query returns, such as `Item`, `Style Name` and `External Label`, is kept, and `ASSIGN TO` adds or replaces one column of it.
- **The detail query is text,** so a single quote inside it is written twice, as in [Iterate query results](/docs/sql-extensions/iterate/).

## Where to see it

The [org chart](/examples/org-chart-from-a-spreadsheet/) uses it to make each manager's team one node, with a label that lists the people on the team. Its download holds the whole script.
