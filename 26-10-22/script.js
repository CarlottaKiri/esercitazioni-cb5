let mixArr = ["Carlotta", "Patanè", 22, "Diploma scuola superiore"];
console.log(mixArr);

mixArr.splice(2, 1);
console.log(mixArr);

mixArr.splice(2, 0, "06-01-2000");
console.log(mixArr);

mixArr[0] = mixArr[0].toUpperCase();
console.log(mixArr);

mixArr[1] = mixArr[1].toUpperCase();
console.log(mixArr);

//AVANZATO

let str = "#######";

for (let i = 0; i <= 6; i++) {
  console.log(str.slice(i));
}
