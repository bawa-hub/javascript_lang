const p = new Promise(function (resolve) {
    resolve(1)
    console.log(2);
});

p.then((data) => {
    console.log(data)
    return data + 1;
}).then((data) => {
    console.log(data)
});

setTimeout(() => console.log(4))
console.log(5);

// 2
// 5
// 1
// 2
// 4