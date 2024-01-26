function job(state) {
    return new Promise(function(resolve, reject) {
        if(state) resolve(1)
        else reject(2);
      });
}

const promise = job(true)

  promise
  .then((data) => {
    console.log(data)
    return job(false)
  })
  .catch((err) => {
    console.log(err)
    return 3
  })
  .then((data) => {
    console.log(data)
    return job(true)
  })
  .catch((err) => {
    console.log(err)
  })

// 1
// 2
// 3