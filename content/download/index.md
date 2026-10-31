# Download

::: warning A beta, for a few people to try
**Graph Modeler** is not released yet. A **beta** can be downloaded below. The Windows installer is signed with a certificate, but Windows may still warn
the first time, because the signed file is new. The Mac version is not notarized by Apple yet, so macOS warns the first time you open it. Using the beta
while it is in testing is free; the [license](/license/) says what applies after the release, and the [Pricing](/pricing/) page has the price of a commercial license.
:::

## Get the beta

This is version 0.1.3, beta 4. See [what is new](/docs/changelog/) since beta 3.

| Your computer | Download | Size |
| --- | --- | --- |
| **Windows** 10 or 11, 64-bit | [Graph-Modeler-Setup-0.1.3.exe](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.3-beta.4/Graph-Modeler-Setup-0.1.3.exe) | 121 MB |
| **macOS** 13 or later, Intel or Apple silicon | [Graph-Modeler-0.1.3-universal.dmg](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.3-beta.4/Graph-Modeler-0.1.3-universal.dmg) | 233 MB |
| **Linux**, 64-bit, Debian, Ubuntu and relatives | [graph-modeler_0.1.3_amd64.deb](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.3-beta.4/graph-modeler_0.1.3_amd64.deb) | 100 MB |
| **Linux**, 64-bit, anything else | [Graph-Modeler-0.1.3.AppImage](https://github.com/graphmodeler/graphmodeler-releases/releases/download/v0.1.3-beta.4/Graph-Modeler-0.1.3.AppImage) | 128 MB |

The [release page](https://github.com/graphmodeler/graphmodeler-releases/releases/tag/v0.1.3-beta.4) holds the same files and a list of
checksums, so that you can [check what you downloaded](#check-your-download). Install [Graphviz](#install-graphviz) too, to see pictures. Check the
[system requirements](#system-requirements) first: Graph Modeler needs a 64-bit computer.

## Installation Instructions

Follow the link below to jump directly to the installation instructions for your chosen OS.

| Windows .exe | macOS .dmg | Linux .deb | Linux .AppImage |
|:--:|:--:|:--:|:--:|
| [Instructions](./index.md#windows) | [Instructions](./index.md#macos) | [Instructions](./index.md#linux-deb) | [Instructions](./index.md#linux-appimage) |

### Windows

View the properties of the downloaded file to check the digital signature. It is a signed binary, so Windows will show **Jeffrey Long** as the publisher. 

![Screenshot of the installer's signing certificate](/shots/install-win-00.png)

Run the installer.

![Screenshot of the Windows installer](/shots/install-win-01.png)
  
::: warning Blocked after download?

If Windows says **Windows protected your PC**, hover your mouse over the download until the download is shaded and icon buttons appear.

![Screenshot of the download warning.](/shots/download-warning.png)

Click on the three dots `...` on the right side, beside the trash can icon. A pop-up menu appears. Click on **Keep**.

A trust screen appears, asking you to confirm that you trust the exe before you open it.

![Screenshot of the dialog asking for confirmation that you trust the download.](/shots/download-trust.png)

Click the `V` down arrow on the `Delete V` button. A pop-up button appears. Press the **Keep anyway** button. You can now run the exe installer.
:::

### macOS

Open the `.dmg` file you downloaded. Drag Graph Modeler to Applications. 

![Screenshot of the macOS software installer asking you to drag the installer to Applications.](/shots/install-mac-01.png)

::: warning Blocked after download?

The first time you open the downloaded file, macOS may refuse to open it with a message **"Graph Modeler" Not Opened**. 
![Screenshot of the macOS stating "Graph Modeler" Not Opened](/shots/install-mac-02.png)
1. Click **Done** to close the message (do not move the file to the trash). 
2. Open the **System Settings** application, and select the **Privacy & Security** section in the left hand side.
![Screenshot of the macOS stating "Graph Modeler" Not Opened](/shots/install-mac-03.png)
3. Scroll to the Security section and find the message **"Graph Modeler" was blocked to protect your Mac**. Choose **Open Anyway**.
4. Next, a warning will appear instructing you to not open this unless you are certain it is from a trustworthy source. Choose **Open Anyway**.
![Screenshot of the macOS stating Open "Graph Modeler"?](/shots/install-mac-04.png)
4. You must provideauthorization to open the application file by entering your username and password. You only have to enter this information once, and it will be remembered in the future. Enter these values and press **OK**. You can now launch the application.
![Screenshot of the macOS Privacy & Security dialog asking for username and password](/shots/install-mac-05.png)

Graph Modeler is not notarized by Apple yet, which is why macOS asks. A Mac that your employer manages may not show **Open Anyway**.
If yours does not, write to [support@graphmodeler.com](mailto:support@graphmodeler.com).

:::

### Linux .deb

On Debian, Ubuntu and relatives, install it with terminal command <br/>`sudo apt install ./graph-modeler_0.1.3_amd64.deb`.

The program appears in the **Programming** or **Development** group of the applications menu.

::: warning Warning message?
`apt` may end with a note that the `file couldn't be accessed by user _apt`. That message is harmless. It only means apt read the file as root,
  because your Downloads folder is private.
:::

### Linux .AppImage

Make it executable with `chmod +x Graph-Modeler-0.1.3.AppImage`, then run it.

A recent Ubuntu also needs `sudo apt install libfuse2t64`.

## Check your download

Each release page has a list of checksums, `SHA256SUMS.txt`, and a signature for it, `SHA256SUMS.txt.asc`. The checksums say whether your copy is the
file that was published. The signature says the list came from Graph Modeler. You do not have to check, but you can.

**1. Check the file against the list.**

- **Linux.** In the folder that holds the downloads, run `sha256sum -c --ignore-missing SHA256SUMS.txt`.
- **macOS.** Run `shasum -a 256 Graph-Modeler-0.1.3-universal.dmg` and compare the result with the line for that file in `SHA256SUMS.txt`.
- **Windows.** In PowerShell, run `Get-FileHash -Algorithm SHA256 Graph-Modeler-Setup-0.1.3.exe` and compare the result with the line for that file.
  The two are the same when the letters and digits match, whether they are in capitals or not.

**2. Check that the list is signed by Graph Modeler.** You need [GnuPG](https://gnupg.org/download/), which most Linux systems already have.

1. Download the <a href="/graph-modeler-release-key.asc" download>public key</a>, then run `gpg --import graph-modeler-release-key.asc`.
2. Run `gpg --fingerprint support@graphmodeler.com`. The fingerprint must be exactly this one:

   `82B4 ECBE 7270 EA17 6430 9DBF 5C39 AD68 084C 132C`

3. Run `gpg --verify SHA256SUMS.txt.asc SHA256SUMS.txt`. It should say **Good signature from "Graph Modeler Releases"**.
   A warning that the key is not certified with a trusted signature is normal, because you have not marked the key as trusted.

If the signature is bad, or the fingerprint is different, do not use the file, and write to [support@graphmodeler.com](mailto:support@graphmodeler.com).
The same fingerprint is in the README of the [releases repository](https://github.com/graphmodeler/graphmodeler-releases), a second place to compare it. The key expires on 27 October 2028, and a new one is published here before then.

## Uninstall

If you choose to unistall the application, follow these steps:

- **Windows.** Settings, Apps, Installed apps, Graph Modeler, Uninstall.
- **macOS.** Drag Graph Modeler from Applications to the Trash.
- **Linux.** `sudo apt remove graph-modeler` for the `.deb`; for the AppImage, delete the file.

Your projects and data files are yours and are never touched. The app's own settings and its list of fonts stay behind in a folder named
`Graph Modeler`, which you can delete too: `%APPDATA%\Graph Modeler` on Windows, `~/Library/Application Support/Graph Modeler` on a Mac, and
`~/.config/Graph Modeler` on Linux. See [Fonts](/docs/fonts/#starting-over).

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

## What it has run on

Graph Modeler is a desktop app. During development and testing it has run on:

| OS Family                 | OS Version / Distro             | Hardware Device      | Device Year | Graphviz Version | Graphviz installation method            |
|---------------------------|---------------------------------|----------------------|:-----------:|:----------------:|-----------------------------------------|
| Microsoft Windows         | Windows 11                      | Lenovo IdeaPad       | 2021        | 16.1             | Graphviz.org's 64-bit Windows installer |
| Apple macOS               | macOS 15 Sequoia                | Apple iMac           | 2013        | 16.1             | `brew install graphviz`                 |
| Linux - Ubuntu 24.04 based| Zorin OS 18.1 w/GNOME           | Apple iMac           | 2013        | 2.42             | `sudo apt install graphviz`             |
| Linux - Debian 13 based   | Q4OS 6.10 w/KDE Plasma          | Lenovo Thinkpad T400 | 2010        | 2.42             | `sudo apt install graphviz`             |
 
It has run well on all devices regardless of device age or Operating System.

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

## Tell me how it went

Write to [support@graphmodeler.com](mailto:support@graphmodeler.com), and say how the download and the install went as well as how the app did. In the app,
the **About** tab has a **Copy** button for your support information: the version and your system, and nothing about your data.

