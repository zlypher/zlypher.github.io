---
layout: post
title: TBD
description: TBD
date:   2018-09-20 22:08:00 +0200
---

NodeList -> no filter/map...
How to convert a NodeList to an array

let x = document.getElementsByClassName("container-fluid")
21:47:32.558 undefined
21:47:44.963 let y = document.querySelectorAll(".container-fluid")
21:47:44.972 undefined
21:47:46.668 x
21:52:38.177 HTMLCollection(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
21:47:47.617 y
21:47:47.620 NodeList(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
Array.from(x)
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
Array.from(y)
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
[...x]
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)
[...y]
(3) [div.container-fluid.module-item.module, div.container-fluid.module-item.module, div.container-fluid.module-item.module]
0: div.container-fluid.module-item.module
1: div.container-fluid.module-item.module
2: div.container-fluid.module-item.module
length: 3
__proto__: Array(0)

**Resources**
* [querySelectorAll MDN](https://developer.mozilla.org/de/docs/Web/API/Document/querySelectorAll)
* [NodeList](https://developer.mozilla.org/de/docs/Web/API/NodeList)
* [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [Spread Operator](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator)