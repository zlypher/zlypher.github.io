---
layout: post
title: Find elements by css properties
description: How to find all elements with a specific css property
date:   2018-09-28 20:01:00 +0200
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

Next up we query all elements which match the `*` selector (hint: all of them). And create an array from the returned `NodeList`.

```js
    const elems = Array.from(document.querySelectorAll("*"))
```

Here comes the actual fun part. With `window.getComputedStyle(elem)`, the browser provides an interface to fetch all css declarations which are applied to the element (including user agent stylesheets, so don't wonder, why there are way more values than you expected). We can now access all css properties in three different ways (see below). With `.zIndex`, we fetch the declartion for the `z-index` and check if it is not set to `auto`. `auto` is the default value from the HTML specification and applied by the browser, so we want to filter all those elements out, where it is still the browser default value.

```js
        .filter(elem => window.getComputedStyle(elem).zIndex !== "auto")
```

Now we map over all found elements and create a new object with a reference to the element as well as the style declaration for each element.

```js
        .map(elem => {
            return {
                elem: elem,
                style: window.getComputedStyle(elem),
            };
        });
```

At last, we can output our results or continue working with them.

```js
    console.table(elems);
```

And finally end the function and call it, to make it an IIFE (immediately invoked function espression).

```js
})();
```

## Output

If you run this snippet in the console on [https://github.com](https://github.com) for example, you will receive an output like that:

<figure>
    <img src="/assets/images/elems_by_css.png" alt="Example output from the console from the snippet, from github.com">
    <figcaption class="c-caption">Example output from the console from the snippet, from github.com</figcaption>
</figure>

## window.getComputedStyle

The function `window.getComputedStyle(elem)` returns a `CSSStyleDeclaration`, but how can you actually extract the css property values? There are actually three different ways to do that:

* via a function `getPropertyValue(propName)`
* via index access `cs[propName]`
* via property `cs.propName`

<blockquote class="c-quote" cite="https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle">"The CSS property values may be accessed using the getPropertyValue(propName) API or by indexing directly into the object such as cs['z-index'] or cs.zIndex."</blockquote>

**Resources**
* [Window/getComputedStyle on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
* [CSSStyleDeclaration on MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)
* [Gist with Code Example](https://gist.github.com/zlypher/0b9b295e2ee39da4125105e88d8d7d3e)