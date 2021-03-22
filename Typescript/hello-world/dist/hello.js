function showMessage(element, message) {
    element.innerHTML = message;
}
var hello = document.getElementById('show-hello-world');
showMessage(hello, "Hello, World !!!");
