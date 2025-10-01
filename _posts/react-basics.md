---
title: "Level Up Your React Skills with Composition"
excerpt: "Learn how to build scalable UI components in React using the power of composition. Say goodbye to repetitive code and hello to reusable logic!"
coverImage: "/assets/blog/cover-photos/camping-hills.webp"
date: "2021-05-21T00:39:59.250Z"
author:
  name: Jeremy
  picture: "/assets/blog/authors/jeremy.jpeg"
ogImage:
  url: "/assets/blog/cover-photos/camping-hills.webp"
---

When building out an application, chances are you’ll need to create various flavors of certain UI elements — buttons, input fields, and so on.

Thankfully, React makes things easier with something called [**composition**](https://reactjs.org/docs/composition-vs-inheritance.html). Composition allows us to create a base item, then build specific components by customizing and extending that base. Think of a styled button component, reused throughout the app but with different text or behavior.

---

### The Setup

Let’s say your designer has handed you mockups for a few pages. As you scan them, you notice a pattern: many buttons with similar styles, differing only in the text or what they do.

Instead of building each one from scratch, we follow the **DRY** principle — _Don't Repeat Yourself_.

We could use inheritance, but React recommends a better way.

> _“React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.”_  
> — ReactJS Docs

So, let’s explore React’s composition model and see why it's worth your time.

---

### Creating a Base Button

First, we’ll create our **Base Button**. Think of it as the mold — we can use this to quickly build new buttons, all sharing the same core styles and logic.

> 💡 Gist: [Base Button](https://gist.github.com/jeremylgrice/82c678aeafbac0918df1b459b1f53a86)

---

### Composing New Buttons

Now that we have a base, we’ll use it to create specific buttons: `SubmitButton` and `LoginButton`.

Here’s the process:

1. Import the base `Button` component
2. Write your new component function
3. Use the `<Button />` component inside your function
4. Pass custom props (like text or click handlers)

> 💡 Gist: [Submit Button](https://gist.github.com/jeremylgrice/e1a0fe6da42e623fb607d4e5e573bef9)  
> 💡 Gist: [Login Button](https://gist.github.com/jeremylgrice/77dd1d7f2dc23b88cf00dc55720ac8ab)

---

### Putting It All Together

Lastly, import your `LoginButton` and `SubmitButton` into your app.

> 💡 Gist: [App.js](https://gist.github.com/jeremylgrice/3703c6ebe0422a49a258a84f17a8b238)

You should also define your shared styles in the base component. This ensures every button you compose inh
