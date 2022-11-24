// Funzioni operazioni
function somma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function sottrazione(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function divisione(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function moltiplicazione(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

const express = require("express");
const app = express();
app.use(express.static("public")); //2

app.listen(3000, () => {
  //avvia il server sulla porta 3000
  console.log("server in esecuzione sulla porta 3000");
});

app.get("/calcolatrice", function (req, res) {
  res.sendFile("calcolatrice.html", { root: __dirname + "/src/html" }); //1
});
app.get("/pagina_somma", function (req, res) {
  res.sendFile("somma.html", { root: __dirname + "/src/html" }); //1
});
app.get("/pagina_sottrazione", function (req, res) {
  res.sendFile("sottrazione.html", { root: __dirname + "/src/html" }); //1
});
app.get("/pagina_moltiplicazione", function (req, res) {
  res.sendFile("moltiplicazione.html", { root: __dirname + "/src/html" }); //1
});
app.get("/pagina_divisione", function (req, res) {
  res.sendFile("divisione.html", { root: __dirname + "/src/html" }); //1
});

app.get("/somma", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  risultato = somma(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send({ risultato });
});
app.get("/sottrazione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  risultato = sottrazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send({ risultato });
});
app.get("/moltiplicazione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  risultato = moltiplicazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send({ risultato });
});
app.get("/divisione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro1:" + param1, "parametro2:" + param2);
  risultato = divisione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send({ risultato });
});
