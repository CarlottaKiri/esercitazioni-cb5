const GET = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

function somma(param1, param2) {
  GET(`http://localhost:3000/somma?param1=${param1}&param2=${param2}`).then(
    (risultato) => {
      document.querySelector("h3").textContent =
        "Risultato: " + risultato.risultato;
      alert(risultato.risultato);
    }
  );
}

function sottrazione(param1, param2) {
  GET(
    `http://localhost:3000/sottrazione?param1=${param1}&param2=${param2}`
  ).then((risultato) => {
    document.querySelector("h3").textContent =
      "Risultato: " + risultato.risultato;
    alert(risultato.risultato);
  });
}

function moltiplicazione(param1, param2) {
  GET(
    `http://localhost:3000/moltiplicazione?param1=${param1}&param2=${param2}`
  ).then((risultato) => {
    document.querySelector("h3").textContent =
      "Risultato: " + risultato.risultato;
    alert(risultato.risultato);
  });
}

function divisione(param1, param2) {
  GET(`http://localhost:3000/divisione?param1=${param1}&param2=${param2}`).then(
    (risultato) => {
      document.querySelector("h3").textContent =
        "Risultato: " + risultato.risultato;
      alert(risultato.risultato);
    }
  );
}

const formSomma = document.querySelector("form#somma");

formSomma?.addEventListener("submit", (event) => {
  event.preventDefault();
  somma(formSomma.param1.value, formSomma.param2.value);
});

const formSottr = document.querySelector("form#sottrazione");

formSottr?.addEventListener("submit", (event) => {
  event.preventDefault();
  sottrazione(formSottr.param1.value, formSottr.param2.value);
});

const formMult = document.querySelector("form#moltiplicazione");

formMult?.addEventListener("submit", (event) => {
  event.preventDefault();
  moltiplicazione(formMult.param1.value, formMult.param2.value);
});

const formDiv = document.querySelector("form#divisione");

formDiv?.addEventListener("submit", (event) => {
  event.preventDefault();
  divisione(formDiv.param1.value, formDiv.param2.value);
});
