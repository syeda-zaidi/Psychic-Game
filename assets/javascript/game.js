// comp chooses a random letter 
// user guesses the letter chosen by the comp 
// number of guesses = 8 
// record the guessed letter 
// reduce the number of guesses after every try 

// var Letter = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log (letter[5]);

var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

console.log(letters)

// var compChoice = letters[Math.floor(Math.random() * letters.length)];
// console.log("comp chose " + compChoice);

var wins = 0;
var losses = 0;
var guesses = 3;

var winstext = document.getElementById("wins-text");
var lossestext = document.getElementById("losses-text");
var guessestext = document.getElementById("guesses-text");
// var guessedletters = document.getElementById("guessed-letters");

// funtion makeChoice (compChoice); {
var compChoice = letters[Math.floor(Math.random() * letters.length)];
console.log("comp chose " + compChoice);

// function resetgame () {
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("user chose " + userGuess);

    // if (userGuess === letters) {

    if (userGuess === compChoice) {
        alert("you guessed right !!");
        wins++;
    }

    else if (userGuess !== compChoice && guesses !== 0) {
        alert("you guessed wrong... try again");
        guesses--;

        alert("No of guesses left " + guesses);

        // while (guesses > 0);
    }

    else if (guesses < 1) {
        alert("you lost");
        losses++;
    }

    winstext.textContent = "wins : " + wins;
    lossestext.textContent = "losses : " + losses;
    guessestext.textContent = "guesses : " + guesses;
    // guessesletters.textContent = "guessed letters : " + guessedletters;

}

// else if (userGuess !== letters) {
//     alert("please press a valid letter key");
// }



