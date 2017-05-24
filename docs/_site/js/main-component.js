var DocsComponent;
var DocsComponentScript = document.currentScript;

function initXcomponent() {

    DocsComponent = xcomponent.create({
        tag: 'docs-component',
        url: 'https://trainerbill.github.io/paypal-checkout/docs/',
        /*
        dimensions: {
            width: '800px',
            height: '800px'
        },
        */
        autoResize: {
            height: true,
            width: true,
            element: 'body'
        },
        domain: 'https://trainerbill.github.io',
        // scrolling: false,
        props: {
            
        }
    });

    if (DocsComponentScript.getAttribute('data-render')) {
        DocsComponent.render({}, DocsComponentScript.getAttribute('data-render-id'));
    }

}

if (!window.xcomponent) {
    var xComponent = document.createElement("script");
    xComponent.src = "https://www.paypalobjects.com/api/xcomponent.min.js";
    xComponent.onload = function () {
        if (window.require) {
            require(['xcomponent'], function (lib) {
                window.xcomponent = lib;
                initXcomponent();
            });
        } else {
            initXcomponent();
        }
    };
    document.head.appendChild(xComponent);
} else {
    initXcomponent();
}