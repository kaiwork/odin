# Databases and SQL

| | |
|---|---|
| **Course** | Databases |
| **Section** | Databases |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-databases-databases-and-sql> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

This is the main SQL lesson: keys, schemas, the core statements behind CRUD, joins across tables, and aggregate functions for summarising data. SQL is worth learning properly because the database can filter, join and aggregate far more efficiently than application code pulling everything into memory.

## Key concepts

### Keys and schema

- **Primary key** — a column that uniquely identifies each row in its own table.
- **Foreign key** — a column that stores another table's primary key value, linking rows across tables (e.g. `posts.user_id` references `users.id`).
- **Schema** — the definition of the database's structure: which tables exist, their columns, types and constraints.

### CRUD statements

Each CRUD operation maps to a SQL statement:

```sql
INSERT INTO users (name, email) VALUES ('Ada', 'ada@example.com');  -- Create

SELECT id, name FROM users WHERE name LIKE 'A%';                    -- Read

UPDATE users SET email = 'new@example.com' WHERE id = 1;            -- Update

DELETE FROM users WHERE id = 1;                                     -- Delete
```

`CREATE TABLE` defines a new table; `WHERE` narrows which rows a statement touches; `LIKE` does pattern matching (`%` is a wildcard); `DISTINCT` removes duplicate values from results; `ORDER BY` sorts and `LIMIT` caps the row count.

### Joins

Joins combine rows from multiple tables on a matching condition, usually foreign key = primary key:

```sql
SELECT users.name, posts.title
FROM users
INNER JOIN posts ON posts.user_id = users.id;
```

`INNER JOIN` keeps only rows that match in both tables. Outer joins (`LEFT JOIN`, `RIGHT JOIN`) also keep unmatched rows from one side, filling the other side with NULLs.

### Aggregate functions

Functions like `COUNT`, `SUM`, `AVG`, `MAX` and `MIN` collapse many rows into one value. `GROUP BY` produces one aggregated row per group; `HAVING` filters those groups after aggregation, which `WHERE` cannot do because `WHERE` runs before grouping:

```sql
SELECT user_id, COUNT(*) AS post_count
FROM posts
GROUP BY user_id
HAVING COUNT(*) > 5;
```

### Indexes

An index is an auxiliary data structure that lets the database find rows by a column's value without scanning the whole table — great for read speed on frequently queried columns, at some cost to write speed and storage.

## Common pitfalls

- Running `UPDATE` or `DELETE` without a `WHERE` clause — it applies to every row in the table. Write and check the `WHERE` first.
- Using `WHERE` to filter on an aggregate (`WHERE COUNT(*) > 5`) — aggregates are filtered with `HAVING` after `GROUP BY`.
- Pulling whole tables into JavaScript and filtering there instead of letting SQL do it — the database is optimised for exactly this work.
- Mixing up key directions: the foreign key lives in the "many" table and points at the primary key of the "one" table.

## Objectives — can you explain these?

- [ ] What a primary key is
- [ ] What foreign keys are
- [ ] What a schema is
- [ ] How to use SQL statements such as `SELECT`, `CREATE TABLE`, `UPDATE` and `DELETE`
- [ ] How to use clauses such as `WHERE`, `LIKE` and `DISTINCT`
- [ ] How to use aggregate functions such as `AVG`, `COUNT` and `SUM`
- [ ] What indexes are useful for
- [ ] How `WHERE` differs from `HAVING`

## Self-test

- How does a foreign key differ from a primary key?
- Where is the structural setup of a database defined?
- What are the essential pieces of a SQL command?
- Which SQL statement performs the "Read" of CRUD?
- Which kind of `JOIN` keeps only the rows that match in both tables?
- Show how you would apply an aggregate function in a query.
- When do you reach for `HAVING` instead of `WHERE`?
- Why is it better to filter and aggregate in SQL rather than in application code?

## My notes

## Questions / to revisit
