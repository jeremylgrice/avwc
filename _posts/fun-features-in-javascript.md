---
title: "Fun features in JavaScript"
excerpt: "JavaScript has some really nifty and powerful built-in tools. Let’s go over three pretty useful and common things you can do with the language."
coverImage: "https://cdn-images-1.medium.com/max/800/1*MSKHX24iYao7fDrpZIf5Vg.jpeg"
date: "2025-10-03T00:00:00.000Z"
author:
  name: ""
  picture: ""
ogImage:
  url: "https://cdn-images-1.medium.com/max/800/1*MSKHX24iYao7fDrpZIf5Vg.jpeg"
---

# Fun features in JavaScript

---

### Fun and useful features in vanilla JavaScript

![Photo by Roudy Salameh from Pexels](https://cdn-images-1.medium.com/max/800/1*MSKHX24iYao7fDrpZIf5Vg.jpeg)  
[Photo by Roudy Salameh from Pexels](https://www.pexels.com/photo/empty-road-in-middle-of-trees-1930422/)

JavaScript is a pretty fun language. While it does some quirky and weird things at times, it’s enjoyable to write on a daily basis. The creators of the language have given us access to some really nifty and powerful built-in tools. Let’s go over 3 pretty useful and common things you can do with the language.

---

## Spread syntax

Have you ever been working on some logic, and you have a base set of data that you’d like to build upon as scenarios change? Instead of having to copy and paste your object or array values over and over again, you can use the spread syntax. This keeps repetitive code to a minimum and leads to more readable code.

```typescript
const ourObject = {
  valueA: "A",
  valueB: "B",
  valueC: "C",
};

console.log(ourObject);
// {valueA: 'A', valueB: 'B', valueC: 'C'}

// Then, let’s build onto this initial object
const ourNewObject = {
  ...ourObject,
  valueD: "D",
  valueE: "E",
};

console.log(ourNewObject);
// {valueA: 'A', valueB: 'B', valueC: 'C', valueD: 'D', valueE: 'E'}
```

This works with arrays as well:

```typescript
const ourArray = [1, 2, 3, 4];
console.log(ourArray);
// (4) [1, 2, 3, 4]

const ourNewArray = [...ourArray, 5, 6, 7];
console.log(ourNewArray);
// (7) [1, 2, 3, 4, 5, 6, 7]
```

> The spread (`...`) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, it enumerates the properties of an object and adds the key-value pairs to the object being created.  
> [Spread syntax – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## Arrow functions

Before ES6, functions were usually written like this:

```typescript
function exFunction(a, b) {
  return a + b;
}

// or

const exampleFunction = function exFunction(a, b) {
  return a + b;
};
```

With ES6, arrow functions (a.k.a. fat arrow functions) make code shorter and easier to read:

```javascript
const exFunction = (a, b) => {
  return a + b;
};

// or if you want a one-liner
const exFunction = (a) => a + 2;
```

### A few notes:

1. Without curly braces:  
   `(params) => expression`  
   The expression is evaluated and returned automatically (no `return` needed). Parentheses can be omitted if there’s only one parameter.

2. With curly braces:  
   `(params) => { code here }`  
   You can write multiple statements, but you’ll need an explicit `return`.

> An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and limitations.  
> [Arrow functions – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## Try…Catch statements

When writing code, we want to handle errors gracefully. JavaScript gives us `try…catch`. As the name suggests, it will _try_ something and then _catch_ any errors.

```javascript
const exFunction = (a) => a + 2;

try {
  exFunction(2);
} catch (error) {
  console.error(`error: ${error}`);
}
```

This lets you handle failures safely. You can also use `finally` to run code regardless of success or failure:

```javascript
const exFunction = (a) => a + 2;

try {
  exFunction(2);
} catch (error) {
  console.error(`error: ${error}`);
} finally {
  console.log("Nice work!");
}
```

> The `try...catch` statement is made of a `try` block and either a `catch` block, a `finally` block, or both. The code in the `finally` block always runs before the construct finishes.  
> [try…catch – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

---

## About me

> _Hey there! I’m Jeremy. I write articles about front-end development to help beginners understand the inner workings of web development. If you have questions, leave a comment, connect with me on [LinkedIn @JeremyGrice](https://www.linkedin.com/in/jeremylgrice/), or visit my site [VetThatCodes](https://vetthatcodes.com/)._

More from me: [Vet That Codes on Medium](https://medium.com/@vetthatcodes)

---

### If you found this article helpful

- Hit the 👏🏻 button
- Leave a comment below
- Check out my other articles:
  - [Using Cypress to test your HTML](https://javascript.plainenglish.io/using-cypress-to-test-your-html-6431eaf7e770)
  - [Learn JavaScript Basics (Part 1)](https://javascript.plainenglish.io/learn-the-javascript-basics-part-1-c4450643fbea)
  - [Testing your front-end code with Cypress](https://javascript.plainenglish.io/testing-your-front-end-code-with-cypress-4a3c64ab89d4)

---
