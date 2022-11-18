import { DELETE } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

const createCard = (url, parent, name, type, id) => {
  const cardEl = c("div");
  const idEl = c("p");
  const nameEl = c("h3");
  const typeEl = c("p");
  const imgEl = c("img");
  const buttonsEl = c("div");
  const delButtonEl = c("button");
  const editButtonEl = c("button");

  cardEl.classList = "card";
  buttonsEl.classList = "buttons";
  delButtonEl.classList = "delete_btn";
  editButtonEl.classList = "edit_btn";

  imgEl.src = "./img/placeholder.png";
  idEl.textContent = id;
  nameEl.textContent = name.toUpperCase();
  typeEl.textContent = type;
  delButtonEl.textContent = "DELETE";
  editButtonEl.textContent = "EDIT";

  // EVENT LISTENERS
  nameEl.addEventListener("dblclick", () => {
    DELETE(url, id).then(() => location.reload());
  });

  nameEl.addEventListener("click", () => {
    const patchForm = document.forms.pokemon_edit;
    const elements = patchForm.elements;

    elements.pkm_id.value = idEl.textContent;
    elements.pkm_name.value = nameEl.textContent;
    elements.pkm_type.value = typeEl.textContent;

    window.scrollTo(0, 0);
  });

  editButtonEl.addEventListener("click", () => {
    const patchForm = document.forms.pokemon_edit;
    const elements = patchForm.elements;

    elements.pkm_id.value = idEl.textContent;
    elements.pkm_name.value = nameEl.textContent;
    elements.pkm_type.value = typeEl.textContent;

    window.scrollTo(0, 0);
  });

  delButtonEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  // APPEND

  buttonsEl.append(editButtonEl, delButtonEl);
  cardEl.append(imgEl, idEl, nameEl, typeEl, buttonsEl);

  parent.appendChild(cardEl);
};

export { c, q, createCard };
