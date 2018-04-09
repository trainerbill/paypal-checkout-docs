var DocsComponent;
var DocsComponentScript = document.currentScript;

function initXcomponent() {

    DocsComponent = xcomponent.create({
        tag: 'docs-component',
        url: 'https://trainerbill.github.io/paypal-checkout-docs/docs/',

        dimensions: {
            width: '100%',
            height: '100%'
        },
        autoResize: {
            height: true,
            width: false,
            element: 'body'
        },
        domain: 'https://trainerbill.github.io',
        scrolling: false,
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