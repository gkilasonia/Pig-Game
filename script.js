const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

// BUTTONS
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;
let numberOne = 0;
let numberTwo = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// EVENT LISTENERS

btnRoll.addEventListener("click", roll);
btnHold.addEventListener("click", hold);
btnNew.addEventListener("click", init);

// FUNCATIONS

function roll() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `./img/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}

function hold() {
  if (activePlayer === 0) {
    numberOne += currentScore;
    score0El.textContent = numberOne;
    if (numberOne >= 100) {
      diceEl.src = `./img/you-win.png`;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      fadeBtn();
      btnRoll.removeEventListener("click", roll);
      btnHold.removeEventListener("click", hold);
    } else {
      switchPlayer();
    }
  } else {
    numberTwo += currentScore;
    score1El.textContent = numberTwo;
    if (numberTwo >= 100) {
      diceEl.src = `./img/you-win.png`;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      fadeBtn();
      btnRoll.removeEventListener("click", roll);
      btnHold.removeEventListener("click", hold);
    } else {
      switchPlayer();
    }
  }
}

function init() {
  currentScore = 0;
  numberOne = 0;
  numberTwo = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  appearBtn();
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  activePlayer = 0;
  btnRoll.addEventListener("click", roll);
  btnHold.addEventListener("click", hold);
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

function fadeBtn() {
  btnHold.classList.add("fade");
  btnRoll.classList.add("fade");
}

function appearBtn() {
  btnHold.classList.remove("fade");
  btnRoll.classList.remove("fade");
}
