function process() {
    return new Promise((resolve, reject) => {
        resolve(1)
        reject(2)
        resolve(3)
        console.log(4);
    });
}

function init() {
    process().then(data => console.log(data + 1))
    .catch(err => console.log(err))
}

init()

// 4
// 2