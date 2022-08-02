---
layout: post
title:  "Secure target=\"blank\" with rel=\"noopener noreferrer\""
description: Secure links with target=\"blank\"
date:   2017-11-14 20:11:00 +0200
---

If you are using links with `target="blank"` you might expose a vulnerability. The page you are linking to gains partial access to your tab via `window.opener`. However, there is a pretty simple workaround. You can prevent this by specifying `rel="noopener noreferrer` on your links. Even [Create React App](https://github.com/facebookincubator/create-react-app) emits a warning, if you forget to specify the `rel` attribute:

```bash
Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
```

There are actually a lot of blog posts going into great lengths explaining the details of this security vulnerability. So be sure to check them out. As a starting point, check out the [hacker news article from yesterday](https://news.ycombinator.com/item?id=15685324).

Read up on this topic:
* [Mathias Bynens: About rel=noopener](https://mathiasbynens.github.io/rel-noopener)
* [Alex Yumashev: Target="_blank" - the most underestimated vulnerability ever](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)
* [Browser Support for "noopener"](https://caniuse.com/#search=noopener)
* [MDN link documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)