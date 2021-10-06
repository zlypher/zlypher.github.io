---
layout: post
title: Git Hooks with Husky and Lint-Staged
description: Supercharges your Git Hooks by combining Husky and Lint-Staged
date:   2018-12-06 22:08:00 +0200
---



$ npm install --save-dev husky lint-staged



kein git repo:

$ npm install --save-dev husky lint-staged

> husky@4.2.1 install C:\projects\_test\husky-demo\node_modules\husky
> node husky install

husky > Setting up git hooks
fatal: not a git repository (or any of the parent directories): .git
husky > Failed to install

> husky@4.2.1 postinstall C:\projects\_test\husky-demo\node_modules\husky
> opencollective-postinstall || exit 0

Thank you for using husky!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/husky/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN husky-demo@1.0.0 No description
npm WARN husky-demo@1.0.0 No repository field.

+ husky@4.2.1
+ lint-staged@10.0.7
added 144 packages from 69 contributors and audited 208 packages in 31.397s
found 0 vulnerabilities



with git init

Thomas@DESKTOP-IMM4RDO MINGW64 /c/projects/_test/husky-demo
$ git init
Initialized empty Git repository in C:/projects/_test/husky-demo/.git/

Thomas@DESKTOP-IMM4RDO MINGW64 /c/projects/_test/husky-demo (master)
$ npm install --save-dev husky lint-staged

> husky@4.2.1 preuninstall C:\projects\_test\husky-demo\node_modules\husky
> node husky uninstall

husky > Uninstalling git hooks
ENOENT: no such file or directory, unlink 'C:\projects\_test\husky-demo\.git\hooks\husky.local.sh'
husky > Failed to uninstall

> husky@4.2.1 install C:\projects\_test\husky-demo\node_modules\husky
> node husky install

husky > Setting up git hooks
husky > Done

> husky@4.2.1 postinstall C:\projects\_test\husky-demo\node_modules\husky
> opencollective-postinstall || exit 0

Thank you for using husky!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/husky/donate

npm WARN husky-demo@1.0.0 No description
npm WARN husky-demo@1.0.0 No repository field.

+ lint-staged@10.0.7
+ husky@4.2.1
updated 2 packages and audited 208 packages in 5.673s
found 0 vulnerabilities


The fastest way to start using lint-staged is to run following command in your terminal:

npx mrm lint-staged

**Resources**
* [typicode/husky GitHub](https://github.com/typicode/husky)
* [okonet/lint-staged](https://github.com/okonet/lint-staged)