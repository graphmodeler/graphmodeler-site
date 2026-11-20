---
description: "The Mappings tab turns the columns of a spreadsheet, CSV file or database into a graph without writing SQL: choose the columns, and Graph Modeler writes the SQL line."
---

# The Mappings tab

If your data is already in a spreadsheet, a CSV file or a database, the Mappings tab lets you say which columns hold the names, the labels and the styles,
and Graph Modeler writes the SQL for you. You do not need to know SQL to use it, and you can read the SQL it writes if you are curious.

The tab does one thing: it makes **mappings**. A mapping is a line of the script on the [SQL](/docs/sql/) tab that was written by a form instead of by hand. The
Mappings tab keeps a list of them, as the [Styles](/docs/styles/) tab keeps a list of styles, and the SQL tab is where the script is run, so a graph appears on the [Data](/docs/data/) tab only after a run there.

<img class="shot shot-light" src="/shots/mappings-light.png" alt="The Mappings tab: a list of three mappings on the left, and the editor for the edge mapping Reports to on the right, with the SQL it writes under the list">
<img class="shot shot-dark" src="/shots/mappings-dark.png" alt="The Mappings tab in the dark theme">

## The short version

1. Open the **Mappings** tab and press **+**. Choose the file, and the sheet or table if it has several.
2. Choose **Node** or **Edge** at the top. Pick the column that names each item, and, if you want them, the columns for the label and the style.
3. Press **Save**. The mapping is written to the script.
4. Go to the **SQL** tab and press **Run SQL**. The rows appear on the Data tab, and the diagram can be drawn from them.

