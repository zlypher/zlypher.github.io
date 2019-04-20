---
layout: post
title: Help! My NodeList is not an Array
description: NodeList are like arrays, but the are not arrays. So what to do?
date:   2018-09-20 22:08:00 +0200
---

Let's say, that you have to find a list of all elements with a class of "container" on a page. This is a fairly basic task and can be solved in different ways. For our purposes, using Vanilla JS, we could either use `getElementsByClassName` or `querySelectorAll`. While the former returns a `HTMLCollection`, the latter returns a `NodeList`. They are similar enough for our example, so we'll go with `querySelectorAll`. Our code will look something like this:

```js
let elements = document.querySelectorAll(".container")
// y = NodeList(3) [div.container, div.container, div.container]
// Alternatively:
// let elements = document.getElementsByClassName("container")
```

That looks promising! As a next step, we want to get XXX from each node. So that we end up with a list of XXX. Since we are well versed developers and want to use a functional approach, we use the `map` function. As a reminder, the map function will execute the callback for each element in the array and create a new array from the return values. Combined, with arrow functions, we get some concise, expressive code:

```js
let array = [ 1, 2, 3 ]
let newArray = array.map(item => item * 2);
// [ 2, 4, 6]
```

...

https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map

NodeList -> no filter/map...
How to convert a NodeList to an array


```
Array.from(x)
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
Array.from(y)
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
[...x]
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
[...y]
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
```

**Resources**
* [querySelectorAll MDN](https://developer.mozilla.org/de/docs/Web/API/Document/querySelectorAll)
* [NodeList](https://developer.mozilla.org/de/docs/Web/API/NodeList)
* [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [Spread Operator](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator)