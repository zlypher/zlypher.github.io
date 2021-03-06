---
layout: post
title: Use webpack aliases with TypeScript
description: Webpack aliases are not that straight forward with TypeScript. Find out here what you need to do.
date:   2020-02-04 20:11:00 +0100
---

If you work on a decently sized TypeScript application, chances are that your source directories are nested quite a bit and you will have various components which need to import something from completely different folders. So if you find yourself writing a lot of imports with `../../../`, then this tip might be helpful for you!

A useful tool in that case are import aliases. If you are using webpack these are part of the [Module Resolution](https://webpack.js.org/configuration/resolve/). [Justin Tulk wrote a great post](https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9) about import aliasing with webpack, VS Code and Jest, so be sure to check that one out!
