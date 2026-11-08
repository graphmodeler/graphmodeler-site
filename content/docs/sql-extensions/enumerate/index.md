---
title: "Enumerate values"
description: "ENUMERATE makes a row for every number in a range, so a query can fill the gaps in a sequence of years or build a timeline. See the columns, the limits and examples."
---

# Enumerate values

`ENUMERATE` makes a query repeat for every number in a range. It makes data that is not in any table, so it fills the gaps in a sequence. Take a
timeline of events in 1972, 1976 and 1990: a node for each year that has an event would put 1976 next to 1990 as if they were a year apart.
A node for every year from the first to the last keeps the spaces between them.

## The columns

| Column | What it holds |
| --- | --- |
| `ENUMERATE` | `TRUE` to switch the loop on. |
| `START AT` | The first number. |
| `STOP AT` | The last number, which is included. |
| `STEP BY` | The amount to add each time. It can be negative, to count down. |
| `MAX CYCLES` | Optional. The most rows the query may make. |

Each number replaces `{step}` wherever it is written in the other columns of the row: `Item`, `Label`, `Style Name`, `Attributes` and so on.

## Examples

A node for every second number:

```sql
SELECT TRUE AS [ENUMERATE], 1 AS [START AT], 5 AS [STOP AT], 2 AS [STEP BY],
       '{step}' AS [Item], 'Year {step}' AS [Label], 'Year' AS [Style Name]
```

It makes three rows, with the items `1`, `3` and `5`. A query like this needs no table, so it has no `FROM`.

The range can come from the data. This makes a node for every year from the earliest in the sheet to the latest:

```sql
SELECT TRUE AS [ENUMERATE], MIN(CLng([Year])) AS [START AT], MAX(CLng([Year])) AS [STOP AT],
       1 AS [STEP BY], '{step}' AS [Item], '{step}' AS [Label]
FROM [shells$]
WHERE IsNumeric([Year])
```

If a year is added to the sheet, the next run has a node for it, and for the years between. `WHERE IsNumeric` leaves out a value that is not a year, such as the word `future`.

With [`CREATE EDGES`](/docs/sql-extensions/chaining/), the numbers are linked into a chain instead:

```sql
SELECT TRUE AS [CREATE EDGES], TRUE AS [ENUMERATE], 1965 AS [START AT], 1969 AS [STOP AT],
       1 AS [STEP BY], '{step}' AS [Item]
```

It makes four edges, `1965` to `1966`, `1966` to `1967`, `1967` to `1968` and `1968` to `1969`: one fewer than the numbers, because a chain of five has four links.
The two queries together are the backbone of a timeline: the nodes with their style, and the edges between them.

## Things to know

- **Counting down.** `10 AS [START AT], 1 AS [STOP AT], -3 AS [STEP BY]` makes `10`, `7`, `4` and `1`.
- **A range that cannot be reached.** If the step goes the wrong way, as in `5` to `1` by `1`, the query makes a single row, with `{step}` set to 1.
- **A limit of 10,000.** One query makes at most 10,000 rows, which stops a typing mistake such as an extra zero from filling the grid. `MAX CYCLES` sets a lower limit, or a higher one.
- **Whole numbers.** The three numbers are read as whole numbers, and a value that is not a number is read as 0.
- **A step of 0** is read as 1.

## Where to see it

The [timeline roadmap](/examples/timeline-roadmap/) example uses it to make a node for every year, and chains them with `CREATE EDGES`. Its download holds the whole script.
See also the [Placeholders](/docs/placeholders/) page for `{step}` and the other counters, and [Iterate query results](/docs/sql-extensions/iterate/) for the other kind of loop.
