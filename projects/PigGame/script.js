'use strict'

const diceEl = document.querySelector("img");
const currScoreEls = [document.querySelector(".current--0"), document.querySelector(".current--1")]
const scoreEls = [document.querySelector(".score--0"), document.querySelector(".score--1")];
const scores = [0, 0];
const playerEls = [document.querySelector('.player--0'), document.querySelector('.player--1')];

const btnHold = document.querySelector(".hold");
const btnRoll = document.querySelector(".roll-dice");
const btnNewgame = document.querySelector(".new-game");

let currScore, activePlayer;

const toggleActivePlayerUI = () => {
  playerEls[activePlayer].classList.toggle('active-player');
}

const initGame = () => {
  currScore = 0;
  activePlayer = 0;

  diceEl.classList.add('hidden');
  playerEls[activePlayer].classList.add('active-player')
}

const resetGame = () => {
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  playerEls[activePlayer].classList.remove('player-win');
  toggleActivePlayerUI();

  for (let i = 0; i < 2; i++) {
    scoreEls[i].textContent = 0;
    currScoreEls[i].textContent = 0;
    scores[i] = 0;
  }
}

initGame();

const switchPlayer = () => {
  currScoreEls[activePlayer].textContent = 0;

  currScore = 0;
  toggleActivePlayerUI();
  activePlayer ^= 1;
  toggleActivePlayerUI();
}


btnRoll.addEventListener('click', () => {
  diceEl.classList.remove('hidden');

  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.src = `dice-${dice}.png`

  if (dice !== 1) {
    currScore += dice;
    currScoreEls[activePlayer].textContent = currScore;
  } else {
    switchPlayer();
  }
})

btnHold.addEventListener('click', () => {
  scores[activePlayer] += currScore;
  scoreEls[activePlayer].textContent = scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    playerEls[activePlayer].classList.add('player-win');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
  }
  else
    switchPlayer();
});

btnNewgame.addEventListener('click', () => {
  resetGame();
  initGame();
})

