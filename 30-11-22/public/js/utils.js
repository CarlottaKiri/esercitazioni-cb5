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

  actorEl.className = "card";
  idEl.className = "id";
  imgEl.className = "img";
  nameEl.className = "name";
  cognEl.className = "surname";
  infoEl.className = "info";
  delBtnEl.className = "delete";

  nameEl.textContent = actor.nome;
  idEl.textContent = actor.id;
  imgEl.textContent = "✨";
  cognEl.textContent = actor.cognome;
  infoEl.textContent = actor.data_nascita;
  delBtnEl.textContent = "🗑️";

  delBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    deleteActor(actor.id).then(() => actorEl.remove());
  });

  actorEl.append(idEl, imgEl, nameEl, cognEl, infoEl, delBtnEl);
  parentEl.appendChild(actorEl);
  console.log(actor.cognome);
};

export { c, q, POST, createActor, createActors, DELETE, deleteActor };
