let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'p1')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'p2')
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1200, 'p3')
})

let p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 300, 'p4')
})

let p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 800, 'p5')
})

let promise = Promise.all([p1.catch(function() {}),
    p2.catch(function() {}),
    p3.catch(function() {}),
    p4.catch(function() {}),
    p5.catch(function() {})])

promise.then(data => {
    data.forEach(res => console.log(res))
}).catch(error => console.log("error", error)) 

// p1
// p2
// p3
// undefined
// p5