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
            <li class="tab"><a class="blue-text text-darken-1" href="#options">Options</a></li>
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
                        <td><a href="get">get(url: string, options: object)</a></td>
                        <td>The get function performs an AJAX request with the GET method</td>
                        <td>Promise&lt;object&gt;</td>
                    </tr>
                    <tr>
                        <td><a href="post">post(url: string, data: object, options: object)</a></td>
                        <td>The post function performs an AJAX request with the POST method</td>
                        <td>Promise&lt;object&gt;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="options">
            <p class="flow-text">
                The options for the Http library are located on the <a href="https://github.com/paypal/paypal-checkout-docs/blob/master/src/lib/http.js#L5">RequestOptionsType</a> type.
            </p>
            <pre class="language-markup">
                <code class="language-markup">
{
    url : string,
    method? : string,
    headers? : { [key : string] : string },
    json? : Object,
    data? : { [key : string] : string },
    body? : string,
    win? : any
}
                </code>
            </pre>
        </div>
    </div>
</div>