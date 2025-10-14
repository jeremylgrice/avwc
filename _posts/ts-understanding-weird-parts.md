---
title: "Typescript — Understanding the basics"
excerpt: "If you’re looking for a tool that can help keep your code organized and less prone to errors, I cannot recommend TypeScript enough."
coverImage: "/assets/blog/cover-photos/treeline.webp"
date: "2021-05-13T03:51:19.000Z"
ogImage:
  url: "/assets/blog/cover-photos/camping.webp"
---

### Typescript — Understanding the basics

In the world of web development, there are a ton of options to choose from when building out your website. If you were to go into Google and search for available tools, you’re going to be presented with a ton of options. When getting started, this can be extremely overwhelming. Where does one start, and what do we choose? If you’re looking for a tool that can help keep your code organized and less prone to errors, I cannot recommend TypeScript enough. TypeScript offers static typing through type annotations.

Over the course of this article, I will show a few of the things I enjoy the most when working with TypeScript, and why I personally add it to all of my projects.

---

### Types

#### Type inference

In TypeScript, you can assign types to your variables. In a small project, this may seem like overkill, but as your project grows, this keeps it safer from issues.

If you are working in a fairly large codebase, being able to structure our code in a way that keeps it maintainable and easier to manage is a huge advantage. This, in theory, makes debugging and writing new code easier. When developers can navigate around the code base easier, they are more efficient and generally happier.

![TypeScript Type Inference](https://cdn-images-1.medium.com/max/800/0*RCh2P9dfdyNJvCM_)

As you can see above, the value `1` is a number. Since we didn’t specify this, how does it know? Well, one of the huge pros to using TypeScript is its ability to infer a variable's type.

This becomes beneficial when more developers come onboard, and they start working in a new file. Say a new developer was to write some new code in a different part of the application. They tried to reassign the variable `counter`, but this time they try to give it a string value. As you can see below, this is the result.

![Error When Assigning String to Number](https://cdn-images-1.medium.com/max/800/0*XBv_sMJ5UR5rMNhy)

TypeScript would pick this up, and let them know. They are able to correct course, and keep working without writing buggy code. Prevention upfront saves a lot of headache down the road. We all know the pain of fixing a hard to find issue.

As you can see below, TypeScript is very good at giving us a breakdown of our types.

![TypeScript Type Analysis](https://cdn-images-1.medium.com/max/800/0*qs587nlMhh0vMDeX)

---

### Interfaces in TypeScript

Another powerful tool in TypeScript is the ability to create interfaces. An interface could be viewed as a skeleton with which we can work with. Below, our `Car` interface contains a few of the things that make a car what it is. With some thoughtful architecture, we can design clean, reusable code.

![Car Interface Example](https://cdn-images-1.medium.com/max/800/0*jMjui4F8l_KK2c5H)

#### Extending our interfaces

We are also able to let one interface extend another. We could start with a base interface that we know will be consistent across our application, and build new interfaces that use the original interface's properties. The example below showcases this:

![Extended Interface Example](https://cdn-images-1.medium.com/max/800/0*ZP21JsNAGi7PUt9D)

As you can see, we have our base `Car` interface. This base interface contains properties that any car should have. We can then use this base `Car` interface, and extend it into our `LuxuryCar` interface. This gives `LuxuryCar` complete access to everything contained within `Car`.

If we want to make certain properties optional, we can write the property like this:

```ts
// adding a ? at the end of the name of our property makes it optional, which means we don't have to include it when we use this interface. This leads to smarter interfaces

interface Car {
  wheels: number;
  doors: numbers;
  basicFabric?: boolean;
}
```
