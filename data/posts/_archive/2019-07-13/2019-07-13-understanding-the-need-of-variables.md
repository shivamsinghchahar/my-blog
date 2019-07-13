---
path: "/blog/understanding-variables"
date: "2019-07-13"
title: "Understanding the need of variables in programming"
archived: true
---

*Variable is a named memory location*

- [Introduction](#introduction)
- [Variables](#variables)

## Introduction

Variables are a fundamental part of any programming language. So, understanding how data is stored with the help of variables is very important.

The memory location is a hexadecimal address (e.g. `0x7bdf75e82d1c` ) and your data lives on that address, it's easy for a computer to understand hexadecimal address but not for you. This is where variables come to your rescue. Variables allow you to give a name to that memory location, which is easy to remember.

e.g. you can name `0x7bdf75e82d1c` as `myVariable` and whenever you need to access the data at that address, you can just reference `myVariable`. Interesting, isn't it?

## Variables

Let's take an example to understand how variables are created.

You computer is a place where you store your data. Let's say you create a new folder named `favourite-movies` and you dump all your favourite movies into it. Now, whenever you need to watch one of your favourite movies, you only need to search for your `favourite-movies` folder.

So, you just created a box on your computer's memory with a label `favourite-movies` and dumped your favourite movies into. 

variables also work in a similar way.

1. you create a box.
2. you label it.
3. store data in it.

Let's create our first variable in javascript

```js
let myName = 'Shivam';
```

Now, let's understand this in steps

1. `let` tells javascript to create a box.
2. `myName` is the label of that box.
3. `=` tells the javascript to assign the data to `myName`.
4. `'Shivam'` is the data inside `myName`.

There are three more ways to declare a variable in javascript. All of them have some differences but let's leave that discussion for later.

```js
let firstName 	= 'Shivam';
var lastName 	= 'Chahar';
const age 		= 23;
```

*Declaration* | *Identifier* | *Value*
------ | ------ | ------
`let` | `firstName` | `'Shivam'`
`var` | `lastName` | `'Chahar'`
`const` | `age` | `23`


I hope you enjoyed this article, reviews are highly appreciated : )

## Resources
[Javascript Info](http://javascript.info/variables)
[Eloquent javascript](https://eloquentjavascript.net/)