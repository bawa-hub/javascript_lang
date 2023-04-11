/***
 * Questions:
 *
 * Whenever an async task completes in libuv, at what point does Node decide to run the associated callback function on the call stack ?
 *
 * What about async methods like setTimeout and setInterval which also delay the execution of a callback function ?
 *
 * If two async tasks such as setTimeout and readFile complete at the same time,
 * how does Node decide which function to run first on the call stack ?
 *
 *
 * Answer:
 * Event Loop
 *
 * It is a C program and is part of libuv.
 *
 * A design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronour code in Nodejs.
 *
 *
 * Execution Order:
 *
 * 1. Any callbacks in the micro task queues are executed. Fist, tasks in the nextTick queue and only then tasks in the promise queue.
 * 2. All callbacks within the timer queue are executed.
 * 3. Callbacks in the micro task queues if present are executed. Again, fist tasks in the nextTick queue and then tasks in the promise queue.
 * 4. All callbacks within the I/O queue are executed.
 * 5. Callbacks in the micro task queues if present are executed. nextTick queue and then tasks in the promise queue.
 * 6.  All callbacks within the check queue are executed.
 * 7.  Callbacks in the micro task queues if present are executed. nextTick queue and then tasks in the promise queue.
 * 8.  All callbacks within the close queue are executed.
 * 9 . For one final time in the same loop, the micro task queue are executed. nextTick queue followed by promise queue.
 *
 *
 * if there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated.
 * On the other hand, if all callbacks are executed and there is no more code to process, the event loop exits.
 *
 * https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810
 */
