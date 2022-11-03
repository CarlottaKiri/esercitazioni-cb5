const color = {
  fire: "#F08030",
  grass: "#78C850",
  poison: "#A040A0",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  fairy: "#EE99AC",
  flying: "#A890F0",
  psychic: "#F85888",
  electric: "#F8D030",
  steel: "#B8B8D0",
  ice: "#98D8D8",
  ground: "#E0C068",
  rock: "#B8A038",
  fighting: "#C03028",
  ghost: "#705898",
};

const createCard = (id, name, sprites, types, parent) => {
  const cardEl = document.createElement("div");
  const typesArray = types.split(",");
  cardEl.style.backgroundImage =
    "linear-gradient(57deg," +
    color[typesArray[0].trim()] +
    " 50%, " +
    color[typesArray[typesArray.length - 1].trim()] +
    " 50%)";

  const idEl = document.createElement("span");
  idEl.textContent = id;

  const nameEl = document.createElement("h3");
  nameEl.textContent = name.toUpperCase();

  const spritesEl = document.createElement("img");
  spritesEl.setAttribute("src", sprites);
  spritesEl.setAttribute("alt", sprites);

  const typesEl = document.createElement("span");
  typesEl.textContent = types;

  cardEl.append(idEl, nameEl, spritesEl, typesEl);
  parent.appendChild(cardEl);
};
const pokemonEl = document.querySelector(".pokemon__list > .pokemon__cards");

//
const promises = [];
for (let i = 1; i <= 150; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  promises.push(fetch(url).then((res) => res.json()));
}
Promise.all(promises).then((results) => {
  results.map((pokemon) => {
    createCard(
      pokemon.id,
      pokemon.name,
      pokemon.sprites["front_default"],
      pokemon.types.map((type) => type.type.name).join(", "),
      pokemonEl
    );
  });
  console.log(results);
});
