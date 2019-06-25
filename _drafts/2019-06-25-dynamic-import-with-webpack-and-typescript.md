---
layout: post
title: Dynamic Import with webpack and TypeScript
description: Dynamic imports with webpack and TypeScript are easier than you think
date:   2019-06-24 19:55:00 +0200
---

Dynamic imports are an awesome features, that enables you to keep your initial bundle small and only load additional functionality on demand. If you are using TypeScript and webpack, you can use this feature easily.

Webpack supports dynamic imports as a form of [Code Splitting](https://webpack.js.org/guides/code-splitting/) and will automatically create and load additional bundles for each dynamic import it encounters. TypeScript added "Dynamic Import Expressions" in [TypeScript 2.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html) and is well supported since then.

## Enable dynamic imports

There are [quite a lot](https://mariusschulz.com/blog/code-splitting-a-typescript-application-with-import-and-webpack) [of different](https://mariusschulz.com/blog/typescript-2-4-dynamic-import-expressions) [blog posts](https://davidea.st/articles/webpack-typescript-code-split-wont-work) that explain in great detail on how to enable dynamic imports with webpack and TypeScript.

The gist of it is, that you need to configure the TypeScript compiler to use `"esnext"` as a `module` target instead of `"commonjs"`. In theory, that is all you need to do.


```js
// tsconfig.json
{
    "compilerOptions": {
        ...
        // "module": "commonjs",
        "module": "esnext",
        ...
    }
}
```

## Some issues that might pop up

However, if you have a non-trivial application and depend on some specific external libraries, there might be some issues that you encounter.

For example, the resolution of some imported modules failed after the change. The problem was, that they were imported utilizing `index.ts` files to reexport multiple modules from a single folder. The resolve that, we specified `"moduleResolution"` to `"node"`, which restored the original behaviour.

Another issue that arose, was that some external dependencies had problems loading. We could solve that, by adding the following `"tsconfig.json` changes.


```js
// tsconfig.json
{
    "compilerOptions": {
        ...
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        ...
    }
}
```

And modify the problematic imports:

```js
// import * as moment from "moment";
import moment from "moment";
```

With those configuration and code changes, we were able to make dynamic imports work in our application.

**Resources**

* [Code Splitting](https://webpack.js.org/guides/code-splitting/)
* [Avoid this gotcha when code-splitting with TypeScript and Webpack](https://davidea.st/articles/webpack-typescript-code-split-wont-work)
* [TypeScript 2.4: Dynamic import() Expressions](https://mariusschulz.com/blog/typescript-2-4-dynamic-import-expressions)
* [Code-Splitting a TypeScript Application with import() and webpack](https://mariusschulz.com/blog/code-splitting-a-typescript-application-with-import-and-webpack)
* [TypeScript 2.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html)
