let users;

export default (async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  users = await response.json();
})();

export { users };

// Because we can only use the await keyword inside an async function (before ES2020),
// we need to wrap the API call inside an immediately invoked async function expression (IIAFE).
