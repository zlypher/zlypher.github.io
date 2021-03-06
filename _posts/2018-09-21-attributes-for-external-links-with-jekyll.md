---
layout: post
title: Automatically add attributes for external links with Jekyll
description: Use jekyll-extlinks to automatically add attributes for external links with Jekyll
date:   2018-09-21 23:14:00 +0200
---

Some time ago, I wrote that one should add `rel="noopener noreferrer"` to external links. And as it so happens, I added this attribute manually for all external links on this blog created with Jekyll. All in all, quite tedious.

Today I was wondering, if there is a possibility to automatically add those attributes during the build process. Shouldn't be too difficult to implement, but it still would be neat to have a plugin readily available for such a functionality.

And sure enough, I found [d-ogarkov/jekyll-extlinks](https://github.com/d-ogarkov/jekyll-extlinks) which is easy enough to install and automatically adds the desired attributes to external links. The last update to the GitHub Repository may already be quite old, but the plugin works as expected. If you are looking for an alternative with more recent contributions, you could also take a look at [keithmifsud/jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank). It seems to be a bit more sophisticated, but also very easy to integrate.

**Resources**
* [Post about rel="noopener noreferrer"]({% link _posts/2017-11-14-secure-target-blank-with-noopener-noreferrer.md %})
* [d-ogarkov/jekyll-extlinks](https://github.com/d-ogarkov/jekyll-extlinks)
* [Alternative: keithmifsud/jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank)