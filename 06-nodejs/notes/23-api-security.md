# API Security

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | APIs |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-api-security> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Session cookies suit server-rendered sites, but APIs consumed by separate front ends or mobile apps commonly use token-based authentication instead: the server issues a signed JSON Web Token (JWT) at login, and the client sends it back on each request in a header. This lesson covers how JWTs are signed, transported and verified, and how token auth differs from sessions.

## Key concepts

### Sessions vs tokens

- **Session auth**: the server stores session state and the browser automatically sends a session cookie. Stateful — the server must track sessions.
- **Token auth**: the server issues a signed token and stores nothing; each request carries the token, and validity is checked by verifying the signature. Stateless — well suited to APIs, multiple clients and separate deployments.

### JSON Web Tokens

A JWT is a compact string in three dot-separated parts — header, payload and signature. The payload carries claims (like a user id and expiry). The **signature**, produced with a server-side secret, is what makes the token trustworthy: anyone can read the payload, but no one can alter it without invalidating the signature. A secure token is verifiable (tamper-evident) and expires.

With the `jsonwebtoken` package:

```js
const jwt = require("jsonwebtoken");

// issue at login
const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});

// verify later
jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) return res.sendStatus(403);
  // decoded payload is trustworthy here
});
```

### The Authorization header

Clients send the token in a request header, conventionally:

```
Authorization: Bearer <token>
```

Server-side middleware reads that header, splits off the token, and either verifies it immediately or attaches it to `req` for the protected route to verify:

```js
function verifyToken(req, res, next) {
  const header = req.headers["authorization"];
  if (!header) return res.sendStatus(403);
  req.token = header.split(" ")[1];
  next();
}

app.get("/protected", verifyToken, handler);
```

### Passport integration

The same Passport structure used for local login extends to APIs via a JWT strategy — the strategy pulls the token from the Authorization header and verifies it, replacing session cookies for API routes.

## Common pitfalls

- Assuming JWT payloads are secret — they are only base64-encoded and readable by anyone; never put sensitive data in them. The signature gives integrity, not confidentiality.
- Issuing tokens without an expiry — a leaked token then works forever; always set `expiresIn`.
- Hard-coding the signing secret — it belongs in an environment variable.
- Skipping `jwt.verify()` and trusting the decoded payload — decoding without verifying accepts forged tokens.

## Objectives — can you explain these?

- [ ] How token authentication differs from session-based authentication
- [ ] What JSON Web Tokens are
- [ ] What the Authorization header is and how to use it
- [ ] The methods used to sign and verify tokens
- [ ] Write middleware that verifies a token on a route
- [ ] How JWT expiration works
- [ ] Extend a PassportJS setup to use JWTs

## Self-test

- What is a JSON Web Token?
- Name two properties a secure token should have.
- Where in a request is the token carried?

## My notes

## Questions / to revisit
