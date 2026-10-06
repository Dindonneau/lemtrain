# lemtrain

A training project: the official Meteor tasks tutorial, rebuilt with Meteor 3,
React and TypeScript.

Its only purpose is to practise the Meteor fundamentals on a throwaway app —
collections, publications, subscriptions, the async server API — before applying
them to real work.

Even here, the app runs server-authoritative: no `autopublish`, no `insecure`.
Every read goes through an explicit publication, and the client only ever reads
from the collection.

## The tutorial

The app follows the official Meteor React tutorial:
<https://docs.meteor.com/tutorials/react/>

The tutorial is written in JavaScript, but the project was scaffolded with

```bash
meteor create lemtrain --typescript
```

so every step is adapted to TypeScript: `.ts` / `.tsx` modules, collections
typed through `Mongo.Collection<T>`, and typed props on the components.

## Stack

- Meteor 3.5
- React 18
- TypeScript
- MongoDB
- Rspack as the bundler (Meteor's modern build pipeline)

## Getting started

```bash
meteor npm install
meteor run
```

The app is served on http://localhost:3000.

> Use `meteor npm`, not `npm`: it runs against the Node version bundled with Meteor.

Run the tests with:

```bash
meteor npm test
```

## Inspecting the database

Meteor starts its own MongoDB next to the app, on the port after the app's.
While `meteor run` is up, point MongoDB Compass at:

```
mongodb://127.0.0.1:3001/meteor
```

The database is named `meteor` and its files live in `.meteor/local/db`, so
`meteor reset` wipes it. The server is stopped together with the app, so the
connection only works while `meteor run` is running.

## Layout

```
client/          eagerly loaded on the client — entry point and HTML shell
server/          eagerly loaded on the server — startup, seed, publication imports
imports/         lazily loaded: nothing here runs until something imports it
  api/           collections and publications
  ui/            React components
tests/           Mocha test module
```

The split matters: Meteor loads `client/` and `server/` automatically, in a
defined order, while `imports/` is only pulled in on demand. Shared code
therefore lives under `imports/`, and `server/main.ts` imports the publications
it wants to register.

## What it does

A list of tasks, stored in MongoDB and rendered reactively:

- `imports/api/TasksCollection.ts` — the collection, typed with `TaskType`
- `imports/api/TasksPublication.ts` — the explicit `tasks` publication
- `imports/ui/App.tsx` — subscribes with `useSubscribe` and reads with `useTracker`
- `server/main.ts` — seeds a few tasks on first startup
