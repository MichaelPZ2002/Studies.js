let hora = 6;
let saludo;
if (
  hora == 6 ||
  hora == 7 ||
  hora == 8 ||
  hora == 9 ||
  hora == 10 ||
  hora == 11
) {
  saludo = "Buenos dias";
} else if (
  hora == 12 ||
  hora == 13 ||
  hora == 14 ||
  hora == 15 ||
  hora == 16 ||
  hora == 17 ||
  hora == 18
) {
  saludo = "Buenas tardes";
} else if (
  hora == 19 ||
  hora == 20 ||
  hora == 21 ||
  hora == 22 ||
  hora == 23 ||
  hora == 24
) {
  saludo = "Buenas noches";
} else if (
  hora == 0 ||
  hora == 1 ||
  hora == 2 ||
  hora == 3 ||
  hora == 4 ||
  hora == 5 ||
  hora == 6
) {
  saludo = "Durmiendo";
}

console.log(saludo);
/////////////////
////////////////
// Forma mucho mas corta

if (hora >= 6 && hora <= 11) {
  saludo = "Buenos Dias";
} else if (hora >= 12 && hora <= 18) {
  saludo = "Buenas tardes";
} else if (hora >= 19 && hora <= 24) {
  saludo = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  saludo = "Durmiendo";
}

console.log(saludo);
