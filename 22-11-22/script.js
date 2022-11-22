import { somma, sottrazione, moltiplicazione, divisione } from "./calc.js";
import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const my_url = url.parse(req.url, true).pathname;
  const params = url.parse(req.url, true).query;
  const { param1, param2 } = params;
  console.log(param1, param2);

  switch (my_url) {
    case "/home":
      res.write("home");
      break;
    case "/calcolatrice":
      res.write("calcolatrice");
      break;
    case "/somma":
      //res.write("somma");
      res.write(`${somma(param1, param2)}`);
      break;
    case "/sottrazione":
      res.write(`${sottrazione(param1, param2)}`);
      break;
    case "/moltiplicazione":
      res.write(`${moltiplicazione(param1, param2)}`);
      break;
    case "/divisione":
      res.write(`${divisione(param1, param2)}`);
      break;
    default:
      res.write(
        "<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>"
      );
  }
  res.end();
});

server.listen(3000);
