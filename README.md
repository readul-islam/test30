# Fetbets Internal Tool Frontend

1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
1. [Deployment](#deployment)
1. [Linting and Formatting](#linting-and-formatting)
1. [History](#history)

## Features

- [react](https://github.com/facebook/react)
- [react-router](https://github.com/ReactTraining/react-router)
- [eslint](http://eslint.org)

## Getting Started

Setup directory for project:

```bash
git clone https://github.com/short-circuit-science/Fatbets-Internal-Tool-Frontend.git
cd Fatbets-Internal-Tool-Frontend.git

```

From the root directory, install the project dependencies and check that it works:

```bash
npm install           # install dependencies
npm run dev           # run project
```

## Application Structure

```
.
├── commitlint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── api
│   ├── app
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── common
│   ├── components
│   ├── css
│   │   └── main.css
│   ├── hooks
│   ├── lib
│   │   ├── features
│   │   │   └── auth
│   │   └── store.js
│   ├── pages
│   ├── routes
│   └── utils
├── tailwind.config.js
└── vite.config.js

```

## URL Distribution

### Endpoints

<!-- Here are the publicly accessible endpoints available: -->

Login Page

```
URL: /
```

Register Page

```
URL: /register
```

Profile Page

```
URL: /app/profile
```

Agents

```
URL: /app/agents
```

Accounts

```
URL: /app/accounts
```

Customers

```
URL: /app/customers
```

Currencies

```
URL: /app/currencies
```
