---
layout: post
title: Failed to load next.config.js in GitHub Action
description: What to do in case you encounter this problem?
date: 2022-02-18 12:00:00 +0200
---

Recently I updated my blog to the latest [Next.js 12.1](https://nextjs.org/blog/next-12-1), which has been released recently. Locally, running `next build` still worked fine. However, my GitHub Actions started to fail with the message "Failed to load next.config.js".

![Error output saying: Failed to load next.config.js](/assets/images/failed-to-load-next-config-js.png)

After searching and finding [this issue on GitHub](https://github.com/colbyfayock/next-wordpress-starter/issues/274), it was clear that there seemed to be an issue with the Node version, as [Next.js requires at least Node.js 12.22.0 or later](https://nextjs.org/docs/getting-started#system-requirements). Luckily, the [setup-node action](https://github.com/actions/setup-node), provides the possibility to specify the node-version which should be used. By default it uses the node version from PATH. This was `v10.24.1` in my case.

I could resolve my issue by specifying at least a fixed major version like that:

```
- name: Install and Build
  uses: actions/setup-node@v2
  with:
    node-version: "16"
```
