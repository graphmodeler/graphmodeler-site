# Download

::: warning Not released yet
Graph Modeler is being tested and has no public installer yet. This page will hold the downloads when there are some. Until then it
says what the app needs, so that you are ready.
:::

## What it runs on

Graph Modeler is a desktop app. It has been run, from source, on:

- **Windows 11**.
- **macOS**, on an Intel Mac, with Graphviz 16.1 from Homebrew.
- **Linux**, on Zorin OS 18, which is built on Ubuntu 24.04, and on Q4OS. It ran well on a computer from 2012 and on one from 2010.

An installer is planned for each system. The app will not need Node, a browser or any other program installed, apart from Graphviz
for pictures.

## Your data

The [SQL tab](/docs/sql/) reads Excel and LibreOffice workbooks (`.xlsx`, `.ods`), CSV and TSV files, Access databases and SQLite databases. Nothing
has to be installed to read them, and Excel is not needed. On Linux, use a LibreOffice or ONLYOFFICE spreadsheet saved as `.xlsx`, a LibreOffice
`.ods` file, or a CSV file exported from the program that holds the data.

## Install Graphviz

Graph Modeler draws its pictures with [Graphviz](https://graphviz.org/download/), a free program that is installed on its own. The app
does not include it and works without it for everything except pictures: the Data, Styles, SQL, Knowledge Graph and DOT tabs, the Designer's
settings, and publishing the Knowledge Graph and the DOT file all work with no Graphviz at all.

| System | How to install it |
| --- | --- |
| **Windows** | Run the installer from [graphviz.org/download](https://graphviz.org/download/), or `winget install Graphviz.Graphviz`. The installer offers to add Graphviz to the PATH. Say yes if you can, but the app also looks in the usual install folders. |
| **macOS** | `brew install graphviz`, with [Homebrew](https://brew.sh). On an older Intel Mac, Homebrew may have to build Graphviz and the programs it needs from source, which can take hours. |
| **Debian and Ubuntu** | `sudo apt install graphviz`. |
| **Fedora** | `sudo dnf install graphviz`. |

Any recent version should work. The app has been run with versions from 2.42, the one some Linux distributions still package, up to 16.1.
Newer versions have more, so a newer one is better where you can choose.

### Checking it worked

Open the **About** tab. The **Graphviz** line shows the version found, or `not found`. If you installed Graphviz while the app was open,
press the button to look again on the tab that says it was not found, or close the app and start it again, since a program is given its list
of places to look only when it starts.

## Coming from the Excel tool

If you use Relationship Visualizer, also called Excel to Graphviz, see [Coming from the Excel tool](/docs/from-excel/): what opens,
what is the same and what is different.

## License

Free for personal and non-commercial use, and licensed for commercial use. See [License](/license/).
