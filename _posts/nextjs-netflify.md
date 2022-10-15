---
title: 'Build & deploy a great looking site with NextJS and Netlify'
excerpt: 'Have you ever wanted a quick and easy way to build and deploy a website? Are you overwhelmed by the number of....'
coverImage: '/assets/blog/cover-photos/fog.webp'
date: '2022-10-15T04:30:00.322Z'
author:
  name: Jeremy
  picture: '/assets/blog/authors/jeremy.jpeg'
ogImage:
  url: '/assets/blog/cover-photos/fog.webp'
---

### Precursor

Have you ever wanted a quick and easy way to build and deploy a website? Are you overwhelmed by the number of options and unsure how to set things up? If so, you’ve come to the right place!

The tools I will be using for this article are Next.js and Netlify. After personally using both, I can safely say they make my life as a developer WAY easier, which in my experience is something we all look for when picking our tech stack.

### What are Next.js and Netlify?

### Next.js

Next.js describes itself as:

```Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.```

In a nutshell, it gives you all the tools you could possible need to build your application, with little to not setup needed. If you were to set something up and build it from scratch, you’d need to setup a bundler, such as webpack. You’d need to handle optimizing your production build, SEO, and dealing with server side vs client side rendering, and passing data back and forth between your data-store. This is a lot to setup, and can be very time consuming and labor intensive. With next.js, all of this is handled for us from the start, which allows us to build the things we enjoy building and get our application into production.

Some of the perks of next.js are:

• An intuitive [page-based](https://nextjs.org/docs/basic-features/pages) routing system (with support for dynamic routes)

• [Pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering), both [static generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) (SSG) and [server-side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) (SSR) are supported on a per-page basis

• Automatic code splitting for faster page loads

• [Client-side routing](https://nextjs.org/docs/routing/introduction#linking-between-pages) with optimized prefetching

• [Built-in CSS](https://nextjs.org/docs/basic-features/built-in-css-support) and [Sass support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support), and support for any [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js) library

• Development environment with [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh) support

• [API routes](https://nextjs.org/docs/api-routes/introduction) to build API endpoints with Serverless Functions

• Fully extendable

I dunno about you, but having all of this set up for me is a huge perk.

### Netlify

Netlify describes itself as:

`Netlify is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.`

While I have only used Netlify to host my personal site, I found the process SUPER EASY, and I will be using their platform for any future projects. From start to finish, I was able to set up, deploy, and apply a custom domain name in under 5 minutes, which to me is pretty amazing. It handles building to production for you automatically, so whenever you merge code into your Main branch, it will automatically start a deployment.

### Initial Setup

With all the talk about what these tools are and what they do out of the way, lets actually setup our application and push it out for the world to see!

For this, you will need the following:

• A code editor. I personally use Visual studio Code. A few other options are WebStorm(Paid), Atom(Free), or Brackets(Free)

• You’ll need Node.js version 10.13 or later. [Install it from here](https://nodejs.org/en/)

• If you are on Windows, I recommend downloading [Git for Windows](https://gitforwindows.org/) and use Git Bash that comes with it. [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) is another option

• If you are on a Macbook or Linux, you can use the built in terminal

• A Github account. These are free and are very easy to setup.

Once you are done installing the things you need from above, you are setup and good to develop. I will be doing things on a Mac, so the commands I give may be slightly different if you are on a different OS.

### Create a next.js app

To create a Next.js app, open your terminal, cd into the directory you’d like to create the app in, and run the following command:

```js
npx create-next-app our-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

### Run the development server

You now have a new directory called our-blog. Let’s cd into it:

`cd our-blog`

Then, run the following command:

`npm run dev`

This starts your Next.js app’s “development server” on port 3000.

To make sure everything is working, open http://localhost:3000 inside your browser.

You should be presented with the text Welcome to `Next.js!` inside of your browser. If you see this, congratulations! You can now start building out your actual site!

If you’d like more information on how things work, it can be found in the [docs](https://nextjs.org/docs/getting-started).

### Starter Templates

One of the cool things about Next.js is the out of the box templates you can use. They can be found here. These are all lightweight, pre built templates that already handled all of the setup for you. I used [this one](https://vercel.com/templates/next.js/blog-starter-kit) to build my personal site, Vet that codes. I recommend playing around with it to get a feel for what you want, and going from there.

### Host our project on Github

If you have setup your site, and have it in a good place and want the world to see your creation, you can use Netlify to handle your deployments. To get started, lets push our code to a Github repo. Head over to Github.com and start a new repo. Inside of our code editor, we will want to do the the following:

• echo “# test” >> README.md

• git init

• git add README.md

• git commit -m “Initial setup of nextJS project”

• git branch -M main

• git remote add origin "insert repo name here"

• git push -u origin main

After this is complete, you can now start the deployment.

### Deployment

Navigate [here](https://docs.netlify.com/get-started/#deploy-a-project-to-netlify) and follow the steps to connect GitHub to Netlify. This is super easy to do, and takes a matter of moments. Once you’ve connected the two, your site should be hosted live. You can even set up a custom domain name and everything right from the dashboard if you haven’t already purchased one. There are countless tools available to you, right from the dashboard. The team has really made it easy and thought of everything, and since it’s free it’s even better!

### Continue your development

And with that, we’re done. Our site should be live for the world to see, and with little to no effort! Now we can focus on building onto what we have, and let netlify handle the deployments for us.