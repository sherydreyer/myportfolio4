"use strict";
let words = ["javascript", "monkey", "amazing", "pancake"];
let word = pickWord();
let answerArray = [];
setupAnswerArray();
let remainingLetters = word.length;
let guess;
let lives = 3;
//main game loop
alert("Welcome to the Hangman Game");
while (remainingLetters > 0 && lives > 0) {
    //show player progress
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only!");
    } else {
        var correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;

    }
}
//after while loop
showAnswerAndCongratulatePlayer();

function pickWord() {
    // Return a random word
   return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray() {
    // Return the answer array    
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    
    }
 
}
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
}
function getGuess() {
    // Use prompt to get a guess
   return  (prompt("Guess a single letter or click 'cancel' to exit.\n You have " 
   + lives + " left"));
}
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    guess = guess.toLowerCase();
    let correctG = 0;
    for (let j = 0; j < word.length; j++) {
        if (guess === word[j]) {
            if (answerArray[j] !== "_") {
                alert("You have already guessed this letter " + guess);                 
                break;

            } else {
                answerArray[j] = guess;
                correctG++;                 

            }
        }

    }
    if (correctG  === 0) {
        lives--;
    }
    return correctG ;
}
function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert("Sorry to see you leaving.\nThe answer was " + word);
    } else if (remainingLetters === 0) {
        alert("Congratulations! The word is " + word);
    } else if (lives === 0) {
        alert("You ran out of lives.The word was " + word);
    } else {
        alert("Something seriously went wrong!");
    }
}
