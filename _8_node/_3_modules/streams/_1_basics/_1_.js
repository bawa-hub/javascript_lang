/***
 * A stream is a sequence of data that is being moved from one point to another over time
 * eg: a stream of data being transferred from one file to another within th same computer
 *
 * Work with data in chunks instead of waiting for the entire data to be avaialable at once
 * If you're transferring file contents from fileA to fileB, you don't wait for entire filteA conent to be saved in temporary memory before moving it into fileB.
 * Instead, the content if trasferred in chunks over time which prevents unnecessary memory usage.
 * Stream is infact a built-in node module that inherits from the event emitter class
 * Other module internally use streams for their functioning
 *
 */

/**
 *
 * Types of Streams:
 *
 * Readable streams from which data can be read
 * eg: Reading from a file as readable stream
 *
 * Writable streams to which we can write data
 * eg: Writing to a file as writable stream
 *
 * Duplex streams that are both Readable and Writable
 * eg: Sockets as a duplex stream
 *
 * Transform streams that can modify or transform the data as it is written and read
 * eg: File compression where you can write compressed data and read de-compressed data to and from a file as a transform stream
 */
