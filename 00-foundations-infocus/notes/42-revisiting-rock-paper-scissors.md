# Revisiting Rock Paper Scissors

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Two things happen here: you learn Git branching, and you use it to upgrade your Rock Paper Scissors game from `prompt()` dialogs to a proper button-driven UI with DOM manipulation. Branches let you build the new feature on a safe copy of the code, then merge it into `main` once it works.

## Key concepts

### What a branch is

A branch is an independent line of development inside the same repository — like a parallel copy of the code that can diverge from `main` without affecting it. `main` stays deployable while you experiment on a feature branch.

### The branch workflow

```bash
git branch                       # list branches, * marks the current one
git checkout -b ui-improvements  # create AND switch in one step
# (equivalently: git branch ui-improvements, then git checkout ui-improvements)

# ...commit work on the branch...

git checkout main
git merge ui-improvements        # bring the branch's commits into main
git push origin main

git branch -d ui-improvements    # delete the merged local branch
git push origin --delete ui-improvements  # delete it on the remote
```

If both branches changed the same lines, the merge stops with a merge conflict; Git marks the conflicting sections in the files and you resolve them by hand, then commit. (Not common at this stage, but worth recognising.)

### Why branch

- Keep half-finished features out of the working `main` code.
- Work on several ideas in parallel without them interfering.
- Share a broken/experimental state with someone for help, without polluting `main`.

### The assignment

On a new branch, rebuild RPS as an interactive page: one button per choice (rock, paper, scissors) with click event listeners replacing `prompt()`, a results area updated via DOM methods instead of `console.log`, a running score display, and a winner announcement when one side reaches 5 points. Merge the branch back into `main`, publish with GitHub Pages, and delete the feature branch locally and remotely.

## Common pitfalls

- Committing new work while still on `main` — check `git branch` before you start; the asterisk shows where you are.
- Running `git merge feature` while checked out on the feature branch; merge from the branch you want to merge *into* (checkout `main` first).
- Deleting a branch before merging it (plain `-d` will warn you; forcing with `-D` discards the work).
- In the UI rewrite: leaving the game loop as a blocking `while` loop. With buttons, each click plays one round — the event handlers drive the game, not a loop.

## Objectives — can you explain these?

- [ ] Create a new Git branch.
- [ ] Merge one branch into another.
- [ ] Describe best practices and typical use cases for branches.

## Self-test

- What is a branch in Git?
- Which command creates (and switches to) a new branch?
- How do you merge a feature branch back into `main`?
- Give one practical use case for branching.

## My notes

## Questions / to revisit
