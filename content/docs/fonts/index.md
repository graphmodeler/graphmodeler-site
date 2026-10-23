# Fonts

Graphviz draws the text in your graph, so the fonts are the ones **on the computer that runs Graph Modeler**. The app does not carry any
fonts of its own. This page says how the app finds the fonts, what to do after you install one, and what happens to a font when you share
the picture.

## How the app finds the fonts

The **Font** list in the [Designer](/docs/designer/) shows the fonts installed on your computer that Graphviz can really draw, each with a
picture of it drawn by Graphviz. It is made like this:

1. **The system is asked which fonts are installed.** The way depends on the operating system, and is described below.
2. **Each font is tried out.** Graphviz draws text with a name it does not know in a stand-in font, without saying so in the picture. So
   the app has Graphviz measure the same text in each font and in a font that does not exist, and a font that Graphviz could not load is
   left out. This is why a font you can see in a word processor may be missing from the list: it is not a font that Graphviz can use under
   that name.
3. **The answer is kept.** The list and the pictures are saved in the app's data folder and used again at the next start. They are made again
   when Graphviz is updated or the set of installed fonts changes.

The three fonts Graphviz knows without any help, `Times-Roman`, `Helvetica` and `Courier`, are offered even if the system does not list them.
`Times-Roman` is what Graphviz uses when no font is named.

The list is made once each time the app starts, and when Graphviz is found again. **After you install a font, close Graph Modeler and open
it again.**

## A font that is not in the list

The Font box is also a text box. You can type any name, and the preview shows what Graphviz makes of it. If the preview looks like the
default font, Graphviz did not find the font under that name, and the next sections are the place to look.

Type the name as the system knows the **family**, such as `Bahnschrift` or `Segoe UI`, and use the **Bold** and **Italic** buttons for the
style. The app joins them to the name for you (`Segoe UI Bold Italic`). A style that is part of a font's name, such as `Bahnschrift SemiBold`,
is a separate name in some systems and only a style of the family in others, so it may be offered or not. The picture in the list is the
test.

A family whose name ends in a word that Graphviz takes for a style, such as `Times New Roman`, is written with a comma after it
(`Times New Roman,`) so that Graphviz reads the whole of it as the name. The Designer does this for you when the font is chosen from the list.

## Windows

The app asks Windows for the font families it has installed.

To add a font, open the font file (`.ttf` or `.otf`) and choose **Install for all users**, or copy it into the Fonts folder
(`C:\Windows\Fonts`), which needs administrator rights. Then restart Graph Modeler.

Installing for all users is the dependable way. If the font is still not in the list after a restart, the name Windows shows for the
family is the one to type.

## Linux

Graphviz finds fonts through fontconfig, and so does the app: it asks `fc-list` for the families it knows. If `fc-list` is not installed, the
app tries a short list of well-known font names and keeps the ones Graphviz can draw. Install the `fontconfig` package: Graphviz relies on it for fonts.

To add a font, copy the file into `~/.local/share/fonts` for yourself, or into `/usr/local/share/fonts` for everyone on the computer. Then ask
fontconfig to look again, and restart Graph Modeler:

```bash
fc-cache -f
```

To see whether fontconfig has it, and under what name, list the fonts and look for yours. The name to use is the family name it prints:

```bash
fc-list : family | sort -u | grep -i "part of the name"
```

## macOS

The app asks `fc-list` first, as on Linux. Graphviz from Homebrew brings fontconfig with it. A program started from the Finder does not get
the folders that Homebrew adds to a terminal, so `fc-list` is often not found. In that case the app reads the list from the system's own
font report instead, which includes the fonts you have installed with Font Book. If that fails too, a short list of fonts that ship with macOS is
offered, and the ones that are not installed are left out.

To add a font, open the font file and press **Install Font** in Font Book, or copy it into `~/Library/Fonts` (for you) or `/Library/Fonts` (for
everyone). Then restart Graph Modeler.

::: tip macOS is still being tested
Graph Modeler for macOS is in testing. If a font you installed does not appear, or appears and is not drawn, please tell [Support](/support/) what you
did and what the Designer showed.
:::

## When you share the picture

How a font travels depends on the file you publish.

- **PNG** is a picture made up of dots, so it looks the same everywhere. The font only has to be installed on the computer that made it.
- **SVG** keeps the text as text, with the **name** of the font. The computer that opens the file draws the letters, so a font that
  you installed and the other person did not will be replaced by another one there, and the text may be wider or narrower than the boxes
  that Graphviz sized for yours. A font that most computers have, such as `Arial`, `Helvetica`, `Times New Roman` or `Courier New`,
  is the safer choice for an SVG that goes to other people.
- The app writes bold and italic into an SVG in a way a browser understands. See [the SVG tab](/docs/svg/).

If you must use a special font in an SVG, send the PNG along with it, or tell the people who open it which font to install.

## Starting over

If the list looks wrong, close Graph Modeler and delete the `fonts` folder in the app's data folder. It is made again at the next start. The folder is
named `Graph Modeler`, and is in:

| System | Where |
| --- | --- |
| Windows | `%APPDATA%\Graph Modeler\fonts` |
| macOS | `~/Library/Application Support/Graph Modeler/fonts` |
| Linux | `~/.config/Graph Modeler/fonts` |
