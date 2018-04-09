---
layout: demos
hero: true
---

<div class="main-content">
    {% for demo in site.data.demos %}
    <div id="demos" class="section">
        <h2>{{ demo.title }}</h2>
        <p>{{ demo.description }}</p>
        {% if demo.documentation %}
        <a href="{{ demo.documentation }}" class="btn waves-effect waves-light">API Documentation
            <i class="material-icons right">pageview</i>
        </a>
        {% endif %}
        <div class="divider"></div>
            {% for child in demo.children %}
            <div id="{{ child.id }}" class="section">
                <h4>{{ child.title }}</h4>
                <p>
                    {{ child.description }}
                </p>
                <a href="/paypal-checkout-docs{{ child.link }}" class="btn waves-effect waves-light">Run Demo
                    <i class="material-icons right">send</i>
                </a>
            </div>
        {% endfor %}
    </div>
    {% endfor %}
</div>

