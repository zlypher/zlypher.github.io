---
layout: post
title: "Misconception: Task.FromResult VS Task.Run"
description: How is Task.FromResult different then Task.Run?
date:   2019-09-10 21:21:00 +0200
---

Lorem Ipsum


```c#
public async Task Run()
{
    Console.WriteLine("Start");

    var t1 = Task.FromResult(LongRunningMethod(5000));
    Console.WriteLine("After 5000");
    var t2 = Task.FromResult(LongRunningMethod(3000));
    Console.WriteLine("After 3000");
    var t3 = Task.FromResult(LongRunningMethod(1000));
    Console.WriteLine("After 1000");

    await Task.WhenAll(t1, t2, t3);
    Console.WriteLine("After All");

    Console.WriteLine("End");
}

public bool LongRunningMethod(int milliseconds)
{
    Thread.Sleep(milliseconds);
    Console.WriteLine($"Long running finished: {milliseconds}");
    return true;
}
```
Lorem Ipsum

```sh
# Output
> Start
> Long running finished: 5000
> After 5000
> Long running finished: 3000
> After 3000
> Long running finished: 1000
> After 1000
> After All
> End
```

Lorem Ipsum


```c#
public async Task Run()
{
    Console.WriteLine("Start");

    var t1 = Task.Run(() => LongRunningMethod(5000));
    Console.WriteLine("After 5000");
    var t2 = Task.Run(() => LongRunningMethod(3000));
    Console.WriteLine("After 3000");
    var t3 = Task.Run(() => LongRunningMethod(1000));
    Console.WriteLine("After 1000");

    await Task.WhenAll(t1, t2, t3);
    Console.WriteLine("After All");

    Console.WriteLine("End");
}

public bool LongRunningMethod(int milliseconds)
{
    Thread.Sleep(milliseconds);
    Console.WriteLine($"Long running finished: {milliseconds}");
    return true;
}
```

Lorem Ipsum
```sh
# Output
> Start
> After 5000
> After 3000
> After 1000
> Long running finished: 1000
> Long running finished: 3000
> Long running finished: 5000
> After All
> End
```


Lorem Ipsum