---
title: "Writing Better SASS with Dynamic Class Generators"
excerpt: "Avoid repetitive styles and write scalable, maintainable SASS using dynamic class generators"
coverImage: "/assets/blog/cover-photos/camping.webp"
date: "2021-05-15T03:15:18.788Z"
author:
  name: "Jeremy"
  picture: "/assets/blog/authors/jeremy.jpeg"
ogImage:
  url: "/assets/blog/cover-photos/camping.webp"
---

In the world of frontend development, there are **A TON** of tools we can use. It seems like there is always something new and shiny, and it seems like we’re always having to update our knowledge base.

While there is a ton of movement in the world of JavaScript, there are a few constants. One of those constants is styling our code. With the creation of SASS, we as frontend developers are given a very powerful tool. We should understand the capabilities, and try to leverage it to write code that is both powerful, maintainable, and most importantly readable.

### Why Use Dynamic Class Generators?

If you are like me, then you probably **HATE** muddled style sheets. Nothing will irk me more than opening a stylesheet and seeing code that breaks the DRY methodology. Why have 20 classes that all do the same thing, outside of a single number or letter? I hope to show you a way to prevent this from ever happening again!

For this example, I will show something that I think we’ve all run into at one point or another. Say you were asked to build out classes to handle minimum and maximum width or height, with classes for 0 → 2 pixels in size.

In old school CSS files, we would have to do something like the following:

> [Gist: Really repetitive code](https://gist.github.com/jeremylgrice/9c4bc4d5138b4100a553dc46f3e22c9c)

This is super repetitive. This is also a pain to write, and a pain to maintain. What if there was a better way?

> [Gist: Cleaner approach](https://gist.github.com/jeremylgrice/634984d9628939a99b41ef71b5be6048)

This is a much cleaner approach. We are utilizing **maps**, then grabbing the values from each, and then performing a **loop** at the end to generate our class. We pass in a few variables to give our classname an appropriate structure, and it does all the hard work for us.

### Creating Better Utilities

Ideally, we wouldn’t want to use two random numbers as our constraints, so we would ideally create a third map of the values. I just found this example to also show off another one of the tools in the realm of SCSS.

We are now able to use our class names, which would look something like:

This thought process can be applied to **any** area of our stylesheets. I find this to be nice for `flex`, and things like `margin` & `padding`. By taking the repetitive classes and using a more utility file, it will save you a ton of headache in the future.

---

### Resources & Links

I recommend checking out the official docs [here](https://sass-lang.com/documentation).

If you’d like to checkout some of my other posts, they can be found [here](https://jgrice01.medium.com). I write about all things frontend specific, so I have posts on:

- [React](https://jgrice01.medium.com/react-basics-lets-create-a-class-based-component-part-1-of-2-7249f7fac75e)
- [TypeScript](https://jgrice01.medium.com/typescript-understanding-the-basics-a2264759cd2d)
- [Electron](https://jgrice01.medium.com/want-to-build-desktop-apps-using-js-say-hello-to-electron-4f862c3b4e38)

---

I hope this article has been enjoyable. If you have any feedback, post a comment and let me know where I can improve.

Thanks for reading, and have a good one!
