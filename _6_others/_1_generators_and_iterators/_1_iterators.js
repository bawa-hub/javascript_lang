// Iterable {
//     [Symbol.iterator]() : Iterator
// }

// Iterator {
//     next()  : IteratorResultObject
// }

// IteratorResultObject{
//     value: any,
//     done: bool
// }


// Iteration protocols
// There are two iteration protocols: iterable protocol and iterator protocol.

// Iterator protocol
// An object is an iterator when it implements an interface (or API) that answers two questions
// Is there any element left?
// If there is, what is the element?

// an object is qualified as an iterator when it has a next() method that returns an object with two properties:
//  done: a boolean value indicating whether or not there are any more elements that could be iterated upon.
//  value: the current element.

// Each time you call the next(), it returns the next value in the collection:
{ value: 'next value', done: false }
// call the next() method after the last value has been returned, the next() returns the result
{done: true, value: undefined}


// Iterable protocol
// An object is iterable when it contains a method called [Symbol.iterator] that takes no argument and returns an object which conforms to the iterator protocol.
// The [Symbol.iterator] is one of the built-in well-known symbols in ES6.



// Iterators
// Since ES6 provides built-in iterators for the collection types  Array, Set, and Map, you don’t have to create iterators for these objects.
// If you have a custom type and want to make it iterable so that you can use the for...of loop construct, you need to implement the iteration protocols.

class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex <= this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
};

let evenNumbers = new Sequence(2, 10, 2);
for (const num of evenNumbers) {
    console.log(num);
}
// 2
// 4
// 6
// 8
// 10

// You can explicitly access the [Symbol.iterator]() method
let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator]();

let result = iterator.next();

while( !result.done ) {
    console.log(result.value);
    result = iterator.next();
}

// plain js objects are not iterable, so for..of loop will not applicable
let person = {
    firstname: 'Bawa',
    lastname :'Vikram'
}

person[Symbol.iterator]= function() {
    let properties = Object.keys(person);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count>=properties.length) {
            isDone = true;
        }
        return {done: isDone,value: this[properties[count++]]}
    }
    return {next};
}

for(let p of person) {
    console.log(p);
}

// Cleaning up
// In addition to the next() method, the [Symbol.iterator]() may optionally return a method called return().
// The return() method is invoked automatically when the iteration is stopped prematurely. 
// It is where you can place the code to clean up the resources

class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex <= this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            },
            return: () => {
                console.log('cleaning up...');
                return { value: undefined, done: true };
            }
        }
    }
}

let oddNumbers = new Sequence(1, 10, 2);
for (const num of oddNumbers) {
    if( num > 7 ) {
        break;
    }
    console.log(num);
}
// 1
// 3
// 5
// 7
// cleaning up...