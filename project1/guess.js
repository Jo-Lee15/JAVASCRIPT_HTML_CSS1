var secret = Math.floor(Math.random() * 11);
console.log(secret);
var correctGuess = false;

while (correctGuess == false) {


    var guess = parseInt(prompt("Please guess the secret number (1 - 10)"));

    if (guess === secret) {
        alert("Correct Answer");

        correctGuess = true;
    } else {
        alert("Incorrect Answer");

    }

}