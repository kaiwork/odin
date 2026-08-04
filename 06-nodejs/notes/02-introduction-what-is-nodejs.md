# Introduction: What is NodeJS?

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Introduction to NodeJS |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-introduction-what-is-nodejs> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Node.js (released in 2009) is a JavaScript runtime that runs outside the browser, which is what makes JavaScript a viable server-side language. Its defining trait is an asynchronous, event-driven model: instead of blocking while waiting for slow operations like network or disk I/O, Node registers callbacks and keeps working, handling many connections concurrently on a single thread.

## Key concepts

### A runtime, not a framework

Node is an environment that executes JavaScript on your machine or a server. It provides capabilities browser JavaScript lacks — reading and writing files, opening network connections, listening for HTTP requests — while omitting browser-only things like the DOM and `window`.

### Asynchronous and event-driven

Node's core pattern: start a slow operation, hand over a **callback**, and let the **event loop** invoke that callback when the operation finishes. Nothing sits idle waiting. This non-blocking I/O model is why one Node process can serve many simultaneous requests.

```js
// Classic "hello world" HTTP server
const http = require("http");

const server = http.createServer((req, res) => {
  // this callback runs each time a request arrives
  res.end("Hello World!");
});

server.listen(3000);
```

Run a script from the terminal with:

```bash
node app.js
```

### When you need a back end — and when you don't

- A **static site** serves the same prebuilt files to everyone; a **dynamic site** generates responses per request.
- You need a back end when you must persist data, authenticate users, keep secrets off the client, or serve user-specific content.
- You don't need one for purely informational pages — static hosting is simpler and cheaper.

## Common pitfalls

- Expecting asynchronous code to run in written order — a callback fires later, so code after the async call runs first. Reason about "when", not just "where".
- Assuming Node is multi-threaded because it handles concurrency — your JavaScript runs on one thread; concurrency comes from non-blocking I/O and the event loop.
- Trying to use browser APIs (`document`, `window`, `alert`) in Node — they don't exist there.

## Objectives — can you explain these?

- [ ] What a server does
- [ ] The difference between static and dynamic sites
- [ ] Why a project might need a back end
- [ ] When a project doesn't need a back end
- [ ] How the event loop works
- [ ] Where Node.js came from
- [ ] How to write and run a basic "hello world" app from the terminal
- [ ] What Node.js actually is

## Self-test

- In one or two sentences, what is Node?

## My notes

## Questions / to revisit
