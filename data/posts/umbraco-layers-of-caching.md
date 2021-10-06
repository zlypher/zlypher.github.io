---
layout: post
title: "Umbraco: Layers of Caching"
description: How to make sense of caching in Umbraco
date:   2018-11-21 20:00:00 +0100
---

[Umbraco](https://umbraco.com/products/umbraco-cms/) is a widely used ASP.NET CMS. If you worked with Umbraco for some time, you might have noticed, that there are various layers of caching and it can be confusing where data is stored.

So Umbraco has four layers, where data is stored or cached:
1. Database table `[dbo].[cmsPropertyData]`
2. Database table `[dbo].[cmsContentXml]`
3. XML file `App_Data/umbraco.config`
4. In-Memory cache



## cmsPropertyData

The `[dbo].[cmsPropertyData]` table resides in the umbraco database. It holds all data stored in the properties of all your nodes. Take note, that all previous versions are stored as well. So if you change something in the backend, it will be reflected in this table. However, this table is not actually used for the frontend. You want to take a look at `[dbo].[cmsContentXml]` for that.

## cmsContentXml

Once you publish a node, Umbraco gathers all the information for this node, and stores it as a XML structure in the `[dbo].[cmsContentXml]` table. So you will have on entry per node with its node id and all of its data. This might be the source for the data in your application, but it also might be the `umbraco.config`.

## umbraco.config

The `umbraco.config` is basically the same as the `[dbo].[cmsContentXml]` but stored as a file on disk. By default, this file is created and used to reduce the load on the database. However, this can be disabled via a `Web.config` entry.

## Conclusion

So this was a short introduction of the different layers of Umbraco. You might not encounter it in your day to day work, but if you need to change something directly in the database, it might be good to have an idea where the data might be cached.

**Resources**
* [Umbraco CMS](https://umbraco.com/products/umbraco-cms/)
* [Umbraco CMS - GitHub Repository](https://github.com/umbraco/Umbraco-CMS)