A graph usually needs more than one mapping: one for the edges, and one or two for the nodes they join. See [Edges and the nodes they join](#edges-and-the-nodes-they-join).

## The two halves of the tab

The tab is split in two, and the divider can be dragged. The split is remembered with the project, and a double click on the divider puts it back to where it started.

**On the left is the list.** It holds every mapping of the project in the order of the script, nodes and edges mixed, each with a pill that says **Node**, **Edge** or
**Placeholder**. Keeping an edge mapping next to the two node mappings it needs makes a project easier to review. Each row has four buttons, the same as on the SQL tab:

- **Edit** loads the mapping into the editor.
- **Move up** and **Move down** move it in the script, past the mapping next to it. The SQL tab shows the same order, because it is the same script.
- **Delete** removes the mapping and its line of SQL. **Undo** brings it back.

Double-click a name to rename it. Under the list, a row named **SQL** opens an area that shows the SQL of the mapping you are editing, or of the one you clicked. It is read only. The row is closed the first time you use the tab, to leave the room to the list, and the app remembers whether you left it open.

**On the right is the editor,** where a mapping is made or changed.

The list does not show the commands or the lines you wrote by hand. They are on the SQL tab, which also decides which lines run, and which are switched off or left out by a filter.

## Choosing the file

The first time, the editor says **Choose a file...**, and so does the **+** button when there is no file yet. The window that opens shows the file, a list of its sheets or tables with the number of rows of each,
and the first five rows, so you can see that it is the right one. The first row is read as the column names, and a column with no heading is named by its position, such as `F3`.

Spreadsheets (`.xlsx` and `.ods`), CSV and TSV files, and Access and SQLite databases can be chosen, the same files the [SQL tab](/docs/sql/#where-the-data-comes-from) reads.

The window also asks what the file is for:

- **This mapping only.** The mapping remembers the file itself. Use this when a project reads several files.
- **The whole project.** The file becomes the project's **Data source**, the one the toolbar of the SQL tab shows, and the mapping reads the project's file. Use this when you will choose a different file each month: the script stays the same.

A note under the choice says what is remembered. A file in the project's data folder is remembered by its name only. A file elsewhere is remembered by its full path, and
a full path is not found on another computer. A project that has not been saved yet has no folder to be next to, so save it in the folder that holds the file first.

The editor then shows the file and sheet, with **Change...** to choose another. Each new mapping starts with the file and sheet you used last, so making a second mapping from the same sheet needs only the
**Node** and **Edge** buttons.

## Making a mapping

Choose **Node** or **Edge** at the top. A node needs an **Item**. An edge needs an **Item** and a **Related item**, the two ends of the connection. Nothing is guessed:
if a column is not chosen, **Save** says which one is missing.

| Field | What it is |
| --- | --- |
| **Item** | The column that names each node, or the first end of each edge. |
| **Related item** | For an edge, the column that names the other end. |
| **Label** | The text drawn on the node or edge. A node's label follows the Item column until you change it. An edge has no label unless you give one. |
| **Style name** | The column, or the fixed text, that names the style. |

Above the fields, **Name of the mapping** is the name it has in the list, and a made-up one is offered. The arrows beside **Sample row** step through the first rows of the file.

Under each field, an **Example** line shows what the field makes for the sample row, so you can see the result before you save. A node's **Use each Item only once** is ticked
from the start, so a node that appears on many rows is made once. Rows with no Item are skipped.

### Fields made of several columns

Every text field is a row of boxes: **text before**, a **column**, and **text after**. The plus button adds another part after this one, and the minus button removes it. The parts are joined, so one field can be built from several columns:

| Text before | Column | Text after | Makes |
| --- | --- | --- | --- |
| `personnel_` | `ID` | | `personnel_1047` |
| | `Last name` | `, ` | `Long, ` |
| | `First name` | | `Long, Anna` |

- A part whose column is blank for a row **leaves out its text before and after**. A row with no first name gives `Long`, not `Long, `, and a tooltip line that is only a caption such as `Postcode: ` disappears when there is no postcode.
- Leave the column as **(no column)** to use fixed text. An edge label of `inherits from`, the same on every edge, is a part with text and no column.
- The text is only text. A `COUNT(` typed in a box is written as those characters and is not run as a function. For that, write the SQL by hand.
- A [counter](/docs/placeholders/#in-the-values-of-a-sql-query) such as `{clc}` or `{rsc}` is text too, and is filled in when the script runs.
- Line breaks typed as `\n`, `\l`, `\r` or `<br/>` are passed to Graphviz as they are.

### Wrapping long labels

Under the **Label** row, **Wrap long labels after** takes a whole number of characters. Words are not cut, so a word longer than the number stays whole. Once a number is entered, a **Line ending** box and a sample of the wrapped label appear. The ending is typed as it is: `\n` centers each line, `\l` aligns it left, `\r`
right, `|` suits a record shape, and `<br/>` an HTML-like label. The External label is wrapped in the same way. See [Split long labels](/docs/sql-extensions/split-labels/).

A label that ends with `\l` or `\r` keeps its last line aligned; put it in the **text after** box of the label.

## More options

The rest is in closed sections under **More options**. Each section has a pill in the bar when it is in use, such as **Filter: 2**, so nothing hidden is a surprise.

### Only use some rows

A list of conditions, each a column, a condition and a value. Choose whether a row is kept when **all** or **any** of the conditions are true.

The conditions are: **is**, **is not**, **contains**, **starts with**, **ends with**, **is one of**, **is greater than**, **is greater than or equal to**, **is less than**, **is less than or equal to**, **is blank** and **is not blank**.

- **is not** keeps the rows where the column is blank. A comparison that drops them without saying so is not what most people expect.
- **is one of** takes a list separated by commas, so a value that has a comma in it cannot be matched. Use **is**.
- The number conditions need a number.
- A condition with no column or no value is ignored.
- Under the list, the sample rows the filter drops are struck through, and a line says how many of the shown rows it keeps. The whole file is counted when the script runs.

A value can be a [placeholder](#placeholders), such as `{employee_id}`. The sample cannot say which rows it keeps, because the value is not known until the script runs, so it shows a note instead.

### Sort the rows

A list of columns, each **Ascending** or **Descending**, written as an `ORDER BY`. The order matters for layouts that follow the order of the rows, such as `sortv={rsc}` with the osage layout, and for [chaining nodes with edges](/docs/sql-extensions/chaining/).

Capitals are ignored, and numbers sort by value, so `9` comes before `10`. Blanks come first, or last when descending. When the mapping has clusters, the rows are sorted inside each cluster. The order is for the one statement, so the order between mappings is the order of the lines on the SQL tab.

### Group into clusters

A card for each level of cluster, with **Cluster**, **Label** and **Style name** as the same rows of boxes as every other field, and a link to **Attributes and tooltip**. **Add an inner level** adds the next card, up to 25 levels, and an inner level has **Remove level**. The program writes the numbered columns, `CLUSTER1`, `CLUSTER2` and on. See [Group rows into clusters](/docs/sql-extensions/clusters/).

- A level with an empty **Cluster** row is not written, and neither are the levels inside it.
- A row with a blank cluster value stays in the cluster around it, or outside every cluster when the first level is blank.
- The label, style and attributes of a cluster are taken from the **first row** that opens it. If the rows of a cluster disagree, the first one wins.
- A cluster with no label takes the one around it, as Graphviz does. The Settings tab chooses this.
- A cluster is drawn with its **Begin** and **End** styles, so a level whose style name is `Region` needs styles named `Region Begin` and `Region End`. The words come from the Settings tab: see [Naming clusters](/docs/styles/#naming-clusters). The styles check below looks for both styles.

### Other text columns

For a node, **External label** and **Tooltip**. An edge adds **Tail label** and **Head label**. Each is the same row of boxes as the fields above.

### Attributes

Graphviz attributes for this row alone, such as `color="red"`. They win over the style's. Each line is a **name**, an equals sign, and a value made from text and a column. The program writes the quotes, separates the pairs, and
**leaves out a pair whose column is blank**, so no name is left hanging.

The value is typed by the column. A text column gives `kind="Finance"`, and a number column gives `id=1047`, so the Knowledge Graph holds a number. A code such as `00501` stays text because its column is text. A name with a space, a quote or an equals sign stops the **Save**, and the reason is shown under the row.

### Properties

The same, for the facts of the [Knowledge Graph](/docs/knowledge-graph/), such as `kind="app"`. They belong to the node or edge. The properties of a style belong to every item of that style: see the [Designer](/docs/designer/#description-and-properties).

## Saving

**Save** writes the mapping as a line of the script. **It does not run the script.** The editor says **Added mapping "name". Run it on the SQL tab.** (or **Updated**), with a **Run SQL** button that runs the script now and one that goes to the SQL tab. The save is one step that **Undo** takes back.

The name is the key, as it is for a style in the Designer. A line beside the button says what will happen before you press it: **Will add a new mapping**, or **Will update** the one of that name. Names are matched
without regard to capitals and repeated spaces. To keep the old mapping and make a copy, change the name and save.

A name that belongs to a mapping of the other kind is refused. To turn a node mapping into an edge mapping, change the toggle: the editor then treats it as a new mapping, with its name cleared, and the saved one is left alone.

### The styles check

If the mapping names styles that are not on the [Styles](/docs/styles/) tab, **Save** shows them in a table, with their type and the number of rows that use them. The names are read from the whole column and only from the rows the filter keeps, and capitals are ignored.

- **Add them and save** adds the styles with an empty format, so Graphviz draws them with its default look until you format them on the Styles tab or in the Designer.
- **Save without adding** saves the mapping. Rows that name a missing style are marked on the Data tab.
- **Cancel** returns to the editor and saves nothing.

Removing a mapping later does not remove the styles it added. A style name that contains a counter such as `{clc}` is made when the script runs, so it is not checked.

## Edges and the nodes they join

A graph from a table of relationships is usually three mappings from one sheet. Take a sheet of employees with an `employee_id` and a `manager_id`:

1. **Edge:** Item is `employee_id`, Related item is `manager_id`. Save.
2. **Node:** press **Node**. The name is cleared and the fields stay. Save. These are the people.
3. **Node:** change the Item to `manager_id`. Save. These are the managers, and a person with no manager is skipped.

With **Use each Item only once** on, a node that appears in both is made once. The first mapping needs no file window again. Move the mappings next to each other with the up and down buttons.

Then run the script on the SQL tab.

## Placeholders

**Placeholder**, the third button at the top, makes a placeholder instead of a mapping: a name, a value and, if you like, a prompt. It writes a `SET PLACEHOLDER` line, as on the SQL tab, and
the name can then be used in braces, such as `{year}`, in a filter value and in any statement after it. The pill in the list says **Placeholder**.

- **Value** is used when the script runs. **Prompt** is a sentence that says what the value is, such as "Start from employee ID". It is written as a `--` comment above the line, and leaving it empty shows the name.
- A new placeholder goes at the **top** of the script, because only the lines after it see the value. Move it with the buttons if you want it elsewhere.
- A placeholder written by hand on the SQL tab is in the list too, and can be edited here.

See [Placeholders](/docs/placeholders/) for how they work.

## Unsaved changes

What you are editing is kept when you go to another tab and come back. If you press **Edit** on another mapping while the editor holds changes that were not saved, the program asks
**Discard your changes?** and does nothing until you answer.

## Changing the SQL by hand

A mapping is data on its line of the script. The SQL is made from it, and **it is never read back**. If you edit the SQL of a mapped line on the SQL tab, the line becomes plain SQL, and the mapping is gone, because the form could no longer say what the SQL means. A project that is opened with a line that was changed outside the Mappings tab, for example in a text editor, says which lines became plain SQL.

The **pencil** on a mapped line of the SQL tab opens it in the Mappings tab. To change a mapped line freely, press **Convert to plain SQL...** in the editor. The line keeps its SQL and stops being a mapping, so the Mappings tab can no longer open it. **Undo** brings it back. That is the way out for someone who has outgrown the form.

## A first project

A new project, with nothing on the Data tab, shows a card that says **Starting from a spreadsheet?**, with a button to start. Closing it, or saving a first mapping, hides it for good on that computer. It is kept on the computer and is not part of the project. The checkbox **Show the invitation on an empty project**, under **On this computer** on the [Settings](/docs/settings/) tab, brings it back.

## What the tab does not do

- It does not run the script, draw a diagram, or show the result. Those are the SQL, Data and Diagram tabs.
- It does not combine repeated rows, such as a count or a total on an edge. Write that in SQL, after the mapping has made the first part. Press **Convert to plain SQL...** to start from the mapping's own statement.
- It does not read a file with no heading row as such. The first row is always the column names.
