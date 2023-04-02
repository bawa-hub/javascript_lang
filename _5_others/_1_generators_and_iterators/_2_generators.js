// a regular function is executed based on the run-to-completion model.
// It cannot pause midway and then continues from where it paused

// ES6 introduces a new kind of function that is different from a regular function: function generator or generator.
// A generator can pause midway and then continues from where it paused

function* generate() {
  console.log("invoked 1st time");
  yield 1;
  console.log("invoked 2nd time");
  yield 2;
}
// yield statement returns a value and pauses the execution of the function

let gen = generate();
console.log(gen); // Object [Generator] {}
// a generator returns a Generator object without executing its body when it is invoked
// Generator object returns another object with two properties: done and value.
// In other words, a Generator object is iterable

let result = gen.next();
console.log(result);
// invoked 1st time
// { value: 1, done: false }
result = gen.next();
console.log(result);
// invoked 2nd time
// { value: 2, done: false }
result = gen.next();
console.log(result);
// { value: undefined, done: true }

// Since a generator is iterable, you can use the for...of loop
for (const g of gen) {
  console.log(g);
}
// invoked 1st time
// 1
// invoked 2nd time
// 2

// how to use a generator to generate a never-ending sequence
function* forever() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let f = forever();
console.log(f.next()); // 0
console.log(f.next()); // 1
console.log(f.next()); // 2

// Using generators to implement iterators
// When you implement an iterator, you have to manually define the next() method.
// In the next() method, you also have to manually save the state of the current element
// Since generators are iterables, they can help you simplify the code for implementing iterator

// without generator
class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex < this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
    };
  }
}

// with generator
class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  *[Symbol.iterator]() {
    for (let index = this.start; index <= this.end; index += this.interval) {
      yield index;
    }
  }
}

let oddNumbers = new Sequence(1, 10, 2);
for (const num of oddNumbers) {
  console.log(num);
}
// 1
// 3
// 5
// 7
// 9

// Using a generator to implement the Bag data structure

// A Bag is a data structure that has the ability to collect elements and iterate through elements. It doesn’t support removing items
class Bag {
  constructor() {
    this.elements = [];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  add(element) {
    this.elements.push(element);
  }
  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let bag = new Bag();

bag.add(1);
bag.add(2);
bag.add(3);

for (let e of bag) {
  console.log(e);
}
// 1
// 2
// 3
