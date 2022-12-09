module.exports = function (app, fs) {
  const mongoose = require("mongoose");

  const schema_film = new mongoose.Schema({
    nome: String,
    anno_produzione: String,
    genere: { type: String, default: "" },
    regista: String,
    protagonista: String,
    durata: { type: String, default: "0" },
    candidature_oscar: { type: Number, default: -1 },
    lingua_originale: { type: String, default: "" },
    produzione: { type: String, default: "" },
    sequel: { type: Boolean, default: null },
  });
  const modelFilm = mongoose.model("films", schema_film);

  const insertFilm = async (film_object) => {
    try {
      const film = new modelFilm(film_object);
      return await film.save();
    } catch (error) {
      return error;
    }
  };

  const searchFilm = async (search_object) => {
    try {
      const search_result = modelFilm.find(search_object);
      return search_result;
    } catch (error) {
      return error;
    }
  };

  const deleteFilm = async (delete_object) => {
    try {
      return await modelFilm.deleteOne(delete_object);
    } catch (errore) {
      return errore;
    }
  };

  const updateFilm = async (find_object, update_object) => {
    try {
      console.log(find_object);
      const m_request = await modelFilm.findOneAndUpdate(
        find_object,
        update_object
      );
      console.log(m_request);
      return m_request;
    } catch (error) {
      console.log("ERROR: " + error);
      return error;
    }
  };
};
