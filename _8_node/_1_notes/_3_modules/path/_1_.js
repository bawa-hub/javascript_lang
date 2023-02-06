/**
 * path module provides utilities for working with file and directory paths
 *
 */

const path = require("node:path"); // node denotes it is built in modules

console.log(__filename); // 1_.js
console.log(__dirname); // /home/bawa/Learn/_2_/js_world/javascript_updated/_8_node/_1_notes/_3_modules/path

console.log(path.basename(__filename)); // _1_.js
console.log(path.basename(__dirname)); // path

console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname)); // ""

console.log(path.parse(__filename));
// {
//     root: '/',
//     dir: '/home/bawa/Learn/_2_/js_world/javascript_updated/_8_node/_1_notes/_3_modules/path',
//     base: '_1_.js',
//     ext: '.js',
//     name: '_1_'
// }

console.log(path.join(__dirname, "_1_.js"));
// /home/bawa/Learn/_2_/js_world/javascript_updated/_8_node/_1_notes/_3_modules/path/_1_.js
