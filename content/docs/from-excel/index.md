---
description: "For users of Relationship Visualizer (Excel to Graphviz): what carries over to Graph Modeler, what changed, and what was left out."
---

# Coming from the Excel tool

Graph Modeler grows out of **Relationship Visualizer**, also known as **Excel to Graphviz**: a tool that runs inside Microsoft Excel and draws
graphs with Graphviz from rows in a worksheet. It has its own site at [exceltographviz.com](https://exceltographviz.com), and it is made by the
same author. It stays available. This page is for people who know it and want to know what carries over.

Where this site says "the Excel tool", that is what it means.

## What is the same

- **The rows and the styles.** A graph is rows of items and relationships, and styles that give them a look, as on the Excel tool's Data and
  Styles worksheets. The columns have the same names and the same meaning, down to the rules for what makes a row a node, an edge or a
  cluster.
- **Views.** A view is a named set of the styles that are in use, as before.
- **SQL.** A script of `SELECT` statements and commands builds the rows. The commands, the columns that a query can return and the
  advanced ones such as `ENUMERATE`, `ITERATE` and `TREE QUERY` (see [SQL extensions](/docs/sql-extensions/)) are carried over, so scripts written for the Excel tool mostly run unchanged. The SQL can also use `WITH RECURSIVE`, which the Excel tool's SQL could not, to walk a tree: see [Walk a tree](/docs/sql-extensions/tree-query/).
  See [the SQL tab](/docs/sql/).
- **The Knowledge Graph.** It is the same format, [RV-KGF](https://github.com/jjlong150/rv-kgf), and the two tools write the same file for the
  same data, so the files can be compared.
- **SVG post-processing.** The standard rules are the same.

## What opens

The Excel tool's **exchange files**, the `.json` files its Exchange tab writes, open directly in Graph Modeler. They are converted as they are
opened, and saving writes Graph Modeler's own project file.

**This goes one way.** Graph Modeler reads exchange files and does not write them, so a project cannot be sent back to the Excel tool, and
there are no plans to add that. Keep your exchange files if you may want to use them there again.

Files written by version 11 of the Excel tool carry their views and their properties, and those come across as they are. Older files do not name
their views, so their views come in as **View 1**, **View 2** and so on, and they have no properties. If you have an older file, export it again from
version 11 and open that.

## What is different

Some of this is on purpose: where the Excel tool did something only because it lived in Excel, Graph Modeler does not.

- **A project is a file**, in JSON, and not a workbook. There are no worksheets to hide or show, and no ribbon. The tabs are fixed, in four
  named groups (Data, Look, Output and More), and one toolbar row sits over each.
- **Queries run on SQLite**, not on the database engine of Excel and Access. Most queries are unchanged, a few functions are different, and the
  [SQL tab](/docs/sql/) page lists what is reproduced. Data comes from files that you name: Excel and LibreOffice workbooks, CSV files, Access databases and SQLite databases. The workbook
  that holds a project does not exist here, and MySQL and Postgres are not supported yet. A query returns at most 100,000 rows, and one that never ends is stopped with a message.
- **Publishing** has a template for the file name, with a date and time or a counter, in place of the Excel tool's switches. The files it writes are
  listed in the left pane, and nothing is opened for you.
- **Units** are a setting of the project, inches or millimeters, in place of the Millimetres box of the node designer. The file says which it uses, and the
  [lengths in the Designer and the packing settings](/docs/units-and-packing/) follow it.
- **Packing** is a setting of the whole graph, for every layout except patchwork, in place of a cluster style for osage only. The pack mode has all four choices, not two.
- **Graph type and direction** are the buttons on the Diagram tab. `PREVIEW AS DIRECTED GRAPH` and `PREVIEW AS UNDIRECTED GRAPH` in a script are
  read and ignored.
- **Some things are gone**: the buttons for GVEdit and for external web viewers, the option to keep the `.gv` file, the Extensions and
  Diagnostics tabs, and the settings that described worksheet layout.
- **An app for Windows, macOS and Linux**, in place of a workbook that needs Excel on Windows or macOS, with a light and a dark theme.

## What is new

These are things the Excel tool does not have. Most of them are for the days when you would rather not write SQL, or when someone else has to use what you built.

- **The Mappings tab.** Choose a spreadsheet, a CSV file or a database, say which columns hold the names, the labels and the styles, and Graph Modeler writes the SQL line for
  you. A mapping is a line of the same script that the SQL tab runs, so it sits beside the SQL you write by hand. See [The Mappings tab](/docs/mappings/).
- **Parameters.** A `SET PLACEHOLDER` line, which the Excel tool also has, can now carry a question in a comment above it, and the left pane shows a box for each placeholder of the
  script. Type a value, press **Run SQL**, and watch the graph change. See [Placeholders](/docs/placeholders/) and [the left pane](/docs/left-pane/#parameters).
- **Simple mode.** A switch in the title bar turns the window into a smaller one for someone who is given a finished model: choose a file, type the values it asks for, and press
  Run. See [Simple mode](/docs/simple-mode/).
- **Save a copy for sharing.** Give a project to someone else with or without its results, or only the graph, after a check of what would not work for them. See
  [Save a copy for sharing](/docs/sharing/).
- **Undo and redo.** They step through your changes, which a workbook cannot offer once a macro has run, because Excel clears its undo history then. See [the left pane](/docs/left-pane/).
- **Find and replace.** **Ctrl+F** searches the Data, Styles, SQL, DOT and Knowledge Graph tabs, and **Ctrl+H** replaces. See [Find and replace](/docs/find-and-replace/).
- **Other languages.** The Excel tool speaks English, French, German, Italian and Polish. Graph Modeler comes with those, and with Spanish, Russian, Chinese, Japanese,
  Portuguese and Korean, and with a British-spelling English. Polish was translated and reviewed by a person; the others are machine translations, marked as such, until a person has
  reviewed them. You can also add a language file of your own. This website and the license stay in English. See [Languages](/docs/languages/).

## If something does not match

If the same data gives a different graph in the two tools, that is worth a message. See [Support](/support/).
