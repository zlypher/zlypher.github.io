---
layout: page
title: Projects and Work
permalink: /projects/
---

## Projects during Employment

<ul class="c-projectlist">
    {% for project in site.projects %}
        <li>
            <article class="c-projectcard">
                <img class="c-projectcard__banner" src="http://via.placeholder.com/350x150" />
                <h3 class="c-projectcard__title">{{ project.title }}</h3>
                <p class="c-projectcard__desc">{{ project.description }}</p>
            </article>
        </li>
    {% endfor %}
</ul>