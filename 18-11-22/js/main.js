import { GET, POST, PATCH } from "./api.js";
import { q, createCard } from "./utils.js";

const divEl = q(".card_list");
const form = document.forms.pokemon;
const elements = form.elements;

const url = "http://localhost:3000/pokemon";

let max = 0;

// Form Patch
const formPatch = document.forms.pokemon_edit;
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = elementsFP.pkm_id.value;

  const data = {
    id: elementsFP.pkm_id.value,
    name: elementsFP.pkm_name.value,
    type: elementsFP.pkm_type.value,
  };

  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    id: parseInt(max) + 1,
    name: elements.pkm_name.value,
    type: elements.pkm_type.value,
  };

  POST(url, data).then(() => location.reload());
});

window.onload = GET(url).then((res) => {
  res.map((pkm) => {
    try {
      max = max > pkm?.id ? max : pkm?.id;
      createCard(url, divEl, pkm?.name, pkm?.type, pkm?.id);
    } catch (error) {
      console.log(error);
    }
  });
});
