//ESERCIZIO 1

function calculator(num1, num2, operation) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      alert("Operazione non valida.");
  }
}

console.log(calculator(8, 4.3, "-"));
console.log(calculator(18, 6, "/"));
console.log(calculator(9, 2.3, "*"));
console.log(calculator(0, 3, "+"));

//ESERCIZIO 2

const pikachu = {
  name: "Pikachu",
  age: 26,
  color: "Yellow",
  owners: ["Ash Ketchum", "Pokémon Players", "Carlotta"],
  attacks: {
    a: "colpocoda",
    b: "tuonoshock",
    c: "ruggito",
  },

  attack: function () {
    console.log("Pikachu attacca!");
  },
};

console.log(pikachu);
pikachu.attack();
console.log(pikachu.name);
console.log(pikachu.attacks.a);
console.log(Object.isFrozen(pikachu));

const pikachuValues = Object.values(pikachu);
console.log(pikachuValues);

pikachu.cute = true;
pikachu.color = "Yellow and Black";
console.log(pikachu);

//AVANZATO

function superCalculator(nums, operation) {
  let result = parseFloat(nums[0]);

  switch (operation) {
    case "+":
      for (let i = 1; i < nums.length; i++) {
        result += parseFloat(nums[i]);
      }
      return result;
    case "-":
      for (let i = 1; i < nums.length; i++) {
        result -= parseFloat(nums[i]);
      }
      return result;
    case "*":
      for (let i = 1; i < nums.length; i++) {
        result *= parseFloat(nums[i]);
      }
      return result;
    case "/":
      for (let i = 1; i < nums.length; i++) {
        result /= parseFloat(nums[i]);
      }
      return result;
    default:
      alert("Operazione non valida.");
  }
}

console.log(superCalculator([8, 3, 12], "+"));
console.log(superCalculator([12, 2, 5], "/"));
console.log(superCalculator([150, 3, 64], "-"));
console.log(superCalculator([34, 3.7, 11], "*"));
