---
title: "What the Heck Are Callbacks?"
excerpt: "An easy-to-understand breakdown of what callbacks are in JavaScript, with examples and solutions to callback hell."
coverImage: "/assets/blog/cover-photos/camping.webp"
date: "2021-05-17T03:30:27.217Z"
ogImage:
  url: "/assets/blog/cover-photos/camping.webp"
---

I am sure by now you have heard of a callback function. ‘Just pass it through as a callback’ is something I hear quite often. I was always confused by this terminology, and after reading on the topic it is much simpler than I imagined. A callback is simply a function passed as an argument to another function.

### Let’s See a Callback in Action

Let’s start with an example. Let’s create a function, and then pass it through as an argument. See the code below:

> 💡 Gist: [A callback in JavaScript](https://gist.github.com/jeremylgrice/b2f0cba049792f126265b1ed46fe75d3)

As you can see, we set up a pretty straightforward callback. Let’s walk through what this is doing:

1. We set up a function named `theText`, which will take in an argument of `text`. We will `console.log` what `text` is.
2. We set up a second function named `printText`, which takes in an argument of `ourCallback`. Inside this function we are declaring a variable with a string value. The last line of this function is calling the function `ourCallback`, and we will pass in a parameter of `text`.
3. Finally, we call the `printText` variable, and the argument for that is our first function. This is our actual callback portion of the code. Our function `printText` is making a call to the function `theText`. In this example, it is doing a `console.log` of `"This is the text for our callback"`.

Pretty cool stuff.

---

### Callback Hell

Now to the downside. When we start nesting code, it can get messy pretty quickly, as you can see below:

> 💡 Gist: [Callback Hell Example](https://gist.github.com/jeremylgrice/b0cb24ed8106b0d6ea9f0d0fc24e49bd)

Callback hell is the worst level of hell.

Since callback hell is a place no developer wants to be, what can we do to fix this?

- Try to keep our code modular and small
- Use newer features in JavaScript like **Promises** or **Async/Await** — they are cleaner and still asynchronous

### Resources

To dive deeper into these concepts, here are a couple of excellent guides from W3Schools:

- [Promises](https://www.w3schools.com/js/js_promise.asp)
- [Async Await](https://www.w3schools.com/js/js_async.asp)

> 💡 Gist: [A Promise](https://gist.github.com/jeremylgrice/775a8af00774107fdd1a80e31261bbe5)  
> 💡 Gist: [Async Await](https://gist.github.com/jeremylgrice/bf89ad84612f46f2dc7513080f5eaf00)

I find both to be equally readable, but I lean more toward Async/Await when I am personally writing code. I find it to be easier on the eyes, and it doesn’t get as messy as a chain of promises can get.

---

If you’d like to check out some of my other posts, they can be found [here](https://jgrice01.medium.com). I write about all things frontend specific, so I have posts on [React](https://jgrice01.medium.com/react-basics-lets-create-a-class-based-component-part-1-of-2-7249f7fac75e), [TypeScript](https://jgrice01.medium.com/typescript-understanding-the-basics-a2264759cd2d), [SASS](https://medium.com/codex/writing-better-sass-with-dynamic-class-generators-e486a0413d0d) & [Electron](https://jgrice01.medium.com/want-to-build-desktop-apps-using-js-say-hello-to-electron-4f862c3b4e38).

---

Thanks for reading! If you have any feedback, feel free to share — I’m always looking to improve.
