# Controllers

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-controllers> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Controllers are the C in MVC: functions that take a matched request, gather the needed data (usually from a model), and decide what response to send. This lesson covers Express response methods, how middleware chains execute, and how to handle errors cleanly with error-handling middleware and custom error classes.

## Key concepts

### Controllers in MVC

A controller is a middleware function attached to a route. It extracts input from the request, asks the model layer for data, then hands off to the response — rendering a view or sending JSON. Keeping this logic in dedicated controller files (rather than inline in route definitions) keeps routes readable.

### Response methods

- `res.send(body)` — flexible send; sets a content type based on the value.
- `res.json(obj)` — sends JSON explicitly.
- `res.redirect(path)` — tells the client to request a different URL.
- `res.status(code)` — sets the status code; chainable, e.g. `res.status(404).send("Not found")`.
- `res.render(view, locals)` — renders a template (with a view engine configured).

### Middleware and execution order

Middleware signature: `(req, res, next)`. Express runs matching middleware in the order registered — application-level (`app.use(...)`) and router-level alike. Each function either ends the cycle with a response or calls `next()`:

- `next()` — continue to the next matching middleware.
- `next(err)` — skip ahead to error-handling middleware.
- `next('route')` — skip the remaining handlers of the current route.

### Error handling

Error-handling middleware is distinguished purely by arity — **four parameters**:

```js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
```

It should be registered after the other routes/middleware. In async controllers, wrap awaited work in `try/catch` and forward failures with `next(err)` (or use a wrapper like `express-async-handler` to do it for you).

A custom error class carries a status code with the message:

```js
class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

// in a controller
if (!author) throw new CustomNotFoundError("Author not found");
```

## Common pitfalls

- Writing an error handler with three parameters — Express identifies error middleware by its four-argument signature; drop one and it becomes ordinary middleware.
- Throwing inside an `async` handler without catching/forwarding (in Express 4) — the rejection never reaches your error middleware; use `try/catch` with `next(err)` or an async wrapper.
- Calling `next()` after already sending a response — a later handler may attempt a second response, causing "headers already sent" errors.

## Objectives — can you explain these?

- [ ] The main response methods and when to use each
- [ ] How to write error-handling middleware that deals with failures gracefully
- [ ] Typical middleware use cases, e.g. validation and authentication

## Self-test

- Which response methods exist and what is each for?
- What kinds of middleware are there?
- In what order does middleware run, and what triggers it?
- What does calling `next()` do — and what changes when you pass it an error?
- What other arguments can `next()` accept?
- What is a controller?
- How does a controller relate to (and differ from) middleware generally?
- What is special about a middleware function declared with four parameters?
- How would you build a custom error with its own status code?

## My notes

## Questions / to revisit
