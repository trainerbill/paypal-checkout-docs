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
    <h6>Example</h6>
    
</div>

<div class="divider"></div>

<div id="options" class="section scrollspy">
    <h4>Options</h4>
    <p>
        The following options can be used with the button component.
    </p>
    
</div>









