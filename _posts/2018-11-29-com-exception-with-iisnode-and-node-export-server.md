---
layout: post
title: COM Exception with IISNode and node-export-server
description: Find out where these SetProcessDpiAwareness exception in node-export-server are coming from
date:   2018-11-29 12:46:00 +0100
---

## The Problem

For our web application, we use Highcharts to render beautiful charts. Some charts are reused multiple times across the website, so we decided to prerender them via [highcharts/node-export-server](https://github.com/highcharts/node-export-server). Due to operational reasons, it is hosted inside a Windows Service via [Azure/iisnode](https://github.com/Azure/iisnode). This process works reasonably well. However, we noticed, that there are errors logged, although the charts seem to be rendered just fine:

```
[error] phantom worker 2 error - SetProcessDpiAwareness failed: "COM error 0x80070005  (Unknown error 0x0ffffffff80070005)"
```

## Investigation of the Error

Naturally, we wanted to find the cause of this error, if there are some issues we should be aware of and if there is anything we could do to avoid it.

A quick search reveals, that there are quite some GitHub repositories, that experience similar issues. In the end, most of them refer to an issue in PhantomJS. The most prominent discussion is in the [issue #14095](https://github.com/ariya/phantomjs/issues/14095). If you don't know: "PhantomJS (phantomjs.org) is a headless WebKit scriptable with JavaScript." (from Phantom JS README). Incidentally, it is used by the Highcharts Node.js Export Server to render the charts. And unfortunately, this issue occurs, if PhantomJS is run from a service in Windows. Which happens to be just what we are doing.

## Resolving the Error

### Pass flag to PhantomJS

However, there seems to be a way around this issue. According the issue, it is possible to pass `-platform windows:dpiawareness=0` to PhantomJS. So can we actually configure this, since the phantomjs process is spawned by the node-export-server? The actual call happens in `phantompool.js`:

```js
// https://github.com/highcharts/node-export-server/blob/2.0.16/lib/phantompool.js
worker.process = phantomjs.exec(settings.worker, (__dirname + '/../'));
```

There is no way to configure additional options, so we are out of luck here.

### Windows Registry

There seems to be some additional way to work around this issue via the Windows Registry or Windows Policies, but I wasn't able to find out the specifics. If you have more luck on this front, please let me know.

### Fork node-export-server

Another possibility would be to fork the node-export-server repository on GitHub and implement the desired functionality. However, this would cause additional overhead and it seems unlikely, that this would be merged back into the main repository. Since it seems that the engineers from Highcharts are thinking about moving to a different headless browser like Chrome (with its rather new headless mode). However, there doesn't seem to be a clear path or timeline yet. Follow the [issue #57 on GitHub](https://github.com/highcharts/node-export-server/issues/57) for further updates.

## Result

In the end, we decided to live with these errors for now, as there doesn't seem to be any problem with the chart generation itself. Workarounds would require further development and testing resources which are currently not available.

**Resources**
* [node-export-server Repository](https://github.com/highcharts/node-export-server)
* [iisnode Repository](https://github.com/Azure/iisnode)
* [PhantomJS Repository](https://github.com/ariya/phantomjs)
