console.log(1);
setTimeout(() => console.log(2), 0)
setTimeout(() => console.log(3), 1)

let p = Promise.resolve()

for(let i=0;i<3;i++) {
    p.then(() => {
        setTimeout(() => {
            console.log(4);
            setTimeout(() => console.log(5), 0);
            p.then(() => console.log(6))
        }, 0)
        console.log(7);
    })
}

console.log(8);

// 1
// 8
// 7
// 7
// 7
// 2
// 3
// 4
// 6
// 4
// 6
// 4
// 6
// 5
// 5
// 5