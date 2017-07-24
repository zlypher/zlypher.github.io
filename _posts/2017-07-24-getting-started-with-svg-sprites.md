---
layout: post
title:  "Getting Started With SVG Sprites"
date:   2017-07-23 19:30:00 +0100
categories: svg web getting_started
---

Modern websites have a lot of icons scattered around. A solid technique to implement those icons are SVG sprites. As it turns out, it's pretty easy to start using them. If you can't or don't want to use SVGs, an alternative are icon fonts like [Glyphicons from Bootstrap](https://getbootstrap.com/components/#glyphicons){:target="_blank"} or [Font Awesome](http://fontawesome.io/){:target="_blank"}.

There are already a lot of solid and good guides in mastering SVG sprites, so this post will focus on the bare essentials to get started.

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="icon-linked" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
        <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" />
    </symbol>
</svg>
```

```html
<!--
    Use the icon somewhere in your HTML.
    Make sure, that xlink:href matches the id from before.    
-->
<svg class="u-icon">
    <use xlink:href="#icon-twitter" />
</svg>
```

* [An Overview of SVG Sprite Creation Techniques](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/){:target="_blank"}
* [How to Implement Cross-Browser SVG Sprites](https://webdesign.tutsplus.com/tutorials/how-to-implement-cross-browser-svg-sprites--cms-22427){:target="_blank"}
* [How to Create and Manage SVG Sprites](https://www.webdesignerdepot.com/2017/05/how-to-create-and-manage-svg-sprites/){:target="_blank"}
* [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/){:target="_blank"}
* [SVG "symbol" a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/){:target="_blank"}

## Things to keep in mind

* Positive: No additional roundtrip to fetch the icon image from the server
* Positive: Using the same icon multiple times is cost effective (space)
* Only add the icons you intend to use on the current site
* Negative: Additional code which won't be cached
