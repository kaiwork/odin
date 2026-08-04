# Commit Messages

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-commit-messages> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A commit history full of "fix stuff" is useless to future-you and to teammates. This lesson covers how to write commit messages that explain what changed and why, and when in your workflow to commit. Employers really do read candidates' commit histories.

## Key concepts

### Why messages matter

- A good history lets you (or a teammate, or a future maintainer) find when and why a change happened without re-reading all the code.
- It makes collaboration and debugging faster — the message supplies the context the diff alone can't.
- Your public commits are part of your professional footprint; recruiters and interviewers look at them.

### Structure: subject + body

A well-formed commit message has two parts, separated by a blank line:

```text
Add missing alt text to the company logo

Screen readers cannot describe the image to users
without this attribute, which failed our accessibility
review. Adding alt text resolves the issue.
```

- **Subject line**: a short summary of the change, capped at about 72 characters so it doesn't get truncated in tooling.
- **Body**: the detail — what problem existed and how this commit addresses it. Focus on the *why*; the diff already shows the *what*.

When you need a body, run `git commit` without `-m` so your editor opens and you can write both parts.

### Writing style

- Use the active voice and phrase the subject as a command: "Fix card generator", not "Fixed" or "Card generator was fixed".
- Be specific. Vague verbs like "update" or "save" say nothing; name the actual change.
- Keep each commit to one logical change so the message can honestly summarise it.

### When to commit

Commit whenever you reach a meaningful checkpoint: a piece of code works, a bug is fixed, a typo is corrected. Frequent small commits give you a fine-grained timeline you can revisit or revert, instead of one giant blob at the end of the day.

## Common pitfalls

- One-word messages ("fix", "wip", "changes") that force readers to reconstruct intent from the diff.
- Describing only *what* changed and never *why* — the why is exactly what the diff can't tell you.
- Batching hours of unrelated work into a single commit, making it impossible to revert one change without the others.
- Overlong subject lines that get cut off in `git log` and on GitHub — keep them within ~72 characters.

## Objectives — can you explain these?

- [ ] Write a commit message that usefully explains a change.
- [ ] Explain why good commit messages and history matter.
- [ ] Decide when in your workflow to make a commit.

## Self-test

- Name two benefits of a well-written commit history.
- What is the recommended maximum length for a commit subject line?

## My notes

## Questions / to revisit
