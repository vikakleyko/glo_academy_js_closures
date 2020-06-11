"use strict";

let userNumber;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNumber(message, amountOfAttempts, number) {
  console.log("number to guess: " + number);

  function playAgain(msg) {
    let game = confirm(msg);
    if (!game) {
      alert("ok, thanks!");
      return;
    } else {
      return guessNumber("Lets play new game", 10, Math.floor(Math.random() * 101));
    }
  }
  
  if (amountOfAttempts === 0) {
    return playAgain("no attempts left, do you want to play again?");
  } else {
    amountOfAttempts = amountOfAttempts;
  }
  if (message && amountOfAttempts !== 0) {
    alert(message + (amountOfAttempts ? "amount of attempts left is " + amountOfAttempts : ""));
  }

  userNumber = prompt("Guess number from 1 to 100: ");

  function checkNumber() {
    if (userNumber === null) {
      alert("sorry, you decided to leave, thanks for the game!");
      return;
    } else if (!isNumber(userNumber)) {
      return guessNumber("enter number ", amountOfAttempts, number);
    } else if (number > userNumber) {
      return guessNumber(
        "the number is higher than you guessed, try again, ", --amountOfAttempts, number);
    } else if (number < userNumber) {
      return guessNumber(
        "the number is less than you guessed, try again, ", --amountOfAttempts, number);
    } else {
      return playAgain("CORRECT! Do you want to play again?");
    }
  }

  console.dir(checkNumber);
  return checkNumber();
}

const play = guessNumber("Lets play ", 10, Math.floor(Math.random() * 101));
console.log(play);
