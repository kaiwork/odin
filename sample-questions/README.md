# Practice Questions → Curriculum Map

Six practice questions, mapped to the Odin lessons that teach what each one tests.
They fall into **three concept clusters**, and those clusters sit in very different
places in the path — so "can I do this yet?" has a different answer per question.

> **Spoiler policy:** what's visible names *concepts and lessons* only. Anything that
> gives away an approach or a trap lives in a collapsed **"Stuck?"** block. Open those
> deliberately, after you've had a real attempt — not while sizing up the problem.

| # | Question | Cluster | Primary course section | Ready after |
|---|---|---|---|---|
| q1 | Rate limiting | Data structures & algorithms | JavaScript › A Bit of Computer Science | [`33-hashmap-data-structure`](../02-javascript/notes/33-hashmap-data-structure.md) |
| q2 | Password string | Strings & greedy algorithms | **Foundations › JavaScript Basics** | [`40-loops-and-arrays`](../00-foundations/notes/40-loops-and-arrays.md) |
| q3 | Monthly Revenue | SQL aggregation | Databases | [`02-databases-and-sql`](../05-databases/notes/02-databases-and-sql.md) |
| q4 | AI Text Rewrite Stats | SQL joins + aggregation | Databases | [`02-databases-and-sql`](../05-databases/notes/02-databases-and-sql.md) |
| q5 | Most Active Authors | Async / REST / pagination | JavaScript › Asynchronous JavaScript and APIs | [`21-async-and-await`](../02-javascript/notes/21-async-and-await.md) |
| q6 | Top Rated Food Outlets | Async / REST / pagination | JavaScript › Asynchronous JavaScript and APIs | [`21-async-and-await`](../02-javascript/notes/21-async-and-await.md) |

---

## Cluster A — Async, REST & pagination (q5, q6)

Both consume a paginated REST endpoint and reduce the collected records to an answer.

Concepts under test:

- `fetch` and the Promise it returns
- `async`/`await`, including inside a loop
- Paginated APIs — using the response metadata to know when you're done
- Query-string parameters
- Traversing a nested JSON response
- Array `filter` / `map` / `reduce`
- Preserving the order records arrived in

Lessons that teach it:

| Lesson | Why it matters here |
|---|---|
| [`19-asynchronous-code`](../02-javascript/notes/19-asynchronous-code.md) | Callbacks → Promises; the mental model |
| [`20-working-with-apis`](../02-javascript/notes/20-working-with-apis.md) | `fetch`, endpoints, query params |
| [`21-async-and-await`](../02-javascript/notes/21-async-and-await.md) | **The syntax you'll actually write** |
| [`13-json`](../02-javascript/notes/13-json.md) | Parsing and walking the response object |
| [Project: Weather App](../02-javascript/projects/22-weather-app/) | Closest project analogue — fetch, parse, render |
| [`22-api-basics`](../06-nodejs/notes/22-api-basics.md) | Later: the *other* side, designing a paginated API |

<details>
<summary><b>Stuck? — approach hints for q5 / q6</b></summary>

<br>

- These two are structurally the same problem. Once one works, the other is a small edit
  to the filtering step.
- Page 1's response tells you how many pages exist. Read it first, then decide how to
  fetch the rest.
- Sequential `await` in a loop is correct but leaves performance on the table — after
  the first response, the remaining pages don't depend on each other. Look up
  `Promise.all` once you have a working sequential version.
- q6 asks for *all* outlets tied at the highest rating, not just one. Think about how
  many passes over the data that needs.
- q6's rating is nested one level deeper in each record than you might first assume —
  check the schema in the question.

</details>

---

## Cluster B — SQL aggregation (q3, q4)

Both are single-query problems. Neither needs any JavaScript.

Concepts under test:

- `JOIN` across a foreign-key relationship (q4)
- Aggregate functions — count, min, max, sum, average
- Grouping rows, and choosing what to group by
- **Filtering on an aggregated value** — which is not the same as filtering rows (q4)
- Rounding to a fixed number of decimals (q4)
- String slicing to derive columns from an encoded id (q3)
- Multi-column ordering

Lessons that teach it:

| Lesson | Why it matters here |
|---|---|
| [`01-databases`](../05-databases/notes/01-databases.md) | Relational model, keys |
| [`02-databases-and-sql`](../05-databases/notes/02-databases-and-sql.md) | **The whole toolkit** for both questions |
| [Project: SQL Zoo](../05-databases/projects/03-sql-zoo/) | Drilling exactly these query shapes |
| [`15-installing-postgresql`](../06-nodejs/notes/15-installing-postgresql.md) | Get a local `psql` to actually run these |
| [`16-using-postgresql`](../06-nodejs/notes/16-using-postgresql.md) | Running queries from Node |

> **Sequencing note:** Databases is course **05 of 07**, a long way in. These two lessons
> are self-contained enough to pull forward, and SQL Zoo runs in the browser — so you
> don't need Postgres installed to start.

<details>
<summary><b>Stuck? — approach hints for q3 / q4</b></summary>

<br>

