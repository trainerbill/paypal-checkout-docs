// Edit your Host File
    // Linux: echo "151.101.64.133 checkout.developer.paypal.com" >> /etc/hosts
// Open https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/
// Select All: Ctrl+A
// Copy All: Ctrl+C
// Open Chrome Console:  Ctrl+Shift+J
// Paste: Ctrl+V
// Enter

var content = document.getElementsByTagName('article')[0];
content.innerHTML = '';

var xComponent = document.createElement("script");
xComponent.src = "//www.paypalobjects.com/api/xcomponent.min.js";
xComponent.onload = function (test) {
    require(['xcomponent'], function (lib) {
        window.xcomponent = lib;
        var DocComponent = document.createElement("script");
        DocComponent.src = "//www.paypalobjects.com/api/doc-test-component.js";
        DocComponent.onload = function (test) {
            MainComponent.render({}, content);
            
        }
        document.head.appendChild(DocComponent);
    });
    
}
document.head.appendChild(xComponent);
