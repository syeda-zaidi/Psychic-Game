// comp chooses a random letter 
// user guesses the letter chosen by the comp 
// number of guesses = 8 
// record the guessed letter 
// reduce the number of guesses after every try 

// var Letter = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log (letter[5]);

var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

console.log (letters)

var compChoice = letters [Math.floor(Math.random()*letters.length)];
console.log ("comp chose " + compChoice);

document.onkeyup = function () {
    var userGuess = event.key;
    console.log (userGuess);
// do {
    if (userGuess === compChoice) {
        alert ("you guessed right !!");
    }

    else {
        alert ("you guessed wrong... try again");
    }
    
}
// while (userGuess < 4);
// else {
//     alert ("you lost");
// }
