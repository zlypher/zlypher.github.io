---
layout: post
title: Inspect the return value of a method in Visual Studio Debugger
description: Check out this useful tip on how the inspect the return value of a method in Visual Studio Debugger
date:   2020-03-30 21:36:00 +0200
---

There is a neat functionality in Visual Studio that is quite helpful while debugging .Net applications. While the functionality itself has been around for a while, I am not sure that everyone working with Visual Studio is aware of it. It is possible to inspect the returned value of a method immediately after it has returned.

Suppose you have a method like `Calc` in the following example. The result of the expression on line 10 is immediately returned. However, during debugging, you might want to inspect the return value before it is passed into another method on line 3.

```c#
static void Main(string[] args)
{
    SomeOtherCalc(Calc(1, 2));
    var foo = "";
    // ...
}

static int Calc(int a, int b)
{
    return a + b;
}

static void SomeOtherCalc(int c)
{
    // ...
}
```

Traditionally, you could temporarily introduce a local variable `result`, store the computation and return `result` afterwards. However, that would require you to rebuild the project and introduce temporary unnecessary code.

```
// Possible, but we try to avoid that
static int Calc(int a, int b)
{
    var result = a + b;
    return result;
}
```

Instead, you can add a breakpoint on your expression on line 10. Once hit, you "Step Out" of the method. This will place the debugger on the line, where the method has been called (line 3). Exactly at this point, you can now inspect the returned value either via the "Immediate Window" by typing `$ReturnValue` or via the "Autos" window, where the value will also be displayed.

<figure>
    <img src="/assets/images/returned_value.png" alt="Inspect the returned value with Visual Studio Debugger">
    <figcaption class="c-caption">Inspect the returned value with Visual Studio Debugger</figcaption>
</figure>

With this useful functionality, you can inspect the return values of methods more easily without actually modifying the source code. Take note, that you won't be able to inspect the return value anymore as soon as you move the debugger forward.

**Resources**

* [How to see the value returned by a method in Visual Studio Debugger?](http://www.malgreve.net/2014/01/21/how-to-see-the-value-returned-by-a-method-in-visual-studio-debugger/)