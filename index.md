---
layout: default
title: Test Title
---

<section>
    <h2>Latest Article</h2>
    <h3>{{ site.posts.first.title }}</h3>
    <p>{{ site.posts.first.excerpt }}</p>
    <a href="{{ site.posts.first.url }}">Read More</a>
</section>

<section class="c-more-posts">
    <h2 class="c-more-posts__headline">More Articles</h2>
    <ul class="c-more-posts__list">
        {% for post in site.posts offset:1 limit:3 %}
            <li class="c-more-posts__list-item">
                <a href="{{ post.url }}">{{ post.title }}</a>
                <p>{{ post.excerpt }}</p>
            </li>
        {% endfor %}
    </ul>
</section>