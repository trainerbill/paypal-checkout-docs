// Download, install, and enable this chrome extension:  https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwinv9jPgYnUAhVY2GMKHQh4AOgQFggoMAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fdisable-content-security%2Fieelmcmcagommplceebfedjlakkhpden%3Fhl%3Den&usg=AFQjCNEiw78bxyps59VEQRH2uaEdil7jRQ&sig2=HqJMkvj8VoyVEpDzriKtyg
// Open: https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/add-paypal-button/
// Select All: Ctrl+A
// Copy All: Ctrl+C
// Open Chrome Console:  Ctrl+Shift+J
// Paste: Ctrl+V
// Enter

var content = document.getElementsByTagName('article')[0];
content.innerHTML = '';
content.id = 'docTest';


var script = document.createElement("script");
script.src = "//www.paypalobjects.com/api/doc-test-component.js?bust=" + Date.now();
script.setAttribute('data-render', 'true');
script.setAttribute('data-render-id', '#docTest');
document.head.appendChild(script);