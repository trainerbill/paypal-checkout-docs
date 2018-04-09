---
layout: iframe
---


<div class="card">
    <div class="card-content">
        <h4>PayPal Button</h4>
        <p>
            In order to place a PayPal checkout button in your application you must use the Button component.  The Button component is an <a href="https://github.com/krakenjs/xcomponent">xcomponent</a> used to communciate between
            a merchants site and paypal.com.
        </p>
        <ul class="collection">
            <li class="collection-item">window.paypal.Button.render(options, container)</li>
            <li class="collection-item"><a href="https://github.com/paypal/paypal-checkout-docs/tree/master/src/components/button">Source Code</a></li>
        </ul>
    </div>
    <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
            <li class="tab"><a class="active blue-text text-darken-1" href="#arguments">Arguments</a></li>
            <li class="tab"><a class="blue-text text-darken-1" href="#example">Example</a></li>
            <li class="tab"><a class="blue-text text-darken-1" href="#options">Options</a></li>
            <li class="tab"><a class="blue-text text-darken-1" href="#styling">Styling</a></li>
        </ul>
    </div>
    <div class="card-content grey lighten-4">
        <div id="arguments">
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
                        <td><a href="#options" onclick="$('ul.tabs').tabs('select_tab', 'options');">options</a></td>
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
        <div id="example">
            <p class="flow-text">
                For a complete example using the API's of your choosing, please refer to our <a href="/paypal-checkout-docs/demos">demos</a>
            </p>
            <blockquote><pre class="language-markup">
                <code class="language-markup">
&lt;script src="https://www.paypalobjects.com/api/checkout.js"&gt;&lt;/script&gt;
&lt;div id="paypal-button-container1"&gt;&lt;/div&gt;
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
            </blockquote>
        </div>
        <div id="options">
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
                        <td>payment</td>
                        <td>function</td>
                        <td>Callback function executed after the user clicks the PayPal button.  This function function <b>MUST</b> return or resolve a <a href="compatibility.html#products">payment token</a> in string form.  This function receives two arguments data and actions</td>
                        <td style="color:red">true</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>onAuthorize</td>
                        <td>function</td>
                        <td>Callback function executed once the PayPal flow has completed.  This function receives two arguments data and actions</td>
                        <td style="color:red">true</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>env</td>
                        <td>enum 'sandbox' or 'production'</td>
                        <td>The PayPal environment you are working in.</td> 
                        <td>false</td>
                        <td>'production'</td>
                    </tr>
                    <tr>
                        <td>client</td>
                        <td>object</td>
                        <td>An object that contains your REST Client ID's.  <br/>Example: { production: 'asdf', sandbox: 'asdf' }</td>
                        <td>false</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>onError</td>
                        <td>function</td>
                        <td>Callback function executed if any errors occur in the library</td>
                        <td>false</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>onCancel</td>
                        <td>function</td>
                        <td>Callback function executed if the user manually closes the experience without paying</td>
                        <td>false</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>function</td>
                        <td>Callback function executed after we launch the experience.  This function should be used to manually set analytic clicks.  We have to launch the experience first to prevent popup blockers.  </td>
                        <td>false</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>commit</td>
                        <td>boolean</td>
                        <td>A flag to switch the text on the PayPal button from Continue to Pay Now.  Should be used if you are immediately executing the payment without a chance for the user to review it.</td>
                        <td>false</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>object</td>
                        <td>An object to style the button</td>
                        <td>false</td>
                        <td><a href="#styling" onclick="$('ul.tabs').tabs('select_tab', 'styling');">Style Object</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="styling">
            <p class="flow-text">This section defines the styling options for the PayPal button.  <a href="/paypal-checkout-docs/demos/misc/styling">Try our interactive styling demo</a></p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Values</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>color</td>
                        <td>string</td>
                        <td>['gold', 'blue', 'silver']</td>
                        <td>Sets the color of the PayPal button</td> 
                        <td>gold</td>
                    </tr>
                    <tr>
                        <td>shape</td>
                        <td>string</td>
                        <td>['pill', 'rect']</td>
                        <td>Sets the shape of the PayPal button</td> 
                        <td>pill</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>string</td>
                        <td>[ 'tiny', 'small', 'medium', 'large', 'responsive' ]</td>
                        <td>Sets the size of the PayPal button</td> 
                        <td>small</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>string</td>
                        <td>[ 'checkout', 'credit', 'pay', 'buynow' ]</td>
                        <td>Sets the type of the PayPal button</td> 
                        <td>checkout</td>
                    </tr>
                    <tr>
                        <td>fundingicons</td>
                        <td>boolean</td>
                        <td>true/false</td>
                        <td></td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>










