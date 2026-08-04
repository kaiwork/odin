# Classes

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-classes> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

ES6 `class` syntax is a cleaner way to write what constructors and prototypes already do — it is syntactic sugar, not a new object model. It bundles the constructor, shared methods, getters/setters, inheritance (`extends`), true private members (`#`), and class-level (`static`) members into one readable block.

## Key concepts

### Basic syntax

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const alice = new Person("Alice", 30);
alice.greet();
```

The `constructor` method runs when you call `new Person(...)`. Methods declared in the class body end up on `Person.prototype`, shared by all instances — same mechanism as constructor functions, nicer packaging. Unlike function declarations, class declarations are not usable before their definition, and calling a class without `new` throws.

### Getters and setters

Accessor properties that run code on read/write while looking like plain properties:

```js
class User {
  constructor(name) {
    this.name = name; // invokes the setter
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 3) {
      console.log("Name too short");
      return;
    }
    this._name = value;
  }
}
```

### Inheritance with `extends`

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a sound`); }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);        // must run before using `this`
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}
```

`extends` links the prototypes so instances of `Dog` can reach `Animal`'s methods; `super(...)` calls the parent constructor, and `super.method()` calls a parent method from an override.

### Private fields and methods

A `#` prefix makes a member genuinely inaccessible from outside the class — unlike the `_underscore` convention:

```js
class Counter {
  #count = 0;
  increment() { this.#count++; }
  get value() { return this.#count; }
}

new Counter().#count; // SyntaxError
```

### Static members

`static` properties and methods belong to the class itself, not to instances — like `Math.max()` or `String.fromCharCode()`:

```js
class MathUtils {
  static PI = 3.14159;
  static square(x) { return x * x; }
}
MathUtils.square(4); // 16
```

## Common pitfalls

- Treating classes as a different object system — under the hood it is still constructors and the prototype chain, and debugging often requires knowing that.
- Forgetting `super()` in a subclass constructor (or touching `this` before calling it) — this throws a ReferenceError.
- Naming a getter/setter's backing field the same as the accessor (`this.name` inside `set name`) — that recurses forever; store into a differently named field such as `this._name` or a private field.
- Trying to access `#private` members from outside the class or from a subclass — they are visible only inside the defining class body.

## Objectives — can you explain these?

- [ ] How classes differ from plain object constructors
- [ ] What getters and setters are
- [ ] The basic `class` syntax
- [ ] Using inheritance via `extends` and `super`
- [ ] Implementing private fields and methods with `#`
- [ ] What static properties and methods are

## Self-test

- What are the differences between constructor functions and classes?
- What are getters and setters, and when would you use them?
- How does inheritance work with classes?
- What private features do classes offer?
- What are static properties and methods?

## My notes

## Questions / to revisit
