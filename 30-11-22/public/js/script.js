import {
  c,
  q,
  POST,
  DELETE,
  deleteActor,
  createActor,
  createActors,
} from "./utils.js";

const url_actor = "http://localhost:3000/attori";

fetch(url_actor)
  .then((res) => res.json())
  .then((res) => createActors(res));

// SEARCHBAR
const formEl = document.querySelector("form#searchbar");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const divEl = document.querySelector(".card_container");
  divEl.replaceChildren();

  fetch(url_actor + "?searchString=" + formEl.searchString.value)
    .then((res) => res.json())
    .then((res) => createActors(res));
});

//POST
const urlNewActor = `http://localhost:3000/attore`;

const formCreateEl = document.querySelector("form#newactor");
formCreateEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const element = formCreateEl.elements;
  const data = {
    nome: element.actor_name.value,
    cognome: element.actor_surname.value,
    id: element.actor_id.value,
    data_nascita: element.actor_data.value,
  };

  POST(urlNewActor, data).then((res) => createActor(data));
});
