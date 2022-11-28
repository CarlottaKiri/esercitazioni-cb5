const express = require(`express`);
const app = express();
const calc_module = require("./src/modulo_calcolatrice");

app.use(express.static(`public`));

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000");
});

app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

app.get("/calcolatrice", function (req, res) {
  let par1 = req.query.param1;
  let par2 = req.query.param2;
  let par3 = req.query.param3;
  let result;
  switch (
    par3 //faccio uno switch delle varie operazioni
  ) {
    case "somma":
      result = calc_module.somma(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "sottrazione":
      result = calc_module.sottrazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "moltiplicazione":
      result = calc_module.moltiplicazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "divisione":
      result = calc_module.divisione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "modulo":
      result = calc_module.modulo(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    default:
      console.log("error");
      res.status(404).json({ risultato: "not found" });
  }
});
