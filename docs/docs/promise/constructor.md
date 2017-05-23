---
layout: iframe
---

<div class="card">
    <div class="card-content">
        <h4>Constructor</h4>
        <ul class="collection">
            <li class="collection-item">new window.paypal.Promise(function (resolve, reject) {})</li>
        </ul>
    </div>
    <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
            <li class="tab"><a class="active blue-text text-darken-1" href="#arguments">Arguments</a></li>
            <li class="tab"><a class="blue-text text-darken-1" href="#example">Example</a></li>
        </ul>
    </div>
    <div class="card-content grey lighten-4">
        <div id="arguments">
            <table>
                <thead>
                    <tr>
                        <th>Argument</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Required</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>function</td>
                        <td>function</td>
                        <td>Constructor function that is given the resolve and reject methods.</td>
                        <td>true</td>
                        <td>none</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="example">
            <pre class="language-markup">
                <code class="language-markup">
var promise = new paypal.Promise(function (resolve, reject) {
    // Resolve or Reject the promise
});
                </code>
            </pre>
        </div>
    </div>
</div>