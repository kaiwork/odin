# JSON

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-json> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

JSON (JavaScript Object Notation) is the standard text format for sending structured data around the web — it's what most APIs speak. Its syntax is modelled on JavaScript object literals but stricter. In practice you need exactly two operations: parse a JSON string into a JavaScript value, and serialise a JavaScript value into a JSON string.

## Key concepts

### The format

JSON is plain text representing objects, arrays, strings, numbers, booleans and `null`. It looks like a JS object literal with extra rules:

```json
{
  "name": "Ada",
  "age": 36,
  "languages": ["JavaScript", "Python"],
  "active": true,
  "manager": null
}
```

Key rules: property names must be double-quoted strings; strings use double quotes only; no trailing commas; no comments; no functions or `undefined`.

### Parsing: string → object

```js
const text = '{"name": "Ada", "age": 36}';
const user = JSON.parse(text);
user.name; // "Ada"
```

`JSON.parse()` throws a `SyntaxError` on malformed input, so data from external sources is often parsed inside a `try...catch`.

### Serialising: object → string

```js
const user = { name: "Ada", age: 36 };
const text = JSON.stringify(user);
// '{"name":"Ada","age":36}'
```

This is what you do before sending data to a server or storing it as text.

### Where you'll meet it

Fetching from APIs (response bodies are usually JSON), configuration files like `package.json`, and `localStorage` (which stores strings, so objects are `stringify`-ed in and `parse`-d out).

### Validating

Because formatting errors are the most common JSON problem, paste suspect JSON into a validator (e.g. jsonlint.com) to pinpoint the broken line instead of squinting at it.

## Common pitfalls

- Single quotes or unquoted keys — valid in a JS object literal, invalid in JSON.
- Trailing commas after the last item — fine in modern JS, a syntax error in JSON.
- Forgetting that JSON is a *string*: trying to use `response` data before parsing it, or storing an object in `localStorage` without `JSON.stringify()` (you get `"[object Object]"`).
- Assuming everything survives a round trip — functions and `undefined` values are dropped by `JSON.stringify()`.

## Objectives — can you explain these?

- [ ] What JSON is
- [ ] How to read (parse) and write (serialise) JSON data

## Self-test

- What is JSON?
- Which method turns a JSON string into a JavaScript object?
- Which method turns a JavaScript object into a JSON string?

## My notes

## Questions / to revisit
