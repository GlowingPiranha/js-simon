// esercizio di Simon Says

window.numbersList = document.getElementById("numbers-list");

// 5 random numbers

// funzione per generare un numero casuale tra min e max
function getRndmInt(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// variabile per i numeri generati dove vengono salvati
window.generatedNums = [];

// funzione per mandare i numeri generati dove devono stare
function generateNumbers() {

  numbersList.innerHTML = ``;
  // svuoto numbersList
  generatedNums = [];

  for (let i = 0; i < 5; i++) {

    const num = getRndmInt(1, 30);
    generatedNums.push(num);
    // prendo i numeri e li pusho nell'array

    const listItem = document.createElement(`li`);
    listItem.textContent = num;
    numbersList.appendChild(listItem);

  }

}

// stessa roba di prima per le const globali
window.countdownVar = document.getElementById(`countdown`);

// funzione di countdown o timer di 15 secondi
let countdownId;

function timer(timeLeft) {

  if (timeLeft <= 0) {

    clearTimeout(countdownId)
    countdownVar.textContent = "Tempo scaduto!";
    numbersList.classList.add("d-none");
    form.classList.remove("d-none");
    return; // perchè mi sono scordato di return?
  }

  countdownVar.innerHTML = timeLeft;

  return setTimeout(() => { timer(--timeLeft) }, 1000)
  // timer viene diminuito ad ogni intervallo di 1000ms e me lo ritorna come text
}


