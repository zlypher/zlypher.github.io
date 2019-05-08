---
layout: post
title: The ::selection pseudo element
description: Use the ::selection pseudo element to add a fancy highlight to your blog
date:   2019-05-08 21:45:00 +0200
---

If you select some text on your website or blog, it will get a default styling from your browser. If you are on Chrome/Windows, this will most likely be a dark blue background and a white text color. Did you know, that you can change this styling via CSS? The magic word is `::selection` and as a matter of fact, it is quite [well supported across all browsers](https://caniuse.com/#feat=css-selection).

The `::selection` pseudo element allows you to style the highlighted text. This is actually quite simple:

```css
::selection {
    background-color: #130BB0;
    color: #EFF5F5;
}
```

Pretty straight forward. Checkout [this CodePen](https://codepen.io/zlypher/pen/yZQBbg) and play around to get a feeling how it works. However, only a few css properties are supported on the `::selection` pseudo element:
* color
* background-color
* cursor
* caret-color
* outline
* text-decoration
* text-emphasis-color
* text-shadow

Just don't forget about Accessibility and be sure to pick a [sufficient contrast ration](https://webaim.org/resources/contrastchecker/). So experiment and play around with it. It can add a nice touch to your website.

**Resources**
* [::selection CodePen](https://codepen.io/zlypher/pen/yZQBbg)
* [::selection](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)
* [caniuse ::selection CSS pseudo-element](https://caniuse.com/#feat=css-selection)