**q4** — if your `> 200` filter throws an error about the aggregate, or silently returns
the wrong rows, the issue is *which clause* you put it in. Row-level filtering happens
before grouping; you need the one that happens after. This is the single most common
mistake on this question shape.

**q3** — the year and month are the first five characters of the transaction id. Your
dialect has a function to take a slice of a string; you can group by that expression
directly rather than adding a column.

**q3 ordering** — check the expected output before you write the `ORDER BY`. The month
ordering it wants is simpler than you'd expect for months, and needs no conversion to
month numbers.

</details>

---

## Cluster C — Data structures & algorithms (q1, q2)

Interview-style algorithm problems, covered in **JavaScript › A Bit of Computer Science**.

Concepts under test:

- **q1** — sliding-window counting, per-key state, hash maps, queue eviction,
  amortized complexity
- **q2** — character classification over a string, greedy choice, sorting, and reading
  a constraint as a performance budget

Lessons that teach it:

| Lesson | Why it matters here |
|---|---|
| [`26-a-very-brief-intro-to-cs`](../02-javascript/notes/26-a-very-brief-intro-to-cs.md) | Framing |
| [`29-time-complexity`](../02-javascript/notes/29-time-complexity.md) | **Reading constraints as a budget** — the input size tells you which approaches are viable |
| [`30-space-complexity`](../02-javascript/notes/30-space-complexity.md) | q1's bookkeeping is a space/time trade |
| [`31-common-data-structures-and-algorithms`](../02-javascript/notes/31-common-data-structures-and-algorithms.md) | Queues, greedy patterns |
| [`33-hashmap-data-structure`](../02-javascript/notes/33-hashmap-data-structure.md) | **q1's core structure** |
| [Project: HashMap](../02-javascript/projects/34-hashmap/) | Build one yourself — then q1 is much easier |
| [`07-classes`](../02-javascript/notes/07-classes.md) | Useful for packaging q1's state and behaviour together |
| [`23-api-security`](../06-nodejs/notes/23-api-security.md) | Later: q1's real-world counterpart as middleware |

<details>
<summary><b>Stuck? — approach hints for q1</b></summary>

<br>

- Each domain needs its own independent record of history. A plain object or `Map`
  keyed by domain gets you there.
- There are two limits to satisfy at once, not one. A request has to clear both.
- **Re-read the note about what counts.** The worked example's single rejection is
  placed specifically to catch a wrong reading of it — trace time 6 by hand and make
  sure your rule produces the same result.
- Old entries stop mattering once they fall outside the larger window. Dropping them as
  you go is what keeps this linear rather than quadratic.

</details>

<details>
<summary><b>Stuck? — approach hints for q2</b></summary>

<br>

- The length is guaranteed even, so a "balanced" string has a known, fixed number of
  vowels. Work out how far off the input is first — that number tells you how many
  characters you must change.
- Changing a character costs more or less depending on where it sits in the alphabet
  relative to where you need it to land. Not all changes are equally cheap.
- Once you can price each candidate change, the choice of *which* ones to make is the
  greedy step.
- `a` and `z` behave differently from every other letter. Handle them explicitly.
- The constraint on length rules out anything quadratic, but leaves room for a sort.
- The one built-in you'll likely need for pricing isn't taught anywhere in the Odin
  path — it's a one-line MDN lookup about a character's numeric code. Don't hunt for a
  lesson on it.

</details>

---

## Cluster D — The fundamentals underneath all six (Foundations)

Every question above assumes fluency with plain JavaScript: loops, arrays, string
methods, functions, objects. That's **Foundations › JavaScript Basics**, scaffolded here
as `00-foundations/`. q2 in particular needs no concept from the seven main courses.

| Lesson | Feeds |
|---|---|
| [`31-variables-and-operators`](../00-foundations/notes/31-variables-and-operators.md) | all |
| [`33-data-types-and-conditionals`](../00-foundations/notes/33-data-types-and-conditionals.md) | q2's character classification |
| [`35-function-basics`](../00-foundations/notes/35-function-basics.md) | every `getX(...)` signature these hand you |
| [`36-problem-solving`](../00-foundations/notes/36-problem-solving.md) | **read this before attempting q1 or q2** — pseudocode-first is exactly the discipline they need |
| [`37-understanding-errors`](../00-foundations/notes/37-understanding-errors.md) | debugging q5/q6's async stack traces |
| [`40-loops-and-arrays`](../00-foundations/notes/40-loops-and-arrays.md) | **q2's core** — iteration and sorting |
| [`44-object-basics`](../00-foundations/notes/44-object-basics.md) | q1's per-domain bookkeeping; q5/q6's response objects |

---

## Suggested order

1. **q2** — earliest reachable: Foundations › JavaScript Basics, no main-course content needed
2. **q5, q6** — JavaScript course, async section (~lesson 21 of 41)
3. **q3, q4** — pull the two Databases lessons + SQL Zoo forward; they're self-contained
4. **q1** — after Project: HashMap, which makes it click

Nothing here is blocked on React, NodeJS, or the HTML/CSS courses.
