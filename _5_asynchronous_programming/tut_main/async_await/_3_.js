const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved value from p3")
    }, 5000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved value from p4")
    }, 2000)
})

// as p3 takes more time so both promises will resolve after 5 sec.
// but if p3 takes 2 sec and p4 takes 5 sec then p3 will resolve first
async function handlePromise3() {
        const val = await p3;
        console.log("heyy p3");
        console.log(val);
    
        const val2 = await p4;
        console.log("heyy p4");
        console.log(val2);
}
handlePromise3();