
// letters to be chosen by the computer 
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(letters)

var wins = 0;
var losses = 0;
var guesses = 3;
var compSelection;
var guessedLetter = [];

var winsText = document.getElementById ("wins-text");
var winsLosses = document.getElementById ("losses-text");
var guessesText = document.getElementById ("guesses-text");
var userGuesses = document.getElementById ("user-guesses");

winsText.textContent = ("wins : " + wins);
winsLosses.textContent = ("losses : " + losses);
guessesText.textContent = ("Guesses Left : " + guesses);
userGuesses.textContent = ("Guessed Letters so far : " + guessedLetter);

// setting compchoice var to make a random choice from the var letters 

function compChoice() {
    var compChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log("comp chose " + compChoice);

    return compChoice;
}
compSelection = compChoice();

function reset() {
    guesses = 3;
    compSelection = compChoice();
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("user chose " + userGuess);

    if (userGuess === compSelection) {
        alert("you guessed right !!");
        wins++;

        reset();
    }

    else if (userGuess !== compSelection && guesses !== 0) {
        alert("you guessed wrong... try again");
        guesses--;

        alert("No of guesses left " + guesses);

        if (guesses === 0) {
            losses++;
            alert("you lost " + losses + "time");

            reset();
        }
    }
    winsText.textContent=("wins : " + wins);
    

}


// else if (userGuess !== letters) {
//     alert("please press a valid letter key");
// }



