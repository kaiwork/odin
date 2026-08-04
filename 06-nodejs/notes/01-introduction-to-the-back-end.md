# Introduction to the Back End

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Introduction to NodeJS |
| **Lesson** | <https://www.theodinproject.com/lessons/nodejs-introduction-to-the-back-end> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Everything so far in the curriculum ran in the browser; this lesson introduces the other half of a web application — the code that runs on a server. The back end receives HTTP requests, applies logic, talks to a database, and sends back responses (often the HTML/CSS/JS the browser renders). Understanding this split is the mental model for the whole Node course.

## Key concepts

### Front end vs back end

- The **front end** is what runs in the user's browser: HTML for structure, CSS for style, JavaScript for behaviour. These three are fixed — the browser understands nothing else.
- The **back end** runs on a server the user never sees. It can be written in almost any language (JavaScript via Node, Python, Ruby, PHP, Java, C#, ...) because the browser only ever receives the *output*, not the server code itself. Which languages you can actually use may be constrained by what your hosting provider supports.

### The three parts of a back end

A typical back end is described as having three components:

1. **Server** — the machine (or hosted environment) that listens for incoming HTTP requests.
2. **Application** — the code that handles each request: routing, business logic, deciding what to respond with.
3. **Database** — where persistent data lives (users, posts, etc.), queried by the application.

### The request–response cycle

The browser sends an HTTP request to a URL; the server's application code processes it — possibly reading or writing the database — and returns an HTTP response. Dynamic sites build that response per-request, which is what lets two users see different content at the same URL.

## Common pitfalls

- Thinking the browser "runs" server code — it never does; it only receives the response the server produced.
- Assuming back-end work requires learning a new language — Node lets you use the JavaScript you already know on the server.
- Blurring the application and the database — the application contains logic; the database stores data. They are separate components that talk to each other.

## Objectives — can you explain these?

- [ ] The difference between front-end and back-end development

## Self-test

- What does "back-end development" mean?
- How many components make up a typical back end?
- What is each of those components called?
- Where does the back end keep its persistent data?

## My notes

## Questions / to revisit
