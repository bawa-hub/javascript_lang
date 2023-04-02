import { message } from "./message.js";

const h1 = document.createElement("h1");
h1.textContent = message;

document.body.appendChild(h1);
