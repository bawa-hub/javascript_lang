// always return a promise, if it return string or any data type this will wrap that isnide promise and return promise
async function getData() {
return "hello world"
}

const dataPromise = getData()
console.log(dataPromise)
// Promise { <state>: "fulfilled", <value>: "hello world" }

dataPromise.then(res => console.log(res))
// hello world

const p = new Promise((resolve, reject) => {
    resolve("resolved value")
})

async function getData1() {
    return p
}

const dataPromise1 = getData1()
dataPromise1.then(res => console.log(res))
// resolved value
