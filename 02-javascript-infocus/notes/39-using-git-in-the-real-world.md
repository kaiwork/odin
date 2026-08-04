# Using Git in the Real World

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Intermediate Git |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-using-git-in-the-real-world> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This lesson walks through the standard open-source contribution workflow: fork the project, work on a feature branch, keep in sync with the original repository, and submit a pull request. It also nudges you (again) toward writing meaningful commit messages, since your Git history is part of your professional footprint.

## Key concepts

### The three-repository model

You can't push to a repository you don't own. Instead:

- **upstream** — the original project's repo. You can *fetch* from it, but not push.
- **origin** — your **fork** of the project on GitHub, which you *can* push to.
- **local** — your clone of the fork on your machine.

Set it up once:

```bash
# after forking on GitHub and cloning your fork
git remote add upstream <original-repo-url>
```

By convention, the remote pointing at the forked-from repo is named `upstream`.

### The contribution workflow

1. Fork the repo on GitHub and clone your fork locally.
2. Create a feature branch for the change — never work directly on `main`:

   ```bash
   git checkout -b my-feature
   ```

3. While you work, keep your local `main` current with the original project:

   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```

4. **Immediately before opening the PR**, merge the freshly updated `main` into your feature branch and resolve any conflicts *there*, on your machine:

   ```bash
   git checkout my-feature
   git merge main
   ```

5. Push the feature branch to your fork:

   ```bash
   git push origin my-feature
   ```

6. Open a pull request from your fork's branch to the upstream repository.

### Why merge main into the feature branch (not the reverse)

Merging the senior branch into your feature branch means conflicts get resolved by you, in your branch, before maintainers ever see the PR — instead of surfacing in the project's main branch during the final merge. It keeps the PR cleanly mergeable.

### Commit messages, again

Open-source maintainers read your history. Concise subject lines, explanatory bodies where warranted, and a consistent style (the Conventional Commits convention is one popular standard) make your PR far easier to review.

## Common pitfalls

- Doing feature work directly on your fork's `main` — it tangles updates from upstream with your changes.
- Letting the feature branch drift for weeks without syncing, then facing one giant conflict at PR time.
- Trying to push straight to the upstream repo — without write access you must push to your fork and open a PR.
- Confusing which remote is which; `git remote -v` shows what `origin` and `upstream` point at.

## Objectives — can you explain these?

- [ ] What makes a good commit message (and why it matters here)
- [ ] How to contribute to an open-source project with the fork/upstream workflow

## Self-test

- What is the conventional name for the remote pointing at the repo you forked from?
- Can you push your changes directly to a repository you don't have write access to?
- What should you do right before merging `main` into your feature branch?

## My notes

## Questions / to revisit
