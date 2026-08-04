# API Basics

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | APIs |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-api-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Instead of rendering HTML on the server, the back end can expose a JSON API that any front end (a React app, a mobile app) consumes. This lesson covers REST — the dominant convention for structuring such APIs around resources and HTTP verbs — and CORS, the browser mechanism that must be configured before a front end on another origin can call your API.

## Key concepts

### REST

REST stands for **Representational State Transfer**. The practical takeaway: organise endpoints around **resources** (nouns), and let the **HTTP verb** express the action — rather than encoding actions in URLs (`/getPosts`, `/deletePost`).

CRUD maps onto verbs:

| CRUD | Verb |
|---|---|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | DELETE |

Endpoint conventions use paired collection and single-resource routes:

- `GET /posts` — list the collection; `POST /posts` — create in it.
- `GET /posts/:postid` — one resource; `PUT` / `DELETE /posts/:postid` — update/remove it.
- Nesting expresses ownership: `/posts/:postid/comments`.

### Responding with JSON

An API controller sends data, not markup:

```js
app.get("/posts", async (req, res) => {
  const posts = await db.getAllPosts();
  res.json(posts);
});
```

### Same-Origin Policy and CORS

Browsers block scripts on one **origin** (scheme + host + port) from reading responses from another origin — the Same-Origin Policy. **CORS** (Cross-Origin Resource Sharing) is the header-based mechanism that relaxes this: the server includes headers such as `Access-Control-Allow-Origin` stating which origins may consume its responses.

In Express, use the `cors` middleware:

```js
const cors = require("cors");

app.use(cors());                                // allow every origin (fine in dev)
app.use(cors({ origin: "https://example.com" })); // allow only this origin

app.get("/posts", cors(), handler);             // per-route instead of global
```

## Common pitfalls

- Designing verb-flavoured URLs (`/createPost`) — the verb belongs in the HTTP method, the URL names the resource.
- Interpreting a CORS error as a network/server failure — the server usually responded; the browser refused to expose the response. Fix the server's CORS headers.
- Shipping `cors()` wide-open to production — restrict `origin` to the front ends that should have access.
- Forgetting CORS is browser-enforced — it is not authentication; non-browser clients ignore it entirely.

## Objectives — can you explain these?

- [ ] What REST stands for
- [ ] Why REST conventions are useful for structuring an API
- [ ] REST naming conventions for endpoints
- [ ] The HTTP methods/verbs, reinforced
- [ ] What the Same-Origin Policy is
- [ ] What CORS is for
- [ ] Applying CORS middleware in Express globally and per-route
- [ ] Restricting CORS to specific allowed origins
- [ ] What the CORS headers mean

## Self-test

- What is REST short for?
- What are HTTP verbs and why do they matter to API design?
- What does the Same-Origin Policy restrict?
- How do you turn on CORS in an Express app?
- Which HTTP verb corresponds to each letter of CRUD?

## My notes

## Questions / to revisit
