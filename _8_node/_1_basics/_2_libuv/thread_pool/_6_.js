/***
 *
 * Summary:
 *
 * In Nodejs async methods are handled by libuv.
 * They are handled in two different ways:
 * 1. Thread pool
 * 2. Native async mechanism
 *
 * Whenever possible, libuv will use native async mechanisms in the OS so as to avoid blocking the main thread.
 * Since this is a part of kernel, there is differenct mechanism of each OS.
 * We have epoll of linux, Kqueue for macos and IO completion port on windows.
 *
 * Relying on native async mechanisms make Node scalable as the only limitation is the OS kernel.
 * Example of this type is a network I/O operation.
 *
 *
 * If there is no native async support and the task is file I/O or CPU intensive,
 * libuv uses the thread pool to avoid blocking the main thread.
 *
 * Although the thread pool preserves asynchronity wrt Nodejs main thread,
 * it can still become a bottleneck if all threads are busy.
 */
