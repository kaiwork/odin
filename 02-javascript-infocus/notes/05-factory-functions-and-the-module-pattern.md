# Factory Functions and the Module Pattern

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Factory functions are plain functions that return objects — no `new`, no `this`, no prototype juggling. Combined with closures they give you genuinely private state, something constructors can't easily offer. Wrapping a factory in an IIFE produces the module pattern: a single object with hidden internals and a deliberate public interface.

## Key concepts

### Scope

`var` is function-scoped; `let` and `const` are block-scoped (visible only inside the nearest `{ }`). Anything declared outside any function or block is global. Prefer `let`/`const` so variables live in the smallest scope that works.

### Closures

A function keeps access to the variables of the scope where it was created, even after that outer scope has finished running:

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add3 = makeAdder(3);
add3(10); // 13 — the inner function still "remembers" x
```

### Factory functions and private variables

A factory sets up local variables, then returns an object exposing only what it chooses. The rest stays private via closure:

```js
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;              // private — not in the returned object
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.getReputation(); // 1
josh.reputation;      // undefined — no direct access
```

Compared with constructors: no crash-prone dependence on `new`, no surprises from `instanceof` or the prototype chain, and privacy comes for free.

### Composition

Because factories just return objects, you can build bigger factories out of smaller ones by merging their results:

```js
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);
  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}
```

`Object.assign()` is another way to combine several objects into one.

### IIFEs and the module pattern

An IIFE (Immediately Invoked Function Expression) is a function wrapped in parentheses and called on the spot. Using one as a factory creates exactly one instance — a module:

```js
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  return { add, sub };
})();

calculator.add(3, 5); // 8
```

Everything not returned is inaccessible, and none of the internals pollute the global scope.

### Encapsulation

The common thread: bundle data with the functions that operate on it, and expose only the parts callers need. Hiding implementation details means you can change the internals later without breaking code that uses the public interface.

## Common pitfalls

- Expecting `var` to be block-scoped — it leaks out of `if`/`for` blocks; use `let`/`const`.
- Trying to read a "private" variable as a property (`user.reputation`) — private state is only reachable through the methods that close over it.
- Reaching for inheritance chains when composition (assembling an object from smaller factories) is simpler and more flexible.
- Forgetting the trailing `()` on an IIFE, leaving you with a function instead of the module object it should have produced.

## Objectives — can you explain these?

- [ ] How variable scope works in JavaScript
- [ ] What closures are
- [ ] What factory functions are
- [ ] How factories create private variables
- [ ] Composing objects from multiple factories
- [ ] What IIFEs are and how the module pattern uses them
- [ ] What encapsulation means

## Self-test

- How do global, function and block scope differ in JavaScript?
- What is a closure?
- What problems can constructors cause that factories avoid?
- What makes a variable in a factory private, and why is that useful?
- How can factory functions be composed together?
- How does the module pattern work?
- What does IIFE stand for, and what does one look like?
- How do factory functions support encapsulation?

## My notes

## Questions / to revisit
