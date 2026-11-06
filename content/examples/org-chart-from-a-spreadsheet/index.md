---
# A DRAFT: it is left out of the finished site until this line is removed (or set to false). Look at it with `npm run dev`. This is the advanced example (recursion), so it comes after the simpler ones.
draft: true
title: "Draw an org chart from an employee spreadsheet"
description: "Turn a spreadsheet of employees and their supervisors into an org chart with Graph Modeler: tree queries walk the reporting lines up and down from any person, and the diagram can be zoomed and hovered."
date: 2026-11-06
audience: [consultants]
---

# Draw an org chart from an employee spreadsheet

<ExampleMeta />

<!--
NOTES FOR THE AUTHOR (these comments are not shown on the page)

Everything below the headings is a first outline built from the project in the zip, so that the facts are right. Rewrite it in your own voice. What I checked
against the project and the app: the six columns, the four placeholders, the five kinds of SQL line, that the SQL runs with no problems when the spreadsheet is
in the project's folder, and that the diagram drew with no Graphviz error. What I did not check, and you know better: why you built it this way, what the
recursion is doing in plain words, who needs this, and how long it takes you.

Ideas for the opening: the question a client really asks ("who reports to whom, three levels up and one down, from this person?"), and why a drawing
tool is the wrong answer when the HR export changes every month.
-->

Opening paragraph: what the reader has (an export from an HR system, one row per person, with the supervisor's ID on each row) and what they want (a chart of one
person's place in the organization, which they can hand to a client or paste into a deck).

<ExampleDiagram image="/examples/org-chart-from-a-spreadsheet/org-chart.svg" interactive="/examples/org-chart-from-a-spreadsheet/org-chart-interactive.svg" alt="An org chart: the chosen employee, three levels of leaders above, one level of teams below" caption="Zoom with the mouse wheel, drag to move, and hover over a box for the employee's ID. It opens in a new tab." />

## The data

One sheet, `employees`, with a row for each person. The columns the example uses:

| Column | What it holds |
| --- | --- |
| Employee ID | A unique ID such as `EID-0589`. |
| Employee Name | The person's name. |
| Job Title | Their title. |
| Department Name | Their department. |
| Supervisor ID | The Employee ID of the person they report to. |
| Is People Leader | TRUE for someone who has people reporting to them. |

The people in the file are made up.

## The model

Describe, in the order you would explain it to a colleague, what the SQL tab does. The project has these kinds of line:

- **Settings.** `SET DATA FILE` names the spreadsheet, and four `SET PLACEHOLDER` lines (`id_number`, `max_down`, `max_up`, `include_associates`) choose whose chart it is and how far to go.
- **The person in the middle.** A plain `SELECT` that makes one node for the chosen employee, with a label built from the name, title and department.
- **The leaders below, and above.** A **tree query** that starts from one employee and follows the supervisor column, to a depth you set (`MAX DEPTH`), once downward and once upward.
- **The teams.** A line that repeats (`ITERATE`) to make one box per leader listing the people who report to them, instead of one box per person.

Show one of the queries in a code block and say what each part does. Add a screenshot of the SQL tab (put it in `content/public/shots/`, in a light and a dark version).

## The same model as a Knowledge Graph

<!--
NOTE FOR THE AUTHOR: like the London article, this section describes version 1.0.1 and later (the Knowledge Graph follows the stand-alone node settings), so publish it after 1.0.1 is out. Facts checked in the real file:
11 nodes (7 leaders and 4 team boxes), 10 edges, 4,115 characters written compactly (about 1,100 tokens by the viewer's estimate; the indented file in the download is 5,541). The chain of command below was read from the
edges. The viewer pages are made by tools/make-knowledge-viewer.mjs in the app's repository.
-->

The same rows and styles also make a **Knowledge Graph**, a JSON file that a program or an AI assistant can read. This one is small enough to read in full, in the same viewer the app has on its **Knowledge Graph** tab. Try the **Tree** view,
and **Search** for a name.

<ExampleKnowledgeViewer light="/examples/org-chart-from-a-spreadsheet/org-chart-knowledge-graph-viewer-light.html" dark="/examples/org-chart-from-a-spreadsheet/org-chart-knowledge-graph-viewer-dark.html" title="The Knowledge Graph of the org chart, in the viewer of Graph Modeler" :height="560" />

- **Seven leaders and four team boxes are the 11 nodes.** Each leader has the style `Department`, `Department Below` or `Department Above`, and a label that keeps its formatting: the label's `type` is `html`, because the name is in bold above the title and the department.
- **The 10 edges say who reports to whom.** The ones with the style `Leader to Leader` run from a leader to the leader below, and `Leader to Associate` from a leader to the box that lists their team.
- **The file is about 4,100 characters written compactly, roughly 1,100 tokens**, the line of counts in the viewer says.

### Ask the file a question

- **Who stands between Jamison Ford and the CEO?** Wade Greer, the VP of IT Infrastructure, and Julius Frey, the Chief Information Officer: the edges run from Laci Elliott (CEO) to Julius Frey, to Wade Greer, to Jamison Ford.
- **Who reports to Jamison Ford?** Three managers: Branden Gregory (Service Delivery), Gunnar Fuentes (Middleware) and Mason Knox (Database Administration), and a technical architect, Sydnee Haney, in his team box.

One thing the file shows that the picture hides: each team is **one node** whose label lists the people, because that is how the diagram draws it, as a box. A program asking "who reports to Gunnar Fuentes?" finds one node with a long text, not eleven
people. If you want the answer as data, give each person a node of their own, which the model can do (and the diagram can still draw as a box, with another style). The picture and the graph come from the same rows, so how you model them matters twice.

## Make it yours

Change `id_number` to another employee's ID, or raise `max_up` to see further up the organization, press **Run SQL**, and the diagram follows. Everything that is not in the SQL (colors, shapes, which
edges are drawn) is set in the **Styles** and **Settings** tabs; see [Styles](/docs/styles/) and [Settings](/docs/settings/).

## Try it yourself

<ExampleDownload file="/examples/org-chart-from-a-spreadsheet/org-chart-example.zip" size="105 KB">
The project, the spreadsheet and the Knowledge Graph. Unzip them into one folder and open <code>org-chart.json</code> in Graph Modeler.
</ExampleDownload>

If you use Graph Modeler for client work, a [commercial license](/pricing/) is needed; for learning and your own projects it is free.

## Related

- [The SQL tab](/docs/sql/#clusters-sequences-and-trees) explains tree queries, and the rest of the page the placeholders and commands.
- [The SVG tab](/docs/svg/) explains the post-processing that gives a published diagram its zoom, tooltips and highlighting, and [Publishing](/docs/publishing/) how to write the file.
