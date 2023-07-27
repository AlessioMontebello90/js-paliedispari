// chiedo all'utente una parola che andra inserita nella variabile stabilita al riconoscimento

const userWord = prompt("choose a word");

const wordL = userWord.length - 1;
let readWord = "";

// generiamo una funziona che legga la parola inserita dall'utente

function read(val) {
  for (let i = wordL; i >= 0; i--) {
    readWord += val[i];
  }
  return readWord;
}

// generiamo un ciclo IF che riconosca la palindromia della parola inserita dall'utente

const reversedWord = read(userWord);

if (userWord == reversedWord) {
  alert("A te, o poeta!!!!");
} else {
  alert("try again!!!!");
}
