const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
createActors = (actors) => {
  for (let actor of actors) {
    createActor(actor);
  }
};

createActor = (actor) => {
  const parentEl = q(".card_container");
  const actorEl = c("div");
  const imgEl = c("img");
  const nameEl = c("h2");
  const cognEl = c("h2");
  const infoEl = c("h3");

  actorEl.className = "card";
  imgEl.className = "img";
  nameEl.className = "name";
  cognEl.className = "surname";
  infoEl.className = "info";

  nameEl.textContent = actor.nome;
  cognEl.textContent = actor.cognome;
  infoEl.textContent = actor.data_nascita;

  actorEl.append(imgEl, nameEl, cognEl, infoEl);
  parentEl.appendChild(actorEl);
  console.log(actor.cognome);
};

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
    .then((res) => createActor(res));
});
