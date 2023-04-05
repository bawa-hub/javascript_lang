/***
 *
 * Node is single threaded.
 * No matter how many cores you have, node use only a single core  of your CPU.
 * This is fine for I/O operations but if the code has long running and CPU intensive operations, you application might struggle from a performance point of view.
 *
 * The cluster module enables the creation of child processes (also called workers) that run simultaneouly.
 * All created workers share the same server port.
 */
