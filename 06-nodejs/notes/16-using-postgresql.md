# Using PostgreSQL

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-using-postgresql> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This lesson connects the Express app to a real database. You create a PostgreSQL database and table from the `psql` shell, query it from Node with the `node-postgres` (`pg`) library, and write a one-off script to create and seed tables. It also introduces parameterized queries — the standard defence against SQL injection.

## Key concepts

### Creating a database and table in psql

```sql
CREATE DATABASE top_users;

-- after connecting to it (\c top_users)
CREATE TABLE usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255)
);

INSERT INTO usernames (username) VALUES ('Mao');
```

`GENERATED ALWAYS AS IDENTITY` makes the id auto-increment without you supplying it. Handy psql commands: `\c dbname` to connect, `\dt` to list tables.

### node-postgres (pg)

`npm install pg`. The library offers two ways to connect:

- **Client** — a single connection you open, use and close. Fine for scripts.
- **Pool** — a managed set of reusable connections. The right choice for a web server, where many requests need the database concurrently and per-request connection setup would be wasteful.

```js
// db/pool.js
const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: "top_users",
  password: process.env.DB_PASSWORD,
  port: 5432,
});
```

A connection URI string (`postgresql://user:password@localhost:5432/top_users`) is an equivalent alternative; in production both should come from environment variables.

### Queries and parameterization

```js
// db/queries.js
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}
```

`$1`, `$2`, ... are placeholders filled from the array argument. The driver keeps the values separate from the SQL text, so user input cannot rewrite the query — this is what prevents SQL injection. Controllers then simply `await` these query functions and render or redirect.

### Population script

A standalone `populatedb.js` opens a **Client**, runs `CREATE TABLE IF NOT EXISTS ...` plus seed `INSERT`s, and closes the connection. Run it once with `node populatedb.js` — useful locally and for initialising a deployed database.

## Common pitfalls

- Building SQL by string concatenation with user input — classic SQL injection. Always use `$1`-style parameters.
- Opening a new Client per request (or never releasing connections) — use a single shared Pool for the app.
- Committing database credentials — keep host, user, password and URL in environment variables.

## Objectives — can you explain these?

- [ ] Create a database and tables from the PostgreSQL shell
- [ ] Set up node-postgres and run queries from an Express app
- [ ] Write a script that creates and populates the database

## Self-test

- How do you create a database and a table using the psql shell?
- What is node-postgres and how is it used?
- When would you use a client versus a pool in pg?
- How do database query functions plug into an Express app?
- How would you seed a database from a script?

## My notes

## Questions / to revisit
