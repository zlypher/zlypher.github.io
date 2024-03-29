---
layout: post
title:  "Deferred VWO and the white flash"
description: Deferred VWO will cause a white flash
date:   2017-10-28 18:14:00 +0100
---

A few days ago, one of our Testers found a strange behaviour on our website. The website loads initially, has its first paint and suddenly turns white for a fraction of a second and then displays everything correctly.

So let's see if we can find out, what's going on. First step: Clone current stable version locally and try to reproduce the problem. Thankfully, it occurs on the local machine as well. And just to make sure, the bug also occurs on other browsers than Chrome.

First general idea: Load the website, open dev tools and check the console. One message seems rather close to the occurence of the phenomenon:

```bash
GET https://dev.visualwebsiteoptimizer.com/j.php?a=52337&u=XXX&r=0.8674099101753603 net::ERR_BLOCKED_BY_CLIENT
```

Well [uBlock Origins](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=de) blocks the loading of [Visual Website Optimizer](https://vwo.com/), but that can't be the problem, right? Let's remove the line and check again. And sure enough, the white flash is gone...

As it turns out, in a previous attempt to make the site loading more efficient, the VWO snippet was extracted into a separate js file and loaded with the "defer" attribute.

By removing the "defer" attribute, everything seems the be working again whithout a white flash.

I'm not sure what the VWO script is doing, but everything seems to work fine for now. However, it would be interesting to dig deeper into the actual behaviour of the VWO script.