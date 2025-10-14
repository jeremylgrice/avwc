---
title: "Level-Up Your Front-End Skills With These SCSS Basics"
excerpt: "Explore the essential SCSS features like variables, mixins, and extensions that help you write cleaner, reusable CSS for scalable front-end projects."
coverImage: "/assets/blog/cover-photos/camping.webp"
date: "2021-09-07T03:25:22.252Z"
ogImage:
  url: "/assets/blog/cover-photos/camping.webp"
---

In the world of web development, we have a lot of libraries that we are able to use. From Tailwind, Bootstrap, Foundation, and dozens of others, there are many possible options. While these are all great and have their pros and cons, **SASS** is a great tool because it is an industry-standard for web developers to know. SASS allows web developers to build very flexible and reusable styles and can be paired with any front-end CSS framework.

I will spend a few minutes going over a few of the more useful and valuable things that SASS has to offer, from my experience using it over the past few years.

---

### Variables

Much like in JavaScript, SASS has variables. You can declare a variable once and then use it throughout any and all of your stylesheets. It’s also extremely easy to do. See below:

> 💡 Gist: [SASS Variables Example](https://gist.github.com/jeremylgrice/8d724f6715e07c76ed6acf005680aad3.js)

You append a `$` to the front of whatever variable you are creating. This tells SASS that this is a variable and not just a class. You can then use it in any class you create. As you can see from above, I created a font color and a background color and then passed it to the body.

Under normal circumstances, you will have a standalone file that houses all of your variables. This makes housekeeping extremely easy, and it is good for your development team because everything is in a centralized location!

---

### Mixins

Creating mixins allows us to group overly tedious chunks of CSS into one reusable block of code. We can create a theme mixin and then use the `@include` keyword to essentially use it where it’s needed, so we don’t have to keep rewriting the same code over and over. This keeps our stylesheets **DRY** and saves us time and headache.

> 💡 Gist: [SASS Mixins Example](https://gist.github.com/jeremylgrice/2a9dbce80478b54d072cadf00f19aacc.js)

---

### Extension

`@extend` is one of the most useful parts of SASS in my personal opinion. This allows us to keep our code **DRY**, and in the process makes your life easier. You can write a set of CSS properties one time, and then use it over and over where it is needed. You will see the `%` symbol in front of our primary div, which essentially means that this is a _‘Placeholder’_ class, and will only be used when called with the `@extend` keyword. If we attempted to call the `primary-div` class inside of our HTML structure, it would not work.

> 💡 Gist: [SASS @extend Example](https://gist.github.com/jeremylgrice/84c08b764772cc8f5753c09a4b1ad0a3.js)

In case you are wondering what the difference is between `@include` and `@extend`, I will explain:

> > The key difference between a mixin and an extension is that a mixin is used to group CSS that is used any number of times, whereas an extension is used to inherit, or share, the properties from a completely different CSS selector. Extension is most useful when the elements are nearly identical.

---

### Conclusion

While these are just 3 of the many things SASS has to offer, I hope this article has been enjoyable. If you have any feedback, post a comment and let me know where I can improve.

If you’d like to check out some of my other posts, they can be found [here](https://jgrice01.medium.com/). I write about all things front-end specific, so I have articles on [Regex](https://javascript.plainenglish.io/how-to-get-a-better-grasp-on-patterns-with-regex-regular-expressions-an-introduction-9f1be83da76), the [Context API](https://javascript.plainenglish.io/write-neater-code-by-utilizing-the-react-context-api-an-introduc-ti-a6a450b54e11), [JavaScript](https://javascript.plainenglish.io/want-to-write-better-javascript-a-few-cool-features-to-help-out-54b80eddf85d), the [Fetch API](https://avetwhocodes.com/fetching-data-from-an-api-with-the-fetch-api-in-react-5dbe0abcfb41), [React](https://javascript.plainenglish.io/level-up-your-react-skills-with-the-use-of-composition-766a41f544c9), [TypeScript](https://jgrice01.medium.com/typescript-understanding-the-basics-a2264759cd2d), & more on [SASS](https://medium.com/codex/writing-better-sass-with-dynamic-class-generators-e486a0413d0d).

_More content at_ [plainenglish.io](http://plainenglish.io/)

---

By [vet that codes](https://medium.com/@vetthatcodes) on September 7, 2021.  
[Original Article on Medium](https://medium.com/@vetthatcodes/level-up-your-front-end-skills-with-these-scss-basics-a42d9d3e99fc)
