console.log("start")

const promise = new Promise((resolve, reject) => {
    console.log(1);
})

promise.then(() => {
    console.log(2);
})

console.log("end");

// start
// 1
// end