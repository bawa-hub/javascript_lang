const getData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("response", response);
  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    console.log("json", json);
    document.getElementById("data").innerHTML = JSON.stringify(json);
  } else {
    alert("HTTP-Error: " + response.status);
  }
};

const getData1 = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(typeof res.data.id));
};

getData();
getData1();
