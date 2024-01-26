const p1 = new Promise((resolve, reject) => {
    resolve("resolved value from p1")
})

// how we used to handle promises before async await
function getData2() {
    p1.then(res => console.log(res));
}
getData2()

// using async/await
// await can only be used inside asnyc function
async function handlePromise() {
    const val = await p1;
    console.log(val);
}
handlePromise();

// difference between handling promise using older fashion and using async await
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved value from p2")
    }, 3000)
})

function getData3() {
    // JS engine will not wait for promise to resolve
    p2.then(res => console.log(res));
    console.log("hello");
}
getData3()
// hello
// resolved value from p2

async function handlePromise1() {
    // JS engine will wait for promise to resolve
    const val = await p2;
    console.log("heyy");
    console.log(val);
}
handlePromise1();

async function handlePromise2() {
// both await will return at same time
    const val = await p2;
    console.log("heyy");
    console.log(val);

    const val2 = await p2;
    console.log("heyy");
    console.log(val2);
}
handlePromise2();