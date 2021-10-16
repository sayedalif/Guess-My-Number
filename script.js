"use strict";
// this is the random number generator between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// this is the score
let score = 20;

// lets take high score as 0
let highScore = 0;

// making a message duntion so that i can keep the code dry 👇

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ Not Number!';

    displayMessage("⛔ Not Number!");
    // when the guess number is true 👇
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    // background-colour green
    document.querySelector("body").style.backgroundColor = "#60b347";

    // preserving the highscore 👇
    if (score > highScore) {
      highScore === score;
    }
    // selecting high score 👇
    document.querySelector(".highscore").textContent = score;

    // win the game and the secret number will show up
    document.querySelector(".number").textContent = secretNumber;

    // incresing the width of the secret number 👇
    document.querySelector(".number").style.width = "30rem";

    // when the guess number is too high or too low these message will pop up 👇
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // this is a ternary operator
      displayMessage(guess > secretNumber ? "📈 too high" : "📉 too low");

      score--;
      document.querySelector(".score").textContent = score;

      // when the score is less then 1 or equal to 1 then these massage will pop up 👇
    } else {
      displayMessage("💥 you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// again functionality

document.querySelector(".again").addEventListener("click", function () {
  // reseting the ? icon
  document.querySelector(".number").textContent = "?";

  // reseting the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // reseting the input value
  document.querySelector(".guess").value = "";
  // reseting the message
  displayMessage("Start Guessing...");

  // reseting the colour, if some one wins the game then the colour change will be noticed otherwise it gonna be same
  document.querySelector("body").style.backgroundColor = "#222";

  // reseting the score
  document.querySelector(".score").textContent = 20;

  // reseting the secret number width
  document.querySelector(".number").style.width = "15rem";
});
