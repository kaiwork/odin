# Practice Questions → Curriculum Map

Six practice questions, mapped to the Odin lessons that teach what each one tests.
They fall into **three concept clusters**, and those clusters sit in very different
places in the path — which means the practical answer to "can I do this yet?"
differs a lot per question.

| # | Question | Cluster | Primary course section | Ready after |
|---|---|---|---|---|
| q1 | Rate limiting | Data structures & algorithms | JavaScript › A Bit of Computer Science | [`33-hashmap-data-structure`](../02-javascript/notes/33-hashmap-data-structure.md) |
| q2 | Password string | Strings & greedy algorithms | JavaScript › A Bit of Computer Science | [`29-time-complexity`](../02-javascript/notes/29-time-complexity.md) ⚠️ see gap |
| q3 | Monthly Revenue | SQL aggregation | Databases | [`02-databases-and-sql`](../05-databases/notes/02-databases-and-sql.md) |
| q4 | AI Text Rewrite Stats | SQL joins + aggregation | Databases | [`02-databases-and-sql`](../05-databases/notes/02-databases-and-sql.md) |
| q5 | Most Active Authors | Async / REST / pagination | JavaScript › Asynchronous JavaScript and APIs | [`21-async-and-await`](../02-javascript/notes/21-async-and-await.md) |
| q6 | Top Rated Food Outlets | Async / REST / pagination | JavaScript › Asynchronous JavaScript and APIs | [`21-async-and-await`](../02-javascript/notes/21-async-and-await.md) |

---

## Cluster A — Async, REST & pagination (q5, q6)

**These two are the same problem wearing different hats.** Both fetch a paginated
`the practice API` endpoint, loop until `page > total_pages`, flatten `data`,
then filter or reduce. Solve one and the other is a 5-line edit.

Concepts under test:

- `fetch` and the Promise it returns
- `async`/`await` inside a loop — and *why* you can't `forEach` an await
- Reading `total_pages` from page 1 to drive the loop bound
- Query-string params (`?city=Denver&page=2`)
- `JSON` shape traversal — q6 nests the value at `user_rating.average_rating`
- Array `filter` / `map` / `reduce`, and preserving API response order
- Two-pass max: find the highest rating, *then* collect all ties (q6 explicitly wants ties)

Lessons that teach it:

| Lesson | Why it matters here |
|---|---|
| [`19-asynchronous-code`](../02-javascript/notes/19-asynchronous-code.md) | Callbacks → Promises; the mental model |
| [`20-working-with-apis`](../02-javascript/notes/20-working-with-apis.md) | `fetch`, endpoints, query params |
| [`21-async-and-await`](../02-javascript/notes/21-async-and-await.md) | **The syntax you'll actually write** — sequential awaits in a loop |
| [`13-json`](../02-javascript/notes/13-json.md) | Parsing and walking the response object |
| [Project: Weather App](../02-javascript/projects/22-weather-app/) | The closest project analogue — fetch, parse, render |
| [`22-api-basics`](../06-nodejs/notes/22-api-basics.md) | Later: the *other* side, designing the paginated API |

> **Watch out:** the naive solution fires page requests sequentially, which is correct
> but slow. Once you've read `total_pages`, pages 2..N are independent — `Promise.all`
> them. That distinction is exactly what `21-async-and-await` covers.

---

## Cluster B — SQL aggregation (q3, q4)

Both are single-query `GROUP BY` problems. Neither needs JavaScript at all.

**q4 (AI Text Rewrite Stats)** — the more standard of the two:

- `JOIN` across `accounts` and `results` on the foreign key
- `COUNT`, `MIN`, `MAX`, `AVG` in one projection
- `ROUND(..., 2)` for the two-decimal format
- **`HAVING` not `WHERE`** — the `avg_words > 200` filter applies *after* aggregation.
  This is the single most common mistake on this question type.
- `GROUP BY` on the non-aggregated columns, `ORDER BY email ASC`

**q3 (Monthly Revenue)** — adds string surgery to the same skeleton:

- `SUBSTRING` / `LEFT` to slice `19SEP2187` into year `19` and month `SEP`
- `GROUP BY` two derived expressions
- `SUM` with `decimal` precision
- `ORDER BY year, month` — note the spec says month sorts **alphabetically**, so
  `APR` before `OCT` before `SEP`. Don't reach for month-number conversion; the
  expected output confirms plain alphabetical is wanted.

