// JavaScript Call Stack which is a mechanism to keep track of the function calls
// JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.

// The call stack works based on the LIFO principle i.e., last-in-first-out.

// call stack maintains the order of execution of execution context

// When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
// Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function, pushes it on top of the Call Stack, and starts executing the function
// If a function calls another function, the JavaScript engine creates a new Function Execution Context for the function that is being called and pushes it on top of the call stack.
// When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off in the last code listing.
// The script will stop when the call stack is empty.

// https://www.javascripttutorial.net/javascript-call-stack/ for more
