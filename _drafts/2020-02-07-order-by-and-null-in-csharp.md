---
layout: post
title: OrderBy and null in C#
description: An interesting observation concerning OrderBy and null interaction in C#
date:   2020-02-07 14:23:00 +0100
---

Recently, I came across an - at first glance - startling interaction between `OrderBy` and `null`. Suppose you have a list of players with their name and number of losses. Since it is a legacy implementation, new players "Losses" are initialized with `null`.

```c#
class Player {
    public string Name { get; set; }
    public decimal? Losses { get; set; }
}

var allEntries = new List<Player>
{
    new Player { Name = "Player A", Losses = 5 },
    new Player { Name = "Player B", Losses = 8 },
    new Player { Name = "Player C", Losses = null },
    new Player { Name = "Player D", Losses = 1 },
    new Player { Name = "Player F", Losses = 10 },
};
```

We want to get the top 3 players with the lowest number of losses to reward them. We can easily achieve that by using `OrderBy` and `Take`.

```c#
var topEntries = allEntries
    .OrderBy(e => e.Losses)
    .Take(3)
    .ToList();
```

Normally, we would expect our `topEntries` to contain the Players "Player D", "Player A" and "Player B" with 1, 5 and 8 losses respectively. However, soon we realize, that actually "Player C" is the top player with his `Losses = null`. So if you every have to sort by a nullable property, be sure to keep this behaviour in mind. In the example, a fix would be trivial by filtering out null values before ordering.

```c#
var topEntries = allEntries
    .Where(e => e.Losses != null)
    .OrderBy(e => e.Losses)
    .Take(3)
    .ToList();
```

## A deeper dive

TBD

```c#
// NullableComparer<T> implementation
public override int Compare(Nullable<T> x, Nullable<T> y) {
    if (x.HasValue) {
        if (y.HasValue) return x.value.CompareTo(y.value);
        return 1;
    }
    if (y.HasValue) return -1;
    return 0;
}
```

TBD

**Resources**

* [MSDN Enumerable.OrderBy documentation](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.orderby?view=netframework-4.8)
* [Comparer of T source code](https://github.com/microsoft/referencesource/blob/master/mscorlib/system/collections/generic/comparer.cs)
* [IComparable Interface documentation](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable?view=netframework-4.8)