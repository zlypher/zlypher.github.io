---
layout: page
title: Projects and Work
permalink: /projects/
---

<ul class="c-projectlist">
    {% for project in site.projects %}
        <li>
            <a class="c-projectcard" href="{{ project.webUrl }}" target="_blank">
                <div class="c-projectcard__banner">
                    <img class="c-projectcard__banner-image" src="{{ project.bannerUrl }}" alt="{{ project.bannerAlt }}" />
                </div>
                <h3 class="c-projectcard__title">{{ project.title }}</h3>
            </a>
        </li>
    {% endfor %}
</ul>