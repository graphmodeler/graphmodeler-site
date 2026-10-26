# Download

::: warning A beta, for a few people to try
Graph Modeler is not released yet. A first **beta** can be downloaded below. It is not signed with a certificate yet, so Windows and macOS
warn the first time you open it. Using it while it is in testing is free; the [license](/license/) says what applies after the release.
:::

## Get the beta

This is version 0.1.0, beta 1.

| Your computer | Download | Size |
| --- | --- | --- |
| **Windows** 10 or 11 | [Graph-Modeler-Setup-0.1.0.exe](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.0-beta.1/Graph-Modeler-Setup-0.1.0.exe) | 121 MB |
| **macOS**, Intel or Apple silicon | [Graph-Modeler-0.1.0-universal.dmg](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.0-beta.1/Graph-Modeler-0.1.0-universal.dmg) | 233 MB |
| **Linux**, Debian, Ubuntu and relatives | [graph-modeler_0.1.0_amd64.deb](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.0-beta.1/graph-modeler_0.1.0_amd64.deb) | 101 MB |
| **Linux**, anything else | [Graph-Modeler-0.1.0.AppImage](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.0-beta.1/Graph-Modeler-0.1.0.AppImage) | 128 MB |

The [release page](https://github.com/graphmodeler/graphmodeler-releases/releases/tag/v0.1.0-beta.1) holds the same files and a list of
checksums, so that you can check what you downloaded. Install [Graphviz](#install-graphviz) too, to see pictures.

### The first time you open it

- **Windows.** Run the installer. If Windows says **Windows protected your PC**, choose **More info**, then **Run anyway**.
- **macOS.** Open the `.dmg` and drag Graph Modeler to Applications. The first time you open it, macOS refuses. Open **System Settings, Privacy &
  Security**, scroll to the message about Graph Modeler, and choose **Open Anyway**.
- **Linux.** `sudo apt install ./graph-modeler_0.1.0_amd64.deb`. For the AppImage, make it executable (`chmod +x`) and run it; a recent Ubuntu
  also needs `sudo apt install libfuse2t64`.

### Tell me how it went

Write to [support@graphmodeler.com](mailto:support@graphmodeler.com), and say how the download and the install went as well as how the app did. In the app,
the **About** tab has a **Copy** button for your support information: the version and your system, and nothing about your data.

## What it runs on

Graph Modeler is a desktop app. It has been run, from source or as built, on:

- **Windows 11**, on a laptop from 2021.
- **macOS 15 (Sequoia)**, on an Intel iMac from 2013, with Graphviz 16.1 from Homebrew.
- **Linux**, on Zorin OS 18.1, which is built on Ubuntu 24.04, and on Q4OS 6.10, which is built on Debian 13. Zorin ran on the same
  2013 iMac, and Q4OS on a ThinkPad from 2010. It ran well on both.

On each of them the [SQL tab](/docs/sql/) was tried with Excel and LibreOffice workbooks, CSV files and Access databases.

The installers for Windows, Linux and the Mac (Intel and Apple silicon together) are each started and checked by an automated test on a
computer of that kind. The app needs no Node, browser or other program installed, apart from Graphviz for pictures.

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
