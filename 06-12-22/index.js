const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Salve, sono in esecuzione sulla porta 3000.");
});
mongoose.connect("mongodb://localhost:27017/test_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const schema_attore = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});
const modelAttore = mongoose.model("attoris", schema_attore);

const insertAttore = async (obj) => {
  const user = new modelAttore(obj);
  try {
    return await user.save();
  } catch (error) {
    return error;
  }
};

const searchAttore = async (find_object) => {
  try {
    const actor = await modelAttore.find(find_object);
    return actor;
  } catch (error) {
    return error;
  }
};

const deleteAttore = async (id_attore) => {
  try {
    const actor = await modelAttore.deleteOne({ _id: id_attore });
    return actor;
  } catch (error) {
    return error;
  }
};

const updateAttore = async (find_object, update_object) => {
  try {
    const actor = await modelAttore.findOneAndUpdate(
      find_object,
      update_object
    );
    return actor;
  } catch (error) {
    return error;
  }
};

app.get("/attore/name", function (req, res) {
  const name_attore = req.query.name;
  if (name_attore == undefined) {
    res.status(400).send("Parametro id non trovato.");
  }

  const find_object = { nome: name_attore };
  const attore = searchAttore(find_object);
  attore.then((actor) => {
    res.send(actor);
  });
});

app.post("/attore", function (req, res) {
  if (req.body.nome == undefined || req.body.nome.length == 0) {
    res.status(400).send("Nome attore mancante");
  }

  if (req.body.cognome == undefined || req.body.cognome.length == 0) {
    res.status(400).send("Cognome attore mancante");
  }

  const nuovo_attore = {
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

  const insert = insertAttore(nuovo_attore);
  insert.then((actor) => {
    console.log(typeof actor);
    res.status(200).send("Attore creato");
  });
});

app.delete("/attore", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }

  const id_da_cancellare = req.body.id;
  const attore = deleteAttore(id_da_cancellare);
  attore.then((actor) => {
    console.log(actor);
    res.send(actor);
  });
});

app.put("/attore", function (req, res) {
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
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const attore = updateAttore(find_object, update_object);
  attore.then((actor) => {
    console.log(actor);
    res.send(actor);
  });
});

require("./index-registi.js")(app, fs, mongoose);
