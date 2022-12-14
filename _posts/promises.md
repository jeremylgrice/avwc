---
title: 'Level Up Your JavaScript Skills With the Inclusion of Promises'
excerpt: 'What is a promise in JavaScript? It’s a block of code that may produce a value at some point in time....'
coverImage: '/assets/blog/cover-photos/fire.webp'
date: '2022-09-27T05:35:07.322Z'
author:
  name: Jeremy
  picture: '/assets/blog/authors/jeremy.jpeg'
ogImage:
  url: '/assets/blog/cover-photos/fire.webp'
---

If you write any JavaScript these days, you’ll eventually hear or read about something known as asynchronous code. JavaScript was originally built in a synchronous manner, which in a nutshell means it operates in the way the code is written:


```js
console.log('a');
console.log('b');
console.log('c');

// Output: a b c
```

This would output in that exact order. Asynchronous code can be written in a way that we care about. If we want a specific order to things, we could do something like:

```js
console.log('a');

setTimeout(() => { 
  console.log('b') 
}, 2000);

console.log('c');

// Output: a c b
```

As you can see, we have greater control over the order of our code with asynchronous code. We can make things operate in a manner that we truly care about. Today, we will be covering the concept of Promises!

---
### Promise()

In a nutshell, a promise is a block of code that may produce a value at some point in time. A promise may be in one of 3 states at any given time: pending, fulfilled, or rejected. A promise replaces the need to write callbacks, and unlike callbacks which are passed-in, a promise has some guarantees:

When a callback is added via the then() keyword, these callbacks will never be called before the current run is completed. Essentially, if we have 3 steps, step 2 will not start until step 1 has finished.

The callback would be called even if it was added a success or failure of an asynchronous operation.

You can add as many then() as you’d like, and they’ll be invoked in the order of which they are received.

An example of this is as follows (we will go over a version with arrow functions further below):

```js
firstFunction()
  .then(function (firstResult) {
    return secondFunction(firstResult);
  })
  .then(function (secondResult) {
    return thirdFunction(secondResult);
  })
  .then(function (thirdResult) {
    console.log(`Result: ${thirdResult}`);
  })
  .catch(theFailingCallback);
```

This is infinitely better than old school callback hell, which is below

```js
firstFunction (function (firstResult) {
  secondFunction (firstResult, function (secondResult) {
    thirdFunction (secondResult, function (thirdResult) {
      console.log (`Result: ${thirdResult}`);
    }, theFailingCallback);
  }, theFailingCallback);
}, theFailingCallback); 
```

With a modern approach like promises, we attach our callback to the promise that is returned, which forms a chain of promises. We could also write our promise chain using arrow functions, which would look like:

```js
Example 1 (Arrow function with explicitly used return keyword)

firstFunction()
  .then((firstResult) => {return secondFunction(firstResult)})
  .then((secondResult) => {return thirdFunction(secondResult)})
  .then((thirdResult) => {console.log(`result: {thirdResult})})
  .catch(theFailingCallback); 
```

or

```js
Example 2 (Arrow function without explicitly used return keyword)

firstFunction()
  .then((firstResult) => secondFunction(firstResult))
  .then((secondResult) => thirdFunction(secondResult))
  .then((thirdResult) => console.log(`result: {thirdResult}))
  .catch(theFailingCallback);
```

`Important: Always return results, otherwise callbacks won’t catch the result of a previous promise (with arrow functions, () => x is short for () => { return x; }). If the previous handler started a promise but did not return it, there's no way to track its settlement anymore, and the promise is said to be "floating". — MDN Web docs`

This is especially bad if something like a race condition exists. If the promise from the previous handler is never correctly returned, then the handler in the next promise will be called early and the values could be incomplete. We want to avoid this at all costs if we can

If desired, you could chain a then after a catch statement, which will execute even if the promise does fail:

```js
firstFunction()
  .then((firstResult) => {return secondFunction(firstResult)})
  .then((secondResult) => {return thirdFunction(secondResult)})
  .then((thirdResult) => {console.log(`result: {thirdResult})})
  .catch(theFailingCallback)
  .then((fourthResult) => {console.log(`do this {fourthResult})}; 
```

---
### Promise.all()

The promise.all() function takes in a series of promises. The returned value is a single array, which will contain the returned values from the passed in promises. However, if any of these values are ever rejected, the promise.all() is immediately rejected. An example of this is below:

```js
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('1'), 1000);
});
const secondPromise= new Promise((resolve, reject) => {
  setTimeout(() => resolve('2'), 2000);
});
Promise.all([firstPromise, secondPromise]).then((returnedValues) => console.log(returnedValues)); // Output: Array ["1", "2"]
```

While I know this is a very brief overview of the JavaScript Promise, I fully recommend taking a look at this in more depth. It truly feels like a rabbit hole, but it is one of the most valuable concepts to learn and fully understand. I’ve used these concepts at my past jobs at Ford and Fox Sports, and once I started understanding and writing asynchronous code, I was all like

I hope this article has been enjoyable. If you have any feedback, post a comment and let me know where I can improve.

---

Thank you for reading, and have a good one!