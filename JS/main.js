// - **se** il valore sarà uguale a quello scelto inizialmente dall'utente
//     - allora quest'ultimo avrà vinto
//     - altrimenti no

// - chiedo all'utente un parametro tra pari e dispari e chiedo all'utente di inserire un numero da 1 a 5

const choice = prompt('Choose between "odd" o "even"');
const userNum = parseInt(prompt("choose between 1 , 2 ,3 ,4 ,5 "));

// collego elementi html per stampa const

const choiceEl = document.getElementById("choice");
const userEl = document.getElementById("user-num");
const pcEl = document.getElementById("pc-num");
const resultEl = document.getElementById("result");

// stampo risultati visibili per l'utente

choiceEl.innerHTML = "your choice is: " + choice;
userEl.innerHTML = "your number is: " + userNum;
pcEl.innerHTML = "the computer number is: " + randomNum();

// genero una funzione per la generazione randomica del numero scelto dal PC
