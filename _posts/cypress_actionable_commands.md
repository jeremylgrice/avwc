---
title: "Testing your front end with cypress"
excerpt: "Cypress is a robust testing tool. It comes with a lot of really cool features, and can do things that other testing frameworks...."
coverImage: "/assets/blog/cover-photos/treeline.webp"
date: "2022-10-17T05:35:07.322Z"
author:
  name: Jeremy
  picture: "/assets/blog/authors/jeremy.jpeg"
ogImage:
  url: "/assets/blog/cover-photos/treeline.webp"
---

# Using Cypress to test your HTML

Cypress is a really fun testing tool. As a software developer, the idea of doing manual testing does not sound like a lot of fun. With…

---

### Using Cypress to Test Your HTML

#### A deep dive into the actionable commands of Cypress

![Photo by Mark Munsee](https://cdn-images-1.medium.com/max/800/1*WCieRhDFdUaqnxCh2zN_-A.jpeg)  
[Photo by Mark Munsee](https://www.pexels.com/photo/concrete-road-between-trees-1058592)

Cypress is a really fun testing tool. As a software developer, I like to make sure my code does what it is designed to do. Testing is a entire skillset in itself, and it takes a long time to get good at it. Since our time is not endless and we need to make sure our code doesn’t break things as we go, we need a way to test elements on our page, even as we build on top of things in the future. How can we handle building, testing features as we go, and regression test? Enter Cypress Actionable Commands!

These allow us to write our tests around interacting with our application. This keeps our code full-proof, even in the future. Since we can set up our project to run these tests when committing code to our repository, we can ensure that our new code doesn’t break existing code and the application’s functioning as expected. Let's dive into a few of these nifty commands!

---

## Actionable commands

In Cypress, we have several actionable commands at our disposal. These range from a single click to a double click, checking and unchecking boxes, and typing, just to name a few.

#### `click()` — Click on an element.

This is pretty straight forward. If we have something like a button or a link, we can simulate the clicking on that element. We will want to tell Cypress which element we care about, and then chain the click function from that element.

```javascript
// ✅ Correct usage
cy.get(".primary-button").click();

// ❌ Incorrect usage
cy.click(".primary-button");
```

The arguments we could pass in would be `position`, `x` or `y coordinate`, or `options`:

```javascript
// Position
cy.get(".primary-button").click("topRight");

// X / Y Coordinates
cy.get(".primary-button").click(10, 12);

// Options (See docs below)
cy.get(".primary-button").click({
  altKey: true,
});
```

[click | Cypress Documentation](https://docs.cypress.io/api/commands/click#Syntax)

---

#### `dblclick()` — Double click on an element

Much like the single click, we can also perform a double click on an element.

```javascript
// ✅ Correct usage
cy.get(".primary-button").dblclick();

// ❌ Incorrect usage
cy.dblclick(".primary-button");
```

Arguments:

```javascript
// Position
cy.get(".primary-button").dblclick("topLeft");

// X / Y Coordinates
cy.get(".primary-button").dblclick(5, 72);

// Options
cy.get(".primary-button").dblclick({
  shiftKey: true,
});
```

[dblclick | Cypress Documentation](https://docs.cypress.io/api/commands/dblclick)

---

#### `rightclick()` — Right click on an element

The right click function allows us to write code around the context menu event, and not the context menu itself (this is deprecated).

```javascript
// ✅ Correct usage
cy.get("#primary-menu").rightclick();

// ❌ Incorrect usage
cy.rightclick("#primary-menu");
```

Arguments:

```javascript
// Position
cy.get("#primary-menu").rightclick("topLeft");

// X / Y Coordinates
cy.get(".primary-button").rightclick(5, 72);

// Options
cy.get(".primary-button").rightclick({
  shiftKey: true,
});
```

[Context Menu event- Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event)  
[contextmenu - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu)  
[rightclick | Cypress Documentation](https://docs.cypress.io/api/commands/rightclick#Syntax)

---

#### `type()` — Type into an element

If you have input boxes and want to ensure the user could type inside of them, this is your go-to command.

```javascript
// ✅ Correct usage
cy.get(".first-name-input").type("Text here");

// ❌ Incorrect usage
cy.type("Text here");
```

Arguments: `text` and `options`

```javascript
// Text
cy.get(".first-name-input").type("Text here");

// Options
cy.get(".first-name-input").type({ delay: 10 });
```

Mimic key presses:

```javascript
cy.get(".test-input").type("{ctrl}test");

// or
cy.get(".test-input").type("test {shift}things");
```

[type | Cypress Documentation](https://docs.cypress.io/api/commands/type#Syntax)

---

#### `clear()` — Clear a value from an `input` or `text area`

This will clear out input fields of values.

```javascript
// ✅ Correct usage
cy.get('[type="text"]').clear();

// ❌ Incorrect usage
cy.clear();
```

Options:

```javascript
cy.get('[type="text"]').clear({
  log: true,
});
```

[clear | Cypress Documentation](https://docs.cypress.io/api/commands/clear)

---

#### `check()` — Check a checkbox or radio element

This will mimic clicking inside of a checkbox to check an option.

```javascript
// ✅ Correct usage
cy.get('[type="checkbox"]').check();

// ❌ Incorrect usage
cy.check('[type="checkbox"]');
```

Arguments: `Value`, `Values`, `options`

```javascript
// Value
cy.get('[type="checkbox"]').check("First Option");

// Values (Array)
cy.get('[type="checkbox"]').check([
  "First Option",
  "Second Option",
  "Third Option",
]);

// Options
cy.get('[type="checkbox"]').check({ log: true });
```

[check | Cypress Documentation](https://docs.cypress.io/api/commands/check#Usage)

---

#### `uncheck()` — Uncheck a checkbox

This will mimic clicking inside of a checkbox to uncheck an option.

```javascript
// ✅ Correct usage
cy.get('[type="checkbox"]').uncheck();

// ❌ Incorrect usage
cy.uncheck('[type="checkbox"]');
```

Arguments: `Value`, `Values`, `options`

```javascript
// Value
cy.get('[type="checkbox"]').uncheck("First Option");

// Values
cy.get('[type="checkbox"]').uncheck([
  "First Option",
  "Second Option",
  "Third Option",
]);

// Options
cy.get('[type="checkbox"]').uncheck({ log: true });
```

[uncheck | Cypress Documentation](https://docs.cypress.io/api/commands/uncheck)

---

#### `select()` — Select an `option` within a `select`

```javascript
// ✅ Correct usage
cy.get(".users-select").select("first-user-option");

// ❌ Incorrect usage
cy.select("Chewbacca");
```

Arguments: `Value`, `Values`, `options`

```javascript
// Value
cy.get(".users-select").select("Jeremy");

// Values
cy.get(".users-select").select(["Jeremy", "Leia"]);
```

[select | Cypress Documentation](https://docs.cypress.io/api/commands/select)
