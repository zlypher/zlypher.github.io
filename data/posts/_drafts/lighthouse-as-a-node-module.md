---
layout: post
title: Lighthouse as a node module
description: Learn how you can use and leverage lighthouse as a node module
date: 2019-02-16 22:27:00 +0200
---

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is a popular tool to identify various website's performance, SEO and accessibility issues. It started as a simple chrome extension. In the mean time, it has been added to Chrome DevTools under the "Audit" pane. It is quite handy for ad-hoc analysis of single pages. However, if you want to set up a continuous monitoring process for your website, a manual interaction for each page is not reasonable.

*There are various services, that offer this kind of continues monitoring of lighthouse metrics. If you are looking for a quick and reliable setup, be sure to give them a try. The rest of the article assumes, that you want to setup this process yourself to have full control.*

https://developers.google.com/web/tools/lighthouse/

https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically

```js
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

async function launchChromeAndRunLighthouse(url, opts, config = null) {
    const chrome = await chromeLauncher.launch({
        chromeFlags: opts.chromeFlags
    });

    opts.port = chrome.port;
    const results = await lighthouse(url, opts, config);
    await chrome.kill();
    return results.lhr;
}
```

**Resources**
* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [GoogleChrome/lighthouse GitHub Repository](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically)
* [web.dev Measure](https://web.dev/measure)
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)