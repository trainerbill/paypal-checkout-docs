---
layout: iframe
---

<div class="card">
    <div class="card-content">
        <h4>Get</h4>
        <ul class="collection">
            <li class="collection-item">window.paypal.request.get(url, options)</li>
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
                        <td>url</td>
                        <td>string</td>
                        <td>The URL to make the AJAX call</td>
                        <td>true</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>string</td>
                        <td>The URL to make the AJAX call</td>
                        <td>false</td>
                        <td><a href="/paypal-checkout/docs/http#options">Http Options</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="example">
            <pre class="language-markup">
                <code class="language-markup">
paypal
    .request
    .get('YOURURL')
    .then(function (data) {
        // data is the response from the ajax call
        console.log(data);
    });
                </code>
            </pre>
        </div>
    </div>
</div>