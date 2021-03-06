---
layout: post
title: CTRL+R is broken in VS Code
description: How to solve the problem, when CTRL+R shortcut is broken in VS Code
date: 2020-04-13 15:56:00 +0200
---

If you routinely work with VS Code you might be familiar with the `CTRL + R` shortcut. By default it is configured to open the "File: Open Recent..." window. This is especially handy, if you work on multiple projects in parallel and want to switch between them quickly.

However, this functionality broke for me recently, after reinstalling my notebook. As it turns out, the culprit was an extension: The `eg2.vscode-npm-script` extension which improves npm support for VS Code. So why did it break exactly? The extensions adds several new keyboard shortcuts. Some of them use chords including the `CTRL + R` keys. This stopped VS Code from accepting the `CTRL + R` shortcut, because it was waiting for the second part of a chord.

The authors of the extension (from Microsoft) recognized in hindsight, that [this was a mistake](https://github.com/Microsoft/vscode/issues/60711) and recommend [in their README](https://github.com/Microsoft/vscode-npm-scripts) to remap the shortcut for these commands.

Now it is up to you to decide, if it is worth to keep the extension and remap the shortcuts or to remove it altogether. In my opinion it offers some interesting functionality, but can safely be removed, since VS Code offers great support for npm out of the box.

**Resources**

- [vscode/issue #60711](https://github.com/Microsoft/vscode/issues/60711)
- [Microsoft/vscode-npm-scripts](https://github.com/Microsoft/vscode-npm-scripts)
