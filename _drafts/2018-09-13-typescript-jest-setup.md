---
layout: post
title: Setup project with TypeScript and Jest
description: How to setup a new project with TypeScript and Jest
date:   2018-09-13 22:04:00 +0200
---

TODO

By default, jest will only look for `.js` and `.jsx` files, so naturally our test run will fail:

```
No tests found
In E:\projects\dummy-project
  2 files checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)+(spec|test).js?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 2 matches
Pattern:  - 0 matches
```

...


```
  ● Test suite failed to run

    Cannot find module 'typescript'

      at Object.<anonymous> (node_modules/ts-jest/src/utils/get-ts-config.ts:2:1)
```

Of course, during install, npm already warned us, that the typescript package would be required:

```
npm WARN ts-jest@23.1.4 requires a peer of typescript@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
```

## Create a `tsconfig.json` file

Creating a `tsconfig.json` file is quite painless. You could either create one yourself and specify all your desired option, or let TypeScript create a default one for you. Therefore, you need to have TypeScript installed (for example globally) and run `tsc --init`.

```
> npm install -g typescript
> tsc --init
message TS6071: Successfully created a tsconfig.json file.
```

The created file will look something like this (truncated for brevity):

```
// tsconfig.json
{
    "compilerOptions": {
        /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
        "target": "es5",
        /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
        "module": "commonjs",
        /* Enable all strict type-checking options. */
        "strict": true,
    }
}
```

https://basarat.gitbooks.io/typescript/docs/testing/jest.html
https://stackoverflow.com/a/36917406/733368