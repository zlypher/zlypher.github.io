---
layout: post
title: Git Hooks with Husky and Lint-Staged
description: Supercharges your Git Hooks by combining Husky and Lint-Staged
date:   2018-12-06 22:08:00 +0200
---

Husky Lint Staged -> git commit hooks -> TSLint

https://github.com/typicode/husky

```
// .huskyrc
{
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

https://github.com/okonet/lint-staged

```
// .lintstagedrc
{
    "linters": {
        "*.{ts,tsx}": ["tslint", "jest --findRelatedTests"],
        "*.less": "stylelint"
    },
    "ignore": [
        "**/umbraco/**",
    ]
}
```

**Resources**
* [typicode/husky GitHub](https://github.com/typicode/husky)
* [okonet/lint-staged](https://github.com/okonet/lint-staged)