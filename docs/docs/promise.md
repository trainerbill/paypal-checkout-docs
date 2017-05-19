---
layout: sidenav
---

<div id="description" class="section scrollspy">
    <h4>Promise</h4>
    <p>
        Since most browsers do not support native promises and some promise libraries may break functionality in our library, we are provided a way to use promises that are compatible
        with our library.
    </p>
    <ul class="collection">
        <li class="collection-item">window.paypal.Promise</li>
        <li class="collection-item"><a href="https://github.com/krakenjs/sync-browser-mocks">Source Code</a></li>
    </ul>
</div>

<div class="divider"></div>

<div id="methods" class="section scrollspy">
    <h4>Methods</h4>
</div>

<div class="divider"></div>

<div id="constructor">
    <h5>constructor(function)</h5>
    <p>This is same as the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">native promise constructor</a></p>
    <h6>Arguments</h6>
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>function(resolve, reject) {}</td>
            <td>function</td>
            <td>function with resolve and reject arguments</td> 
            <td>true</td>
            <td>None</td>
        </tr>
    </tbody>
    </table>
    <h6>Example</h6>
    <pre class="language-markup">
        <code class="language-markup">
var promise = new paypal.Promise(function (resolve, reject) {
    // Resolve or Reject the promise
});
        </code>
    </pre>
</div>

<div class="divider"></div>

<div id="all">
    <h5>all(promises)</h5>
    <p>This function is equivalent to the native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Promise.all()</a> method</p>
    <h6>Arguments</h6>
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>promises</td>
            <td>array</td>
            <td>an array of promises</td> 
            <td>true</td>
            <td>None</td>
        </tr>
    </tbody>
    </table>
    <h6>Return</h6>
    <p>A new promise that is resolved when all the argument promises have been resolved</p>
    <h6>Example</h6>
    <pre class="language-markup">
        <code class="language-markup">
paypal
    .Promise
    .all([promise1, promise2])
    .then(function (promises) {
        // Promises is an array of all the resolved values
    })
        </code>
    </pre>
</div>

