# Deployment

| | |
|---|---|
| **Course** | NodeJS |
| **Section** | Express |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-nodejs-deployment> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A dynamic app with a server and database can't live on static hosting — it needs a machine that runs your Node process continuously. This lesson explains hosting providers, what a PaaS (Platform as a Service) is and why it is the sensible starting point, and how to diagnose things when a deployment breaks.

## Key concepts

### Static vs dynamic hosting

Static sites are prebuilt files served identically to everyone; hosts like GitHub Pages handle those. Dynamic sites run server code per request and usually need a database — that requires a hosting provider that executes your back end, not just serves files.

### PaaS

A **Platform as a Service** provider manages the servers, operating system, networking and scaling for you: you hand it your repository and it builds and runs the app. Key ideas:

- **Instance** — one running copy of your application. More instances means more capacity for concurrent users.
- **Managed databases** — the provider runs PostgreSQL for you, with backups and security patching handled.
- Configuration (like `DATABASE_URL` and secrets) is supplied through the provider's dashboard as environment variables.
- The provider assigns the port — read it from `process.env.PORT` rather than hard-coding one.

Providers with free tiers highlighted by the lesson: Railway, Render and Koyeb for apps; Neon and Aiven for hosted databases.

### Troubleshooting deployments

Two distinct failure stages, two diagnostic sources:

- **Fails during build/deploy** — read the provider's **build logs**; usual suspects are missing dependencies, wrong Node version or misconfigured start scripts.
- **Fails after deploy (app runs but errors)** — read the **application logs**; usual suspects are missing environment variables and unreachable databases. Error-monitoring services such as Sentry help once an app has real users.

A useful habit: reproduce the production configuration locally (production env vars, `NODE_ENV=production`) before blaming the platform.

## Common pitfalls

- Hard-coding the port or database URL — production supplies both via environment variables; code must read `process.env`.
- Forgetting to set the environment variables on the host that your `.env` file provided locally — the app crashes only in production.
- Guessing at failures instead of reading logs — build logs and app logs almost always name the actual error.

## Objectives — can you explain these?

- [ ] What a hosting provider is
- [ ] The difference between static and dynamic sites
- [ ] What a PaaS is and how it works
- [ ] How to deploy an app to a PaaS provider
- [ ] How to troubleshoot common deployment failures

## Self-test

- How do static and dynamic websites differ?
- What does the acronym PaaS expand to?
- Why might you choose a PaaS host over managing your own server?
- What is an instance?
- If a deployment fails while building, how do you investigate?
- If the app deploys fine but misbehaves afterwards, how do you investigate?

## My notes

## Questions / to revisit
