# Variables and Operators

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-variables-and-operators> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

First real JavaScript lesson: how to run JS in the browser, how to store values in variables with `let` and `const`, and how the arithmetic, string, and increment operators behave. Also introduces the browser console as your primary feedback loop via `console.log()`.

## Key concepts

### Running JavaScript

Put code in a `<script>` tag inside an HTML file (or link an external `.js` file) and open the page in a browser:

```html
<script src="script.js"></script>
```

Open DevTools (F12 or right-click → Inspect) and use the **Console** tab to see output and to run snippets directly.

```js
console.log("hello");   // prints to the console
```

### Declaring variables

Three keywords exist:

```js
let age = 30;        // can be reassigned
age = 31;            // fine

const name = "Ada";  // cannot be reassigned
// name = "Bob";     // TypeError

var old = true;      // legacy — avoid
```

Prefer `const` by default and `let` when reassignment is genuinely needed. `var` predates the other two and has quirky scoping behaviour, so modern code avoids it. Naming rules: names may contain letters, digits, `$`, and `_`, must not start with a digit, can't be reserved words, and by convention use camelCase.

### Numbers and operators

Standard arithmetic: `+`, `-`, `*`, `/`, plus:

- `%` — remainder after division: `8 % 3` is `2`. Handy for even/odd checks.
- `**` — exponentiation: `2 ** 3` is `8`.
- `++` / `--` — increment/decrement by one. **Prefix** (`++x`) changes the value and returns the *new* value; **postfix** (`x++`) returns the *old* value, then changes it.

```js
let a = 1;
let b = a++;  // b = 1, a = 2
let c = ++a;  // c = 3, a = 3
```

- Compound assignment: `+=`, `-=`, `*=`, `/=`.

### Operator precedence

Multiplication/division bind tighter than addition/subtraction, following the familiar maths ordering; parentheses override everything. When in doubt, add parentheses for readability.

```js
2 + 3 * 4;     // 14
(2 + 3) * 4;   // 20
```

### Strings and type coercion

`+` with a string operand concatenates, converting the other operand to a string:

```js
"1" + 2;    // "12"  — number coerced to string
```

The **unary plus** converts a string representation of a number into an actual number:

```js
+"10";      // 10 (a number)
+"10" + 5;  // 15
```

`Number("10")` does the same conversion explicitly.

## Common pitfalls

- Using `var` because tutorials from 2014 do — stick to `let`/`const`.
- Expecting `"5" + 1` to be `6`; string `+` concatenates, giving `"51"`. Convert first with unary `+` or `Number()`.
- Mixing up `x++` and `++x` when the returned value matters (e.g. inside a larger expression).
- `const` prevents *reassignment* of the binding, not deep immutability — but at this stage the practical rule is: it can't be given a new value.

## Objectives — can you explain these?

- [ ] How to run JavaScript from an HTML file
- [ ] How `let` and `const` declare variables
- [ ] How to do arithmetic on numbers
- [ ] How to work with strings and concatenation
- [ ] How the logical and mathematical operators behave

## Self-test

- Which three keywords declare variables?
- Which of the three should you steer clear of, and for what reason?
- What are the rules for a valid variable name?
- What happens when you `+` a number and a string?
- How does the remainder operator `%` work?
- How do you add or subtract one from a number in a single operator?
- How do prefix and postfix `++`/`--` differ?
- What is operator precedence and how does JavaScript resolve it?
- How do you open the developer tools and reach the console?
- How do you print a value to the console?
- What does unary `+` do when applied to something like `"10"`?

## My notes

## Questions / to revisit
