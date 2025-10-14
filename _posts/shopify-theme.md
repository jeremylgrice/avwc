---
title: "Getting Started with Custom Theme Development for Shopify"
excerpt: "So you want to build a custom theme for Shopify, but aren’t sure where to begin? Well then, I am here to help. The process...."
coverImage: "/assets/blog/cover-photos/lake.webp"
date: "2022-09-12T12:00:00.322Z"
ogImage:
  url: "/assets/blog/cover-photos/lake.webp"
---

So you want to build a custom theme for Shopify, but aren’t sure where to begin? Well then, I am here to help. The process is pretty straight forward, but there are a few things you will need before you can begin. First, you will need a computer that is capable of running an IDE. I personally use a mac, but a windows computer or one running any form of linux will work as well (I will just be using terminal commands from my mac, but these may also work on Windows)

There are a few prerequisites you will need before you can begin. They are:

• Install [Ruby](https://www.ruby-lang.org/en/) or [Ruby+Devkit using RubyInstaller for Windows(2.7 or higher)](https://rubyinstaller.org/downloads/).

• If you want to use a [development store](https://shopify.dev/themes/tools/development-stores) to build a theme, then create or log in to a [Shopify Partner account](https://partners.shopify.com/signup), and then [create a development store](https://shopify.dev/themes/tools/development-stores#development-store-apps-themes).

• Make sure that you have a [collaborator account](https://shopify.dev/themes/tools/collaborator-accounts) or a [staff account](https://help.shopify.com/manual/your-account/staff-accounts) with the Manage themes permission or Themes permission for the store that you want to work on, or you’re the owner of the store.

• Note the URL of the store that you want to work on.

• Make sure that you’re connected to the internet. Most Shopify CLI commands need an internet connection to run.

• An IDE of your choice. Some popular ones are [Visual Studio Code](https://code.visualstudio.com/) & [Atom](https://atom.io/), as they are free and have large communities behind them. There are dozens of others, but these are 2 that I have personally used and can strongly recommend.

• Be sure to have Homebrew installed. Home brew is a package manager, and is recommended by Shopify, so it is what I use. You can install it easily by running the following command.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once you have done all of this, you are ready to develop!

In a terminal, you will need to run the following two commands. What this will do is give you access to installing themes and updates from a CLI (Command Line Interface) that Shopify has personally built. This will make downloading updates and code to and from Shopify way easier. You can read more on their CLI [here](https://shopify.dev/themes/tools/cli).

```js
brew tap shopify/shopify

brew install shopify-cli
```

Next, you will need to login with Shopify CLI to connect your local machine to your online store. You can accomplish this by typing the following into terminal (replace my-store with whatever you used when setting up your development store)

```js
shopify login --store my-store.myshopify.com
```

After typing this command into terminal, your browser window will open. In your browser window, log into the account that’s attached to the store that you want to use for development.

Once you have successfully logged in, you will want to initialize a new theme on your local environment. To accomplish this, you will want to change your directory to a place where you intend to work from. I typically have a directory named development, which is where I keep all my work. If you’re curious how to accomplish this, run the following commands. This will clone the boilerplate theme that Shopify gives you access to on your personal computer so you are able to start building with little to no setup.

```js
// change your directory to the documents director
cd documents

// make a new directory named development
mkdir development

// change your directory to your newly created development environment
cd development

// use the Shopify CLI to create a fresh copy of the theme "dawn"
shopify theme init
```

Once this is done, you will want to change your directory to whatever you named your theme. Run the following command to make this happen.

```js
cd "enter theme name here"
```

Next, we will want some data to work with. This can be anything from products to customers or even draft orders, and to accomplish this you can run any or all of the following commands.

```js
shopify populate products

or

shopify populate customers

or

shopify populate draftorders
```

This will pull in mock data for you to test with your theme. Now we are able to actually start working on building out our theme. To start up your local environment run the following command

```js
shopify theme serve
```

Your terminal will show a progress bar and will give you a few links where you will be able to view your work. Once you start developing, you will occasionally want to “lint” your work. Linting, in a nutshell, is where you run a command to clean up your code and keep it uniform. It will let you know if something is wrong before you push your code up, which is the last place you’d want things to go wrong. Think of it as a safety check. You can lint by running the following command

```js
shopify theme check
```

After all of this, you are able to start actually writing the code. Open the code up on your IDE and start building!

If you would like a few Visual Studio Code plugins, I personally use the following:

• [Shopify Liquid](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) — Official VS Code extension for Shopify Liquid powered by Theme Check, the Liquid linter and language server for online store themes.

• [Liquid Languages Support](https://marketplace.visualstudio.com/items?itemName=neilding.language-liquid) — This is a Liquid language support extension for Visual Studio Code.

• [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) — This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.

• [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — An opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

• [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) — Instantly visualize css colors in your css/sass/less/postcss/stylus/XML… files.

---

I hope this article has been enjoyable. If you have any feedback, post a comment and let me know where I can improve. If you’d like to check out some of my other posts, they can be found [here](/).
