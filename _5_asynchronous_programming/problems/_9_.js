function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time, 'success' + time)
    });
}

Promise.race([delay(500), delay(100)]).then((data) => {
    console.log(data);
})

// success100