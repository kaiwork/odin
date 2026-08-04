# Authentication Basics

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Authentication |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-nodejs-authentication-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This lesson builds session-based username/password login in Express using Passport.js and its LocalStrategy, with sessions keeping users logged in across requests via a cookie. It also covers the non-negotiable security piece: hashing passwords with bcrypt so plain-text passwords are never stored.

## Key concepts

### The middleware stack

Passport's session-based flow depends on `express-session`, `passport` and `passport-local`, registered in the right order: session middleware first, then Passport's session support, so Passport can read and write the session each request.

### Strategies and LocalStrategy

A Passport **strategy** is a plug-in module implementing one authentication method (local password, JWT, OAuth providers, ...). `LocalStrategy` handles username/password: it receives the submitted credentials, looks the user up in the database, checks the password, and calls `done` with either the user or a failure.

```js
passport.use(
  new LocalStrategy(async (username, password, done) => {
    // look up user, compare password, then:
    // done(null, user) on success
    // done(null, false, { message: "Incorrect password" }) on failure
  })
);
```

### Sessions, serialization and cookies

After a successful login, Passport stores a small identifier in the session:

- `passport.serializeUser((user, done) => done(null, user.id))` — decides what goes into the session (just the id).
- `passport.deserializeUser(async (id, done) => ...)` — on each later request, turns that id back into a full user object, attached as `req.user`.

The browser holds a session cookie (`connect.sid`); presenting it on each request is what keeps the user "logged in" without re-sending credentials.

### Routes

- Sign-up: a POST handler that hashes the password and inserts the user.
- Log-in: `passport.authenticate("local", { successRedirect: "/", failureRedirect: "/" })` as the route's middleware.
- Log-out: `req.logout()` (it takes a callback) ends the login session.

### bcrypt

Passwords are stored only as **hashes** — one-way transformations that can't be reversed to the original password, so a stolen database doesn't reveal credentials. bcrypt also salts each hash.

```js
const bcrypt = require("bcryptjs");

const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds
const match = await bcrypt.compare(submitted, storedHash); // true/false
```

`bcrypt.compare()` hashes the login attempt and checks it against the stored hash — you never compare plain text.

## Common pitfalls

- Storing plain-text passwords "just while developing" — hash from the very first commit; real emails and reused passwords end up in dev databases.
- Registering session/Passport middleware in the wrong order — authentication silently fails or `req.user` is never populated.
- Comparing the submitted password to the stored hash with `===` — a hash never equals the plain text; use `bcrypt.compare()`.
- Forgetting that `deserializeUser` runs on every request — an inefficient lookup there slows the whole site.

## Objectives — can you explain these?

- [ ] The order in which Passport's required middleware must be applied
- [ ] What Passport strategies are
- [ ] Authenticate users with the LocalStrategy
- [ ] The role cookies play in authentication
- [ ] Refresh prior material: routes, templates, middleware, async/await, promises
- [ ] Set up user authentication in Express with Passport
- [ ] What bcrypt is and why it is used
- [ ] What a hash is and why passwords must be hashed
- [ ] What bcrypt's `compare` function does

## Self-test

- Which Passport strategy does this lesson use?
- Why does Passport create a cookie?
- What does `bcrypt.compare()` actually do?
- Why should bcrypt be part of a project from the very beginning?

## My notes

## Questions / to revisit
