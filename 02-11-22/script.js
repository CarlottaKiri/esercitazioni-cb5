const createCard = (name, imgUrl, description, rarity, vision, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  if (rarity === 4) {
    cardEl.classList.add("four-star");
  } else if (rarity === 5) {
    cardEl.classList.add("five-star");
  }

  const nameEl = document.createElement("h1");
  nameEl.textContent = name;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", vision);

  const parEl = document.createElement("p");
  parEl.textContent = description;

  const rarityEl = document.createElement("h2");
  rarityEl.textContent = rarity;

  const visionEl = document.createElement("h3");
  visionEl.textContent = vision;

  cardEl.append(nameEl, imgEl, parEl, rarityEl, visionEl);
  parent.appendChild(cardEl);
};

const fourStarCharEl = document.querySelector(".four-star-character");
const fiveStarCharEl = document.querySelector(".five-star-character");

const fourStarCharListEl = document.querySelector(
  ".four-star-character > .card-list"
);
const fiveStarCharListEl = document.querySelector(
  ".five-star-character > .card-list"
);

const headerfourStarChar = document.createElement("h1");
const headerfiveStarChar = document.createElement("h1");

headerfourStarChar.textContent = "My Fav 4 Stars";
headerfiveStarChar.textContent = "My Fav 5 Stars";

fourStarCharEl.insertBefore(headerfourStarChar, fourStarCharListEl);
fiveStarCharEl.insertBefore(headerfiveStarChar, fiveStarCharListEl);

import characters from "./characters.js";

characters
  .filter((product) => product.rarity === 4)
  .map((product) =>
    createCard(
      product.name,
      product.icon,
      product.description,
      product.rarity,
      product.vision,
      fourStarCharListEl
    )
  );

characters
  .filter((product) => product.rarity === 5)
  .map((product) =>
    createCard(
      product.name,
      product.icon,
      product.description,
      product.rarity,
      product.vision,
      fiveStarCharListEl
    )
  );
