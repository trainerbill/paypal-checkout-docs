---
layout: iframe-demo
---

<div id="description" class="section scrollspy">
    <h4>{{ site.data.demos[0].children[0].title }}</h4>
    <p>
        {{ site.data.demos[0].children[0].description }}
    </p>
</div>

<script>
    var code = `
// Render the PayPal button
paypal.Button.render({
    env: 'sandbox', // sandbox | production
    client: {
        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
    },
    payment: function(data, actions) {
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
    `; 
</script>

