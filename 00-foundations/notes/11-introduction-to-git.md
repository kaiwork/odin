# Introduction to Git

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Git Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-introduction-to-git> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Git is a version control system: it records the history of your project as a series of snapshots you can inspect, compare and restore. GitHub is a website that hosts Git repositories remotely so you can back up work and collaborate. Every professional workflow you'll meet later — branches, pull requests, code review — builds on this foundation.

## Key concepts

### What Git is

- Git is a **version control system (VCS)** — a program that tracks *changes* to files over time, not just their latest contents.
- Think of it as a save button with memory: each commit is a labelled snapshot of the whole project, and the full chain of snapshots is browsable history.

### Git vs a text editor

A text editor saves only the current state of a file; saving again overwrites what was there. Git keeps every committed version, records who made each change and when, and stores a message explaining why. You can diff any two points in history or roll files back to an earlier state.

### Git vs GitHub

- **Git** runs **locally**, on your own machine. It works fine with no internet connection and no account anywhere.
- **GitHub** is a **remote** service: a website that stores copies of Git repositories in the cloud. Alternatives exist (GitLab, Bitbucket) — GitHub is one host among several, not part of Git itself.
- You push local commits up to GitHub for backup and sharing, and pull others' commits down.

### Why it matters

- **Solo**: safe experimentation (you can always get back to a working state), a record of how the project evolved, and off-machine backup via a remote.
- **Teams**: everyone works on the same codebase without emailing zip files; history shows who changed what and why; contributions merge together in a controlled way.

This lesson is conceptual — the actual commands (`git add`, `git commit`, `git push`, …) come in the next lesson.

## Common pitfalls

- Saying "Git" when you mean "GitHub" (or vice versa). One is a local program; the other is a hosting website.
- Assuming you need GitHub (or internet access) to use Git — you don't; Git is fully functional offline.
- Treating Git as just a backup tool. Its real value is *history*: meaningful snapshots with messages, not one giant "final version".

## Objectives — can you explain these?

- [ ] Explain what Git is, what GitHub is, and how the two differ.
- [ ] Contrast Git with a text editor: what each saves and what record each keeps.
- [ ] Explain why version control helps a solo developer and why it helps a team.

## Self-test

- What category of program is Git?
- How does Git differ from a text editor in what it saves and the history it keeps?
- Is Git local or remote?
- Is GitHub local or remote?
- What does an individual developer gain from Git?
- What do Git and GitHub together give a team of developers?

## My notes

## Questions / to revisit
