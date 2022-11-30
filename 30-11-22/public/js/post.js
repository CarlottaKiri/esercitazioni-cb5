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

createActors = (actors) => {
  for (let actor of actors) {
    createActor(actor);
  }
};

createActor = (actor) => {
  const parentEl = q(".card_container");
  const actorEl = c("div");
  const imgEl = c("img");
  const nameEl = c("h2");
  const cognEl = c("h2");
  const infoEl = c("h3");

  actorEl.className = "card";
  imgEl.className = "img";
  nameEl.className = "name";
  cognEl.className = "surname";
  infoEl.className = "info";

  nameEl.textContent = actor.nome;
  cognEl.textContent = actor.cognome;
  infoEl.textContent = actor.data_nascita;

  actorEl.append(imgEl, nameEl, cognEl, infoEl);
  parentEl.appendChild(actorEl);
};

const urlNewActor = `http://localhost:3000/attore`;

const formCreateEl = document.querySelector("form#newactor");
formCreateEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const element = formCreateEl.elements;
  const data = {
    nome: element.actor_name.value,
    cognome: element.actor_surname.value,
    id: element.actor_id.value,
    data_nascita: element.actor_data.value,
  };

  POST(urlNewActor, data).then((res) => createActor(data));
});
