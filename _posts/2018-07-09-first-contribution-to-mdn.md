---
layout: post
title: My first contribution to MDN
description: Follow the journey to my first contribution to MDN
date:   2018-07-09 19:30:00 +0200
---

The [MDN (Mozilla Developer Network) web docs](https://developer.mozilla.org/en-US/){:target="_blank" rel="noopener noreferer"} are an awesome resource for every web developer. 

So naturally I regularly use MDN to check possible attributes, how an element can be used or on what browsers it is supported. While working on a small side project, I noticed, that the compatibility table of the `input[type=color]` element shows quite some browsers as "Compatibility unknown". Amongst others Edge. Since I already had a basic example of the input element available and I am working on a Windows machine I tried the example with Edge and sure enough, everything worked just fine.

That's when I decided to try and improve MDN by contributing a small fix. But where to start? Luckily, each page has a big edit button at the top and works just like most other wikis. However, before you can edit a page, you need to sign in to your MDN profile. If you don't have one, you can sign in with GitHub and a MDN profile will automatically be created.

After signing in and editing a page, you will see a huge RichText editor. The browser compatibility table is normally at the very bottom, but when you scroll there you will find a message along those lines:

<img src="/assets/images/mdn_edit_compatibility.png" alt="Note on Edit for the compatibility table">

So the browser compatibility data is actually managed in a separate [git repository on GitHub](https://github.com/mdn/browser-compat-data){:target="_blank" rel="noopener noreferer"}. So let's head over to GitHub and check it out. The repository is quite nicely structured and really well documented. The [README.md](https://github.com/mdn/browser-compat-data/blob/master/README.md){:target="_blank" rel="noopener noreferer"} describes the structure of the repository and the [CONTRIBUTING.md](CONTRIBUTING.md){:target="_blank" rel="noopener noreferer"} explains what you should be aware of if you want to contribute.

So I quickly browser through the open Pull Requests, but I didn't find anything for my specific issue. Great! So let's find out where we can make the necessary changes. And sure enough, we find the file `/html/elements/input/color.json` which contains the exact data we want to modify.

The JSON structure is pretty straight forward. It contains an entry for each browser:

```json
{
    "support": {
        "chrome": {
            "version_added": "20"
        },
        "chrome_android": {
            "version_added": null
        },
        "edge": {
            "version_added": null
        },
        "edge_mobile": {
            "version_added": null
        }
    }
}
```

The `version_added` property can have four different states:
* **string**: The exact version when a browser started supporting the element/attribute
* **null**: The compatibility is unknown
* **true**: The browser supports it, but the exact version is unknown
* **false**: The browser doesn't support it

Okay so what shall we enter? `true`? That would be possible, but it would be neat if we know the actual version. Well, [caniuse.com](https://caniuse.com/#feat=input-color){:target="_blank" rel="noopener noreferer"} thinks that it is supported since version 14 and sure enough, we find a [Microsoft support ticket](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6514216--input-type-color){:target="_blank" rel="noopener noreferer"} with an official response stating that it is indeed shipped since EdgeHTML 14.

So what is there left to do? We simply fork the repository, edit the `color.json` file and enter `"14"` as the `version_added` for `edge` and `edge_mobile` and create the pull request. To ease the pain for the reviewers, we provide the link to the microsoft support ticket.

And voilà, we are finished. And not even 24 hours later, the pull request was successfully merged without any problems!

So it is actually quite easy to contribute to most of the online developer resources these days. If you haven't tried it, I encourage you to take a look. Small patches and updates like this make the resource a little bit better and more valuable step by step!

Read up on this topic:

* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web){:target="_blank" rel="noopener noreferer"}
* [MDN web docs contribution guide](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Editor){:target="_blank" rel="noopener noreferer"}
* [MDN browser compatibility repository](https://github.com/mdn/browser-compat-data){:target="_blank" rel="noopener noreferer"}
* [My first PR to the compatibility repository](https://github.com/mdn/browser-compat-data/pull/2434){:target="_blank" rel="noopener noreferer"}