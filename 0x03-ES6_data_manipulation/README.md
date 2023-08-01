# Project Name: ES6 JavaScript Data Manipulation

## Overview

This project focuses on leveraging the power of ES6 JavaScript for efficient data manipulation. With the introduction of ES6 features like arrow functions, array methods, and object enhancements, handling and transforming data in JavaScript has become more intuitive and concise.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Examples](#examples)
- [Contributing](#contributing)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Basic knowledge of JavaScript and ES6 syntax.

### Installation

1. Clone the repository: `git clone <url>`
2. Change directory: `cd repository-name`

## Usage

1. Include the `dataManipulation.js` file in your project.
2. Import the necessary functions to perform data manipulation.

```javascript
import { filterData, mapData, reduceData } from './dataManipulation';

// Sample data for demonstration
const users = [
  { id: 1, name: 'John', age: 30, country: 'USA' },
  { id: 2, name: 'Alice', age: 25, country: 'Canada' },
  { id: 3, name: 'Bob', age: 28, country: 'UK' },
];

// Example of using filterData to get users older than 25
const olderUsers = filterData(users, (user) => user.age > 25);

console.log(olderUsers);

// Example of using mapData to get an array of user names
const userNames = mapData(users, (user) => user.name);

console.log(userNames);

// Example of using reduceData to calculate the total age of all users
const totalAge = reduceData(users, (acc, user) => acc + user.age, 0);

console.log(totalAge);
```

## Features

- Filter data based on custom conditions using `filterData`.
- Transform data into a new array using `mapData`.
- Perform reduction operations on data using `reduceData`.
- Utilize arrow functions for concise and expressive data manipulation.

## Examples

### 1. Filtering Users

```javascript
import { filterData } from './dataManipulation';

const users = [
  { id: 1, name: 'John', age: 30, country: 'USA' },
  { id: 2, name: 'Alice', age: 25, country: 'Canada' },
  { id: 3, name: 'Bob', age: 28, country: 'UK' },
];

const olderUsers = filterData(users, (user) => user.age > 25);

console.log(olderUsers);
// Output: [{ id: 1, name: 'John', age: 30, country: 'USA' }, { id: 3, name: 'Bob', age: 28, country: 'UK' }]
```

### 2. Mapping User Names

```javascript
import { mapData } from './dataManipulation';

const users = [
  { id: 1, name: 'John', age: 30, country: 'USA' },
  { id: 2, name: 'Alice', age: 25, country: 'Canada' },
  { id: 3, name: 'Bob', age: 28, country: 'UK' },
];

const userNames = mapData(users, (user) => user.name);

console.log(userNames);
// Output: ['John', 'Alice', 'Bob']
```

### 3. Reducing User Ages

```javascript
import { reduceData } from './dataManipulation';

const users = [
  { id: 1, name: 'John', age: 30, country: 'USA' },
  { id: 2, name: 'Alice', age: 25, country: 'Canada' },
  { id: 3, name: 'Bob', age: 28, country: 'UK' },
];

const totalAge = reduceData(users, (acc, user) => acc + user.age, 0);

console.log(totalAge);
// Output: 83
```

## Contributing

Contributions to this project are welcome! If you find any issues or want to add new features, feel free to open a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push the branch: `git push origin my-feature`.
5. Open a pull request.
