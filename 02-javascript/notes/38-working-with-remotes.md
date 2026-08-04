# Working with Remotes

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Intermediate Git |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-working-with-remotes> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Rewriting history gets riskier the moment a remote is involved: a plain push is rejected after you rewrite, and force-pushing can wipe out teammates' work. This lesson covers `--force` vs `--force-with-lease`, why `git revert` is often the safer undo, and the ground rules for changing history on anything shared.

## Key concepts

### Why pushes get rejected after rewriting

Commands like `git commit --amend`, `git rebase`, and `git reset` replace commits with new ones, so your local branch no longer matches the remote's history. Git rejects the normal push to protect the remote — which is your cue to stop and think, not to reach reflexively for force.

### git push --force vs --force-with-lease

```bash
git push --force              # overwrite remote history, no questions asked
git push --force-with-lease   # overwrite ONLY if remote is where you last saw it
```

`--force` replaces the remote branch with yours unconditionally — if a teammate pushed commits since you last fetched, those commits are obliterated. `--force-with-lease` adds a fail-safe: it refuses the push if the remote has moved beyond what your local Git last fetched, so you can't silently stomp on someone else's work. When a force-push is genuinely needed (e.g. after cleaning up your own feature branch), prefer `--force-with-lease`.

### git revert — undoing without rewriting

`git revert <commit>` creates a *new* commit that applies the inverse of the target commit. History only moves forward, nothing is rewritten, and no force-push is needed:

```bash
git revert HEAD          # undo the latest commit with a new commit
```

On shared branches, this is almost always the right way to undo a mistake.

### Best practices

- Rewrite history freely on branches only you use; never on branches colleagues have based work on.
- Fetch and check the remote's state before any force-push, and use `--force-with-lease`.
- On shared branches, fix mistakes by moving forward (`git revert`, or just a new commit).
- If you must rewrite a shared branch, coordinate with the team first — everyone downstream will have to recover.

## Common pitfalls

- Reaching for `git push --force` the moment a push is rejected, without checking why the histories diverged.
- Assuming `--force-with-lease` is fully safe — it only compares against what *you* last fetched; a fetch immediately before defeats part of its protection, and it still rewrites history.
- Using `git reset` to undo a pushed commit (requires a force-push) when `git revert` would do it cleanly.
- Rebasing a branch that teammates have already pulled, leaving them with conflicting duplicate commits.

## Objectives — can you explain these?

- [ ] How history-changing operations interact with remotes
- [ ] The dangers of changing pushed history
- [ ] Best practices for history-changing operations

## Self-test

- What is the safer way to force-push rewritten history to a remote, and how does it protect you?
- What can go wrong when you change history that others have already pulled?
- What are the best practices around history-changing operations?

## My notes

## Questions / to revisit
