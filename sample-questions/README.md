# Practice Topics → Curriculum Map

The concepts my practice questions exercise, and where this path teaches each one.
Organised by topic rather than by question. The questions themselves stay local and
untracked.

---

## Async, REST & pagination

Fetching from an HTTP API and reducing the results.

**Concepts:** `fetch` and the Promise it returns · `async`/`await` · awaiting inside a
loop · `Promise.all` for independent requests · paginated responses and their metadata ·
query-string parameters · traversing nested JSON · `filter` / `map` / `reduce` ·
preserving source order

| Lesson | Covers |
|---|---|
| [`19-asynchronous-code`](../02-javascript-infocus/notes/19-asynchronous-code.md) | Callbacks → Promises; the mental model |
| [`20-working-with-apis`](../02-javascript-infocus/notes/20-working-with-apis.md) | `fetch`, endpoints, query params |
| [`21-async-and-await`](../02-javascript-infocus/notes/21-async-and-await.md) | The syntax, including sequential vs parallel |
| [`13-json`](../02-javascript-infocus/notes/13-json.md) | Parsing and walking a response object |
| [Project: Weather App](../02-javascript-infocus/projects/22-weather-app/) | Fetch, parse, render — the closest project |
| [`22-api-basics`](../06-nodejs/notes/22-api-basics.md) | The other side: designing a paginated API |

---

## SQL aggregation

Single-query reporting over relational tables. No JavaScript involved.

**Concepts:** `SELECT` · `JOIN` across a foreign key · aggregate functions
(`COUNT`, `MIN`, `MAX`, `SUM`, `AVG`) · `GROUP BY` · filtering on an aggregate versus
filtering rows · rounding to fixed decimals · deriving a column by slicing a string ·
multi-column `ORDER BY`

| Lesson | Covers |
|---|---|
| [`01-databases`](../05-databases-infocus/notes/01-databases.md) | Relational model, keys |
| [`02-databases-and-sql`](../05-databases-infocus/notes/02-databases-and-sql.md) | The whole query toolkit |
| [Project: SQL Zoo](../05-databases-infocus/projects/03-sql-zoo/) | Drilling these query shapes |
| [Installing PostgreSQL](https://www.theodinproject.com/lessons/nodejs-installing-postgresql) | A local `psql` to practise in (setup lesson — no local note) |
| [`16-using-postgresql`](../06-nodejs/notes/16-using-postgresql.md) | Running queries from Node |

> Databases is course **05 of 07**, but these two lessons are self-contained enough to
> pull forward. SQL Zoo runs in the browser, so you can start without installing
> Postgres.

---

## Data structures & algorithms

**Concepts:** hash maps and per-key state · sliding-window counting · queues and
eviction · greedy selection · sorting by a computed cost · time and space complexity ·
reading a stated input limit as a performance budget

| Lesson | Covers |
|---|---|
| [`26-a-very-brief-intro-to-cs`](../02-javascript-infocus/notes/26-a-very-brief-intro-to-cs.md) | Framing |
| [`29-time-complexity`](../02-javascript-infocus/notes/29-time-complexity.md) | Which approaches a given input size allows |
| [`30-space-complexity`](../02-javascript-infocus/notes/30-space-complexity.md) | Space/time trade-offs |
| [`31-common-data-structures-and-algorithms`](../02-javascript-infocus/notes/31-common-data-structures-and-algorithms.md) | Queues, greedy patterns |
| [`33-hashmap-data-structure`](../02-javascript-infocus/notes/33-hashmap-data-structure.md) | Hash maps in depth |
| [Project: HashMap](../02-javascript-infocus/projects/34-hashmap/) | Build one from scratch |
| [`05-factory-functions-and-the-module-pattern`](../02-javascript-infocus/notes/05-factory-functions-and-the-module-pattern.md) | Closures holding per-key state — the factory route to a stateful helper |
| [`07-classes`](../02-javascript-infocus/notes/07-classes.md) | Packaging state and behaviour together — the class route |
| [`23-api-security`](../06-nodejs/notes/23-api-security.md) | Throttling and abuse prevention in production middleware |

---

## JavaScript fundamentals

Assumed by everything above. Taught in the Foundations prerequisite course.

**Concepts:** variables and operators · data types and conditionals · functions ·
loops and arrays · sorting with a comparator · string methods · objects ·
reading error messages · problem decomposition

| Lesson | Covers |
|---|---|
| [`31-variables-and-operators`](../00-foundations-infocus/notes/31-variables-and-operators.md) | Basics |
| [`33-data-types-and-conditionals`](../00-foundations-infocus/notes/33-data-types-and-conditionals.md) | Types, comparisons, branching |
| [`35-function-basics`](../00-foundations-infocus/notes/35-function-basics.md) | Parameters, returns, scope |
| [`36-problem-solving`](../00-foundations-infocus/notes/36-problem-solving.md) | Pseudocode-first — worth reading before any algorithm problem |
| [`37-understanding-errors`](../00-foundations-infocus/notes/37-understanding-errors.md) | Reading stack traces |
| [`40-loops-and-arrays`](../00-foundations-infocus/notes/40-loops-and-arrays.md) | Iteration, array methods, sorting |
| [`44-object-basics`](../00-foundations-infocus/notes/44-object-basics.md) | Objects as keyed state |

---

## Where these sit in the path

| Topic | Reachable at |
|---|---|
| JavaScript fundamentals | Foundations — before the path proper |
| Async / REST | JavaScript course, async section (~lesson 21 of 41) |
| SQL aggregation | Databases, course 05 of 07 — pullable forward |
| Data structures & algorithms | JavaScript course, CS section (~lesson 26 onward) |

None of it is blocked on React, NodeJS, or the HTML/CSS courses.
