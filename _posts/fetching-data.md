---
title: "Fetching Data From an API With the Fetch API in React"
excerpt: "Learn how to fetch data using the Fetch API inside a React class component with real-world examples and best practices."
coverImage: "/assets/blog/cover-photos/camping.webp"
date: "2021-05-19T03:27:05.942Z"
author:
  name: Jeremy
  picture: "/assets/blog/authors/jeremy.jpeg"
ogImage:
  url: "/assets/blog/cover-photos/camping.webp"
---

![A cabin in the woods on daytime](/assets/blog/cover-photos/camping.webp)

So you want to grab data from somewhere with JavaScript, but aren’t sure how to do it? Well look no further!

Today, I want to show you how to use the **Fetch API**, which is now built into JavaScript. We’ll cover:

- Setting up a React class component
- Managing state
- Performing a fetch to a live API
- Displaying results on a web page

---

### The API We’re Using

We'll use the [D&D 5e API](http://www.dnd5eapi.co/docs#intro), which is free and doesn’t require an API key.

We’ll specifically use the `/api/classes` endpoint to fetch and display data in a list format.

---

### The React Component

We’re using a **class-based component** in this example. If you come from an object-oriented background, this will feel familiar. Here's a breakdown of what’s happening:

- **Constructor:** Used for setting the initial state and binding event handlers if needed.
- **componentDidMount():** A React lifecycle method invoked immediately after a component mounts. This is where we fetch data using `fetch()`.
- **State Management:** We update the state with either the API result or an error.
- **Render():** Displays the result on the page.

> 💡 Gist: [React Class Component with Fetch](https://gist.github.com/jeremylgrice/b092b0c1bd31f65162c9ec20d837a7cc)

I like to extract logic into small functions that I can plug into the component where needed. This makes the code easier to maintain and improves readability.

---

### Want to Learn More?

If you want to dig deeper into the **Fetch API**, check out:

- [Using Fetch - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Axios (Alternative to Fetch)](https://axios-http.com)
- [Fetch vs Axios - LogRocket](https://blog.logrocket.com/axios-or-fetch-api/)

Both Axios and Fetch get the job done, but depending on your use case, one might be a better fit than the other.

---

I hope this article has been helpful! If you’d like to check out some of my other posts, you can find them [here](https://jgrice01.medium.com).

I write about frontend topics like:

- [React](https://blog.devgenius.io/how-do-i-function-react-function-components-in-a-nutshell-59f2521f6d06)
- [TypeScript](https://jgrice01.medium.com/typescript-understanding-the-basics-a2264759cd2d)
- [SASS](https://medium.com/codex/writing-better-sass-with-dynamic-class-generators-e486a0413d0d)
- [Electron](https://jgrice01.medium.com/want-to-build-desktop-apps-using-js-say-hello-to-electron-4f862c3b4e38)

Thanks for reading — and have a good one!
