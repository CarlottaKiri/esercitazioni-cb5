import { qs, ce, GET, POST } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  productsList.map((product) => {
    createCardEl(product, cardList);
  });
});

function searchBar(input) {
  const cardsEl = document.getElementsByClassName("card");

  for (let cardEl of cardsEl) {
    const nameEl = cardEl.getElementsByTagName("h4")[0];
    if (nameEl.textContent.toUpperCase().indexOf(input.toUpperCase()) > -1) {
      cardEl.style.display = "";
    } else {
      cardEl.style.display = "none";
    }
  }
}

inputEl.addEventListener("input", (e) => {
  inputValue = "";
  inputValue += e.target.value;
  searchBar(inputValue);
});

// LOGIN POPUP

document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document
  .querySelector(".popup .close__btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

const form = qs(".form");
const elements = form.elements;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    email: elements.email.value,
    password: elements.password.value,
  };

  POST("http://localhost:3000/login", data).then(() => location.reload());
});
