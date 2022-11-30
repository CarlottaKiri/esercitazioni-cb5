const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});

app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});
app.get("/attori", function (req, res) {
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  let arr_attori = attori;
  let searchString = req.query.searchString;
  if (searchString !== "" && searchString !== undefined) {
    arr_attori = arr_attori.filter((att) =>
      att.nome
        .toUpperCase()
        .includes(
          searchString.toUpperCase() ||
            att.cognome.toUpperCase().includes(searchString.toUpperCase())
        )
    );
  }
  arr_attori = arr_attori.map((att) => {
    const { id, nome, cognome, data_nascita } = att;
    return { id, nome, cognome, data_nascita };
  });
  res.json(arr_attori);
});

app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Attore not found");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Attore not found");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const attori_text = fs.readFileSync("./src/attori.json", "utf-8");
  let attori = JSON.parse(attori_text);

  attori = attori.filter((attore) => attore.id !== nuovo_attore.id);
  attori.push(nuovo_attore);
  attori.sort((attore1, attore2) => attore1.id - attore2.id);

  console.log(attori);

  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));

  res.status(200).json({ res: "Attore creato" });
});

app.get("/attore", function (req, res) {
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }

  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });

  if (typeof attr === "undefined") {
    console.log("Attore undefined ");
    res.status(200).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});

app.put("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Nome attore not found");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Cognome attore not found");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const attori_text = fs.readFileSync("./src/attori.json", "utf-8");
  const attori = JSON.parse(attori_text);

  const index = attori.findIndex((attore) => {
    attore.id === nuovo_attore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);

    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore aggiornato");
  } else {
    res.status(200).send("Attore not found");
  }

  res.status(200).send("Attore aggiornato");
});

app.delete("/attore", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const arrayDeleted = attori.filter((attore) => {
    return attore.id != id_da_cancellare;
  });

  fs.writeFileSync("./src/attori.json", JSON.stringify(array_deleted));

  res.status(200).send(arrayDeleted);
});
