# Testing Database Operations

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Testing Express |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-nodejs-testing-database-operations> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Tests that touch the database must never run against real data, so integration tests use a dedicated test database selected by environment variable. This lesson covers when database code deserves unit tests at all, and the mechanics of a test database: switching URLs by environment, resetting tables between tests, and running tests sequentially so they don't trample each other.

## Key concepts

### Unit vs integration here

Simple query wrappers (thin calls to `pg` or Prisma) rarely justify unit tests — you would mostly be testing the library. Unit-test database code when it contains real logic of your own: complex query construction or custom data transformation. Everything else is better covered by **integration tests** that exercise route → controller → real (test) database, e.g. with SuperTest.

### A separate test database

Create a second database whose name marks it clearly (a `test_` prefix), and give each environment its own URL:

```
DATABASE_URL=postgresql://localhost:5432/myapp
TEST_DATABASE_URL=postgresql://localhost:5432/test_myapp
```

Select the right one from `NODE_ENV`:

```js
const databaseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;
```

Test runners like Jest set `NODE_ENV=test` while running, so the switch happens automatically and production data is never touched.

### Clean state between tests

Tests must not depend on leftovers from earlier tests. Reset the involved tables in a `beforeEach` hook — with Prisma, deletions for related tables can be grouped in a transaction:

```js
beforeEach(async () => {
  await prisma.$transaction([
    prisma.message.deleteMany(),
    prisma.user.deleteMany(),
  ]);
});
```

Each test then seeds exactly the data it needs.

### Sequential execution

Test files normally run in parallel, but parallel suites sharing one test database will interfere with each other's rows. Run them one at a time:

```bash
jest --runInBand
```

## Common pitfalls

- Pointing tests at the development or production database — a `deleteMany` in `beforeEach` wipes real data. Isolate via `TEST_DATABASE_URL`.
- Letting tests depend on data a previous test created — order-dependent suites break mysteriously; reset and seed per test.
- Forgetting `--runInBand` — parallel workers race on the shared test database and produce flaky failures.
- Unit-testing trivial ORM calls with heavy mocks — low-value tests; save unit tests for genuine logic and lean on integration tests.

## Objectives — can you explain these?

- [ ] Unit vs integration testing in the context of an Express server
- [ ] Create and use a separate database for integration tests

## Self-test

- When is it worth unit-testing database operations?
- How do you set up a test database and make integration tests use it?

## My notes

## Questions / to revisit
