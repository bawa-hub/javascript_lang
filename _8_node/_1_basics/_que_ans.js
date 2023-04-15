/***
 *
 *
 *  which one executes code v8 or event loop ?
 *
 *  In Node.js, both the V8 engine and the event loop are responsible for executing code, but they have different roles.
 *  The V8 engine is responsible for executing JavaScript code. It is an open-source JavaScript engine developed by Google and used by Node.js to run JavaScript code. The V8 engine compiles JavaScript code into machine code and executes it directly on the computer's processor.
 *  The event loop, on the other hand, is responsible for managing I/O operations and executing non-blocking asynchronous code. It is a mechanism that allows Node.js to handle multiple requests and events at the same time without blocking the main thread. The event loop uses a queue to manage incoming requests, and when an I/O operation is completed, it notifies the event loop, which then schedules the corresponding callback to be executed.
 *  So, in summary, the V8 engine executes JavaScript code, while the event loop manages I/O operations and executes non-blocking asynchronous code in Node.js.
 *
 *  how event loop executes code in nodejs ?
 * 
 * The event loop in Node.js is responsible for executing non-blocking asynchronous code, which is typically written using callbacks, promises, or async/await syntax. Here's a simplified overview of how the event loop executes code in Node.js:

    When Node.js receives a request, it is added to a queue called the "event queue". The event queue holds all the requests that Node.js needs to process.

    The event loop continuously checks the event queue for new requests or events that are ready to be processed.

    When an event or request is ready, the event loop takes it from the event queue and begins processing it.

    If the code being executed is synchronous, the event loop will simply execute the code in the order it appears. If the code is asynchronous, such as making an HTTP request or reading a file from disk, the event loop will not wait for the operation to complete. Instead, it will register a callback function to be executed when the operation is complete.

    Once the asynchronous operation is complete, the event loop moves the callback function to a queue called the "callback queue".

    The event loop then checks the callback queue for any callbacks that are ready to be executed. If there are any, it takes them from the queue and executes them.

    The event loop repeats this process, continuously checking the event queue for new requests and the callback queue for new callbacks to execute.

It's worth noting that the event loop in Node.js is single-threaded, meaning that it can only execute one operation at a time. However, because Node.js uses non-blocking I/O operations and the event loop to manage requests and callbacks, it can handle a large number of requests and operations without blocking the main thread.
 */
