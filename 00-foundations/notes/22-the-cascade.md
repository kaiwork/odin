# The Cascade

| | |
|---|---|
| **Course** | Foundations |
| **Section** | CSS Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-the-cascade> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

When several CSS rules target the same element with conflicting declarations, the browser doesn't pick one at random — the cascade decides. This lesson covers the three factors that matter at this stage: specificity, inheritance, and rule order. Understanding them is the difference between debugging CSS methodically and flailing.

## Key concepts

### Specificity

When two rules conflict, the more specific selector wins. For the selectors covered so far, the hierarchy is:

1. **ID selectors** — highest specificity
2. **Class selectors**
3. **Type selectors** — lowest

A useful mental model is counting each category separately, like columns that never carry over: compare ID counts first, then class counts, then type counts.

```css
/* rule A: one class */
.subsection {
  color: blue;
}

/* rule B: one ID — beats any number of classes */
#subsection {
  color: red;
}
```

```css
/* rule C: two classes beats one class */
.ancestor .contents {
  color: red;
}
```

Notes:

- The universal selector `*` and combinators (like the descendant combinator's space) add **no** specificity of their own.
- More selectors of the same category means higher specificity within that category, but no quantity of classes ever outranks a single ID, and no quantity of type selectors outranks a class.

### Inheritance

Some properties, when applied to an element, are automatically picked up by its descendants — mostly typography-related ones such as `color` and `font-family`. Box-model properties like `margin` and `padding` are typically not inherited.

The catch: inherited values are extremely weak. Any rule that targets an element *directly* beats an inherited value, regardless of the specificity of the rule on the parent.

```css
#parent {
  color: red;      /* child inherits red… */
}

.child {
  color: blue;     /* …but a direct hit wins, even though ID > class */
}
```

### Rule order

The final tie-breaker: if two rules have equal specificity, whichever is defined **last** wins. This is why the order of stylesheets and of rules within a stylesheet matters.

```css
.alert { color: red; }
.warning { color: yellow; }
/* an element with class="alert warning" ends up yellow */
```

## Common pitfalls

- Assuming stacking lots of classes can beat an ID — it can't; the categories don't cross over.
- Expecting a high-specificity rule on a parent to beat a low-specificity rule on the child itself. Direct targeting always beats inheritance.
- Forgetting that `*` and combinators add zero specificity, then miscounting which rule should win.
- "Fixing" conflicts by adding ever more specific selectors instead of understanding why the existing rule loses — this leads to unmaintainable specificity wars.

## Objectives — can you explain these?

- [ ] What the cascade is and what problem it solves
- [ ] How specificity works when selectors are combined
- [ ] Which properties are inherited and how inheritance is overridden

## Self-test

- One rule uses a single class selector; another uses three type selectors. Which wins, and why?

## My notes

## Questions / to revisit
