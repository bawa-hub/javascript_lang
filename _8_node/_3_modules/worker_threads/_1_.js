/***
 *
 * The worker_threads module enables the use of threads that executes JS in parallel.
 *
 * Code executed in a worker thread runs in a separate child process, preventing it from blocking you main application.
 *
 * The cluster module can be used to run multiple instances of Nodejs that can distribute workloads
 *
 * worker_threads module allows running multiple appliation threads within a single Nodejs instance
 *
 * When process isolation is not needed , that is, no separate instance of V8, event loop and memory are needed, you should use worker_threads.
 */
