var EditorComponent = xcomponent.create({
    tag: 'editor-component',
    url: '/paypal-checkout/demos/iframe.html',
    dimensions: {
        width: '100%',
        height: '60px'
    },
    props: {
         initialize: {
             type: 'function',
             required: true
         } 
    }
});