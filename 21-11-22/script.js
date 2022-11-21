"use strict";

const argvs = process.argv;
const argv = argvs.slice(2);
const operation = argv[0];
const number1 = parseFloat(argv[1]);
const number2 = parseFloat(argv[2]);

// ESERCIZIO OBBLIGATORIO - IF

if (operation === "addizione") {
  console.log("Risultato addizione " + ": " + (number1 + number2));
}
if (operation === "sottrazione") {
  console.log("Risultato sottrazione " + ": " + (number1 - number2));
}
if (operation === "moltiplicazione") {
  console.log("Risultato moltiplicazione " + ": " + number1 * number2);
}
if (operation === "divisione") {
  console.log("Risultato divisione " + ": " + number1 / number2);
}

if (isNaN(number1) || isNaN(number2)) {
  console.log("Inserisci due valori numerici.");
  return;
}

// ESERCIZIO OBBLIGATORIO - SWITCH

switch (operation) {
  case "addizione":
    console.log("Risultato addizione " + ": " + (number1 + number2));
    break;
  case "sottrazione":
    console.log("Risultato sottrazione " + ": " + (number1 - number2));
    break;
  case "moltiplicazione":
    console.log("Risultato moltiplicazione " + ": " + number1 * number2);
    break;
  case "divisione":
    if (number2 === 0) {
      console.log("Impossibile dividere per 0. Scegli un altro numero.");
    } else {
      console.log("Risultato divisione " + ": " + number1 / number2);
    }
    break;
  default:
    console.log("Errore.");
    break;
}

// ESERCIZIO AVANZATO

const nums = [...argvs].slice(3);
let result = parseFloat(nums[0]);
switch (operation) {
  case "addizione":
    for (let i = 1; i < nums.length; i++) {
      result += parseFloat(nums[i]);
    }
    return console.log("Risultato addizione " + ": " + result);

  case "moltiplicazione":
    for (let i = 1; i < nums.length; i++) {
      result *= parseFloat(nums[i]);
    }
    return console.log("Risultato moltiplicazione " + ": " + result);

  default:
    alert("Operazione non valida.");
}
