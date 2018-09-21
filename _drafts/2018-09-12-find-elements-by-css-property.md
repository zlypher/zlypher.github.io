---
layout: post
title: Find elements by css properties
description: How to find all elements with a specific css property
date:   2018-09-12 22:45:00 +0200
---

Today it like to share short [code snippet](https://gist.github.com/zlypher/0b9b295e2ee39da4125105e88d8d7d3e) with you. You can use it to find all elements with a specific css property value. In my example, I want to find all elements with a custom `z-index`. So let's jump right in. The snippet is pretty straight forward:

```js
(() => {
    const elems = Array.from(document.querySelectorAll("*"))
        .filter(elem => window.getComputedStyle(elem).zIndex !== "auto")
        .map(elem => {
            return {
                elem: elem,
                style: window.getComputedStyle(elem),
            };
        });
    console.table(elems);
})();
```

## Explanation

In the gist, you will find another variations with slightly different tradeoffs. For sake of brevity, we will only consider this one. So let's step through it.

We create a new function with the nifty arrow syntax. This could easily be written as `(function() {` for older browser though.

```js
(() => {
```

Next up we query all elements which match the `*` selector (hint: all of them). And create an array from the `NodeList`.

```js
    const elems = Array.from(document.querySelectorAll("*"))
```

Here comes the actual fun part. With `window.getComputedStyle(elem)`, the browser provides an interface to fetch all css declarations which are applied to the element (including user agent stylesheets, so don't wonder, why there are way more values than you expected). TBD

```js
        .filter(elem => window.getComputedStyle(elem).zIndex !== "auto")
```

TBD

```js
        .map(elem => {
            return {
                elem: elem,
                style: window.getComputedStyle(elem),
            };
        });
```

TBD

```js
    console.table(elems);
```

TBD

```js
})();
```



## window.getComputedStyle

`window.getComputedStyle(elem)` returns a `CSSStyleDeclaration`, but how can you actually extract the css property values? There are actually three different ways to do that:

*"The CSS property values may be accessed using the getPropertyValue(propName) API or by indexing directly into the object such as cs['z-index'] or cs.zIndex."* - window.getComputedStyle(), MDN web docs

**Resources**
* [Window/getComputedStyle on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
* [CSSStyleDeclaration on MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)
* [Gist with Code Example](https://gist.github.com/zlypher/0b9b295e2ee39da4125105e88d8d7d3e)