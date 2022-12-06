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

function deleteActor(id) {
  const url = `http://localhost:3000/attore`;
  return DELETE(url, id);
}

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
const createActors = (actors) => {
  for (let actor of actors) {
    createActor(actor);
  }
};

const createActor = (actor) => {
  const parentEl = q(".card_container");
  const actorEl = c("div");
  const idEl = c("h3");
  const imgEl = c("h1");
  const nameEl = c("h2");
  const cognEl = c("h2");
  const infoEl = c("h3");
  const delBtnEl = c("button");
  const editButtonEl = c("button");

  actorEl.className = "card";
  idEl.className = "id";
  imgEl.className = "img";
  nameEl.className = "name";
  cognEl.className = "surname";
  infoEl.className = "info";
  delBtnEl.className = "delete";
  editButtonEl.className = "edit";

  nameEl.textContent = actor.nome;
  idEl.textContent = actor.id;
  imgEl.textContent = "✨";
  cognEl.textContent = actor.cognome;
  infoEl.textContent = actor.data_nascita;
  delBtnEl.textContent = "🗑️";
  editButtonEl.textContent = "✏️";

  delBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    deleteActor(actor.id).then(() => actorEl.remove());
  });

  editButtonEl.addEventListener("click", (event) => {
    event.preventDefault();
    const button = event.target;
    const actorEl = button.parentNode;

    if (button.textContent === "✏️") {
      const nameEl = actorEl.querySelectorAll(".name")[0];
      const surEl = actorEl.querySelectorAll(".surname")[0];

      const inputNameEl = c("input");
      const inputSurEl = c("input");

      inputNameEl.id = "name";
      inputSurEl.id = "surname";

      inputNameEl.type = "text";
      inputSurEl.type = "text";

      inputSurEl.value = surEl.textContent;
      inputNameEl.value = nameEl.textContent;

      actorEl.insertBefore(inputNameEl, nameEl);
      actorEl.insertBefore(inputSurEl, surEl);

      actorEl.removeChild(nameEl);
      actorEl.removeChild(surEl);

      button.textContent = "🔒";
    } else if (button.textContent === "🔒") {
      const inputNameEl = actorEl.querySelectorAll("#name")[0];
      const inputSurEl = actorEl.querySelectorAll("#surname")[0];

      const h2NameEl = c("h2");
      const h2SurEl = c("h2");

      h2NameEl.textContent = inputNameEl.value;
      h2SurEl.textContent = inputSurEl.value;

      h2NameEl.className = "name";
      h2SurEl.className = "surname";

      actorEl.insertBefore(h2NameEl, inputNameEl);
      actorEl.insertBefore(h2SurEl, inputSurEl);

      actorEl.removeChild(inputNameEl);
      actorEl.removeChild(inputSurEl);

      button.textContent = "✏️";

      PUT(`http://localhost:3000/attore`, {
        id: actor.id,
        nome: h2NameEl.textContent,
        cognome: h2SurEl.textContent,
        data_nascita: actor.data_nascita,
      });
    }
  });

  actorEl.append(idEl, imgEl, nameEl, cognEl, infoEl, editButtonEl, delBtnEl);
  parentEl.appendChild(actorEl);
  console.log(actor.cognome);
};

export { c, q, POST, createActor, createActors, DELETE, PUT, deleteActor };
