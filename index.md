---
layout: default
title: Software Engineering by Thomas Prochazka
description: Checkout my posts about various software engineering topics
---

<h2 class="c-front__subtitle">Latest Posts</h2>
{% for post in site.posts limit:3 %}
<section class="c-post c-post--front">
    <time class="c-post__date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B, %Y" }}</time>
    <h1 class="c-post__title">{{ post.title }}</h1>
    {{ post.excerpt }}
    <a href="{{ post.url }}">Read More</a>
</section>
{% endfor %}

<div>
    <a class="c-front__more" href="/posts">Browser through all posts</a>
</div>