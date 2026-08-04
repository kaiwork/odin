# Introduction to Express

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-nodejs-introduction-to-express> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Express is a minimal Node framework that makes writing servers far less verbose than using the raw `http` module. This lesson covers standing up a first Express server, how a request travels through the app to produce a response, what middleware is, and how to auto-restart the server during development.

## Key concepts

### A minimal server

```js
// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
```

Setup: `npm init -y`, `npm install express`, then `node app.js`. `app.get(path, handler)` registers a route for GET requests to that path; `app.listen(port)` starts the server.

### The request/response flow

1. The client (browser) sends an HTTP request — a verb (GET, POST, ...) plus a path.
2. Express checks its registered routes and middleware **in the order they were defined** and hands the request to the first match.
3. The handler receives a request object (`req`) and a response object (`res`) and ends the cycle by sending something back — `res.send()` for strings/HTML, `res.sendFile()` to respond with a file on disk.
4. If no response is sent and control is never passed on, the client hangs until it times out.

### Middleware

A middleware function has the signature `(req, res, next)`. It can inspect or modify `req` and `res`, then either end the cycle by responding or call `next()` to pass control to the next middleware/route. Route handlers are really just middleware that usually respond instead of calling `next()`. Chains of middleware are how Express implements logging, body parsing, authentication and more.

### Auto-restarting in development

The server does not pick up file changes on its own. Either run Node with its built-in watch mode:

```bash
node --watch app.js
```

or use the older `nodemon` package. Both restart the process whenever a watched file changes.

## Common pitfalls

- Forgetting to send a response (or call `next()`) in a handler — the request hangs with no error.
- Expecting code changes to apply to a running server — restart it, or use `node --watch`/nodemon.
- Ignoring definition order — Express matches routes and middleware top-to-bottom, so a catch-all placed early can shadow later routes.

## Objectives — can you explain these?

- [ ] Set up a minimal Express server
- [ ] Trace how an incoming request is matched, handled and answered
- [ ] What a middleware function is
- [ ] How to restart the app automatically on file changes

## Self-test

- What is Express?
- What happens inside the server when a request arrives?
- Which response method sends a file back to the client?
- What tooling restarts the server automatically when you edit a file?

## My notes

## Questions / to revisit
