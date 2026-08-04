# Clean Code

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-clean-code> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Developers spend far more time reading code than writing it, so readable code is a professional obligation, not a nicety. This lesson covers naming, formatting, avoiding magic values, and writing comments that earn their place. The goal is steady improvement in habits, not instant perfection.

## Key concepts

### Names carry meaning

Use descriptive, searchable names in camelCase. Functions do things, so start them with a verb; variables hold things, so start them with a noun or adjective:

```js
// Hard to read
const t = h * 3600000;
function d(x) { ... }

// Clear
const MILLISECONDS_PER_HOUR = 3600000;
const elapsedMilliseconds = hours * MILLISECONDS_PER_HOUR;
function displayPlayerScore(score) { ... }
```

Stay consistent: if one function is `getPlayerScore`, its sibling should be `getPlayerName`, not `fetchNameOfPlayer`.

### No magic values

A bare `86400` in the middle of a calculation forces every reader to reverse-engineer its meaning. Name it once as a constant (`SECONDS_PER_DAY`) and both readability and searchability improve.

### Formatting

Indent consistently, keep related lines together, and keep lines short (roughly 80 characters is a common convention) so code is readable without horizontal scrolling. The specific style matters less than applying it uniformly.

### Comments: why, not how

Good comments explain intent, context, or a non-obvious decision — things the code itself cannot say. Bad comments narrate what the code obviously does, apologise for confusing code that should simply be rewritten, track changes (git's job), or preserve commented-out dead code (delete it; git remembers). Well-named code needs surprisingly few comments.

```js
// Bad: restates the code
// increment i by 1
i++;

// Good: explains a decision
// API rate-limits to 10 req/s, so batch requests in groups of 8
```

## Common pitfalls

- Single-letter or abbreviated names (`d`, `tmp`, `usrNm`) that save seconds writing and cost minutes reading.
- Using comments as deodorant for confusing code instead of renaming and restructuring until the comment is unnecessary.
- Leaving commented-out code "just in case" — it rots, confuses readers, and version control already keeps history.
- Chasing perfect style on day one; consistency and gradual improvement beat paralysis.

## Objectives — can you explain these?

- [ ] Tell readable code apart from hard-to-read code, and say why.
- [ ] Apply concrete principles (naming, constants, formatting) to clean up code.
- [ ] Write comments that add value.

## Self-test

- Why does clean code matter?
- Name several principles that keep code clean.
- What separates a good comment from a bad one?

## My notes

## Questions / to revisit
