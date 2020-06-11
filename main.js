"use strict";

let userNumber;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNumber(message, amountOfAttempts) {
  let number = 20;

  userNumber = prompt("Guess number from 1 to 100: ");

  function playAgain(msg) {
    let game = confirm(msg);
    console.log(game);
    if (!game) {
      alert("ok, thanks!");
      return;
    } else {
      return guessNumber("Lets play again", 10);
    }
  }

  if (amountOfAttempts === 0) {
    return playAgain("no attempts left, game is over, do you want to play more?");
  } else {
    amountOfAttempts = amountOfAttempts;
  }
  if (message && amountOfAttempts !== 0) {
    alert(message + (amountOfAttempts ? ", amount of attempts left is " + amountOfAttempts : ""));
  }

  function checkNumber() {
    if (userNumber === null) {
      alert("sorry, you decided to leave, thanks for the game!");
      return;
    } else if (!isNumber(userNumber)) {
      return guessNumber("enter number ", amountOfAttempts);
    } else if (number > userNumber) {
      return guessNumber(
        "the number is higher than you guessed, try again ", --amountOfAttempts
      );
    } else if (number < userNumber) {
      return guessNumber(
        "the number is less than you guessed, try again ", --amountOfAttempts
      );
    } else {
      return playAgain("correct! Do you want to play again?");
    }
  }

  console.dir(checkNumber);
  return checkNumber();
}

const play = guessNumber("", 10);
console.log(play);
