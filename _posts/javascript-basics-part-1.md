---
title: "Learn the javascript basics - Part 1"
excerpt: "Hello and welcome to an introduction into the world of Javascript...."
coverImage: "/assets/blog/cover-photos/campfire.webp"
date: "2022-11-10T12:00:00.322Z"
ogImage:
  url: "/assets/blog/cover-photos/campfire.webp"
---

# Introduction

Hello and welcome to an introduction into the world of Javascript. In the following article, we will go over a small handful of the things you will use regularly as a JavaScript developer. We will cover declaring and using variables, operators, and the various ways of declaring strings/template literals. Read on for more!

## **Variables**

Think of a variable like a container. You can create a variable without a value, or as an empty container, and then add to it later, like this

```
let myAge;
```

Then, at a later time, we can add something to our variable

```
myAge = 36;
```

In javascript, we have a few different ways of creating variables. We can use the old school `var` keyword, or the newer `let` or `const`.

### **var**

I bet you’re asking “What is the difference with these 3 things though?”. Good question, and I will explain.

Prior to the release of ES6, the only way to declare a variable was with the use of the `var` keyword. `var` declarations, wherever they occur, are processed before any code is executed. This is called hoisting, and I have attached a link explaining that more below

### **let**

The `let` allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the `var` keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between `var` and `let` is that the latter is initialized to a value only when a parser evaluates it.

Much like the `let` keyword, constants(or `const`) are block scoped. Unlike the `let` keyword though, a `const` cannot be changed through a reassignment, and it cannot be redeclared. If the `const` is an object or an array, its properties can be updated and/or removed.

## **Operators**

### **Assignment** (`=`)

Assigns the value of its right operand to its left operand.

Const assignment = 'The variable assignment is equal to this sentence';

### **Equals (**`==`)

Returns `true` if the operands are equal.

The equals operator will do a check against two operands, ensure they are equal, and then return a boolean (True or False) value. This operator will attempt to convert varying types when doing the comparison.

### **Not Equals (**`!=`)

Returns `true` if the operands are not equal.

The not equals operator will do a check against two operands, ensure they are not equal, and then return a boolean (True or False) value. This operator will attempt to convert varying types when doing the comparison.

### **Strict Equals** (`===`)

Returns `true` if the operands are equal and of the same type.

The Strict Equals operator will do a check against two operands, ensure they are equal, and then return a boolean (True or False) value. This operator will **ALWAYS** take into consideration differing types of your values when performing the comparison.

### **Strict Not Equals (**`!==`)

Returns `true` if the operands are of the same type but not equal, or are of different type.

The strict not equals operator will perform a check against two operand to ensure they are not equal, and then return a boolean (True or False) value. This operator will **ALWAYS** take into consideration differing types of your values when performing the comparison.

## Double Quotes (“…”) versus Single Quotes(’…’) versus Back Ticks(`…`)

In JavaScript, we can use single quotes and double quotes to create a string, while a back tick will create what is referred to as a template literal. Let me go over this a little.

When using “ or ‘ or `, you will need one to begin what you want to display, and one to “terminate” your string. Essentially

"Whatever you want will go in between the beginning and the end"or’Whatever you want will go in between the beginning and the end’or `Whatever you want will go in between the beginning and the end`

Lets create something very simple, like a first name.

```
Single quote

const firstName = 'Jeremy';

Double quote

const firstName = "Jeremy";

Backtick

const firstName = `Jeremy`;
```

While all 3 are fundamentally the same, they all have their pros and cons. For example, what if we wanted to type an entire sentence to the user. With a single quote, we would run into this issue:

```
const aSentence = 'the person say's hello';
// this will return this error, because the single quote in the word say's
// VM492:1 Uncaught SyntaxError: Unexpected identifier 's'
```

Because of this, when using single quotes, you would need to use to escape by using a `\` . Doing this will allow you to use the single quotes, but this isn’t very readable and is something you could possible forget about until errors are thrown.

However, with a double quote, you could do the following:

`const aSentence = "the person say's hello";`

Or you could do this with a back tick

`` const aSentence = `the person say's hello`; ``

With back ticks, the true power comes in the ability to pass variables into them. So if you wanted to pass in a variable of first name and occupation, you could do so with a back tick(You cannot do this with single or double quotes)

```
const firstName = 'Jeremy';
const occupation = 'programmer';console.log(`${firstName} is a ${occupation}`);   // This will return Jeremy is a programmer
```
