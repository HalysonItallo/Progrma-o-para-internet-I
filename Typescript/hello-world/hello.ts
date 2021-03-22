function showMessage(element: HTMLElement, message: string): void{
  element.innerHTML = message;
}

var hello = document.getElementById('show-hello-world');
showMessage(hello, "Hello, World !!!"); 
