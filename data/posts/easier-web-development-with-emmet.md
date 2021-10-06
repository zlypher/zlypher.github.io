---
layout: post
title: Easier Web Development with Emmet
description: Emmet — the essential toolkit for web-developers
date:   2018-06-15 21:58:00 +0100
---

If you are a web developer or often find yourself writing lots of HTML, XML, JSX and CSS, then this post is for you! Today I'd like to introduce you to a very useful tool for writing lot's of boilerplate HTML: [Emmet](https://emmet.io/){:target="_blank" rel="noopener noreferer"}

Probably almost everyone feels the same way... writing lots of HTML or CSS is rather boring, repetetive and error prone. Some editors automatically close html tags, but that's mostly it. This is where Emmet comes into play. It defines a css like syntax which expands to actual valid HTML structure or CSS properties.

So let's not waste any time and give you an example. The following abbreviation demonstrates the basic features of Emmet.

```text
section>.hello>p{World}
```

This snippet will expand to the following HTML structure:

```html
<section>
    <div class="hello">
        <p>World</p>
    </div>
</section>
```

Pretty neat, huh? If you have ever written some css, the snippet should be pretty self explanatory. You can create children with `>`, names prefixed with a `.` will add a class to the element and `{}` let's you specify some actual text content. Everything that is not recognized as a special snippet will be rendered as a tag name. Check out the [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/){:target="_blank" rel="noopener noreferer"} for lot's of different possibilites to use and combine different snippets!

One more neat trick combines multiplication with item numbering. So if you want to create a list with 5 elements, numbered from 1 to 5, this would be trivial with emmet:

```text
ul>li*5{$}
```

And zack, it will output:

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

That is so sweet and will reduce the time to write stuff like that quite a bit! And another great thing: Emmet works for JSX as well! So don't worry about the `class` attributes. If you are inside a JSX context, Emmet will automatically create `className` isntead. Oh, and there is also a resolver for CSS snippets. So you can quickly specify properties without having to type out the whole line. See some nifty examples below:

```css
.test {
    /* pos:r */
    position: relative;
    /* d:f */
    display: flex;
    /* pt40px */
    padding-top: 40px;
    /* ml2e */
    margin-left: 2em;
}

/* @m */
@media screen {
    
}
```

There are tons of different options for almost all css properties available (even helpers to automatically create browser prefixes). So definitely checkout the docs from emmet, which are really comprehensive.

If you are wondering how to actually use it, don't worry... most of the modern text editors and IDEs have extensions for Emmet readily available or even built in (VSCode!). [Browse through the download section of Emmet](https://emmet.io/download/){:target="_blank" rel="noopener noreferer"}, if you are not sure about your editor. Even online services like CodePen or JSFiddle support emmet abbrviations out of the box.

It might take a bit to get used to it, but it will definitely speed up your development process in the long run. Give it a try and spread the word if you found it useful!

Check out Emmet here:
* [Emmet Website](https://emmet.io/){:target="_blank" rel="noopener noreferer"}
* [Emmet GitHub](https://github.com/emmetio){:target="_blank" rel="noopener noreferer"}
* [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/){:target="_blank" rel="noopener noreferer"}