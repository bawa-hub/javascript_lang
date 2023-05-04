//

/**
 * Asynchronous Javascript
 *
 * Javascript is a synchronous, blocking, single threaded language
 *
 * Synchronous:
 * If we have two functions which log messages to the console, code
 * executes top down, with only one line executing at any given time.
 *
 * Blocking:
 * No matter how long a previous process takes, the subsequent processes won't
 * kick off until the former is completed.
 *
 * Single-threaded:
 * A thread is simply a process that your javascript program can use to run a task
 * Each thread can only do one task at a time.
 * Javascript has just the one thread called the main thread for executing any code.
 *
 *
 *
 * Just  Javascript is not enough.
 * We need new pieces which are outside of javascript to help us write asynchronous code
 * For front-end, this is web browser come into play.For back-end, this is where nodejs comes into play
 *
 * Web browsers and nodejs define functions and APIs that allow us to register functions that should not be executed synchronously,
 * and should instead be invoked asynchronously when some kind of event occurs.
 * eg: that could be the pessage of time (setTimeout or setInterval),
 * the user's interaction with the mouse (addEventListener),
 * data being read from a file system or the arrival of data over the network (callbacks, promises, async-await)
 */

//  https://www.youtube.com/watch?v=exBgWAIeIeg
