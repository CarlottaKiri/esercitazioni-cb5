const color = {
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  ghost: "#705898",
  ice: "#98d8d8",
};

const createCard = (id, name, sprites, types, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.id = name;

  const cardContentEl = document.createElement("div");

  const typesArray = types.split(",");
  cardEl.classList.add(
    typesArray[0].trim() + "1",
    typesArray[typesArray.length - 1].trim() + "2"
  );

  const spritesEl = document.createElement("img");
  spritesEl.setAttribute("src", sprites);
  spritesEl.setAttribute("alt", sprites);

  const getId = (n) => {
    if (!n) return null;

    let id = n;
    if (id < 10) {
      id = "00" + id;
    } else if (id < 100) {
      id = "0" + id;
    }
    return id;
  };
  const idEl = document.createElement("p");
  idEl.textContent = `# ${getId(id)}`;
  idEl.className = "id";

  const nameEl = document.createElement("h3");
  nameEl.textContent = name.toUpperCase();

  const typesEl = document.createElement("p");
  typesEl.textContent = "Type: " + types;

  cardContentEl.append(spritesEl, idEl, nameEl, typesEl);

  cardEl.appendChild(cardContentEl);
  parent.appendChild(cardEl);
};

const loadPokemons = () => {
  if (loaded >= limit) return;

  const pokemonEl = document.querySelector(".pokemon__list > .cards");
  const loadingEl = document.querySelector(".loading");

  const promises = [];
  for (let i = loaded; i <= loaded + 49; i++) {
    loadingEl.classList.add("active");
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  loaded += 50;

  Promise.all(promises)
    .then((results) => {
      results.map((pokemon) => {
        createCard(
          pokemon.id,
          pokemon.name,
          pokemon.sprites["front_default"],
          pokemon.types.map((type) => type.type.name).join(", "),
          pokemonEl
        );
      });
    })
    .finally(() => {
      loadingEl.classList.remove("active");
      loading = false;
    });
};

let loaded = 1;
const limit = 150;
loadPokemons();

document.addEventListener("scroll", (e) => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadPokemons();
  }
});
