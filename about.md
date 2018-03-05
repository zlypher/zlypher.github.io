---
layout: page
title: Thomas Prochazka
description: Find more about me in my curriculum vitae
permalink: /about/
---

I am a Software Engineer working at [wikifolio.com](https://www.wikifolio.com){:target="_blank"}. We currently utilize Asp.Net MVC and other Frameworks/Libraries from the .Net ecosystem. I enjoy working on difficult problems and strive for Code Quality.

## Work Experience

<ul class="c-experience-list">
    {% assign workItems = site.experience | where:"education","0" | sort "order" | reverse %}
    {% for exp in workItems %}
        <li class="c-experience">
            <time class="c-experience__date">{{ exp.years }}</time>
            <div>
                <header class="c-experience__header">{{ exp.headline }}</header>
                <a class="c-experience__title" href="{{ exp.link }}" target="_blank">{{ exp.title }}</a>
                <div class="c-experience__content">{{ exp.notes }}</div>
            </div>
        </li>
    {% endfor %}
</ul>

## Education

<ul class="c-experience-list">
    {% assign educationItems = site.experience | where:"education","1" | sort "order" | reverse %}
    {% for exp in educationItems %}
        <li class="c-experience">
            <time class="c-experience__date">{{ exp.years }}</time>
            <div>
                <header class="c-experience__header">{{ exp.headline }}</header>
                <a class="c-experience__title" href="{{ exp.link }}" target="_blank">{{ exp.title }}</a>
                <div class="c-experience__content">{{ exp.notes }}</div>
            </div>
        </li>
    {% endfor %}
</ul>
