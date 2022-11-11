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

const modifyCard = (id, name, sprites, types) => {
  const cardEl = document.querySelector(".card");
  cardEl.id = name;

  const typesArray = types.split(",");
  cardEl.style.backgroundColor = color[typesArray[0]];

  const spritesEl = document.querySelector(".card img");
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
  const idEl = document.querySelector(".card .id");
  idEl.textContent = `#${getId(id)}`;

  const nameEl = document.querySelector(".card h3");
  nameEl.textContent = name.toUpperCase();

  const typesEl = document.querySelector(".card .types");
  typesEl.textContent = "Type: " + types;
};

const createCard = (id, name, sprites, types, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.id = name;

  const cardContentEl = document.createElement("div");

  const typesArray = types.split(",");
  cardEl.style.backgroundColor = color[typesArray[0]];

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
  idEl.textContent = `#${getId(id)}`;
  idEl.className = "id";
  const nameEl = document.createElement("h3");
  nameEl.textContent = name.toUpperCase();
  const typesEl = document.createElement("p");
  typesEl.textContent = "Type: " + types;
  typesEl.className = "types";

  cardContentEl.append(spritesEl, idEl, nameEl, typesEl);

  cardEl.appendChild(cardContentEl);
  parent.appendChild(cardEl);
};
const pokemonEl = document.querySelector(".pokemon__list > .cards");

let i = 1;
function pokedex() {
  const loadingEl = document.querySelector(".loading");
  const headerEl = document.querySelector("h1");
  const buttonsEl = document.querySelector(".buttons");

  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      if (document.querySelector(".card") === null) {
        createCard(
          pokemon.id,
          pokemon.name,
          pokemon.sprites["front_default"],
          pokemon.types.map((type) => type.type.name).join(", "),
          pokemonEl
        );
      } else {
        modifyCard(
          pokemon.id,
          pokemon.name,
          pokemon.sprites["front_default"],
          pokemon.types.map((type) => type.type.name).join(", ")
        );
      }
    })
    .finally(() => {
      loadingEl.classList.remove("active");
      headerEl.classList.add("active");
      buttonsEl.style = "display: flex;";
    });
}

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
  if (i < 10) {
    previousBtn.removeAttribute("disabled");
    i++;
    pokedex();
  } else {
    nextBtn.setAttribute("disabled", true);
  }
});
const previousBtn = document.querySelector(".previous");
previousBtn.addEventListener("click", () => {
  if (i > 1) {
    nextBtn.removeAttribute("disabled");
    i--;
    pokedex();
  } else {
    previousBtn.setAttribute("disabled", true);
  }
});

const myTimeout = setTimeout(pokedex, 5000);
