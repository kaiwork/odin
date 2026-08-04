# Object Constructors

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-object-constructors> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Object literals are fine for one-off objects, but when you need many objects of the same shape you want a factory for them. Constructor functions, called with `new`, stamp out object instances; prototypes let those instances share methods; and the prototype chain is the mechanism behind inheritance in JavaScript. Understanding this machinery is essential — classes (a later lesson) are largely a nicer syntax over exactly this.

## Key concepts

### Constructor functions and `new`

A constructor is an ordinary function, conventionally capitalised, used with the `new` keyword:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
player1.sayName(); // "steve"
```

`new` creates a fresh empty object, points `this` at it for the duration of the call, and returns that object automatically.

### Guarding against a missing `new`

Calling a constructor without `new` silently misbehaves (`this` won't be a new instance). `new.target` is only defined when a function is invoked with `new`, so you can enforce correct use:

```js
function Player(name) {
  if (!new.target) {
    throw Error("Player must be called with new");
  }
  this.name = name;
}
```

### Prototypes

Every object has an internal `[[Prototype]]` link to another object. When you access a property the object doesn't have, JavaScript walks up this chain looking for it. Methods defined on a constructor's `.prototype` property are shared by all instances instead of duplicated on each one:

```js
Player.prototype.sayHello = function () {
  console.log("Hello!");
};

player1.sayHello(); // found via the prototype chain
```

Inspect and set prototypes with `Object.getPrototypeOf(obj)` and `Object.setPrototypeOf(obj, proto)` — not the deprecated `__proto__` accessor.

### Prototypal inheritance

To make one "type" inherit another's shared methods, link the prototypes:

```js
function Person(name) { this.name = name; }
Person.prototype.greet = function () { console.log(`Hi, I'm ${this.name}`); };

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
Object.setPrototypeOf(Player.prototype, Person.prototype);

new Player("carl", "X").greet(); // inherited from Person.prototype
```

Do this once, before creating instances. Don't assign `Player.prototype = Person.prototype` — both constructors would then share one object, so changes intended for players would leak onto every person.

### Two easily-confused things

- `SomeConstructor.prototype` — the object that will become the `[[Prototype]]` of instances made with `new SomeConstructor()`.
- `Object.getPrototypeOf(instance)` — the actual `[[Prototype]]` of an existing object.

### `this` in different situations

What `this` means depends on how a function is called: as a method (`obj.fn()` → the object before the dot), as a constructor with `new` (the new instance), as a plain function call (undefined in strict mode, the global object otherwise), or explicitly bound with `call`/`apply`/`bind`. Arrow functions have no `this` of their own; they capture it from the surrounding scope.

## Common pitfalls

- Forgetting `new` when calling a constructor — add a `new.target` check so it fails loudly instead of silently.
- Defining every method inside the constructor body, creating a copy per instance; put shared methods on the prototype instead.
- Setting `Child.prototype = Parent.prototype` directly rather than using `Object.setPrototypeOf(Child.prototype, Parent.prototype)` — mutations then affect both.
- Changing an object's prototype after lots of instances exist, or repeatedly at runtime — it is slow and confusing; establish the chain once, up front.

## Objectives — can you explain these?

- [ ] Creating object instances with constructor functions and `new`
- [ ] What a prototype is and what it's used for
- [ ] How prototypal inheritance works
- [ ] The basic do's and don'ts when wiring up prototypal inheritance
- [ ] How `this` resolves in different call situations

## Self-test

- How do you define a constructor function and create an instance from it?
- How can you make a constructor throw if it's called without `new`?
- What is a prototype, and why put methods on it?
- What is prototypal inheritance?
- What should you avoid doing when setting up inheritance between prototypes?
- What determines the value of `this` in a given call?

## My notes

## Questions / to revisit
