---
layout: default
title: Software Engineering by Thomas Prochazka
---

{% for post in site.posts limit:3 %}
<section class="c-post c-post--front">
    <h1 class="c-post__title">{{ post.title }}</h1>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}">Read More</a>
</section>
{% endfor %}