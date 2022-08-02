---
layout: post
title:  "Getting Started With SVG Sprites"
description: Getting started with SVG sprites
date:   2017-07-23 19:30:00 +0100
categories: SVG Web Getting_Started
---

Modern websites have a lot of icons scattered around. A solid technique to implement those icons are SVG sprites. As it turns out, it's pretty easy to start using them. If you can't or don't want to use SVGs, an alternative are icon fonts like [Glyphicons from Bootstrap](https://getbootstrap.com/components/#glyphicons) or [Font Awesome](http://fontawesome.io/).

There are already a lot of solid and good guides in mastering SVG sprites, so this post will focus on the bare essentials to get started. If you are in a hurry, you can skipt straight to the [results](#result).

## Steps

1. Add a new svg element at the top of your body tag. (It might work, if it is placed somewhere else, but to make sure that everything works correctly, place it at the top).

    ```html
    <body>
        <svg xmlns="http://www.w3.org/2000/svg">
            <!-- Symbols will go here -->
        </svg>
    </body>
    ```

    You will notice, that the svg will probably have a default size. Chromem 59 displays the svg element as rectangle with a width of 300px and a height of 150px. Since we don't need to display the spritesheet itself, we can simply set `display: none`.

    ```html
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    ```

    Note: If you dislike inline styles, you can define a css class and set the display property there. Just make sure, that the svg doesn't show up.

2. Get the actual svg icon from your designer or from the web. There are a lot of websites out there which offer free (always check the license though) svg icons. For this example, let's export an icon from [icomoon](https://icomoon.io/app/). It will look something like this:

    ```html
    <symbol id="icon-html-five" viewBox="0 0 32 32">
        <title>html-five</title>
        <path d="M1.892 0l2.567 28.801 11.524 3.199 11.554-3.204 2.572-28.796h-28.216zM25.336 26.963l-9.288 2.574v0.015l-0.024-0.007-0.024 0.007v-0.015l-9.288-2.574-2.195-24.609h23.015l-2.195 24.609zM20.336 16.569l-0.408 4.58-3.944 1.065-3.933-1.060-0.252-2.82h-3.547l0.495 5.547 7.252 2.006 7.229-2.006 0.97-10.844h-12.874l-0.322-3.617h13.517l0.316-3.532h-17.694l0.953 10.681z"></path>
    </symbol>
    ```

    We can almost use this 1:1. Just make sure to save some precious bytes by dropping the `<title>` element.

3. Add the svg icon to your svg spritesheet, by placing the `<symbol>` inside the `<svg>`. Your spritesheet should look something like this

    ```html
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="icon-html-five" viewBox="0 0 32 32">
            <path d="M1.892 0l2.567 28.801 11.524 3.199 11.554-3.204 2.572-28.796h-28.216zM25.336 26.963l-9.288 2.574v0.015l-0.024-0.007-0.024 0.007v-0.015l-9.288-2.574-2.195-24.609h23.015l-2.195 24.609zM20.336 16.569l-0.408 4.58-3.944 1.065-3.933-1.060-0.252-2.82h-3.547l0.495 5.547 7.252 2.006 7.229-2.006 0.97-10.844h-12.874l-0.322-3.617h13.517l0.316-3.532h-17.694l0.953 10.681z"></path>
        </symbol>
    </svg>
    ```

4. Done! Well almost... Your spritesheet is finished, but you can't see your icon yet. What's left is, to display it somewhere on your page. This is done via this neat little snippet:

    ```html
    <svg><use xlink:href="#icon-html-five" /></svg>
    ```

    And voilà... you should see your beautiful icon on your page. Now don't forget to add a width, height and some styling to your new and shiny icon. Oh, and if you have the same icons multiple times on your page, you can style them individually. 

## Result

So all in all your code can look something like the following snippet. Or you can view and edit [an example here](https://codepen.io/zlypher/pen/wqzMKE).

```html
<body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="icon-html-five" viewBox="0 0 32 32">
            <path d="M1.892 0l2.567 28.801 11.524 3.199 11.554-3.204 2.572-28.796h-28.216zM25.336 26.963l-9.288 2.574v0.015l-0.024-0.007-0.024 0.007v-0.015l-9.288-2.574-2.195-24.609h23.015l-2.195 24.609zM20.336 16.569l-0.408 4.58-3.944 1.065-3.933-1.060-0.252-2.82h-3.547l0.495 5.547 7.252 2.006 7.229-2.006 0.97-10.844h-12.874l-0.322-3.617h13.517l0.316-3.532h-17.694l0.953 10.681z"></path>
        </symbol>
    </svg>

    <div>
        Here comes my shiny icon:
        <svg width="16px" height="16px">
            <use xlink:href="#icon-html-five" />
        </svg>
    </div>
</body>
```

## Further Links

If you want to dive deeper into the topic I suggest to scan and read through the following links and experiment with SVGs yourself.

* [An Overview of SVG Sprite Creation Techniques](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/)
* [How to Implement Cross-Browser SVG Sprites](https://webdesign.tutsplus.com/tutorials/how-to-implement-cross-browser-svg-sprites--cms-22427)
* [How to Create and Manage SVG Sprites](https://www.webdesignerdepot.com/2017/05/how-to-create-and-manage-svg-sprites/)
* [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
* [SVG "symbol" a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)

## Things to keep in mind

* Positive: No additional roundtrip to fetch the icon image from the server
* Positive: Using the same icon multiple times is cost effective (space)
* Only add the icons you intend to use on the current site
* Negative: Additional code which won't be cached
