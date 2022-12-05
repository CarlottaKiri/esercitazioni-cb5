const POST = async (url, body_message) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return await res.json();
};

const DELETE = async (url, id) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ id: id }),
  });
  return await res.json();
};

const PUT = async (url, body_message) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return await res.json();
};

function deleteRegista(id) {
  const url = `http://localhost:3000/regista`;
  return DELETE(url, id);
}

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
const createRegisti = (registi) => {
  for (let regista of registi) {
    createRegista(regista);
  }
};

const createRegista = (regista) => {
  const parentEl = q(".card_container");
  const registaEl = c("div");
  const idEl = c("h3");
  const imgEl = c("h1");
  const nameEl = c("h2");
  const cognEl = c("h2");
  const infoEl = c("h3");
  const delBtnEl = c("button");
  const editButtonEl = c("button");

  registaEl.className = "card";
  idEl.className = "id";
  imgEl.className = "img";
  nameEl.className = "name";
  cognEl.className = "surname";
  infoEl.className = "info";
  delBtnEl.className = "delete";
  editButtonEl.className = "edit";

  nameEl.textContent = regista.nome;
  idEl.textContent = regista.id;
  imgEl.textContent = "🎬";
  cognEl.textContent = regista.cognome;
  infoEl.textContent = regista.data_nascita;
  delBtnEl.textContent = "🗑️";
  editButtonEl.textContent = "✏️";

  delBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    deleteRegista(regista.id).then(() => registaEl.remove());
  });

  editButtonEl.addEventListener("click", (event) => {
    event.preventDefault();
    const button = event.target;
    const registaEl = button.parentNode;

    if (button.textContent === "✏️") {
      const nameEl = registaEl.querySelectorAll(".name")[0];
      const surEl = registaEl.querySelectorAll(".surname")[0];

      const inputNameEl = c("input");
      const inputSurEl = c("input");

      inputNameEl.id = "name";
      inputSurEl.id = "surname";

      inputNameEl.type = "text";
      inputSurEl.type = "text";

      inputSurEl.value = surEl.textContent;
      inputNameEl.value = nameEl.textContent;

      registaEl.insertBefore(inputNameEl, nameEl);
      registaEl.insertBefore(inputSurEl, surEl);

      registaEl.removeChild(nameEl);
      registaEl.removeChild(surEl);

      button.textContent = "🔒";
    } else if (button.textContent === "🔒") {
      const inputNameEl = registaEl.querySelectorAll("#name")[0];
      const inputSurEl = registaEl.querySelectorAll("#surname")[0];

      const h2NameEl = c("h2");
      const h2SurEl = c("h2");

      h2NameEl.textContent = inputNameEl.value;
      h2SurEl.textContent = inputSurEl.value;

      h2NameEl.className = "name";
      h2SurEl.className = "surname";

      registaEl.insertBefore(h2NameEl, inputNameEl);
      registaEl.insertBefore(h2SurEl, inputSurEl);

      registaEl.removeChild(inputNameEl);
      registaEl.removeChild(inputSurEl);

      button.textContent = "✏️";

      PUT(`http://localhost:3000/regista`, {
        id: regista.id,
        nome: h2NameEl.textContent,
        cognome: h2SurEl.textContent,
        data_nascita: regista.data_nascita,
      });
    }
  });

  registaEl.append(idEl, imgEl, nameEl, cognEl, infoEl, editButtonEl, delBtnEl);
  parentEl.appendChild(registaEl);
};

export { c, q, POST, createRegista, createRegisti, DELETE, PUT, deleteRegista };
