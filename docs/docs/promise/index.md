---
layout: iframe
---

<div class="card">
    <div class="card-content">
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
    <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
            <li class="tab"><a class="active blue-text text-darken-1" href="#methods">Methods</a></li>
        </ul>
    </div>
    <div class="card-content grey lighten-4">
        <div id="methods">
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                        <th>Return</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="constructor">constructor(function(resolve, reject) {})</a></td>
                        <td>Creates a new promise</td>
                        <td>Promise&lt;any&gt;</td>
                    </tr>
                    <tr>
                        <td><a href="all">all(promises: [Promise])</a></td>
                        <td>This function is equivalent to the native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Promise.all()</a> method</td>
                        <td>Promise&lt;[any]&gt;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>