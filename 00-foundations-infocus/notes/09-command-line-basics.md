# Command Line Basics

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Prerequisites |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-command-line-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

The command line is a text interface to your computer: you type commands at a prompt instead of clicking through windows. Developers live here — Git, Node, package managers and deployment tools are all driven from the terminal — so being fluent with navigation and file manipulation pays off constantly.

## Key concepts

### The prompt

When the terminal is ready for input it shows a prompt, typically ending in `$` (bash) or `%` (zsh). You type a command, press enter, and read the output.

### Navigation

```bash
pwd            # print working directory — where am I?
ls             # list the contents of the current directory
ls -a          # include hidden files (names starting with .)
cd projects    # move into the projects directory
cd ..          # move up to the parent directory
cd             # with no argument: jump to your home directory
```

Paths can be **relative** (from where you are, e.g. `cd notes/drafts`) or **absolute** (from the root, e.g. `cd /Users/me/notes`). A single dot `.` means the current directory.

### Creating things

```bash
mkdir my-app          # create a new directory
touch index.html      # create a new empty file
```

### Renaming, moving and deleting

```bash
mv old-name.txt new-name.txt   # rename a file (mv also moves files)
mv notes.txt archive/          # move a file into another directory
rm notes.txt                   # delete a file
rm -r old-project              # delete a directory and its contents
```

`rm` does not use the trash — deletion is immediate and permanent, so double-check the argument before pressing enter.

### Opening files in programs

From inside a project directory:

```bash
code .        # open the current directory in VS Code
```

(`code` requires VS Code's shell command to be installed.)

### Speed tips

- **Tab completion**: type the first few letters of a file or directory name and press Tab to complete it — faster and typo-proof.
- Copy/paste in many Linux terminals is `Ctrl+Shift+C` / `Ctrl+Shift+V`, because plain `Ctrl+C` interrupts the running command.
- Up arrow cycles through previous commands.

## Common pitfalls

- Avoiding the terminal and doing everything through Finder/Explorer — you never build the muscle memory. Force yourself to navigate and create files from the shell.
- Typing long paths by hand instead of using Tab completion, then losing time to typos.
- Running `rm -r` carelessly; there is no undo. Read the path twice.
- Forgetting that `cd` alone goes home and `cd ..` goes up one level — mixing these up leaves you lost until you run `pwd`.

## Objectives — can you explain these?

- [ ] Describe what the command line is.
- [ ] Open a terminal on your machine.
- [ ] Move between directories and list their contents from the command line.
- [ ] Create a new directory and a new file from the command line.
- [ ] Rename and delete files and directories from the command line.
- [ ] Open a file or folder in an application from the command line.

## Self-test

- What is the command line?
- How do you open a terminal on your computer?
- How do you move into a specific directory?
- Where does `cd` with no arguments take you?
- Where does `cd ..` take you?
- Which command prints the directory you are currently in?
- Which command lists the contents of the current directory?
- How do you create a directory?
- How do you create a file?
- How do you delete a file or directory?
- How do you rename a file or directory?

## My notes

## Questions / to revisit