Lessons that teach it:

| Lesson | Why it matters here |
|---|---|
| [`01-databases`](../05-databases/notes/01-databases.md) | Relational model, keys |
| [`02-databases-and-sql`](../05-databases/notes/02-databases-and-sql.md) | **The whole toolkit** — SELECT, JOIN, GROUP BY, HAVING, aggregates |
| [Project: SQL Zoo](../05-databases/projects/03-sql-zoo/) | Drilling exactly these query shapes |
| [`15-installing-postgresql`](../06-nodejs/notes/15-installing-postgresql.md) | Get a local `psql` so you can actually run q3/q4 |
| [`16-using-postgresql`](../06-nodejs/notes/16-using-postgresql.md) | Running queries from Node |

> **Sequencing note:** Databases is course **05 of 07** in this path — a long way
> in. If you need q3/q4 sooner than that, these two lessons are self-contained
> enough to pull forward without breaking anything. The SQL Zoo project is
> browser-based, so you don't even need Postgres installed to start.

---

## Cluster C — Data structures & algorithms (q1, q2)

These are interview-style algorithm problems. The path covers them in
**JavaScript › A Bit of Computer Science**.

**q1 (Rate limiting)** — a sliding-window counter:

- A `Map` keyed by domain → per-domain timestamp history (this is the hashmap)
- Two simultaneous windows (2-per-5s and 5-per-30s), both checked before accepting
- **Only accepted requests count** — so you push to the history *after* a 200, never
  after a 429. Getting this wrong is the trap the worked example is designed to expose.
- A queue/deque per domain, evicting timestamps older than the window
- Complexity: naive rescanning is O(n·w); amortized eviction gets you O(n)

**q2 (Password string)** — a greedy minimum-cost problem:

- Vowel/consonant classification over a string
- Count the imbalance, then pick the *cheapest* characters to flip
- Cost per character = alphabet distance to the nearest vowel (or nearest consonant),
  with `a` and `z` edge cases
- Sort candidate costs ascending, take as many as the imbalance requires
- `n ≤ 3·10⁵` means an O(n log n) sort is fine, O(n²) is not

Lessons that teach it:

| Lesson | Why it matters here |
|---|---|
| [`26-a-very-brief-intro-to-cs`](../02-javascript/notes/26-a-very-brief-intro-to-cs.md) | Framing |
| [`29-time-complexity`](../02-javascript/notes/29-time-complexity.md) | **Reading the constraints as a budget** — `3·10⁵` rules out O(n²) |
| [`30-space-complexity`](../02-javascript/notes/30-space-complexity.md) | q1's per-domain history is the space/time trade |
| [`31-common-data-structures-and-algorithms`](../02-javascript/notes/31-common-data-structures-and-algorithms.md) | Queues, greedy patterns |
| [`33-hashmap-data-structure`](../02-javascript/notes/33-hashmap-data-structure.md) | **q1's core structure** |
| [Project: HashMap](../02-javascript/projects/34-hashmap/) | Build one yourself — then q1 is straightforward |
| [`07-classes`](../02-javascript/notes/07-classes.md) | Wrapping q1 as a `RateLimiter` class with `.handle(domain, time)` |
| [`23-api-security`](../06-nodejs/notes/23-api-security.md) | Later: q1's real-world counterpart, rate limiting as middleware |

---

## ⚠️ Coverage gap worth knowing

**q2 leans on string/array fundamentals that this repo doesn't cover.** Things like
`split`, `charCodeAt`, `sort` with a comparator, and basic loop patterns are taught in
Odin's **Foundations** course — which is a *prerequisite path*, not part of Full Stack
JavaScript, so it isn't scaffolded here. (You chose the 7-course path; that was the
right call, this is just the consequence.)

If q2's mechanics feel shaky, the gap is Foundations › JavaScript Basics, not anything
in these seven courses. Say the word and I'll add a `00-foundations/` course folder
alongside the rest.

## Suggested order

Given where these sit in the curriculum, the pragmatic sequence is:

1. **q5, q6** — reachable soonest (JavaScript course, async section, ~lesson 21 of 41)
2. **q3, q4** — pull the two Databases lessons + SQL Zoo forward; they're self-contained
3. **q1** — after Project: HashMap, which makes it click
4. **q2** — anytime, but shore up string fundamentals first

Nothing here is blocked on React, NodeJS, or the HTML/CSS courses.
