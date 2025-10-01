---
title: "Write Neater Code by Utilizing the React Context API — An Introduction"
excerpt: "How we deal with data is crucial in React. Learn how the Context API helps reduce prop drilling and improve code readability."
coverImage: "/assets/blog/cover-photos/camping.webp"
date: "2021-05-26T02:16:43.549Z"
author:
  name: Jeremy
  picture: "/assets/blog/authors/jeremy.jpeg"
ogImage:
  url: "/assets/blog/cover-photos/camping.webp"
---

![Photo by Ferenc Almasi on Unsplash](https://cdn-images-1.medium.com/max/800/0*VzKXjmARSsqVXwO6)

How we deal with data is crucial, and the React development team thought of a few ways to deal with data. From updating the components’ state, to assigning props to our components, we have 2 solid ways to handle this.

But what if we don’t want overly complex management of our data, and just want to pass values where they’re needed instead of prop drilling? Enter the Context API!

> Context provides a way to pass data through the component tree without having to pass props down manually at every level. — ReactJS docs

The main thing that context aims to prevent is **prop drilling**. Prop drilling is the process of getting data values from component A to Component Z by passing it through various layers. So, if you had component D that needed a prop of `value`, you’d have to drill down from component A into component B, then from component B into component C, and finally, from component C into component D.

If you’ve worked with React, you are probably familiar with this concept. This can become overly complex and will become spaghetti code if we’re not careful, and the React development team made our lives easy with the introduction of the Context API.

---

### How to Use the Context API

To set up Context, it’s as simple as using `React.createContext()`.

> 💡 Gist: [Creation of context is easy](https://gist.github.com/jeremylgrice/c49071d07fcf79ebc04f706721e2c988)

Let’s assume you need to create various themes. While there are a dozen ways this could be done, we will use context to handle this. For this, we will set up a background color and a font color.

> 💡 Gist: [Our context file for themes](https://gist.github.com/jeremylgrice/b5494a7b47c870da49b4aabf4141a500)

Next, we want to actually use our newly created context. For this, we will use a class-based component. Inside our render method, we will assign `this.props` and `this.context` to their respective variables. Then, we will return our `<button />` with styles based on `ourThemes`, which we created externally and imported in.

> 💡 Gist: [The usage of our context file](https://gist.github.com/jeremylgrice/88697e8d07e4600204cee960c78b5bee)

---

### Providing Values to Be Consumed

A more functional approach to this would be like the following. We set up our functions, and keep the logic limited to what it needs to do.

In the provider, we are providing the value to which our consumer will consume. In a nutshell, we are ‘providing’ the value of `Click Me`, and then we are ‘consuming’ the value in our button.

> 💡 Gist: [Provider/Consumer setup](https://gist.github.com/jeremylgrice/de3cc4af8e02fc0ee0d8ed72a757f746)

---

While these are two use cases for what is possible, the [React docs](https://reactjs.org/docs/context.html#contextprovider) give plenty of other examples we can use.

As far as when to use the context API, the React docs say:

> **Context** is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than **context**. — ReactJS docs

---

I hope this article has been enjoyable. If you have any feedback, post a comment and let me know where I can improve.

If you’d like to check out some of my other posts, they can be found [here](https://jgrice01.medium.com/). I write about all things front-end specific, so I have articles on:

- [JavaScript](https://javascript.plainenglish.io/want-to-write-better-javascript-a-few-cool-features-to-help-out-54b80eddf85d)
- [Fetch API](https://avetwhocodes.com/fetching-data-from-an-api-with-the-fetch-api-in-react-5dbe0abcfb41)
- [React](https://javascript.plainenglish.io/level-up-your-react-skills-with-the-use-of-composition-766a41f544c9)
- [TypeScript](https://jgrice01.medium.com/typescript-understanding-the-basics-a2264759cd2d)
- [SASS](https://medium.com/codex/writing-better-sass-with-dynamic-class-generators-e486a0413d0d)
- [Electron](https://jgrice01.medium.com/want-to-build-desktop-apps-using-js-say-hello-to-electron-4f862c3b4e38)

_Thank you for reading, and have a good one!_

_More content at [plainenglish.io](http://plainenglish.io/)_
