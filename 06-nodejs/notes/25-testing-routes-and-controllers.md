# Testing Routes and Controllers

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Testing Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-testing-routes-and-controllers> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

SuperTest lets you make HTTP assertions against an Express app inside your test suite without actually starting a server or binding a port. This lesson covers structuring routes so they are testable (export routers, keep `app.listen` out of the tested module) and using SuperTest's chainable API — built on SuperAgent — to assert on status codes, headers and bodies.

## Key concepts

### Testable structure

Split the app so tests can import just what they need: routes live in an exported `express.Router()` module, and the production entry point (the file calling `app.listen()`) is separate. A test then builds a fresh app around the router:

```js
const express = require("express");
const request = require("supertest");
const indexRouter = require("../routes/index");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
```

### Making requests and asserting

`request(app)` wraps the app; SuperTest starts it on an ephemeral port internally. Chain the request and the expectations:

```js
test("index route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "frodo" })
    .expect(200, done);
});
```

`.expect()` overloads cover status codes, header/value pairs, exact bodies, regexes and custom assertion functions. Passing `done` to the final `.expect()` ties the async request to test completion.

### done vs promises

`done` is the callback test frameworks provide for signalling that an asynchronous test has finished; SuperTest conveniently accepts it directly. Alternatively the request is thenable, so `async/await` or `.then()` chains work — handy for sequenced flows like POST-then-GET to check the POST took effect:

```js
test("create then read", async () => {
  await request(app).post("/items").type("form").send({ item: "hey" });
  const res = await request(app).get("/items");
  expect(res.body).toEqual(expect.arrayContaining([{ item: "hey" }]));
});
```

### SuperAgent under the hood

SuperTest's request API — `.get()`, `.post()`, `.send()`, `.type()`, `.set()`, plus multipart helpers like `.field()` and `.attach()` — comes from SuperAgent; SuperTest adds the server bootstrapping and `.expect()` assertions. Error handling differs by style: with `.end(callback)` you must inspect/forward the error yourself, whereas failed `.expect()`s in promise mode reject and surface automatically.

## Common pitfalls

- Importing the real `app.js` that calls `app.listen()` — tests fight over ports; export the router/app without listening and let SuperTest handle it.
- Forgetting `done` (or a returned promise) in an async test — the test "passes" before the response ever arrives.
- Sending form data without `.type("form")` while the app only parses urlencoded bodies — the server sees an empty body.
- Assuming `.expect()` is Jest's `expect` — SuperTest's version queues HTTP assertions on the request chain; they are different functions.

## Objectives — can you explain these?

- [ ] Test Express routes/controllers with the `supertest` module
- [ ] How SuperTest wraps and runs the Express app
- [ ] What SuperAgent contributes underneath SuperTest
- [ ] What the `done` parameter is for
- [ ] How `.expect()` works and what it can assert
- [ ] Find your way around SuperTest's documentation and methods

## Self-test

- Why does SuperTest exist — what problem does it solve?
- What is `done` for, and what shortcut does SuperTest give you with it?
- How does error handling differ when using `.end()` versus promise-style chains?
- Which SuperAgent methods handle multipart requests (fields and file attachments)?

## My notes

## Questions / to revisit
