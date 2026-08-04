# Git Basics

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Git Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-git-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This is the hands-on Git lesson: create a repository on GitHub, clone it to your machine, then cycle through the core workflow — edit, stage, commit, push. These few commands are the daily loop for the entire rest of the curriculum, so they need to become automatic.

## Key concepts

### Getting a repository

1. Create the repository on GitHub through the web interface (New repository, give it a name, optionally add a README).
2. Copy its address and clone it locally:

```bash
git clone git@github.com:username/repo-name.git
cd repo-name
```

Cloning downloads the repository *and* wires up a connection back to GitHub called a **remote**. The default remote is named `origin`. Check it with:

```bash
git remote -v
```

### The two-stage save

Git saves in two steps rather than one:

1. **Staging** (`git add`) — you pick which changes will be included in the next snapshot. The staging area is a waiting room.
2. **Committing** (`git commit`) — everything currently staged is recorded as one snapshot with a message.

This separation lets you commit some changes while leaving others out.

### The daily loop

```bash
git status                      # what has changed? what is staged?
git add file.txt                # stage one file
git add .                       # stage everything changed in this directory
git commit -m "Describe change" # snapshot the staged changes
git push                        # upload commits to GitHub
git log                         # browse commit history
```

### Decoding `git push origin main`

- `origin` — the name of the remote you're pushing to (the GitHub copy you cloned from).
- `main` — the branch being pushed, the default branch of a new repository.

Plain `git push` usually suffices once the branch is set up to track the remote.

### Reading `git status`

Run it constantly. It tells you which files are untracked, which are modified but unstaged, which are staged and waiting, and whether your branch is ahead of the remote (commits not yet pushed).

## Common pitfalls

- Editing a file and running `git commit` without `git add` first — nothing gets committed because nothing was staged. `git status` would have shown this.
- Committing but forgetting to `git push`, then wondering why GitHub shows old code. Local commits stay local until pushed.
- Running `git commit` without `-m` and landing in an unfamiliar text editor (often Vim). Either pass `-m "message"` or learn to save-and-quit (`:wq`).
- Blindly running `git add .` and sweeping unintended files into the commit. Review `git status` before staging everything.

## Objectives — can you explain these?

- [ ] Create a new repository on GitHub.
- [ ] Move files between your machine and GitHub (clone, push).
- [ ] Record snapshots of your work with commits.

## Self-test

- How do you create a fresh repository on GitHub?
- How do you download a GitHub repository to your machine?
- What is the default name Git gives your remote connection?
- In `git push origin main`, what does `origin` refer to?
- In `git push origin main`, what does `main` refer to?
- Describe Git's two-stage system for saving changes.
- Which command shows the current state of the repository?
- How do you stage files?
- How do you commit staged files with a message?
- How do you send your commits up to GitHub?
- How do you view the history of past commits?

## My notes

## Questions / to revisit
