---
title: 'Level Up Your JavaScript Skills with These Built-in Functions'
excerpt: 'Become a better developer by learning these JavaScript built-in functions: at(), map(), forEach(), and filter().....'
coverImage: '/assets/blog/cover-photos/camping.webp'
date: '2022-09-20T03:50:07.322Z'
author:
  name: Jeremy
  picture: '/assets/blog/authors/jeremy.jpeg'
ogImage:
  url: '/assets/blog/cover-photos/camping.webp'
---

With every new update, JavaScript adds some new functionality that makes our lives as developers easier. While some of the libraries and frameworks are nice if we can leverage built-in functionality, why wouldn’t we? We will go over a few of my favorites below!

### at()

The at() method takes in an integer and then returns the item at the given index. This is nice, as it allows us to pass in both positive and negative numbers. Positive integer values count from left to right, while negative integer values count from right to left.

While you could easily just pass your integer value in with the square bracket notation, e.g array[3] for positive integers, or array[array.length-3], having the ability to just use array(-3) or array(3) is simpler and more readable. In the example below, we will pass in some members of the rebellion, and grab the ones we care most about:

```js
const namesArray = [
  'Ahsoka',
  'Luke',
  'Jyn',
  'Leia',
  'Wedge'
];

// at()
console.log(namesArray.at(2)); // Output: Jyn
console.log(namesArray.at(-2)); // Output: Leia

// Square bracket notation
console.log(namesArray[2]); // Output: Jyn
console.log(namesArray[namesArray.length - 2]); // Output: Leia
```

As you can see, while both methods work, the at() is a little cleaner and easier to read.

### map()

The map() function creates an array that is filled with the values from the elements inside the called array. For example, if we wanted a new array filled with the first name, or last name, of members of the rebellion, we could call the map() function.

While we could accomplish something similar with a for loop, the .map() function allows us to shorthand for less code and complexity.

```js

const rebellionNames = [
  {
   firstName: 'Ahsoka',
   lastName: 'Tano'
  },
  {
    firstName: 'Luke',
    lastName: 'Skywalker'
  },
  {
    firstName: 'Jyn',
    lastName: 'Erso'
  },
  {
    firstName: 'Leia',
    lastName: 'Organa'
  },
  {
    firstName: 'Wedge',
    lastName: 'Antilles'
  }
];

const firstName = rebellionNames.map((character) => {
  return character.firstName;
});

const lastName = rebellionNames.map((character) => {
  return character.lastName;
});

console.log(firstName); 
// Output: ["Ahsoka", "Luke", "Jyn", "Leia", "Wedge"]

console.log(lastName); 
// Output: ["Tano", "Skywalker", "Erso", "Organa", "Antilles"]
```

### forEach()

While the .map() function provides us with a new array consisting of the values we passed through, what if we wanted to output each element one by one? We could do this with the built-in forEach(), which can be very handy.

In the provided example, we will use the namesArray, which consists of several strings, and then output them one by one. We could easily pair this up with something like the .filter() to search for a specific name or based on the length of the name.

```js
const namesArray = [
  'Ahsoka',
  'Luke',
  'Jyn',
  'Leia',
  'Wedge'
];

namesArray.forEach((name) => console.log(name));

// expected output: "Ahsoka"
// expected output: "Luke"
// expected output: "Jyn"
// expected output: "Leia"
// expected output: "Wedge"
```

### filter()

Finally, let's discuss the filter() function. The filter() function creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. Essentially, if we wanted to grab just what was longer than 4 characters, or what was equal to ‘Luke’, we could do that. Let's go over an example!

In the given example, we are going to check for anything with name.length > 4, or name === 'Luke'. We are checking against the values in the names Array. These should return a new array with a shallow copy containing what we care about.


```js
const namesArray = [
  'Ahsoka',
  'Luke',
  'Jyn',
  'Leia',
  'Wedge'
];

const result = namesArray.filter((name) => name.length > 4);
console.log(result);
// Output: Array ["Ahsoka", "Wedge"]

const specifiedName = namesArray.filter((name) => name === 'Luke');
console.log(specifiedName);
// Output: Array ["Luke"]
```

While these are just a small handful of the available functions that JavaScript has to offer out-of-the-box, I hope they have been helpful. I have attached the MDN docs link for each, in case you want a bigger breakdown of things. My general outlook on coding is to avoid having to install libraries or tools if you don’t have to, which will keep your codebase smaller and lead to faster load times!