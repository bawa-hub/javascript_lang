// JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count);
// expected output: 42
console.log(obj.result);
// expected output: true

// JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"
console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);
// expected output: "[3,"false",false]"
console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// expected output: "{"x":[10,null,null,null]}"
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
