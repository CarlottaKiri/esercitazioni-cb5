module.exports = function (app, fs) {
  const mongoose = require("mongoose");
  const schema_regista = new mongoose.Schema({
    nome: String,
    cognome: String,
    data_nascita: String,
    riconoscimenti: String,
    inizio_attivita: String,
    fine_attivita: String,
    in_attivita: Boolean,
  });
  const modelRegista = mongoose.model("registis", schema_regista);

  const insertRegista = async (obj) => {
    const user = new modelRegista(obj);
    try {
      return await user.save();
    } catch (error) {
      return error;
    }
  };

  const searchRegista = async (find_object) => {
    try {
      const regista = await modelRegista.find(find_object);
      return regista;
    } catch (error) {
      return error;
    }
  };

  const deleteRegista = async (id_regista) => {
    try {
      const regista = await modelRegista.deleteOne({ _id: id_regista });
      return regista;
    } catch (error) {
      return error;
    }
  };

  const updateRegista = async (find_object, update_object) => {
    try {
      const regista = await modelRegista.findOneAndUpdate(
        find_object,
        update_object
      );
      return regista;
    } catch (error) {
      return error;
    }
  };

  app.get("/regista/nome", function (req, res) {
    const nome_regista = req.query.nome;
    if (nome_regista == undefined) {
      res.status(400).send("Parametro id non trovato.");
    }

    const find_object = { nome: nome_regista };
    const regista = searchRegista(find_object);
    regista.then((regista) => {
      res.send(regista);
    });
  });

  app.post("/regista", function (req, res) {
    if (req.body.nome == undefined || req.body.nome.length == 0) {
      res.status(400).send("Nome regista mancante");
    }

    if (req.body.cognome == undefined || req.body.cognome.length == 0) {
      res.status(400).send("Cognome regista mancante");
    }

    const nuovo_regista = {
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

    const insert = insertRegista(nuovo_regista);
    insert.then((regista) => {
      console.log(typeof regista);
      res.status(200).send("Regista creato");
    });
  });

  app.delete("/regista", function (req, res) {
    if (req.body.id === undefined) {
      res.status(400).send("Parametro id mancante!");
    }

    const id_da_cancellare = req.body.id;
    const regista = deleteRegista(id_da_cancellare);
    regista.then((regista) => {
      console.log(regista);
      res.send(regista);
    });
  });

  app.put("/regista", function (req, res) {
    if (req.body.id == undefined) {
      res.status(400).send("Parametro id mancante!");
    }

    find_object = { _id: req.body.id };

    const update_object = {
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

    const regista = updateRegista(find_object, update_object);
    regista.then((regista) => {
      console.log(regista);
      res.send(regista);
    });
  });
};
