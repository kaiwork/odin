# Asynchronous Code

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Asynchronous JavaScript and APIs |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-asynchronous-code> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

JavaScript runs one thing at a time, yet real programs wait on slow operations — network requests, timers, file reads. Asynchronous patterns let that waiting happen without freezing everything else. Callbacks were the original tool; promises are the modern one, representing a future value you can chain work onto with `.then()`.

## Key concepts

### Callbacks

A callback is a function passed into another function to be run later:

```js
myDiv.addEventListener("click", function () {
  // runs when the click happens, not now
});
```

Callbacks work, but composing many dependent async steps means nesting them inside each other — the deeply indented "callback hell" that's hard to read and to handle errors in.

### Promises

A promise is an object standing in for a value that isn't available yet — it may *resolve* with a value later (or reject with an error). The problem it solves:

```js
const myData = getData();       // async — not done yet
console.log(myData.names);      // undefined: the data hasn't arrived
```

With a promise-returning `getData`, you attach the dependent code instead of running it immediately:

```js
getData().then((data) => {
  console.log(data.names);      // runs once the data exists
});
```

### `.then()`

`.then()` registers a function to run when the promise resolves, receiving the resolved value. It returns a new promise, so steps chain flat instead of nesting:

```js
getData()
  .then((data) => processData(data))
  .then((result) => console.log(result));
```

### When promises beat callbacks

For any multi-step asynchronous flow: chaining stays readable where callbacks pyramid, errors propagate down a chain to a single handler, and many built-in APIs (like `fetch`) return promises anyway. Callbacks remain the natural fit for event listeners.

### The event loop

The mental model underneath: JavaScript has a single call stack, and async work (timers, network responses, events) is handled by the host environment. Completed callbacks queue up and the event loop feeds them onto the stack only when it's empty. That's why a long-running synchronous loop blocks everything, and why `setTimeout(fn, 0)` still runs `fn` after the current code finishes.

## Common pitfalls

- Using an async result on the very next line, as if the call had finished — put the dependent code inside `.then()`.
- Logging the promise itself and being confused by `Promise { <pending> }` — the value is inside; access it via `.then()`.
- Nesting `.then()` calls inside each other, recreating callback hell — return the next promise and chain flatly.
- Assuming asynchronous means parallel — JavaScript still executes your code on one thread; the waiting, not your code, overlaps.

## Objectives — can you explain these?

- [ ] What a callback is
- [ ] What a promise is
- [ ] When promises are a better choice than callbacks
- [ ] What `.then()` does

## Self-test

- What is a callback?
- What is a promise?
- In which situations should you prefer promises over callbacks?
- What does `.then()` do?

## My notes

## Questions / to revisit
