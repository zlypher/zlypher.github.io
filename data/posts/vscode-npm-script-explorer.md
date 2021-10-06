---
layout: post
title: Easily run NPM scripts from VS Code with the NPM Script Explorer
description: Learn how to easily run NPM scripts from VS Code with the NPM Script Explorer
date:   2019-06-25 19:27:00 +0200
---

If you are looking for a quick way, to execute NPM scripts from within VS Code, this tip is for you! There is a neat little feature included in VS Code, that is quite useful but disabled by default. The "NPM Script Explorer". It simply displays all available scripts from your `package.json` and makes them executable via a button click.

<figure>
    <img src="/assets/images/npm_scripts_explorer.png" alt="Example view of NPM Scripts explorer in VS Code">
    <figcaption class="c-caption">Example view of NPM Scripts explorer in VS Code</figcaption>
</figure>

To enable the NPM Script Explorer, go to VS Code Settings (`File > Preferences > Settings`). Search for "npm.enableScriptExplorer" and enable the setting "Npm: Enable Script Explorer". That's all there is to it. Now you can simply execute them, by clicking on the corresponding play button.
