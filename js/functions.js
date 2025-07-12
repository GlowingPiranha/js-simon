// esercizio di Simon Says

window.numbersList = document.getElementById(`numbers-list`);
// lo dichiaro globale perchè sennò non lo prende da uno all'altro

// 5 random numbers

// funzione per generare un numero casuale tra min e max
function getRndmInt(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// variabile per i numeri generati dove vengono salvati
let generatedNums = [];

// funzione per mandare i numeri generati dove devono stare
function generateNumbers() {

  numbersList.innerHTML = ``;
  // svuoto numbersList
  generatedNums = [];

  for (let i = 0; i < 5; i++) {

    const num = getRndmInt(1, 30);
    generatedNums.push(num);

    const list = document.createElement(`list`);
    list.textContent = num;
    numbersList.appendChild(list);
  }

}

generateNumbers()