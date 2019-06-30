document.addEventListener("DOMContentLoaded", function (event) {

    // letters to be chosen by the computer 
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(letters)

    // setting for 0
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var compSelection;
    var guessedLetter = [];


    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");
    var userGuesses = document.getElementById("user-guesses");

    // creating function compchoice to make a random choice from the array letters 
    function compChoice() {
        var compChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log("comp chose " + compChoice);

        return compChoice;
    }
    compSelection = compChoice();

    //creating a reset function 
    function reset() {
        guesses = 9;
        compSelection = compChoice();
        guessedLetter = [];
    }


    winsText.textContent = ("wins : " + wins);
    lossesText.textContent = ("losses : " + losses);
    guessesText.textContent = ("Guesses Left : " + guesses);
    userGuesses.textContent = ("Guessed Letters so far : " + guessedLetter);

    document.onkeyup = function (event) {

        var code = event.keyCode
        if (code > 64 && code < 91) {
            var userGuess = event.key;

            var userGuess = event.key.toLowerCase();
            console.log("user chose " + userGuess);
            guessedLetter.push(userGuess);

            if (userGuess === compSelection) {
                alert("you guessed right !!");
                wins++;

                reset();
            }

            else if (userGuess !== compSelection && guesses > 0) {
                guesses--;

                if (guesses === 0) {
                    losses++;

                    alert("you lost ! lets play again ");

                    reset();
                }
            }

            winsText.textContent = ("wins : " + wins);
            lossesText.textContent = ("losses : " + losses);
            guessesText.textContent = ("Guesses Left : " + guesses);
            userGuesses.textContent = ("Guessed Letters so far : " + guessedLetter);


        }
    }

});


