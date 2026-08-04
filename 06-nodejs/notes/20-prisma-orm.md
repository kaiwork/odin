# Prisma ORM

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | ORMs |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-prisma-orm> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Writing raw SQL by hand gets repetitive, and nothing in the codebase documents the schema or tracks its changes. An ORM (Object Relational Mapper) maps database tables to code-level objects and generates the SQL for you. This lesson introduces Prisma, whose three pillars are a declarative schema file, a generated type-aware client for queries, and a migration tool for evolving the schema.

## Key concepts

### Why an ORM

Raw SQL pain points: boilerplate query code repeated everywhere, no single in-repo source of truth for the schema, and manual, error-prone schema changes. An ORM addresses all three — at the cost of a layer of abstraction (Prisma still lets you drop to raw SQL when needed).

### Prisma schema

Models live in `prisma/schema.prisma`, written in Prisma's own schema language and committed to version control:

```prisma
model User {
  id       Int       @id @default(autoincrement())
  username String    @unique
  messages Message[]
}

model Message {
  id     Int    @id @default(autoincrement())
  body   String
  user   User   @relation(fields: [userId], references: [id])
  userId Int
}
```

A relation is declared with the `@relation` attribute, naming the foreign-key field (`userId`) and the field it references (`id`), plus the corresponding list field (`messages`) on the other model.

### Prisma Client

The client is **generated from the schema** — regenerating after schema changes is how it "knows" your models — and exposes a query API per model:

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

await prisma.message.create({ data: { body: "Hello", userId: 1 } });

const messages = await prisma.message.findMany();          // all records
const user = await prisma.user.findUnique({ where: { id: 1 } });
```

It supports CRUD, filtering, sorting, pagination and relation queries, with raw SQL as an escape hatch.

### Prisma Migrate

Migrations turn schema edits into applied database changes. The typical dev loop: edit `schema.prisma`, then run

```bash
npx prisma migrate dev --name add_messages
```

which generates a SQL migration in the `prisma/migrations/` folder, applies it, and regenerates the client. The migrations folder is the versioned history of the schema.

## Common pitfalls

- Editing the database directly (or the schema file alone) and skipping migrations — schema, migration history and database drift apart. Change the schema, then migrate.
- Forgetting the client is generated — after schema changes the client must be regenerated (`migrate dev` does this) or queries won't match the new models.
- Instantiating a new `PrismaClient` all over the codebase — create one instance and share it.

## Objectives — can you explain these?

- [ ] What ORMs are and the problems they solve
- [ ] What Prisma ORM is
- [ ] The main features of Prisma: schema, client, migrate

## Self-test

- What difficulties come with using raw SQL directly?
- What is the Prisma schema and what is it good for?
- What is the Prisma client?
- How does the client know which models exist in your schema?
- What is Prisma Migrate?
- How do you declare a relation between two models in the schema?
- How do you fetch every record of a model with the Prisma client?

## My notes

## Questions / to revisit
