import {
  c,
  q,
  POST,
  DELETE,
  PUT,
  deleteRegista,
  createRegista,
  createRegisti,
} from "./utilsregisti.js";

const url_regista = "http://localhost:3000/registi";

fetch(url_regista)
  .then((res) => res.json())
  .then((res) => createRegisti(res));

// SEARCHBAR
const formEl = document.querySelector("form#searchbar");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const divEl = document.querySelector(".card_container");
  divEl.replaceChildren();

  fetch(url_regista + "?searchString=" + formEl.searchString.value)
    .then((res) => res.json())
    .then((res) => createRegisti(res));
});

//POST
const urlNewRegista = `http://localhost:3000/regista`;

const formCreateEl = document.querySelector("form#newregista");
formCreateEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const element = formCreateEl.elements;
  const data = {
    nome: element.regista_name.value,
    cognome: element.regista_surname.value,
    id: element.regista_id.value,
    data_nascita: element.regista_data.value,
  };

  POST(urlNewRegista, data).then((res) => createRegista(data));
});
