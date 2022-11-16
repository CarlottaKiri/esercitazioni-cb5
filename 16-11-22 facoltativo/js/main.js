import { GET, POST } from "./api.js";
import { q, createCard } from "./utils.js";

const divEl = q(".card_list");
const form = document.forms.pokemon;
const elements = form.elements;

const url = "http://localhost:3000/pokemon";

let max = 0;

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
