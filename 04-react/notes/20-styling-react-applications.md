# Styling React Applications

| | |
|---|---|
| **Course** | React |
| **Section** | The React Ecosystem |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-styling-react-applications> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Everything you know about CSS still applies to React — the new problem is scale. Ordinary stylesheets share one global namespace, so as an app grows, class names collide and styles leak between components. This lesson surveys the main answers: CSS Modules, CSS-in-JS, utility frameworks, and component libraries — and recommends sticking to CSS Modules (plus vanilla CSS) while learning.

## Key concepts

### Plain CSS and its limit

Importing a stylesheet works fine in small apps, but every class name is global. Two components that both define `.button` will fight each other.

### CSS Modules — the recommended default

A file named `Button.module.css` is compiled so its class names are scoped to whoever imports it:

```css
/* Button.module.css */
.primary {
  background-color: navy;
  color: white;
}
```

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.primary}>Click</button>;
}
```

At build time the class becomes something unique (e.g. `Button_primary_x7f3a`), so identical names in different modules never clash. You write normal CSS; only the scoping changes.

### CSS-in-JS

Styles are authored inside JavaScript, which lets them react to props and state and live beside the component logic. styled-components is the best-known example in the React ecosystem. Powerful, but it couples styling to a runtime library.

### Utility-class frameworks

Tailwind CSS and similar tools provide a large set of single-purpose classes (`p-4`, `flex`, `text-lg`) that you compose directly in JSX instead of writing stylesheets.

### Component libraries

Material UI, Radix, Chakra UI and friends ship whole pre-built components — styling, behaviour, and accessibility handled for you. Fast for products, but they hide exactly the fundamentals a learner needs to practise. Icon libraries (e.g. Lucide React) are a harmless exception.

### While learning

Prefer vanilla CSS or CSS Modules. Skip utility frameworks and component libraries for now — the point of the projects is to build the CSS muscle yourself.

## Common pitfalls

- Treating global CSS as fine "for now" and discovering name collisions once the app has dozens of components — scope early with modules.
- Forgetting the `.module.css` suffix — without it the file is treated as a plain global stylesheet and nothing is scoped.
- Writing `className="primary"` instead of `className={styles.primary}` with CSS Modules — the hashed class never gets applied.
- Reaching for a component library to dodge CSS practice — you inherit its constraints and learn less.

## Objectives — can you explain these?

- [ ] The main approaches available for styling a React application

## Self-test

- How do you set up and use CSS Modules in a React project?
- What is meant by CSS-in-JS?
- What are component libraries, and what do they trade away?

## My notes

## Questions / to revisit
