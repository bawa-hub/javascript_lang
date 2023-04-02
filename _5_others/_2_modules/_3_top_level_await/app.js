import promise, { users } from "./user.js";

function render(users) {
  if (!users) {
    throw "The user list is not available.";
  }
  let list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
    })
    .join(" ");

  return `<ol>${list}</ol>`;
}

promise.then(() => {
  let container = document.querySelector(".container");
  try {
    container.innerHTML = render(users);
  } catch (error) {
    container.innerHTML = error;
  }
});
