---
layout: doc
---

<div class="card">
    <div class="card-content">
        <h4>Http (Ajax) Helper Functions</h4>
        <p>
            The paypal checkout library comes bundled with a small HTTP library in order to make it easy to submit basic ajax calls. For the most up to date information look at the 
        </p>
        <ul class="collection">
            <li class="collection-item">window.paypal.request</li>
            <li class="collection-item"><a href="https://github.com/paypal/paypal-checkout/blob/master/src/lib/http.js">Source Code</a></li>
        </ul>
    </div>
    <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
            <li class="tab"><a class="active blue-text text-darken-1" href="#methods">Methods</a></li>
            <li class="tab"><a class="blue-text text-darken-1" href="#browsers">Browsers</a></li>
        </ul>
    </div>
    <div class="card-content grey lighten-4">
        <div id="methods">
            <table>
                <thead>
                    <tr>
                        <th>Example</th>
                        <th>Name</th>
                        <th>Products</th>
                        <th>Demo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>EC-XXXXXXXXXXX</td>
                        <td>Classic Express Checkout Token</td>
                        <td>Classic Express Checkout, PayFlow</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PAY-XXXXXXXXXXX</td>
                        <td>REST Payment Token</td>
                        <td>REST API, Braintree</td>
                        <td><a href="{{ site.baseurl }}/demos/rest/minimal">Demo</a></td>
                    </tr>
                    <tr>
                        <td>BA-XXXXXXXXXXX</td>
                        <td>Billing Agreement ID</td>
                        <td>REST API, Braintree, Classic Express Checkout</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="browsers">
            <p class="flow-text">
                This javascript library is compatible the following browsers
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Browser</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chrome</td>
                        <td>27+</td>
                    </tr>
                    <tr>
                        <td>IE</td>
                        <td>9+</td>
                    </tr>
                    <tr>
                        <td>Firefox</td>
                        <td>30+</td>
                    </tr>
                    <tr>
                        <td>Safari</td>
                        <td>5.1+</td>
                    </tr>
                    <tr>
                        <td>Opera</td>
                        <td>23+</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</div>























<div id="description" class="section scrollspy">
    
</div>

<div class="divider"></div>

<div id="options" class="section scrollspy">
    <h4>Options</h4>
    <p>
        The options for the Http library are located on the <a href="https://github.com/paypal/paypal-checkout/blob/master/src/lib/http.js#L5">RequestOptionsType</a> type.
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

<div class="divider"></div>

<div id="methods" class="section scrollspy">
    <h4>Methods</h4>
    <p>
        The paypal checkout library comes bundled with a small HTTP library in order to make it easy to submit basic ajax calls. For the most up to date information look at the <a href="https://github.com/paypal/paypal-checkout/blob/master/src/lib/http.js">source code</a>
    </p>

</div>

<div class="divider"></div>

<div id="get">
    <h5>get(url, options)</h5>
    <p>The get function performs an AJAX request with the GET method</p>
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
            <td>url</td>
            <td>string</td>
            <td>The URL of the GET endpoint you want to make an AJAX call to</td> 
            <td>true</td>
            <td>None</td>
        </tr>
        <tr>
            <td>options</td>
            <td>object</td>
            <td>Http configuration object</td>
            <td>false</td>
            <td><a href="#options">Http Options</a></td>
        </tr>
    </tbody>
    </table>
    <h6>Example</h6>
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

<div class="divider"></div>

<div id="post">
    <h5>post(url, data, options)</h5>
    <p>The post function performs an AJAX request with the POST method</p>
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
            <td>url</td>
            <td>string</td>
            <td>The URL of the POST endpoint you want to make an AJAX call to</td> 
            <td>true</td>
            <td>None</td>
        </tr>
        <tr>
            <td>data</td>
            <td>object</td>
            <td>A javascript object containing the data you want to POST to the url endpoint</td> 
            <td>true</td>
            <td>None</td>
        </tr>
        <tr>
            <td>options</td>
            <td>object</td>
            <td>Http configuration object</td>
            <td>false</td>
            <td><a href="#options">Http Options</a></td>
        </tr>
    </tbody>
    </table>
    <h6>Example</h6>
    <pre class="language-markup">
        <code class="language-markup">
var mydata = {
    id: '234',
    fname: 'okie',
    lname: 'dokie'
};

paypal
    .request
    .post('YOURURL', mydata)
    .then(function (data) {
        // data is the response from the ajax call
        console.log(data);
    });
        </code>
    </pre>
</div>