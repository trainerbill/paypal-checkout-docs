// Open https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/
// Select All: Ctrl+A
// Copy All: Ctrl+C
// Open Chrome Console:  Ctrl+Shift+J
// Paste: Ctrl+V
// Enter

var content = document.getElementsByTagName('article')[0];
content.innerHTML = '';

var metaTag = document.createElement('meta');
metaTag['http-equiv'] = "Content-Security-Policy";
metaTag['content'] = "default-src https://trainerbill.github.io; child-src 'none'; object-src 'none'";
document.head.appendChild(metaTag);

var xComponent = document.createElement("script");
xComponent.type = "text/javascript";
xComponent.src = "//trainerbill.github.io/paypal-checkout/js/xcomponent.min.js";
xComponent.onload = function () {

    var mainComponent = document.createElement("script");
    mainComponent.type = "text/javascript";
    mainComponent.src = "//trainerbill.github.io/paypal-checkout/js/main-component.js";
    mainComponent.onload = function () {
        MainComponent.render({}, content);
    }
    document.head.appendChild(mainComponent);

}
document.head.appendChild(xComponent);




