---
layout: post
title: "git check-ignore: a helpful utility"
description: Find out who to use the git check-ignore utility
date:   2020-04-01 22:05:00 +0200
---

If you ever wondered, why you can't add a file to git that you just created, it is probably somewhere ignored in a `.gitignore` file. But from what file and through which rule exactly? Luckily, it is possible to check that with `git check-ignore`.

The usage is quite straight forward. You pass it the path to a file. The command outputs the path if it is ignored.

```sh
> git check-ignore <pathname>
> git check-ignore -v <pathname>
```

If you use the verbose option `-v`, the command will additionally output, the exclude pattern that matched the path as well as the `.gitignore` file and the exact line number.

```sh
> git check-ignore -v .vscode/settings.json
.gitignore:4:.vscode    .vscode/settings.json
```

**Resources**

* [Git - git-check-ignore Documentation](https://git-scm.com/docs/git-check-ignore)