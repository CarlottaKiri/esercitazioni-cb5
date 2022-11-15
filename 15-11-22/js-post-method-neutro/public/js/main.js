import { c, q, GET, POST, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pkm_list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.pkm_name.value,
    type: element.pkm_type.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
      ul.innerHTML += `<li>id: ${data.id}: ${data.name} ${data.type}</li>`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

window.onload = GET(url).then((res) =>
  res.map(
    (pkm) =>
      (ul.innerHTML += `<li> Pokémon: ${pkm.name.toUpperCase()} <br> Type: ${
        pkm.type
      }</li>`)
  )
);
