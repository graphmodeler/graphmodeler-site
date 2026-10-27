# Download

::: warning A beta, for a few people to try
Graph Modeler is not released yet. A first **beta** can be downloaded below. It is not signed with a certificate yet, so Windows and macOS
warn the first time you open it. Using it while it is in testing is free; the [license](/license/) says what applies after the release.
:::

## Get the beta

This is version 0.1.1, beta 2. See [what is new](/docs/changelog/) since beta 1.

| Your computer | Download | Size |
| --- | --- | --- |
| **Windows** 10 or 11, 64-bit | [Graph-Modeler-Setup-0.1.1.exe](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.1-beta.2/Graph-Modeler-Setup-0.1.1.exe) | 121 MB |
| **macOS** 13 or later, Intel or Apple silicon | [Graph-Modeler-0.1.1-universal.dmg](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.1-beta.2/Graph-Modeler-0.1.1-universal.dmg) | 233 MB |
| **Linux**, 64-bit, Debian, Ubuntu and relatives | [graph-modeler_0.1.1_amd64.deb](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.1-beta.2/graph-modeler_0.1.1_amd64.deb) | 100 MB |
| **Linux**, 64-bit, anything else | [Graph-Modeler-0.1.1.AppImage](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.1-beta.2/Graph-Modeler-0.1.1.AppImage) | 128 MB |

The [release page](https://github.com/graphmodeler/graphmodeler-releases/releases/tag/v0.1.1-beta.2) holds the same files and a list of
checksums, so that you can check what you downloaded. Install [Graphviz](#install-graphviz) too, to see pictures. Check the
[system requirements](#system-requirements) first: Graph Modeler needs a 64-bit computer.

### The first time you open it

- **Windows.** Run the installer. If Windows says **Windows protected your PC**, choose **More info**, then **Run anyway**.
- **macOS.** Open the `.dmg` and drag Graph Modeler to Applications. The first time you open it, macOS refuses. Open **System Settings, Privacy &
  Security**, scroll to the message about Graph Modeler, and choose **Open Anyway**.
- **Linux, the `.deb`** (Debian, Ubuntu and relatives).
  - Install it with `sudo apt install ./graph-modeler_0.1.1_amd64.deb`.
  - apt may end with a note that the file "couldn't be accessed by user `_apt`". That is harmless. It only means apt read the file as root,
    because your Downloads folder is private.
  - The program appears in the Programming group of the applications menu.
- **Linux, the AppImage.**
  - Make it executable with `chmod +x Graph-Modeler-0.1.1.AppImage`, then run it.
  - A recent Ubuntu also needs `sudo apt install libfuse2t64`.

### Taking it off again

- **Windows.** Settings, Apps, Installed apps, Graph Modeler, Uninstall.
- **macOS.** Drag Graph Modeler from Applications to the Trash.
- **Linux.** `sudo apt remove graph-modeler` for the `.deb`; for the AppImage, delete the file.

Your projects and data files are yours and are never touched. The app's own settings and its list of fonts stay behind in a folder named
`Graph Modeler`, which you can delete too: `%APPDATA%\Graph Modeler` on Windows, `~/Library/Application Support/Graph Modeler` on a Mac, and
`~/.config/Graph Modeler` on Linux. See [Fonts](/docs/fonts/#starting-over).

### Tell me how it went

Write to [support@graphmodeler.com](mailto:support@graphmodeler.com), and say how the download and the install went as well as how the app did. In the app,
the **About** tab has a **Copy** button for your support information: the version and your system, and nothing about your data.

## System requirements

Graph Modeler needs a **64-bit** operating system on a 64-bit processor. There is no 32-bit version. The program is built on
Electron, which stopped publishing 32-bit versions with its release 44.

| System | You need |
| --- | --- |
| **Windows** | Windows 10 or 11, 64-bit. Windows 7, 8 and 8.1 are not supported. A 32-bit Windows 10 is refused by the installer, with a message that a 64-bit system is required. |
| **macOS** | macOS 13 (Ventura) or later, on an Intel or Apple silicon Mac. One download serves both. A Mac that Apple stopped at macOS 12 or earlier, in general one from before 2017, is not supported. |
| **Linux** | A 64-bit (x86-64) distribution with a desktop, on an Intel or AMD processor. The `.deb` needs the usual desktop libraries (GTK 3, NSS and a few others), which apt installs for you. There is no ARM version. |

To find out whether your Windows is 64-bit, open **Settings, System, About** and look at **System type**. It should say **64-bit
operating system**.

The app needs about 400 MB of disk space once installed. Graphviz is a separate, small program that draws the pictures; see
[Install Graphviz](#install-graphviz). No Node, browser, Java or Excel is needed.

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
