---
layout: post
title: Help! My NodeList is not an Array
description: NodeList are like arrays, but the are not arrays. So what to do?
date:   2018-09-20 22:08:00 +0200
---

Let's say that you have to find a list of all links on a page. This is a fairly basic task and can be solved in different ways. For our purposes, using Vanilla JS, we could either use `document.getElementsByTagName` or `document.querySelectorAll`. While the former returns a `HTMLCollection`, the latter returns a `NodeList`. They are similar enough for our example, so we'll go with `querySelectorAll`. Our code will look something like this:

```js
// let elements = document.getElementsByTagName("a")
// HTMLCollection(3) [a, a, a]

let elements = document.querySelectorAll("a")
// NodeList(3) [a, a, a]
```

That looks promising! As a next step, we want to get the `"href"` attribute from each link. So that we end up with a list of urls that page links to. Since we are well versed developers and want to use a functional approach, we use the `map` function. As a reminder, the map function will execute the callback for each element in the array and create a new array from the return values. Combined with arrow functions we get some concise, expressive code:

```js
let links = elements.map(elem => elem.getAttribute("href"));
// Uncaught TypeError: document.querySelectorAll(...).map is not a function
```

However, that will result in a nasty TypeError. But why? Both the `NodeList` and the `HtmlCollection` look like arrays and can even access single items with `elements[index]`. As it turns out, there are [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) as well as "array-like objects". Array-like objects have a `length` property and can access elements via an index, but don't have all the methods, that natural arrays have. Which is precisely the case with `NodeList` and `HtmlCollection`.

There are two quick and easy solutions (probably more, but those should be sufficient) to solve this problem:

## Array.from

<blockquote class="c-quote" cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">"The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object."</blockquote>

`"Array.from"` is a new built-in function in ES6 (polyfills for IE are available), which can convert the `NodeList` and other objects into actual arrays. With that, we are now able to finally use the map function to implement our logic.

```js
let elements = document.querySelectorAll("a");
let links = Array.from(elements).map(elem => elem.getAttribute("href"));
```

## Spread/Rest operator

The second solution utilizes the new spread and rest operators. By extracting the elements of a `NodeList` and immediately spreading it into a new array.

```js
let elements = document.querySelectorAll("a");
let links = [...elements].map(elem => elem.getAttribute("href"));
```

## Conclusion

Both solutions work fine for that example. The main take away is, that you should be aware that not everything that looks like an array at first glance, really can be used in all situations like an array. However, additions with ES6 like the spread operator make dealing with arrays (and objects) easier and more comfortable.

**Resources**
* [querySelectorAll MDN](https://developer.mozilla.org/de/docs/Web/API/Document/querySelectorAll)
* [NodeList](https://developer.mozilla.org/de/docs/Web/API/NodeList)
* [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [Spread Operator](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator)