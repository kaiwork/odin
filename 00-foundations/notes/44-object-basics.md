# Object Basics

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-object-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Objects store data as named key–value pairs, unlike arrays which store values by numeric position. This lesson covers creating objects, reading and writing their properties, and the single most important mental model in JavaScript: primitives are copied by value, objects are passed around by reference.

## Key concepts

### Creating objects and accessing properties

```js
const user = {
  name: "Ada",
  age: 36,
  "likes coffee": true, // keys with spaces need quotes
};

user.name;              // dot notation
user["age"];            // bracket notation
user["likes coffee"];   // bracket required for keys with spaces

const key = "name";
user[key];              // bracket notation accepts variables/expressions

user.city = "London";   // add or update a property
delete user.age;        // remove one
```

Dot notation is cleaner and preferred where possible; bracket notation is required when the key contains special characters or is only known at runtime.

### Objects vs arrays

Arrays are for ordered lists you index by position; objects are for labelled data you look up by name. An array is itself a kind of object with numeric keys plus conveniences like `length`.

### Value vs reference — the crucial difference

Assigning a primitive copies the value; assigning an object copies only the *reference* to the same underlying object:

```js
// Primitives: independent copies
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — unchanged

// Objects: shared reference
const original = { count: 5 };
const alias = original;
alias.count = 10;
console.log(original.count); // 10 — same object!
```

The same rule governs function arguments: a function receiving a primitive cannot affect the caller's variable, but a function receiving an object can mutate the object the caller sees. This is also why a DOM element grabbed with `querySelector` can be changed through the variable holding it — the variable references the live element.

## Common pitfalls

- Expecting `const copy = someObject` to create a duplicate — it creates a second name for the same object, and mutations show up through both.
- Comparing objects with `===` and expecting content equality; it compares references, so two identical-looking literals are not equal.
- Writing `user.some key` or `user.myVar` when you meant a dynamic or space-containing key — those cases require bracket notation.
- Assuming `const` makes an object immutable; it only prevents reassigning the variable, not mutating the object's properties.

## Objectives — can you explain these?

- [ ] Create objects with literal syntax.
- [ ] Access object properties with dot and bracket notation.
- [ ] Combine multiple object operators (chaining access, adding, deleting).
- [ ] Explain how object types differ from primitive types.

## Self-test

- How do objects differ from arrays, and when do you use each?
- What are the ways to access an object's properties, and when is each required?
- How do primitives and objects behave differently when assigned to another variable or passed into a function?

## My notes

## Questions / to revisit
