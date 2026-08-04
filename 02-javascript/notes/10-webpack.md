# Webpack

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-webpack> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A bundler takes your many source modules — JavaScript, CSS, images, HTML templates — follows their import chains, and produces a small set of optimized files ready to ship to a browser. Webpack is the most widely used bundler, and this lesson covers installing it, writing a `webpack.config.js`, teaching it to handle non-JS assets with loaders and plugins, and running its dev server so changes appear live.

## Key concepts

### Why a bundler

Shipping dozens of separate module files to the browser is slow and fragile. A bundler starts from an **entry point**, builds a dependency graph by following every `import`, and emits combined output. Convention: source code lives in `src/`, generated output in `dist/` — you edit `src/`, never `dist/`, and only `dist/` gets deployed.

### Setup and config

```bash
npm init -y
npm install --save-dev webpack webpack-cli
```

Configuration lives in `webpack.config.js` at the project root:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // wipe old files from dist on each build
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/template.html" }),
  ],
};
```

Run a build with `npx webpack`.

### HTML — HtmlWebpackPlugin

`html-webpack-plugin` generates an HTML file in `dist` and injects a `<script>` tag pointing at your bundle automatically. Give it a `template` so your own markup is used. Do not hand-write a script tag in the template — the plugin adds it.

### CSS — loaders

Webpack only understands JavaScript natively; **loaders** teach it other file types. For CSS, install `style-loader` and `css-loader`, then add a rule:

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
},
```

Loaders in `use` run last-to-first, so `css-loader` (reads the CSS) must come after `style-loader` (injects it into the page). Then import the stylesheet as a side effect in your JS: `import "./styles.css";`.

### Images

- Images referenced in **CSS** (`url(...)`) already work via `css-loader`.
- Images referenced in the **HTML template** need `html-loader` (rule: `test: /\.html$/i`, `use: ["html-loader"]`).
- Images used in **JavaScript** must be imported and handled with an asset rule:

```js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
},
```

```js
import odinImage from "./odin.png";
document.querySelector("img").src = odinImage;
```

Webpack copies the file into `dist` under a hashed name and gives you the correct path.

### Dev server and source maps

`webpack-dev-server` serves your bundle at `localhost:8080` and rebuilds on save — run it with `npx webpack serve`. Because the bundle is one generated file, set `devtool: "eval-source-map"` so errors and breakpoints map back to your original source files. Add `devServer: { watchFiles: ["./src/template.html"] }` so template edits also trigger a reload.

## Common pitfalls

- Editing files in `dist/` — they are overwritten on the next build. All changes belong in `src/`.
- Putting `style-loader` and `css-loader` in the wrong order; loaders apply right-to-left, so swapping them breaks the CSS pipeline.
- Adding your own `<script>` tag to the HTML template, which duplicates the one `HtmlWebpackPlugin` injects.
- Forgetting to restart or re-run the build after changing `webpack.config.js` — config changes are not picked up by a running dev server.

## Objectives — can you explain these?

- [ ] What bundlers do and the mechanism by which they work
- [ ] Setting up Webpack to bundle JavaScript modules
- [ ] Making Webpack process non-JavaScript files, including generating HTML with HtmlWebpackPlugin
- [ ] Running Webpack's development server

## Self-test

- What problem does a bundler solve, and what is one?
- What is Webpack specifically?
- What are the steps to bundle your JavaScript?
- How do you get CSS into a Webpack build?
- How can Webpack generate the HTML file in `dist` for you?
- What do you do with local image assets so they end up in the bundle?
- Which Webpack tool gives you a live-updating view of the site while developing?
- What benefit do source maps give you when debugging?

## My notes

## Questions / to revisit
