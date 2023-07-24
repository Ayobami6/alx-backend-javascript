# alx-backend-javascript

Hands-on Backend development with javascript nodejs/expressjs

## Description

This repository contains all the projects done during the ALX Software Engineering program. All the projects are written in Javascript and NodeJS.

## Technologies

- Javascript
- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- Redis
- Jest

## Configuration Files

- package.json

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^7.32.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

- .eslintrc.js

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
```

babel.config.js

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

## Setup

- Install NodeJS

```bash
$ sudo apt-get install nodejs
```

- Install npm

```bash
$ sudo apt-get install npm
```

- Clone the repository

```bash
$ git clone <url>
```

- Cd into the directory

```bash
$ cd <directory>
```

- Install dependencies

```bash
$ npm install
```

## Projects

1. [0x00. ES6, basics](./0x00-ES6_basics)
