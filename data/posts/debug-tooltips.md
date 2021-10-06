---
layout: post
title: How to debug those pesky tooltips
description: Every wondered how to debug those tooltips, that keep vanishing as soon as you try to inspect them?
date:   2018-12-06 21:24:00 +0100
---

Popular CSS frameworks like [Bootstrap](https://getbootstrap.com/) often include a functionality for tooltips. Those tooltips are controlled via JavaScript. They appear if you hover the element with the mouse cursor and vanish as soon as your mouse leaves the element. That might be a bit of a problem, if you want to customize the HTML/CSS of the tooltip and need to inspect the element. Since as soon as you try to inspect it, it is gone.

Today, I will show you two quick and easy ways (they are pretty similar though) to work around this issue.

## Utilizing setTimeout

The first solution has already been posted on [CSS Tricks as Timed Debugger](https://css-tricks.com/set-timed-debugger-web-inspect-hard-grab-elements/), but it is still worth repeating. What we want to do, is freeze any changes to the DOM, as long as we want to inspect it. You might have noticed it already, that happens when you place `debugger;` somewhere in your JS code or hit a breakpoint.

<blockquote class="c-quote" cite="https://css-tricks.com/set-timed-debugger-web-inspect-hard-grab-elements/">
A debugger; statement, when the DevTools are open, kinda freezes the DOM. No more events are fired and script excecution is completely paused.
<small class="c-quote__source">https://css-tricks.com/set-timed-debugger-web-inspect-hard-grab-elements/</small>
</blockquote>


We just need a way to delay it, so that we have a chance to open the tooltip. Luckily, this is quite easy with `setTimeout`:

```js
> setTimeout(() => { debugger; }, 3000)
```

This way, you have enough time to open the tooltip. As soon as the code executes, the `debugger;` statement is hit.

## Pause script execution

There is another way to trigger the same behaviour: You can use the shortcut for your dev tools to "pause script execution". For Google Chrome this happens to be `F8`. So hover over the desired element to open the tooltip, press `F8` and you are free to inspect the tooltip as you wish.

<figure>
    <img src="/assets/images/pause_script.png" alt="Pause script execution tooltip from Chrome DevTools">
    <figcaption class="c-caption">Pause script execution tooltip from Chrome DevTools</figcaption>
</figure>

## Conclusion

So both tricks work basically the same and are really easy to use. They both utilize the fact, that the DOM is frozen, as long as the JS execution is stopped on a breakpoint. So give it a try!

**Resources**
* [Bootstrap Tooltips](https://getbootstrap.com/docs/4.1/components/tooltips/)
* [Set a Timed Debugger To Web Inspect Hard-To-Grab Elements](https://css-tricks.com/set-timed-debugger-web-inspect-hard-grab-elements/)