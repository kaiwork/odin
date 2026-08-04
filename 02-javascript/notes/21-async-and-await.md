# Async and Await

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Asynchronous JavaScript and APIs |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-async-and-await> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

`async`/`await` is syntax that lets you write promise-based code as if it were synchronous — no `.then()` chains. Nothing new happens under the hood: an `async` function still returns a promise, and `await` just pauses the function until a promise settles. It usually makes asynchronous code far easier to read and debug.

## Key concepts

### Declaring an async function

Put `async` before any function form — declaration, expression, arrow, or method:

```js
async function getData() { /* ... */ }
const getData = async () => { /* ... */ };
```

### What `async` does

Marking a function `async` makes it **always return a promise**. A returned plain value is wrapped in a resolved promise; a thrown error becomes a rejected promise. It also enables the use of `await` inside the body.

### What `await` does

`await` pauses execution of *that async function* (not the whole program) until the awaited promise settles, then gives you the resolved value directly:

```js
async function showImage() {
  const response = await fetch("https://api.example.com/cats", { mode: "cors" });
  const data = await response.json();
  document.querySelector("img").src = data.url;
}
```

Compare the promise-chain equivalent — same behaviour, more nesting:

```js
fetch("https://api.example.com/cats", { mode: "cors" })
  .then((response) => response.json())
  .then((data) => { document.querySelector("img").src = data.url; });
```

### Error handling

If an awaited promise rejects (or you `throw` inside an async function), the function's returned promise rejects. Handle it either:

```js
// inside, with try...catch
async function getCats() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// or outside, since the call returns a promise
getCats().catch((err) => console.error(err));
```

### The return value

Callers of an async function get a promise, so they must `await` it or chain `.then()` — you can't grab the value synchronously.

## Common pitfalls

- Using `await` outside an `async` function (a syntax error in most contexts) — the enclosing function needs the `async` keyword.
- Forgetting that calling an async function returns a promise, then treating the return value as the actual data.
- Assuming errors surface automatically — an unhandled rejection is easy to miss; wrap in `try...catch` or attach `.catch()`.
- Awaiting independent operations one after another, serialising work that could run concurrently (e.g. via `Promise.all`).

## Objectives — can you explain these?

- [ ] How to declare an `async` function
- [ ] What the `async` keyword actually does
- [ ] What the `await` keyword actually does
- [ ] What an `async` function returns
- [ ] What happens when an error is thrown inside an `async` function
- [ ] How to handle errors in an `async` function

## Self-test

- What effect does marking a function `async` have?
- What does `await` do to the flow of an async function?
- What does an `async` function return to its caller?
- What happens to the returned promise when an error is thrown inside an `async` function?
- What are the ways to handle errors from an `async` function?

## My notes

## Questions / to revisit
