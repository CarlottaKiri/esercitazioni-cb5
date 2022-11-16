import { DELETE } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

const createCard = (url, parent, name, type, id) => {
  const cardEl = c("div");
  const idEl = c("p");
  const nameEl = c("p");
  const typeEl = c("p");
  const imgEl = c("img");

  cardEl.classList = "card";

  imgEl.src = "./img/placeholder.png";
  idEl.textContent = id;
  nameEl.textContent = name.toUpperCase();
  typeEl.textContent = type;

  imgEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  cardEl.append(imgEl, idEl, nameEl, typeEl);

  parent.appendChild(cardEl);
};

export { c, q, createCard };
