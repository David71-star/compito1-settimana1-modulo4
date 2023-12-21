// ESERCIZIO 1

let controlloUno = function (x, y) {
  if (x + y === 50 || x === 50 || y === 50) {
    console.log(true + " esercizio 1");
  } else {
    console.log(false + " esercizio 1");
  }
};
let stampaUno = controlloUno(18, 32);

// ESERCIZIO 2

let controlloDue = function (stringa, posizione, correzione) {
  let formaCorretta = "";
  formaCorretta =
    stringa.slice(0, posizione) + correzione + stringa.slice(posizione + 1);
  console.log(formaCorretta);
  //   let correzione = stringa.split("");

  // stringa[i] += stringa[i].charAt(posizione);
  // return stringa;

  //   console.log(stringa);
};
let stampaDue = controlloDue("Nel 2026 uscirà Grand Theft Auto VI", 7, "5");

// ESERCIZIO 3

let controlloTre = function (x, y) {
  if (
    ((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) &&
    ((y >= 40 && y <= 60) || (y >= 70 && y <= 100))
  ) {
    console.log(true + " esercizio 3");
  } else {
    console.log(false + " esercizio 3");
  }
};
let stampaTre = controlloTre(99, 50);

// ESERCIZIO 4

let controlloQuattro = function (città) {
  if (città.startsWith("Los") || città.startsWith("New")) {
    console.log(true + " esercizio 4");
  } else {
    console.log(false + " esercizio 4");
  }
};
let stampaQuattro = controlloQuattro("New York");

// ESERCIZIO 5

const arrayUno = [167, 342, 114];
let somma = 0;
let controlloCinque = function (arrayUno) {
  for (let i = 0; i < arrayUno.length; i++) {
    somma += arrayUno[i];
  }
  return somma;
};
let stampaCinque = controlloCinque(arrayUno);
console.log(stampaCinque);

// // ESERCIZIO 6

// const arrayDue = [2, 1, 224];
// let controlloSei = function (arrayDue) {
//   if (!arrayDue.includes(1) || !arrayDue.includes(3)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// let stampaSei = controlloSei(arrayDue);

// ESERCIZIO 6

const arrayDue = [3, 42, 1];
let controlloSei = function (arrayDue) {
  return !arrayDue.includes(1) || !arrayDue.includes(3);
};
let stampaSei = controlloSei(arrayDue);
console.log(stampaSei);

// ESERCIZIO 7

let controlloSette = function (gradi) {
  if (gradi < 90) {
    console.log("acuto");
  } else if (gradi === 90) {
    console.log("retto");
  } else if (gradi === 180) {
    console.log("piatto");
  } else if (gradi > 90 && gradi < 180) {
    console.log("ottuso");
  }
};
let stampaSette = controlloSette(45);

// ESERCIZIO 8

let controlloOtto = function (frase) {
  let parole = frase.split(" ");
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase();
  }
  return parole.join("");
};
let stampaOtto = controlloOtto("Fabbtica Italiana Automobili Torino");
console.log(stampaOtto);

console.log("ESERCIZI EXTRA");

// ESERCIZIO 1 EXTRA

// let controlloUnoExtra = function (parola) {
//   const contaCaratteri = {};
//   for (let i = 0; i < parola.length; i++) {
//     // console.log(parola[i]);
//     let carattere = parola[i];
//     if (contaCaratteri[carattere]) {
//       contaCaratteri[carattere]++;
//     } else {
//       contaCaratteri[carattere] = 1;
//     }
//   }

//   caratterePiùFrequente = "";
//   conteggioMax = 0;

//   for (let i = ; i < array.length; i++) {
//     const element = array[i];

//   }
// };
// let stampaUnoExtra = controlloUnoExtra("coordinamento");
