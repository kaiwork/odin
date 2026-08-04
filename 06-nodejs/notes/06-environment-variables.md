# Environment Variables

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Introduction to NodeJS |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-environment-variables> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Environment variables let one codebase behave differently per environment — different database URLs, ports and secrets in development versus production — without editing the code. They are also how you keep secrets (API keys, connection strings) out of version control. In Node they are read from the `process.env` object.

## Key concepts

### What they are and why

An environment variable is a named value supplied by the environment the process runs in, rather than hard-coded. Two main uses:

- **Configuration** that differs between environments (port numbers, database URLs, feature flags).
- **Secrets** that must never be committed to a public repository (API keys, session secrets).

### Setting them

Several ways to provide variables to a Node process:

```bash
# inline for one run
PORT=3000 node app.js

# exported for the shell session
export PORT=3000
```

Most projects use a **`.env` file** — plain `KEY=value` lines:

```
PORT=3000
DATABASE_URL=postgresql://localhost/mydb
```

Recent Node versions can load it natively (e.g. `node --env-file=.env app.js`); older setups use the `dotenv` package, calling its config loader as early as possible in the app.

### Reading them

Every variable is a property on `process.env`:

```js
const port = process.env.PORT;
console.log(typeof port); // "string" — always
```

Values are **always strings**. `PORT=3000` gives you `"3000"`; a flag like `FLAG=false` gives you the truthy string `"false"`. Convert explicitly (`Number(...)`, compare against `"true"`) when you need other types.

### Keeping secrets secret

- Add `.env` to `.gitignore` before the first commit.
- Provide a committed `.env.sample` (or notes in the README) listing the required variable names without real values, so collaborators know what to set.
- In production, set variables through the hosting provider's dashboard rather than uploading a `.env` file.

## Common pitfalls

- Committing `.env` to GitHub — once pushed, a secret is compromised and must be rotated; gitignore it from the start.
- Treating env values as numbers or booleans — they are strings, so `process.env.FLAG === false` is never true.
- Loading `dotenv` after code that reads `process.env` — the variables are undefined at that point; load it first.

## Objectives — can you explain these?

- [ ] What environment variables are and what they buy you
- [ ] How to store variables in a `.env` file and load them into your app
- [ ] How to read environment variables via `process.env`

## Self-test

- What is an environment variable?
- What kinds of things would you put in environment variables?
- How do you get values from a `.env` file into your process?
- How does a Node app read an environment variable?
- What type does an environment variable always have?
- Is it ever okay to push your `.env` file to a public repo?

## My notes

## Questions / to revisit
