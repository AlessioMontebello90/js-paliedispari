// chiedo all'utente una parola che andra inserita nella variabile stabilita al riconoscimento

const userWord = prompt("choose a word");

const wordL = userWord.length - 1;

function read(val) {
  for (let i = wordL; i >= 0; i--) {
    readWord += val[i];
  }
  return readWord;
}
