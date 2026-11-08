---
# A DRAFT: it is left out of the finished site until this line says false (or is removed). Look at it with `npm run dev`.
draft: false
title: "Org chart from a spreadsheet"
tagline: "A recursive query walks the reporting line."
description: "An organization chart centered on one employee, drawn from a spreadsheet of employees and their supervisors with recursive WITH queries, with its Knowledge Graph."
thumbnail: /examples/org-chart-from-a-spreadsheet/thumbnail.webp
order: 5
facts:
  - "11 nodes, 10 edges"
  - "dot layout, top to bottom"
  - "made-up data"
---

# Org chart from a spreadsheet

<ExampleFacts />

<!--
NOTE FOR THE AUTHOR: the Knowledge Graph section describes version 1.0.1 and later. Numbers were checked in the file: 11 nodes (7 leaders and 4 team boxes), 10 edges, 4,115 characters compact (about 1,100 tokens).
-->

This is an organization chart centered on one employee: the leaders above them, up to the CEO, the managers below them, and a box that lists each manager's team. It is drawn from a spreadsheet of employees and their supervisors, and any employee in the
spreadsheet could be the center. The people in the file are made up.

<ExampleDiagram image="/examples/org-chart-from-a-spreadsheet/org-chart.svg" interactive="/examples/org-chart-from-a-spreadsheet/org-chart-interactive.svg" alt="An org chart: the chosen employee, three levels of leaders above, one level of teams below" caption="It opens in a new tab, where it can be zoomed and hovered." />

## Key aspects

- **Recursive queries.** A `WITH RECURSIVE` query starts from one employee and follows the supervisor column, to a depth that is set: one query goes down the reporting lines and one goes up, and each makes the edges and the nodes in one statement. The Excel tool had to use `TREE QUERY` for the same walk, which still works here. See [Walk a tree](/docs/sql-extensions/tree-query/).
- **Placeholders choose whose chart it is.** The employee, and how many levels to go up and down, are three values at the top of the SQL tab. Change them and run the SQL again, and the chart is another person's. See [Placeholders](/docs/placeholders/).
- **A team is one node.** Each manager's team is a single box whose label lists the people, which is how the diagram draws it. See [Concatenate values](/docs/sql-extensions/concatenate/). In the Knowledge Graph it is one node with a long label, so a program asking who reports to a manager finds one text and not a node for each person.

```sql
WITH RECURSIVE below(id, boss, depth) AS (
  SELECT [Employee ID], [Supervisor ID], 1 FROM [employees$]
  WHERE [Is People Leader] = TRUE AND [Supervisor ID] = '{id_number}' AND {max_down} > 0
  UNION ALL
  SELECT e.[Employee ID], e.[Supervisor ID], b.depth + 1
  FROM [employees$] e JOIN below b ON e.[Supervisor ID] = b.id
  WHERE e.[Is People Leader] = TRUE AND b.depth < {max_down}
)
SELECT boss AS [Item], id AS [Related Item], 'Leader to Leader' AS [Style Name] FROM below
```

*The recursive query that goes down from the chosen employee, shortened to its edges. The one in the download also makes the nodes of the leaders below and the links to their teams.*

## Knowledge Graph

The chart as a Knowledge Graph: 11 nodes (seven leaders and four team boxes) and 10 edges, about 4,100 characters written compactly, or an estimated 1,100 tokens, small enough to read in full. The leaders' labels keep their formatting. A program can follow the chain of command,
for example that Wade Greer and Julius Frey stand between Jamison Ford and the CEO.

<ExampleKnowledgeViewer light="/examples/org-chart-from-a-spreadsheet/org-chart-knowledge-graph-viewer-light.html" dark="/examples/org-chart-from-a-spreadsheet/org-chart-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the org chart, in the viewer of Graph Modeler" :height="560" />

See [The Knowledge Graph tab](/docs/knowledge-graph/).

## Download

<ExampleDownload file="/examples/org-chart-from-a-spreadsheet/org-chart-example.zip" size="103 KB">
The project, the spreadsheet and the Knowledge Graph.
</ExampleDownload>

The project uses `WITH RECURSIVE`, which needs Graph Modeler 1.1.0 or later.

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.
