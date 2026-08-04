# Data Types and Conditionals

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

JavaScript values come in eight data types, and almost every program branches on comparisons between those values. This lesson covers strings in depth (quotes, template literals, methods), the comparison and logical operators, and the branching constructs: `if/else`, `switch`, and the ternary operator. It also introduces truthy/falsy — the rules JavaScript uses when it coerces a non-boolean value inside a condition.

## Key concepts

### The eight data types

Seven primitives — `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, `symbol` — plus `object`, the only non-primitive. `undefined` means "no value was assigned"; `null` is an intentional "nothing" you set yourself. They are loosely equal (`null == undefined` is `true`) but not strictly equal (`null === undefined` is `false`).

### Strings and template literals

Single and double quotes behave identically. Backticks create template literals, which can span multiple lines and embed expressions with `${...}`:

```js
const name = "Odin";
const greeting = `Hello, ${name}! 2 + 2 = ${2 + 2}`;
```

Joining strings with `+` is concatenation. Escape characters like `\'`, `\"`, and `\n` let you put special characters inside a string. Strings have methods — functions attached to a value — e.g. `"hello".toUpperCase()`, `.slice(start, end)`, `.substring(start, end)`, `.replace()`, `.split()`. `slice` accepts negative indexes (counted from the end); `substring` treats negatives as `0` and swaps its arguments if `start > end`.

### Comparison and logical operators

Comparisons return booleans: `>`, `<`, `>=`, `<=`, `==` / `!=` (loose, with type coercion), and `===` / `!==` (strict, no coercion — prefer these). The three logical operators are `&&` (AND), `||` (OR), and `!` (NOT).

### Conditionals

```js
if (score > 90) {
  console.log("A");
} else if (score > 75) {
  console.log("B");
} else {
  console.log("C");
}

switch (fruit) {
  case "apple":
    console.log("red");
    break;
  default:
    console.log("unknown");
}

const label = age >= 18 ? "adult" : "minor";
```

Conditionals can be nested inside one another; keep nesting shallow for readability.

### Truthy and falsy

In a boolean context every value coerces to `true` except the falsy ones: `false`, `0` (and `-0`), `""`, `null`, `undefined`, and `NaN` (plus `0n` for bigint).

## Common pitfalls

- Using `==` and getting surprised by coercion (`"5" == 5` is `true`). Default to `===`.
- Forgetting `break` in a `switch` case, so execution falls through into the next case.
- Assuming `null` and `undefined` are interchangeable — they compare loosely equal but are distinct types with different intent.
- Expecting `${}` interpolation to work inside single or double quotes; it only works inside backticks.

## Objectives — can you explain these?

- [ ] List all eight JavaScript data types.
- [ ] Explain when single, double, and backtick quotes differ.
- [ ] Embed a variable or expression inside a string.
- [ ] Explain what a method is.
- [ ] Name the three logical operators.
- [ ] Describe the comparison operators.
- [ ] Explain what conditionals are and write one.
- [ ] Explain nesting of conditionals.
- [ ] Explain truthy and falsy values.

## Self-test

- Name the eight data types — which one is not a primitive?
- How do `null` and `undefined` relate to each other?
- When do single, double, and backtick quotes behave differently?
- What is the word for joining strings, and which operator does it?
- Which quote style allows embedded expressions, and what is the syntax?
- How do escape characters work inside strings?
- How do `slice` and `substring` differ?
- What are the three logical operators and what does each mean?
- List the comparison operators.
- What makes a value truthy or falsy, and which values are falsy?
- Write the syntax for `if/else`, `switch`, and a ternary expression.
- What does it mean to nest conditionals?

## My notes

## Questions / to revisit
