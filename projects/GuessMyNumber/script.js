'use strict'

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = Number.MIN_SAFE_INTEGER;

const setMessage = (message) => {
  document.querySelector(".message").textContent = message;
}

const handleLose = () => {
  setMessage("You Lose");
  document.querySelector(".check").style.display = 'none';
}

const resetGame = () => {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".check").style.display = '';
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  setMessage("Start guessing...");
}

document.querySelector(".check").addEventListener('click', function () {
  const guess = Number(document.querySelector(".guess").value);

  if (document.querySelector(".guess").value == '') {
    setMessage("No Number!");
  } else {

    if (guess > 20 || guess < 1) {
      setMessage("Number out of range!")
    } else if (guess == number) {
      setMessage("Correct Number!")

      highscore = Math.max(highscore, score);
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".check").style.display = 'none';
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = "violet";
      document.querySelector(".number").style.width = "30rem";
    } else {
      setMessage(guess > number ? "Too High!" : "Too Low");
      score--;

      if (score == 0) {
        handleLose();
      }

      document.querySelector(".score").textContent = score;
    }

  }

})

document.querySelector(".again").addEventListener('click', resetGame);