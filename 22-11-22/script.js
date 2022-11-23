import { somma, sottrazione, moltiplicazione, divisione } from "./calc.js";
import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
  const my_url = url.parse(req.url, true).pathname;
  const params = url.parse(req.url, true).query;
  const { param1, param2 } = params;
  let risultato;
  let pagina;

  switch (my_url) {
    case "/home":
      const home = fs.readFileSync("./calcolatrice.html");
      res.write(home.toString());
      break;
    case "/calcolatrice":
      const calcolatrice = fs.readFileSync("./calcolatrice.html");
      res.write(calcolatrice.toString());
      break;
    case "/somma":
      pagina = fs.readFileSync("./somma.html").toString();

      res.write(pagina);
      if (!isNaN(param1) && !isNaN(param2) && param1 && param2) {
        risultato = somma(param1, param2);
        res.write(risultato.toString());
      } else {
        res.write("Per favore inserire dei valori numerici.");
      }
      break;
    case "/sottrazione":
      pagina = fs.readFileSync("./sottrazione.html").toString();

      res.write(pagina);
      if (!isNaN(param1) && !isNaN(param2) && param1 && param2) {
        risultato = sottrazione(param1, param2);
        res.write(risultato.toString());
      } else {
        res.write("Per favore inserire dei valori numerici.");
      }
      break;
    case "/moltiplicazione":
      pagina = fs.readFileSync("./moltiplicazione.html").toString();

      res.write(pagina);
      if (!isNaN(param1) && !isNaN(param2) && param1 && param2) {
        risultato = moltiplicazione(param1, param2);
        res.write(risultato.toString());
      } else {
        res.write("Per favore inserire dei valori numerici.");
      }
      break;
    case "/divisione":
      pagina = fs.readFileSync("./divisione.html").toString();

      res.write(pagina);
      if (!isNaN(param1) && !isNaN(param2) && param1 && param2) {
        risultato = divisione(param1, param2);
        res.write(risultato.toString());
      } else {
        res.write("Per favore inserire dei valori numerici.");
      }
      break;
    case "/style.css":
      const style = fs.readFileSync("./style.css");
      res.write(style.toString());
      break;
    default:
      res.write(
        "<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>"
      );
  }
  res.end();
});

server.listen(3000);
