---
layout: iframe
---

<div class="card">
    <div class="card-content">
        <h4>All</h4>
        <ul class="collection">
            <li class="collection-item">window.paypal.Promise.all</li>
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
                        <td>promises</td>
                        <td>array</td>
                        <td>Array of promises</td>
                        <td>true</td>
                        <td>none</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="example">
            <pre class="language-markup">
                <code class="language-markup">
paypal
    .Promise
    .all([promise1, promise2])
    .then(function (promises) {
        // Promises is an array of all the resolved values
    });
                </code>
            </pre>
        </div>
    </div>
</div>