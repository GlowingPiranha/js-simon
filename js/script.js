// esercizio di Simon Says

// recupero i dati che mi servono

const countdownVar = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const form = document.getElementById("answers-form");
const message = document.getElementById("message");
const inputGroup = document.getElementById("input-group");


generateNumbers(); // chiamo le funzioni in script.js per poter distinguere quello che uso e posso riutillizare

timer(15);  //15 secondi perchè ho il cervello bacato e non riesco a memmorizzare con meno, vai così...
// delirio delle 2:30 am di sabato però funziona

// gestione submit
form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  // definisco le variabili
  const inputs = form.querySelectorAll("input[type='number']");
  // recupero gli elementi di tipo `number`

  const userNumbers = [];
  // array vuoto

  for (let i = 0; i < inputs.length; i++) {
    userNumbers.push(parseInt(inputs[i].value));
  }

  const guessed = [];
  // array vuoto

  // confronto i numeri dell'utente con quelli generati
  for (let i = 0; i < userNumbers.length; i++) {
    const userNum = userNumbers[i];

    let foundInGenerated = false;
    // uso false per il controllo

    for (let j = 0; j < generateNumbers.length; j++) {
      if (userNum === generateNumbers[j]) {
        foundInGenerated = true;
      }
    }

    if (foundInGenerated && !guessed.includes(userNum)) {
      guessed.push(userNum);
    }
  }
})