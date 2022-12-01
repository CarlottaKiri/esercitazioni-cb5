module.exports = function (app, fs) {
  app.get("/registi", function (req, res) {
    const registi_text = fs.readFileSync("./src/registi.json", "utf8");
    const registi = JSON.parse(registi_text);

    let arr_registi = registi;
    let searchString = req.query.searchString;
    if (searchString !== "" && searchString !== undefined) {
      arr_registi = arr_registi.filter((reg) =>
        reg.nome
          .toUpperCase()
          .includes(
            searchString.toUpperCase() ||
              reg.cognome.toUpperCase().includes(searchString.toUpperCase())
          )
      );
    }
    arr_registi = arr_registi.map((reg) => {
      const { id, nome, cognome, data_nascita } = reg;
      return { id, nome, cognome, data_nascita };
    });
    res.json(arr_registi);
  });

  app.post("/regista", function (req, res) {
    if (req.body.nome == undefined) {
      res.status(400).send("Regista non trovato");
    }

    if (req.body.cognome == undefined) {
      res.status(400).send("Regista non trovato");
    }

    const nuovo_regista = {
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
      in_attivita:
        req.body.in_attivita == undefined ? "" : req.body.in_attivita,
    };

    const registi_text = fs.readFileSync("./src/registi.json", "utf-8");
    let registi = JSON.parse(registi_text);

    registi = registi.filter((regista) => regista.id !== nuovo_regista.id);
    registi.push(nuovo_regista);
    registi.sort((regista1, regista2) => regista1.id - regista2.id);

    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));

    res.status(200).json({ res: "Regista creato" });
  });

  app.get("/regista", function (req, res) {
    const id_regista = parseInt(req.query.id);
    if (isNaN(id_regista)) {
      res.status(400).send("Parametro mancante!");
    }

    const registi_text = fs.readFileSync("./src/registi.json", "utf8");
    const registi = JSON.parse(registi_text);

    const attr = registi.find((regista) => {
      return regista.id == id_regista;
    });

    if (typeof attr === "undefined") {
      console.log("Regista undefined ");
      res.status(200).send("Regista non trovato!");
    } else {
      res.json(attr);
    }
  });

  app.put("/regista", function (req, res) {
    if (req.body.nome == undefined) {
      res.status(400).send("Nome regista non trovato");
    }

    if (req.body.cognome == undefined) {
      res.status(400).send("Cognome regista non trovato");
    }

    const nuovo_regista = {
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
      in_attivita:
        req.body.in_attivita == undefined ? "" : req.body.in_attivita,
    };

    const registi_text = fs.readFileSync("./src/registi.json", "utf-8");
    const registi = JSON.parse(registi_text);

    const index = registi.findIndex((regista) => {
      return regista.id === nuovo_regista.id;
    });

    if (index > 0) {
      regista.splice(index, 1, nuovo_regista);

      fs.writeFileSync("./src/regista.json", JSON.stringify(registi));
      res.status(200).json({ res: "Regista  aggiornato" });
    } else {
      res.status(200).json({ res: "Regista non trovato" });
    }

    res.status(200).json({ res: "Regista aggiornato" });
  });

  app.delete("/regista", function (req, res) {
    if (req.body.id === undefined) {
      res.status(400).send("Parametro id mancante!");
    }
    if (isNaN(parseInt(req.body.id))) {
      res.status(400).send("Parametro non numerico!");
    }

    const id_da_cancellare = req.body.id;

    const registi_text = fs.readFileSync("./src/registi.json", "utf8");
    const registi = JSON.parse(registi_text);

    const arrayDeleted = registi.filter((regista) => {
      return regista.id != id_da_cancellare;
    });

    fs.writeFileSync("./src/registi.json", JSON.stringify(arrayDeleted));

    res.status(200).send(arrayDeleted);
  });
};
