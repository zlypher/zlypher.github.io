---
layout: default
title: Software Engineering by Thomas Prochazka
description: Checkout my posts about various software engineering topics
---

{% for post in site.posts %}
<section class="c-post c-post--front">
    <time class="c-post__date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B, %Y" }}</time>
    <h1 class="c-post__title"><a href="{{ post.url }}">{{ post.title }}</a></h1>
</section>
{% endfor %}
