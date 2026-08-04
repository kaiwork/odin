# Routes

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-routes> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Routing is how Express decides which handler answers which request, based on the HTTP verb and the URL path. This lesson covers defining routes, capturing dynamic values with route and query parameters, and splitting routes into separate routers so the app stays organised as it grows.

## Key concepts

### Anatomy of a route

A route pairs an HTTP verb with a path and a handler:

```js
app.get("/messages", (req, res) => res.send("all messages"));
app.post("/messages", (req, res) => res.send("create a message"));
```

`app.get`, `app.post`, `app.put`, `app.delete` match one verb; `app.all(path, handler)` matches every verb. Routes are checked in definition order and the **first match wins**, so specific routes must come before broader patterns.

### Route parameters

A path segment starting with `:` is a named placeholder. Matched values land on `req.params`:

```js
app.get("/users/:username/messages/:messageId", (req, res) => {
  const { username, messageId } = req.params;
  res.send(`Message ${messageId} from ${username}`);
});
```

### Query parameters

The part of a URL after `?` (`?sort=date&direction=asc`) is not part of route matching. Express parses it into `req.query` as key–value pairs:

```js
// GET /search?sort=date
app.get("/search", (req, res) => {
  console.log(req.query.sort); // "date"
});
```

### Path patterns

Express paths can express optional segments and wildcards (modern Express uses `{}` for optional parts and `*` named wildcards), letting one route match a family of URLs. Reach for these sparingly — explicit routes are easier to reason about.

### Routers

`express.Router()` creates a mini-app holding related routes, typically one router per resource in its own file:

```js
// routes/usersRouter.js
const { Router } = require("express");
const usersRouter = Router();

usersRouter.get("/", (req, res) => res.send("all users"));
usersRouter.get("/:id", (req, res) => res.send(`user ${req.params.id}`));

module.exports = usersRouter;
```

```js
// app.js
const usersRouter = require("./routes/usersRouter");
app.use("/users", usersRouter);
```

Paths inside the router are **relative to the mount point**: the router's `"/"` handles `/users`, and a route defined as `"/delete"` inside it handles `/users/delete`.

## Common pitfalls

- Putting a parameterised route like `/users/:id` before a specific one like `/users/new` — `:id` swallows `"new"` first. Order specific before dynamic.
- Reading dynamic URL segments from `req.query` (or query strings from `req.params`) — route parameters populate `req.params`; query strings populate `req.query`.
- Repeating the mount prefix inside a router (`/users/delete` inside a router mounted at `/users`) — that would match `/users/users/delete`.

## Objectives — can you explain these?

- [ ] How routes are defined
- [ ] What route parameters and query parameters are and how they differ
- [ ] How to mount a router on a path

## Self-test

- How do you write a route that responds to only one HTTP verb?
- How do you write a route that responds to every HTTP verb?
- How can a route path match a pattern rather than one exact string?
- How does definition order influence which route handles a request?
- Which object holds the values captured by route parameters?
- Where do you read query-string values inside a handler?
- How do you move a group of routes into their own router file?
- With a router mounted at `/users`, what path does a GET route need so it matches `/users/delete`?

## My notes

## Questions / to revisit
