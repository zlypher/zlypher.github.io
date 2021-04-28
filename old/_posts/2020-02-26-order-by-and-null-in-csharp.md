---
layout: post
title: OrderBy and null in C#
description: An interesting observation concerning OrderBy and null interaction in C#
date:   2020-02-26 21:36:00 +0100
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

Normally, we would expect our `topEntries` to contain the Players "Player D", "Player A" and "Player B" with 1, 5 and 8 losses respectively. However, soon we realize, that actually "Player C" is the top player with his `Losses = null`. So if you ever have to sort by a nullable property, be sure to remember that `null` values are ordered first by default. In the example, a fix would be trivial by filtering out null values before ordering.

```c#
var topEntries = allEntries
    .Where(e => e.Losses != null)
    .OrderBy(e => e.Losses)
    .Take(3)
    .ToList();
```

## A deeper dive

How does that actually work internally? `OrderBy` uses an `IComparer` to compare entries and order them properly. It is possible to specify a custom implementation as the second argument for the `OrderBy` method. If no argument is provided, it will fall back to `Comparer<decimal?>.Default`. Since our type is nullable, this will be a `NullableComparer<decimal?>`. You can checkout the whole logic and implementation [on GitHub](https://github.com/microsoft/referencesource/blob/master/mscorlib/system/collections/generic/comparer.cs). The important part is the `Compare` method.

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

If you are unsure, what the return values of -1, 0 and +1 mean in that context, you can always refer to [the Documentation](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable?view=netframework-4.8). Basically, if the value is less than zero, "x" is ordered first. If the value is greater than zero, "y" is ordered first. So if we examine the `NullableComparer<T>::Compare` implementation, we get the following results:

* If "x" is **NOT NULL** and "y" is **NOT NULL** ➡ The smaller numeric value will be ordered first
* If "x" is **NOT NULL** and "y" is **NULL** ➡ "y" (null) is ordered first
* If "x" is **NULL** and "y" is **NOT NULL** ➡ "x" (null) is ordered first
* If "x" is **NULL** and "y" is **NULL** ➡ Both are null and don't need to be reordered.

And that is the explanation, why `null` values are ordered first. As you see, with Microsoft publishing a lot of their source code on GitHub, it is straight forward to find the implementation of Framework functionality and reason about it.

**Resources**

* [MSDN Enumerable.OrderBy documentation](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.orderby?view=netframework-4.8)
* [Comparer of T source code](https://github.com/microsoft/referencesource/blob/master/mscorlib/system/collections/generic/comparer.cs)
* [IComparable Interface documentation](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable?view=netframework-4.8)