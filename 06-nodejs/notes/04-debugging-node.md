# Debugging Node

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Introduction to NodeJS |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-debugging-node> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Server-side code has no browser DevTools, so you need another way to inspect it while it runs. This lesson introduces VS Code's built-in Node debugger — breakpoints, variable inspection and stepping through code inside the editor — a much stronger workflow than sprinkling `console.log` everywhere.

## Key concepts

### The VS Code debugger

VS Code ships with a Node.js debugger; no extension is needed. The core workflow:

- **Breakpoints** — click in the gutter next to a line number to pause execution there.
- **Inspect state** — when paused, hover variables or use the Variables/Watch panels to see current values, and the Call Stack panel to see how you got there.
- **Step controls** — continue, step over (run the line), step into (descend into the function being called), step out.
- **Debug Console** — evaluate expressions in the paused program's scope.

### JavaScript Debug Terminal

The lowest-friction entry point: open a *JavaScript Debug Terminal* in VS Code and run your program the normal way (`node app.js`, `npm start`). The debugger attaches automatically, and any breakpoints you have set will be hit — no launch configuration required.

### Launch configurations

For repeatable setups, a `launch.json` file in the project's `.vscode/` directory defines how to start or attach the debugger (entry file, arguments, environment). Useful once a project grows beyond "run one file", but the Debug Terminal covers most day-to-day needs.

### Why not just console.log?

Logging shows only what you thought to print, and each new question means editing and restarting. A debugger lets you pause anywhere and explore everything — arguments, closures, the call stack — interactively.

## Common pitfalls

- Staying on `console.log` forever because the debugger feels heavyweight — the Debug Terminal makes attaching nearly free.
- Setting breakpoints but running the app in a plain terminal — the debugger is not attached, so nothing pauses. Use the JavaScript Debug Terminal or a launch configuration.
- Confusing *step over* with *step into* and ending up deep inside library code — step over runs a call without descending into it.

## Objectives — can you explain these?

- [ ] Use VS Code's built-in debugger on a Node program

## Self-test

- What tools can you use to debug a Node application?

## My notes

## Questions / to revisit
