---
title: 'Testing your front end with cypress'
excerpt: 'Cypress is a robust testing tool. It comes with a lot of really cool features, and can do things that other testing frameworks....'
coverImage: '/assets/blog/cover-photos/treeline.webp'
date: '2022-10-17T05:35:07.322Z'
author:
  name: Jeremy
  picture: '/assets/blog/authors/jeremy.jpeg'
ogImage:
  url: '/assets/blog/cover-photos/treeline.webp'
---
### Why use Cypress?

Cypress enables you to write all types of tests:


• End-to-end tests

• Integration tests

• Unit tests

Cypress can test anything that runs in a browser.

Cypress is a robust testing tool. It comes with a lot of really cool features, and can do things that other testing frameworks do not:

• Cypress will take snapshots as your tests run. As things are running, you can hover over commands in the Command Log to see exactly what is happening as it is running.

• Stop guessing why your tests are failing. Debug directly from familiar tools like your browsers developer tools. Cypress makes errors more readable.

• No more async hell. You never have to add a wait or a sleep to your tests, as Cypress will automatically wait for commands and assertions before continuing.

• View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.


### Requirements

For this, you will need the following:

• macOS 10.9 and above, Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8, or Windows 7 and above (64-bit only)

• Node.js 12 or 14 and above

### Installation

To install cypress, cd into the directory where your project lives and run this single command

#### NPM

```js
npm install cypress --save-dev
```

#### Yarn

```js
yarn add cypress --dev
```

After that, things should be good to go!

### Using Cypress

Now that we have everything set up and ready to go, lets actually use it. Below, I will go over some examples of things you can do with Cypress.

#### Visit a website

Lets get the most basic out of the way first. What if we wanted to have our test visit a specific site? Lets make use of cy.visit() and pass in our desired url.

```js
describe('Our test', () => {
  it('Visits vetthatcodes', () => {
    cy.visit('https://www.vetthatcodes.com')
  })
})
```

When you run this test, you’ll notice a few things

• The Command Log now displays the VISIT action

• Our website is loaded into the App Preview pane on the right

• Our test is green, which means it passed (We haven’t used any assertions yet, so this makes sense)

### Get()

One of the most common things you will use when working with Cypress is `.get(...)`. The documentation for this is here. This allows you to get one or more DOM elements by selector. `get(...)` returns an element according to its selector — similar to jQuery’s `$(...)`

Just as an example, if we wanted to get an element, and then check if it was disabled, we could do the following

```js
cy.get('input').should('be.disabled') 
```

A few side notes about cy.get(...)

• It will automatically try again until whatever we are looking for exists in the DOM.

• It will automatically try again until all chained assertions have passed

• It can timeout while waiting for things to exist in the DOM.

• It can timeout while waiting for all assertions to pass.

### Assertions

`Assertions are a way for us to validate a given step in our tests. These assertions determine whether any given step has succeeded or not. Assertions validate the desired state of your elements, objects, or application under test.`

I have attached a few of the more common ones, per the cypress docs. I didn't go into detail for these, because they are very readable.

• Not

```js
expect(name).to.not.equal(‘Jeremy’)
```

• True

```js
expect(true).to.be.true;
```

• Length

```js
cy.get('li.selected').should('have.length', 1)
```

• Class

```js
cy.get('form').find('input').should('not.have.class', 'enabled')
```

• Value

```js
cy.get('textarea').should('have.value', 'this site is awesome')
```

• Visibility

```js
cy.get('p').should('be.visible')

// or

cy.get('p.hidden').should('not.be.visible')
```

• Existence

```js
cy.get('[data-cy="loading"]').should('not.exist')
```

• State

```js
cy.get(':radio').should('be.checked')
```

• CSS

```js
cy.get('[data-cy="completed"]').should(
  'have.css',
  'text-decoration',
  'line-through'
);
```

• Disabled Property

What if we had a HTML element with the following

```js
<input type="text" data-cy="input" disabled />
```

we could then check it with

```js
cy.get('[data-cy="input"]').should('be.disabled')
```

• Chaining assertions

```js
<a data-cy="assertions-link" class="active" href="https://on.cypress.io" target="_blank">Cypress Docs</a>
```

We could then check multiple things with a chain of assertions

```js
cy.get('[data-cy="assertions-link"]')
  .should('have.class', 'active')
  .and('have.attr', 'href')
  .and('include', 'cypress.io')
```

#### Promises in Cypress

We can useCypress.Promise to create promises, so if you return a promise from inside of commands like .then(), Cypress will not continue until those promises resolve. This is super neat, and very powerful. Lets write up a really quick example below.

```js
cy.get('button').then((response) => {
  return new Cypress.Promise((resolve, reject) => {
    // write your custom logic here
  })
})
```

We can also handle errors in our promises like this

```js
Cypress.Promise.onPossiblyUnhandledRejection((error, promise) => {
  throw error;
})
```

### Writing our first test

Now that we’ve gotten all of this out of the way, I am sure we will want to write a test. The game plan for our test is as follows

• Visit the page to ensure it loads

• Check on our hostname, port, and protocol for accuracy

• Check on the title

Now that we have a plan of action, we want to write our test.

```js
describe('Navigating to our URL', () => {
  it('is successful', () => {
    cy.visit('www.localhost:3000');
    cy.location().should((page) => {
      expect(page.hostname).to.equal('www.localhost');
      expect(page.port).to.equal('3000');
      expect(page.protocol).to.equal('http:');
    });
    cy.title().should('contain', 'cypress-testing');
  })
})
```

### Best Practices

Much like any programming language or tool out there, it should always have a set of best practices. Cypress is no exception to this rule.

While there are a large number of things you should know, the 2 biggest things that have always stuck in my mind are these

• Don’t target elements based on CSS attributes such as: id, class, tag

• Add data-* attributes to make it easier to target elements

The reason that these 2 things, both being best practices for how to, and how not to select your elements, are because these 2 things will keep your Cypress tests from being extremely fragile and should keep things from breaking.

Lets go over this really quick. Say we had this button

```js
<button id="primary-button" class="btn btn-small" name="submit-button" role="button" data-cy="submit-button">
  Submit
</button>
```

What is the best way to go about selecting this element in our test? Since it is generally bad practice to select anything by IDs in web development, and classes have an issue of potentially changing at times, we’d most likely want to `.get()` based on the `data-cy="..."`

Why is this? when working with cypress, the data-cy is a cypress specific selector we can add to our elements. This gives us something to latch onto, and tells other developers that is something specific to cypress. We could write our selector like this => `cy.get('[data-cy="submit-button"]').click()`, which will keep our tests from breaking in the future. If you’d like to read more on this, its in the best practices link at the top of this section.