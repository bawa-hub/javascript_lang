// real world example

const API_URL = "https://api.github.com/users/bawa-hub"

async function fetchData() {
    // fetch return promise
    // fetch() => Response (readable stream) => Response.json() => jsonValue
   
    // with error handling
    try {
        const data = await fetch(API_URL)
        const jsonValue = await data.json()
        console.log(jsonValue)
    } catch (err) {
        console.log(err);
    }
}

fetchData()