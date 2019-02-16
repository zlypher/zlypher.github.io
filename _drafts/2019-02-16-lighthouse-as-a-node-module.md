---
layout: post
title: Lighthouse as a node module
description: Learn how you can use and leverage lighthouse as a node module
date: 2019-02-16 22:27:00 +0200
---

https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically

```js
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
* [GoogleChrome/lighthouse GitHub Repository](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically)