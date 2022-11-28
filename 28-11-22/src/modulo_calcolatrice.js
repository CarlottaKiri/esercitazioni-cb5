function somma(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function sottrazione(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function divisione(num1, num2) {
  if (parseFloat(num2) === 0) {
    return "Impossibile dividere per 0. Scegliere un altro numero.";
  }
  return parseFloat(num1) / parseFloat(num2);
}

function moltiplicazione(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}
function modulo(num1, num2) {
  return parseFloat(num1) % parseFloat(num2);
}
module.exports = { somma, sottrazione, divisione, moltiplicazione, modulo };
