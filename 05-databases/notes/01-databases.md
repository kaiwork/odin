# Databases

| | |
|---|---|
| **Course** | Databases |
| **Section** | Databases |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-databases> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Almost every real web application needs to remember things between requests — users, posts, orders — and that persistent layer is the database. This lesson introduces relational databases, where data lives in tables of rows and columns, and SQL, the language used to read and write that data. It is the conceptual on-ramp for everything database-related in the rest of the curriculum.

## Key concepts

### What a database is

A database is a structured, persistent store of data that an application can query reliably. Unlike variables in your program (gone when the process exits) or flat files (hard to search and easy to corrupt), a database engine handles storage, retrieval, concurrent access and integrity for you.

### Relational databases

A relational database organises data into **tables**. Each table has named **columns** with fixed types, and each row is one record. Tables relate to each other through shared identifier values — for example, an `orders` table can reference the `users` table by storing a user's id in each order row.

- A **primary key** is a column (often an auto-incrementing `id`) whose value uniquely identifies each row in its table.
- Relationships between tables are expressed as data, not as nesting — this is the big structural difference from hierarchical formats like XML or nested JSON, where related data is embedded inside a parent element.

### SQL

SQL (Structured Query Language) is the standard language for talking to relational databases. Two operations from this lesson:

```sql
-- Read every row from a table
SELECT * FROM users;

-- Insert a new row
INSERT INTO users (name, email)
VALUES ('Ada', 'ada@example.com');
```

`SELECT` retrieves data (`*` means all columns); `INSERT INTO ... VALUES` adds a row, with the column list and value list matching up positionally.

### SQL vs NoSQL

Relational (SQL) databases are the classic default; "NoSQL" databases (document stores, key-value stores) trade the rigid table structure for other models. This curriculum focuses on relational databases, specifically PostgreSQL later on.

## Common pitfalls

- Treating the database as an afterthought — the data model shapes the whole application, so it deserves design attention early.
- Confusing a database with a spreadsheet: tables look similar, but a database enforces types, keys and relationships, and is queried programmatically.
- Forgetting the quotes around string values in SQL (`'Ada'`, single quotes) or the semicolon at the end of a statement.

## Objectives — can you explain these?

- [ ] What a database is
- [ ] What a relational database is
- [ ] How relational databases differ from a hierarchical format like XML
- [ ] What SQL is
- [ ] What SQL is used for
- [ ] How to fetch every record from a table with SQL
- [ ] How to add a new record with SQL

## Self-test

- Define a database in your own words.
- What makes a database "relational"?
- What is a primary key and why does every table want one?
- What is SQL and what do you use it for?
- Write the SQL to return all rows from a table.
- Write the SQL to insert a new row into a table.

## My notes

## Questions / to revisit
