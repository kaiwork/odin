# Function Basics

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-function-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Functions bundle code into reusable, named units so you write logic once and call it wherever you need it. This lesson covers the three ways to define a function, how parameters and arguments relate, what `return` does, and how scope limits where variables are visible.

## Key concepts

### Defining and invoking

```js
// Function declaration — hoisted, can be called before it appears
function add(a, b) {
  return a + b;
}

// Function expression — assigned to a variable, not hoisted the same way
const subtract = function (a, b) {
  return a - b;
};

// Arrow function — compact modern syntax
const multiply = (a, b) => a * b;

add(2, 3); // invoke with ()
```

A function without a name (like the one assigned to `subtract`) is an anonymous function. Invoking means writing the function's name followed by parentheses; without the parentheses you are just referring to the function itself.

### Parameters vs arguments

Parameters are the placeholder names in the definition (`a`, `b`); arguments are the actual values supplied at call time (`2`, `3`). Parameters can have defaults: `function greet(name = "friend") { ... }`.

### Return values

`return` sends a value back to the caller and immediately ends the function. A function with no `return` (or a bare `return;`) evaluates to `undefined`. Because a call is an expression, you can nest calls: `add(add(1, 2), 3)`. Single-expression arrow functions return implicitly without the `return` keyword.

### Scope

Variables declared inside a function exist only inside it (local scope); code outside cannot see them. Functions can read variables from the scope surrounding them (outer/global scope). This containment prevents different parts of a program from trampling each other's variables.

```js
function counter() {
  let count = 0; // local — invisible outside
  count += 1;
  return count;
}
// console.log(count); // ReferenceError
```

## Common pitfalls

- Logging inside a function instead of returning — `console.log` displays a value but gives the caller nothing to work with.
- Forgetting that execution stops at `return`, so code placed after it never runs.
- Calling a function expression or arrow function before the line that defines it — unlike declarations, they are not usable earlier.
- Confusing `add` (a reference to the function) with `add()` (actually calling it).

## Objectives — can you explain these?

- [ ] Define and invoke functions using declarations, expressions, and arrow syntax.
- [ ] Use a function's return value in further code.
- [ ] Explain what function scope is.

## Self-test

- What problems do functions solve?
- How do you call a function?
- What is an anonymous function?
- What does function scope mean for variables declared inside a function?
- What is a return value and what happens when a function lacks one?
- What is an arrow function and how does its syntax differ?
- How does a function declaration differ from a function expression?

## My notes

## Questions / to revisit
