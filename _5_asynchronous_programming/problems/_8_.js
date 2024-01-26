const promise = new Promise(res => res(2));

promise.then(res => {
    console.log(res);
    return res * 2
}).then(res => {
    console.log(res);
    return res * 2
}).finally(res => {
    console.log(res);
    return res * 2
}).then(res => {
    console.log(res);
})

// 2
// 4
// undefined
// 8