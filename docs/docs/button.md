---
layout: doc
---

<div id="description" class="section scrollspy">
    <h4>PayPal Button</h4>
    <p>
        In order to place a PayPal checkout button in your application you must use the Button component.  The Button component is an <a href="https://github.com/krakenjs/xcomponent">xcomponent</a> used to communciate between
        a merchants site and paypal.com.
    </p>
    <ul class="collection">
        <li class="collection-item">window.paypal.Button</li>
        <li class="collection-item"><a href="https://github.com/paypal/paypal-checkout/blob/master/src/lib/http.js">Source Code</a></li>
    </ul>
</div>

<div class="divider"></div>

<div id="methods" class="section scrollspy">
    <h4>Methods</h4>
    <p>
        The following methods are avaliable on the Button component.
    </p>
</div>

<div class="divider"></div>

<div id="renderget">
    <h5>render(options, container)</h5>
    <p>The render method creates an iframe containing the PayPal button and renders it on the page.</p>
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
            <td>options</td>
            <td>object</td>
            <td>Any of the Button component options</td> 
            <td>true</td>
            <td>None</td>
        </tr>
        <tr>
            <td>container</td>
            <td>string of DOM id starting with '#' or HTMLElement type</td>
            <td>Where the PayPal button should render</td>
            <td>true</td>
            <td>None</td>
        </tr>
    </tbody>
    </table>
</div>

<div class="divider"></div>

<div id="options" class="section scrollspy">
    <h4>Options</h4>
    <p>
        The following options can be used with the button component.
    </p>
    
</div>

<div class="divider"></div>

<div id="example" class="section scrollspy">
    <h4>Example</h4>
    <p>
        For a complete example using the API's of your choosing, please refer to our <a href="/paypal-checkout/demos">demos</a>
    </p>
    <pre class="language-markup">
        <code class="language-markup">
<script src="https://www.paypalobjects.com/api/checkout.js"></script>
<div id="paypal-button-container1"></div>
// Render the PayPal button
paypal.Button.render({
    env: 'sandbox', // sandbox | production
    client: {
        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
    },
    payment: function(actions) {
        return actions.payment.create({
            transactions: [
                {
                    amount: { total: '0.01', currency: 'USD' }
                }
            ]
        });
    },
    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {
            window.alert('Payment Complete!');
        });
    },
    commit: true
}, '#paypal-button-container1');      
        </code>
    </pre>
    
</div>









