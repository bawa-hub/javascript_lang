// JavaScript language was initially created for web browsers.
// Since then it has evolved and become a language with many uses and platforms.
// A platform may be a browser, or a web-server or another host, even a “smart” coffee machine, if it can run JavaScript.
// Each of them provides platform-specific functionality.
// The JavaScript specification calls that a host environment.
// A host environment provides own objects and functions additional to the language core.
// Web browsers give a means to control web pages.
// Node.js provides server-side features, and so on

// window ->dom, window->bom, window->language

// global functions are methods of the global object:
window.alert("height", window.innerHeight);

// Document Object Model, or DOM for short, represents all page content as objects that can be modified.
// The document object is the main “entry point” to the page.
// We can change or create anything on the page using it.

// change the background color to red
document.body.style.background = "red";
// change it back after 1 second
setTimeout(() => (document.body.style.background = ""), 1000);

// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.
// The navigator object provides background information about the browser and the operating system.
// There are many properties, but the two most widely known are: navigator.userAgent – about the current browser,
// and navigator.platform – about the platform (can help to differ between Windows/Linux/Mac etc).
// The location object allows us to read the current URL and can redirect the browser to a new one.
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
// Functions alert/confirm/prompt are also a part of BOM: they are directly not related to the document, but represent pure browser methods of communicating with the user.
