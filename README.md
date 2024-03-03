# Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

## Prerequisites

[node](https://nodejs.org/es/)

## .env vars 🔧

You have a .env.template with next variables:

```
DATABASE_URL="postgresql://{YOUR_POSTGRES_USER}:{YOUR_POSTGRES_PASSWORD}@localhost:5432/{YOUR_POSTGRES_DB_NAME}?schema=public"
```

## Installation 🔧

Clone the repo

```
git clone https://github.com/lucasgalarce/nx-monorepo-app
```

Install NPM packages

```
npm install
npm start
```

## DB population

The seed ran automatically creating 5 users and 5 listings

## Start

- Frontend url: http://localhost:4200/
- Backend url: http://localhost:3000/api
- Graphql playground: http://localhost:3000/graphql
