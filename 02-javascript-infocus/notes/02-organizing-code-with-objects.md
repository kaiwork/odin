# Organizing Code with Objects

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-organizing-code-with-objects> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Loose variables scattered across a file quickly become hard to track. Grouping related data and the functions that operate on it into a single object gives everything a namespace, makes the code self-describing, and is the first step toward the larger organisation patterns (constructors, factories, classes) that follow in this section.

## Key concepts

### Objects as data containers

Instead of `carMake`, `carModel`, `carColor` as separate variables, bundle them:

```js
const car = {
  make: "Toyota",
  model: "Corolla",
  color: "red",
  price: 15000,
};

console.log(car.model);      // dot notation
console.log(car["color"]);   // bracket notation — needed for dynamic keys
```

### Methods

A method is simply a function stored as an object property. Shorthand method syntax is the usual way to write them:

```js
const car = {
  price: 15000,
  applyDiscount(percent) {
    this.price -= this.price * (percent / 100);
  },
  getSummary() {
    return `This car costs $${this.price}.`;
  },
};

car.applyDiscount(10);
car.getSummary(); // "This car costs $13500."
```

### `this`

Inside a regular method, `this` refers to the object the method was called on, which is how a method reads and updates its own object's data without hard-coding the object's variable name. Beware arrow functions here: an arrow function does not get its own `this`, so defining methods as arrow functions breaks this behaviour.

### Objects for abstract things too

An object doesn't have to model a physical thing. A whole Rock Paper Scissors game can live in one object — scores as properties, `playRound` and `resetGame` as methods — keeping all game state and behaviour in one place instead of spread across the global scope.

### The underscore convention

A leading underscore (e.g. `_secretValue`) signals "internal, don't touch from outside". It is purely a convention — nothing actually enforces privacy. Real privacy comes later with closures and private class fields.

## Common pitfalls

- Using an arrow function for a method and then wondering why `this` is `undefined` or points at the wrong thing — use regular function or shorthand method syntax for methods.
- Referring to the object by its variable name inside methods instead of `this`, which breaks if the object is renamed or copied.
- Forgetting that bracket notation takes a string (`car["color"]`, not `car[color]` unless `color` is a variable holding a key name).
- Assuming underscore-prefixed properties are actually private — any code can still read and change them.

## Objectives — can you explain these?

- [ ] How objects can be used to group related data together
- [ ] How objects can be used to group related functionality together
- [ ] What object methods are and how the `this` keyword works inside them

## Self-test

- What are the two main ways objects help you organise code?
- What is a method?
- What does `this` refer to inside an object method?

## My notes

## Questions / to revisit
