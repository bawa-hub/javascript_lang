// http://latentflip.com/loupe

// JavaScript is a single-threaded synchronous programming language.
// In other words, JavaScript can do only one thing at a single point in time.

// The JavaScript engine executes a script from the top of the file and works its way down.
// JavaScript creates the execution contexts and pushes and pops functions onto and off the call stack in the execution process.

// If a function takes a long time to execute,
// you cannot interact with the web browser during the function’s execution because the page hangs.
// Technically, a blocking function blocks all the interactions of the webpage, such as mouse click.
// A blocking function can be a function that downloads a file from a remote server or calls an API from an external server

// what if the blocking function that takes more time comes in the code:
// code will not pushes into call stack because call stack does not have timer

// browsers give js engine all the superpower(web apis) through the window (in browser) and global object (in nodejs)

console.log("start");
setTimeout(function cbT() {
  console.log("from setTimeout");
});
fetch("https://api.netflix.com").then(function cbF() {
  console.log("from fetch");
});
console.log("end");

// how this code will executed:
// first it prints start
// cbT callback is registered in web api and timer started
// cdF callback is registered in web api
// print end
// as timer expires cbT passes to callback queue
// after getting data cbF passes to microtask queue as it is promise based callback
// then event loop checks for empty call stack and cbF pushes to callstack
// after that event loop pushes cdT in callstack
// microtask has higher priority than callback queue

// which type of callback goes into microtask queue and callback queue:
// promise based and mutators observers based callback goes inside microtask queue
// all other callbacks goes inside callback queue
