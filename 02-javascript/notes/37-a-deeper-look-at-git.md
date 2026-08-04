# A Deeper Look at Git

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Intermediate Git |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-a-deeper-look-at-git> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Git history isn't set in stone — you can amend the last commit, reorder or squash older ones with interactive rebase, and move branch pointers around with reset. This lesson covers those history-changing tools, the mental model behind them (branches are just pointers to commits), and why rewriting *shared* history is dangerous.

## Key concepts

### Amending the last commit

Fix the most recent commit — its message, or files you forgot to stage:

```bash
git add forgotten-file.js
git commit --amend
```

Amending doesn't edit the commit; it *replaces* it with a new one (new hash). Safe locally, risky if the old commit was already pushed.

### Interactive rebase

`git rebase -i HEAD~N` opens an editor listing your last N commits, each with a command you can change:

- `pick` — keep as is
- `reword` — keep changes, edit the message
- `edit` — pause at this commit so you can amend or split it
- `squash` — meld into the previous commit, combining messages
- `drop` — delete the commit

Squashing turns a string of "wip" commits into one coherent commit before sharing. Splitting works via `edit`: when the rebase pauses, `git reset HEAD~` to unstage the commit's changes, then re-commit them in smaller pieces.

### git reset

`git reset` moves the current branch pointer to another commit. The flag decides what happens to your files:

```bash
git reset --soft HEAD~1   # move pointer; keep changes staged
git reset HEAD~1          # (mixed, default) move pointer; keep changes, unstaged
git reset --hard HEAD~1   # move pointer; DISCARD working-directory changes
```

`--hard` throws work away — treat it with respect.

### Branches are pointers

A commit is a snapshot that points back at its parent(s). A **branch** is nothing more than a movable pointer to one commit, and `HEAD` is a pointer to wherever you currently are. This is why rebase and reset make sense: they don't shuffle files around, they move pointers and create new commits. `HEAD~` means "the commit before where HEAD points".

### The golden rule

Rewriting history is fine on commits that exist only on your machine. Once commits are pushed and others may have built on them, rewriting forces everyone else into a mess — prefer forward-fixing (e.g. a new commit) on shared branches.

## Common pitfalls

- Running `git reset --hard` with uncommitted work in the tree — that work is gone.
- Amending or rebasing commits that are already pushed to a shared branch, then fighting divergent history.
- Confusing reset flags: `--soft` keeps changes staged, mixed keeps them unstaged, `--hard` deletes them.
- Thinking of branches as folders or copies — they're pointers, and internalising that makes every history command less scary.

## Objectives — can you explain these?

- [ ] Which Git commands change history
- [ ] The different ways of changing history (amend, rebase, squash, split, reset)
- [ ] How history changes interact with remotes
- [ ] The dangers of history-changing operations
- [ ] Best practices around changing history
- [ ] How branches and commits work as pointers

## Self-test

- How do you amend your most recent commit?
- Name several distinct ways to rewrite history.
- What does it mean that branches are pointers?

## My notes

## Questions / to revisit
