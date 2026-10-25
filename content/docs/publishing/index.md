# Publishing

**Publish** writes your graph to files, and the name of each file is built from parts you choose. This page explains how the name is built, so that
you can make it say what you want. The buttons and the other choices of Publish are on [The left pane](/docs/left-pane/#publish).

## What decides a file name

Four things work together, and two of them are in the left pane because you change them often.

| Where | Choice | What it does |
| --- | --- | --- |
| Left pane | **File name** | The start of the name, called the **prefix**. |
| Left pane | **Add to the name** | Nothing, the date and time, or a counter. |
| [Settings](/docs/settings/#publishing) | **File name template** | Where each part goes. |
| Settings | **File name style** | How the finished name is written: spaces, underscores, camelCase and so on. |

Under the **File name** box the pane shows the name the **next** publish will use, such as `Graph All Styles 002.svg .json .gv`. Change any
of the choices and the line changes with it, so you can try a template before you publish.

## The template

The template is a line of text with **placeholders** in braces. Each placeholder is replaced by a part of the name. Everything else in the template
is kept as typed. The standard template is:

```text
{prefix} {view} {version}
```

| Placeholder | Is replaced by |
| --- | --- |
| `{prefix}` | What is in the **File name** box. |
| `{view}` | The name of the [view](/docs/styles/#views) being written. |
| `{version}` | What **Add to the name** gives: the date and time, the counter, or nothing. |
| `{date}` | The date, such as `2026-10-24`, whatever **Add to the name** says. |
| `{time}` | The time, such as `14-30-05`, whatever **Add to the name** says. |
| `{n}` | The counter, filled with zeros to the width in Settings, such as `007`, whatever **Add to the name** says. |
| `{engine}` | The layout engine, such as `dot`. |
| `{splines}` | The edge routing, such as `ortho`. |
| `{options}` | The engine and the edge routing together, such as `dot,ortho`. Only the engine when there is no edge routing. |
| `{project}` | The [name of the project](/docs/left-pane/#the-project), which is not the name of the project file. |

Capital letters in a placeholder do not matter. Times use hyphens in place of colons, because a colon cannot be used in a file name on Windows.

A few examples, for a project named Order fulfillment with a view named All Styles, published at 14:30:05 on 24 October 2026. Unless the table says
otherwise, **Add to the name** is **Nothing**.

| Template | File name |
| --- | --- |
| `{prefix} {view} {version}`, **Add to the name** is Date and time | `Graph All Styles 2026-10-24 14-30-05` |
| `{prefix} {view} {version}`, **Add to the name** is Counter | `Graph All Styles 001` |
| `{project} {view} {date}` | `Order fulfillment All Styles 2026-10-24` |
| `{prefix} {engine}` | `Graph dot` |
| `{view} {n}` | `All Styles 001` |

### Parts that are empty

Some placeholders have nothing to put in them: `{version}` when **Add to the name** is **Nothing**, `{view}` when the view is left out, and `{splines}`
when the graph has no edge routing chosen. An empty part **goes, together with the spaces, underscores, hyphens or dots that follow it**, so
you do not get a name that ends in a dash. With the template `{prefix} - {view} - {version}`:

| Situation | File name |
| --- | --- |
| A view, and **Add to the name** is Counter | `Graph - All Styles - 001` |
| A view, and **Add to the name** is Nothing | `Graph - All Styles` |
| No view, and **Add to the name** is Nothing | `Graph` |

### The view name

With **Leave the view name out when there is only one view** on in Settings, `{view}` is empty for a project that has one view, as there is nothing to tell
apart. A project with several views always has the view in the name, if the template has `{view}`. That is how the files for a view that hides the
legend and one that shows it are told apart.

### When a template is not what you meant

- **A name the template does not know is kept as typed.** A template of `{prefix} {veiw}` gives `Graph {veiw}`, and the line under the **File name**
  box shows it before anything is written.
- **A blank template** uses the standard one.
- **A choice of Date and time or Counter always has an effect.** If the template has no `{version}`, `{n}`, `{date}` or `{time}`, the version is put
  on the end.

## The style of the name

**File name style** is applied to the whole finished name. For the name `Graph All Styles 2026-10-24 14-30-05`:

| Style | Result |
| --- | --- |
| Spaces kept | `Graph All Styles 2026-10-24 14-30-05` |
| Underscores | `Graph_All_Styles_2026-10-24_14-30-05` |
| Hyphens | `Graph-All-Styles-2026-10-24-14-30-05` |
| camelCase | `graphAllStyles_2026-10-24_14-30-05` |
| PascalCase | `GraphAllStyles_2026-10-24_14-30-05` |
| Web address slug | `graph-all-styles-2026-10-24-14-30-05` |

camelCase and PascalCase put an underscore before a word that starts with a digit, so that a date stays readable. A slug is in lower case, has no
accents and no punctuation, and is the choice for files that go on a web site.

Whatever the style, the name is then made safe for every kind of computer. The characters that Windows does not allow in a file name (`< > : " / \ | ? *`)
become underscores, a name does not end in a dot or a space, and a name is never empty.

## The counter

A counter gives each publish a new number, and the numbers sort in order. It is useful for a series of drafts, and for the frames of an animation.

- **The number comes from the folder, not from a record the app keeps.** The app looks at the files in the publish folder and takes the number after the
  highest one it finds. When the folder has none, it starts at 1. Delete the highest file and the number is used again. Move to another computer, or
  another folder, and it carries on from what is in that folder.
- **A number used by any kind of file counts as used.** The diagram, the Knowledge Graph and the DOT of one view share a number: `Graph 004.svg`,
  `Graph 004.json` and `Graph 004.gv`. It does not matter which of them are still in the folder, or what format the diagram was.
- **Each view counts on its own** when the view is in the name, so `Graph Plan 003` and `Graph Review 001` can both exist. When the name has no view,
  the views of one **Publish all views** take the next numbers one after the other.
- **The width is a setting**, **Digits in the counter**, from 1 to 6, and 3 by default. A number that is too big for the width simply gets longer.
- **The comparison ignores capital letters**, as the file systems of Windows and macOS do.
- **A name with a counter never writes over a file.** A name without one does, so publishing again with **Add to the name** set to **Nothing** replaces
  the last files with the same name.

## Names that would be the same

If two views in one publish would get the same name, nothing is written, and the pane says to put `{view}` or `{n}` in the template. A date and time does
not separate them, because it is the same for the whole publish.

## What Publish will not write over

The Knowledge Graph is a JSON file, and so is a project, so a file name can land on the project you have open. Before it writes the first file, Publish
checks all of them.

- It **never writes over the project file you have open**.
- It writes over an existing `.json` file only if that file is itself a Knowledge Graph, which is what publishing again to the same name means. Any
  other JSON, such as another project, is left alone.
- Other kinds of file are replaced, as they always were.

When a name is refused, nothing is written, and the pane says which name to change.

## From SQL

A [`PUBLISH` line in a SQL script](/docs/sql/#publish) makes its names in the same way, from the same choices. It can give a prefix for that publish only, as in
`PUBLISH ALL VIEWS AS DIRECTED GRAPH Q3`, where `Q3` is used in place of what is in the **File name** box.
