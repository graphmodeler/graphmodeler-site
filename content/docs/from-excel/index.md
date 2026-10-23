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
  advanced ones such as `ENUMERATE`, `ITERATE` and `TREE QUERY` are carried over, so scripts written for the Excel tool mostly run unchanged.
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

- **A project is a file**, in JSON, and not a workbook. There are no worksheets to hide or show, and no ribbon. The tabs are fixed, and
  one toolbar row sits over each.
- **Queries run on SQLite**, not on the database engine of Excel and Access. Most queries are unchanged, a few functions are different, and the
  [SQL tab](/docs/sql/) page lists what is reproduced. Data comes from Excel workbooks and Access databases that you name; the workbook
  that holds a project does not exist here, and MySQL and Postgres are not supported yet.
- **Publishing** has a template for the file name, with a date and time or a counter, in place of the Excel tool's switches. The files it writes are
  listed in the left pane, and nothing is opened for you.
- **Graph type and direction** are the buttons on the Diagram tab. `PREVIEW AS DIRECTED GRAPH` and `PREVIEW AS UNDIRECTED GRAPH` in a script are
  read and ignored.
- **Some things are gone**: the buttons for GVEdit and for external web viewers, the option to keep the `.gv` file, the Extensions and
  Diagnostics tabs, and the settings that described worksheet layout.
- **A dark theme**, and a Windows, Linux and (being tested) macOS version in place of Excel on Windows.
- **The app is in English** for now.

## If something does not match

If the same data gives a different graph in the two tools, that is worth a message. See [Support](/support/).
