# Understanding Errors

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-understanding-errors> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Error messages look scary but are actually the most helpful debugging information you get: they tell you what went wrong, in which file, and on which line. This lesson teaches you to read an error's anatomy, recognise the common error types (SyntaxError, ReferenceError, TypeError), and use a repeatable process for resolving errors you have never seen before.

## Key concepts

### Anatomy of an error

A typical console error has: the error type (e.g. `TypeError`), a message describing what happened, and the file name plus line (and column) number where it occurred — often clickable in DevTools. Below that sits the stack trace, which lists the chain of function calls that led to the error, so you can follow how execution arrived at the failing line.

```js
const a = 5;
console.log(a + b);
// Uncaught ReferenceError: b is not defined
//     at script.js:2
```

### Common error types

- **SyntaxError** — the code breaks JavaScript's grammar (a missing bracket, a stray comma), so it cannot even be parsed.
- **ReferenceError** — you referenced a variable that does not exist in the current scope, usually a typo or a variable that was never declared.
- **TypeError** — a value is not the type an operation expects: calling something that is not a function, using a string method on a number, reading a property of `undefined`, or trying to change an unchangeable value.

### Errors vs warnings

Errors (red) stop your program from running past that point. Warnings (yellow) flag potential problems — deprecated APIs, questionable practice — but execution continues.

### Resolving errors

1. Read the message and stack trace carefully; they usually name the exact problem.
2. Search the error message online — a `[JavaScript] <error text>` search almost always finds someone who hit it before (Stack Overflow, MDN).
3. Use the debugger to pause at the failing line and inspect state.
4. Use `console.log` (and friends like `console.table`) to trace values as the program runs.

## Common pitfalls

- Skimming past the error text and guessing at the cause — the message and line number usually answer the question directly.
- Ignoring the stack trace when the failing line is inside a helper; the trace tells you which caller passed the bad value.
- Treating warnings as errors (or errors as ignorable) — only errors halt execution.
- Confusing a ReferenceError (name does not exist) with a TypeError (name exists but the value is the wrong type for what you did with it).

## Objectives — can you explain these?

- [ ] Name at least three kinds of JavaScript errors.
- [ ] Point to the two parts of an error message that locate its origin.
- [ ] Describe how to research and resolve an unfamiliar error.

## Self-test

- Give three situations that produce a TypeError.
- How does an error differ from a warning?
- Describe one method for resolving an error.

## My notes

## Questions / to revisit
