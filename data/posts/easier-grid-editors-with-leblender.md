---
layout: post
title: Easier Grid Editors with LeBlender
description: LeBlender provides an easy interface to create complex Grid Editors for Umbraco
date: 2019-04-17 18:12:00 +0200
---

*Note: This article is aimed at developers working with Umbraco and requires intermediate knowledge.*

Creating complex layouts is a difficult task. Creating complex layouts and let content editors modify the layout is even more difficult. Luckily, Umbraco provides a special Property Editor exactly for this use case: [Grid Layout](https://our.umbraco.com/documentation/getting-started/backoffice/property-editors/built-in-property-editors/grid-layout).

## Grid Layout

Grid Layout gives the developers and content editors a lot of flexibility. The developers can configure the basic structure of the layout. They can define layouts for columns and rows as well as useable grid editors. The content editors can then create as many rows/columns as they like (within the predefined structure), and use the available grid editors. They can easily create, edit, order and remove those editors, giving them great flexibility in setting up pages and improving their workflow. While the default implementation of the Grid Layout is based on a Bootstrap grid, all views can easily be changed by developers to accommodate different requirements.

Umbraco ships with a few default grid editors out of the box (see [grid.editors.config.js](https://github.com/umbraco/Umbraco-CMS/blob/v8/dev/src/Umbraco.Web.UI.Client/src/config/grid.editors.config.js)). Those include elements like `Headline`, `Image`, `Rich text editor` and some more. With these basic elements you can already cover quite some use cases. However, you might want create more sophisticated components, which consist of multiple different properties. Luckily, this is also possible and that's where [LeBlender](https://our.umbraco.com/packages/backoffice-extensions/leblender/) comes into play.

## LeBlender

While it is certainly possible to [create your own custom grid editors from scratch](https://our.umbraco.com/documentation/getting-started/backoffice/property-editors/built-in-property-editors/grid-layout/Build-Your-Own-Editor), it is quite tedious and might take some time to get right. However, the Backoffice extension "LeBlender" enables a quick and easy way to configure complex custom grid editors.

<figure>
    <img src="/assets/images/leblender.png" alt="Backoffice view of LeBlender. It allows to create custom grid editors with multiple configurable properties">
    <figcaption class="c-caption">Backoffice view of LeBlender. It allows to create custom grid editors with multiple configurable properties</figcaption>
</figure>

While the custom grid editors can be configure via the backend, the developers has full control over the view logic of the custom editor. By default, LeBlender creates a razor view file which can be used to customize the rendering. It is also possible to define a Controller which gives you even more flexibility if you use a lot of custom logic inside your grid editor.

So if you are regularly working with Umbraco and are using Grid Layout (or thinking about using it), definitely check out LeBlender and give it a try. It is quite easy to get started with it and will save you a lot of time in the long run.

**Resources**
* [LeBlender Umbraco Extension](https://our.umbraco.com/packages/backoffice-extensions/leblender/)
* [Make your Umbraco Grid Layout smarter with LeBlender 1.0.0](http://lecoati.com/en/leblog/make-your-umbraco-grid-layout-smarter-with-leblender-100/)
* [Grid Layout documentation](https://our.umbraco.com/documentation/getting-started/backoffice/property-editors/built-in-property-editors/grid-layout)