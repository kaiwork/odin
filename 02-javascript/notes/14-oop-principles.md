# OOP Principles

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-oop-principles> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Knowing the syntax for objects, factories and classes doesn't tell you how to *carve up* a program. This lesson covers design judgement: give each piece one responsibility, keep pieces loosely coupled so they can change independently, and prefer composing behaviour out of small parts over deep inheritance trees. These are guidelines to weigh, not laws.

## Key concepts

### Single Responsibility Principle (SRP)

A class, object or module should have one reason to change — one job. The classic web example is separating application logic from DOM manipulation. Compare:

```js
// Mixes concerns: game logic knows about the DOM
function isGameOver() {
  if (lives === 0) {
    document.querySelector("#game-over").style.display = "block";
  }
}
```

```js
// Separated: logic returns facts, a display module renders them
function isGameOver() {
  return lives === 0;
}

const displayController = {
  showGameOver() {
    document.querySelector("#game-over").style.display = "block";
  },
};
```

Now the rules of the game can be tested and changed without touching the UI, and the UI can be redesigned without touching the rules.

### The other SOLID principles

SRP is the "S" of SOLID. The rest, briefly:

- **O**pen/closed — code should be extendable without modifying its existing source.
- **L**iskov substitution — a subtype should be usable anywhere its parent type is expected without breaking behaviour.
- **I**nterface segregation — don't force consumers to depend on methods they don't use.
- **D**ependency inversion — depend on abstractions rather than concrete implementations.

SRP is the one to internalise first; the others become more relevant as programs grow.

### Loose coupling

Tightly coupled objects know too much about each other's internals, so changing one forces rewrites in the others. Loosely coupled objects interact through small, deliberate interfaces. A good smoke test: could you swap the console UI of your game for an HTML UI without rewriting the game logic? If not, the coupling is too tight.

### Composition over inheritance

Inheritance builds rigid "is-a" hierarchies that are hard to rearrange when requirements shift; a change high in the tree ripples down to everything below. Composition instead assembles objects from smaller capabilities ("has-a"/"can-do"), e.g. mixing in a `canBark` or `canFly` factory only where needed. It pairs naturally with the factory-function style from earlier lessons.

## Common pitfalls

- Writing functions that compute a result *and* update the DOM — split the decision from the display.
- Letting one object reach into another's internal state instead of going through its public methods, coupling them tightly.
- Modelling everything as an inheritance tree, then fighting the hierarchy when a type needs behaviour from two unrelated branches — compose instead.
- Treating these principles as absolute rules — they're heuristics; apply them where they reduce the cost of change.

## Objectives — can you explain these?

- [ ] The Single Responsibility Principle
- [ ] The remaining SOLID principles, at least at a high level
- [ ] What tight coupling is and why it's harmful
- [ ] Why composition is generally preferred over inheritance

## Self-test

- What is the Single Responsibility Principle?
- What are the other SOLID principles?
- What are tightly coupled objects, and why avoid them?
- Why is composition usually recommended over inheritance?

## My notes

## Questions / to revisit
