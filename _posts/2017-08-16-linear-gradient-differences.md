---
layout: post
title:  "Linear Gradient - differences in Chrome/Safari"
description: "Browser differences: Linear Gradient"
date:   2017-08-16 16:43:20 +0100
categories: Web
---

Different browsers (or layout engines) often behave slightly different. One of those differences caught me off guard recently. The culprit: linear-gradient. To be more precise a fade effect from transparent to white.

Image you have a box with text of fixed height and you wan't to fade out the text. A simple implementation would look something like this:

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
  <div class="fade"></div>
</div>
```

With the following styling:

```css
.container {
  position: relative;
  margin: 0 10px;
  border: 1px solid grey;
  padding: 8px;
  width: 300px;
}

.fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), white 75%);
}
```

So nothing fancy here. Basically an overlay with a height of 100px and fading from transparent to white. Works in Chrome? Yes, so we are good to go... Actually not quite.

## The Problem

As you may have noticed, we used `rgba(0, 0, 0, 0)` for our transparent color. So a nice pure black with an alpha channel of 0. Turns out, Safari is pretty strict here and draws a strange looking grey gradient.

## The Solution

So what can we do about this? Luckily, it is sufficient to change the transparent color from a transparent black `rgba(0, 0, 0, 0)` to a transparent white `rgba(255, 255, 255, 0)`. With this simple fix everything looks as expected in Safari as well.

[Checkout the Codepen!](https://codepen.io/zlypher/pen/BwRyMb){:target="_blank" rel="noopener noreferrer"}

Tip: If you want to prevent the fade effect to interfere with your text selection, add `pointer-events: none` to `.fade`.