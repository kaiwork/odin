# Introduction to Frameworks

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-introduction-to-frameworks> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A framework is a bundle of pre-written, reusable code plus conventions that handle the repetitive parts of building an application, so you write only what is specific to your project. This short lesson sets up the distinction between a language and a framework before the course dives into Express.

## Key concepts

### Language vs framework

- A **programming language** (JavaScript, Python, Ruby) is the raw material — syntax and semantics for expressing any logic.
- A **framework** is a structured collection of code *written in* a language that solves recurring application problems: routing requests, talking to databases, rendering pages. You could write all of it yourself; the framework means you don't have to.

### What frameworks give you

- **Less repetition** — common tasks (parsing requests, sessions, templating) are already implemented and battle-tested.
- **Structure and conventions** — frameworks typically prescribe how to organise files and separate concerns, often along Model–View–Controller (MVC) lines: models for data, views for presentation, controllers for the logic connecting them.
- **Modularity and maintainability** — following the framework's conventions keeps codebases navigable for anyone who knows the framework.

### Examples across ecosystems

Every major back-end language has frameworks: Rails and Sinatra for Ruby, Django for Python, and several for JavaScript. This course uses **Express**, a minimal Node framework, precisely because its small surface forces you to understand the underlying request/response mechanics.

### Choosing a framework

There is no single right answer — evaluation usually weighs how well its features fit the project, learning curve, documentation quality, community size, and how actively it is maintained. Opinionated "batteries included" frameworks trade flexibility for speed; minimal ones like Express do the reverse.

## Common pitfalls

- Saying "I know JavaScript" and "I know Express" interchangeably — framework knowledge is transferable concepts plus specific APIs; the language is the foundation underneath.
- Fighting the framework's conventions — the value comes from following its intended structure, not forcing your own on top.
- Picking a framework by hype alone rather than fit, documentation and maintenance activity.

## Objectives — can you explain these?

- [ ] What a framework is
- [ ] How a programming language differs from a framework

## Self-test

- What problems do frameworks exist to solve?
- Name a few well-known front-end and back-end frameworks.
- How would you go about choosing a framework for a project?

## My notes

## Questions / to revisit
