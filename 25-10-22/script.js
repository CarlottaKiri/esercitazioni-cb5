let inputOperation = prompt("Scegli il simbolo per la tua operazione: +,-,*,/");
let number1 = parseFloat(prompt("Inserisci il primo valore numerico"));
let number2 = parseFloat(prompt("Inserisci il secondo valore numerico"));

let result;

switch (inputOperation) {
  case "+":
    result = number1 + number2;
    console.log(result);
    alert(result);
    break;
  case "-":
    result = number1 - number2;
    console.log(result);
    alert(result);
    break;
  case "*":
    result = number1 * number2;
    console.log(result);
    alert(result);
    break;
  case "/":
    if (number2 == 0) {
      alert("Impossibile dividere per 0.");
    } else {
      result = number1 / number2;
      console.log(result);
      alert(result);
    }
    break;
  default:
    alert(inputOperation + "Non è un valore valido!");
}
