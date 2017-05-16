---
layout: hero
title: A JavaScript library for integrating with PayPal Checkout
id: home
---

<section class="light home-section">
  <div class="marketing-row">
    <div class="marketing-col">
      <h3>Declarative</h3>
      <p>The PayPal Checkout library</p>
      <p>Declarative views make your code more predictable and easier to debug.</p>
    </div>
    <div class="marketing-col">
      <h3>Built with xComponent</h3>
      <p>The PayPal Checkout library is built with <a href="https://github.com/krakenjs/xcomponent">xComponent</a> to allow cross origin communication between your site and PayPal.</p>
      <p>All PayPal functionality is sandboxed into iframes.</p>
    </div>
    <div class="marketing-col">
      <h3>Another One</h3>
      <p>test</p>
      <p>test</p>
    </div>
  </div>
</section>
<hr class="home-divider" />
<section class="home-section">
  <div id="examples">
    <div class="example">
      <h3>A Simple Component</h3>
      <p>
        React components implement a `render()` method that takes input data and
        returns what to display. This example uses an XML-like syntax called
        JSX. Input data that is passed into the component can be accessed by
        `render()` via `this.props`.
      </p>
      <p>
        <strong>JSX is optional and not required to use React.</strong> Try
        clicking on "Compiled JS" to see the raw JavaScript code produced by
        the JSX compiler.
      </p>
      <div id="helloExample"></div>
    </div>
    <div class="example">
      <h3>A Stateful Component</h3>
      <p>
        In addition to taking input data (accessed via `this.props`), a
        component can maintain internal state data (accessed via `this.state`).
        When a component's state data changes, the rendered markup will be
        updated by re-invoking `render()`.
      </p>
      <div id="timerExample"></div>
    </div>
    <div class="example">
      <h3>An Application</h3>
      <p>
        Using `props` and `state`, we can put together a small Todo application.
        This example uses `state` to track the current list of items as well as
        the text that the user has entered. Although event handlers appear to be
        rendered inline, they will be collected and implemented using event
        delegation.
      </p>
      <div id="todoExample"></div>
    </div>
    <div class="example">
      <h3>A Component Using External Plugins</h3>
      <p>
        React is flexible and provides hooks that allow you to interface with
        other libraries and frameworks. This example uses **remarkable**, an
        external Markdown library, to convert the textarea's value in real time.
      </p>
      <div id="markdownExample"></div>
    </div>
  </div>
  <script src="https://unpkg.com/remarkable@1.7.1/dist/remarkable.min.js"></script>
  <script src="/react/js/examples/hello.js"></script>
  <script src="/react/js/examples/timer.js"></script>
  <script src="/react/js/examples/todo.js"></script>
  <script src="/react/js/examples/markdown.js"></script>
</section>
<hr class="home-divider" />
<section class="home-bottom-section">
  <div class="buttons-unit">
    <a href="docs/hello-world.html" class="button">Get Started</a>
    <a href="tutorial/tutorial.html" class="button">Take the Tutorial</a>
  </div>
</section>