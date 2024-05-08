// Variable declarations
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let maxGuesses = 10;

function checkGuess() {
    let userInput = document.getElementById("userInput").value;
    let resultText = document.getElementById("result");
    guessCount++;

    // Conditional statement
    if (userInput == randomNumber) {
        resultText.textContent = "Congratulations! You guessed it right!";
        drawCircle("green");
    } else if (userInput > randomNumber) {
        resultText.textContent = "Too high! Try again.";
        drawCircle("red");
    } else {
        resultText.textContent = "Too low! Try again.";
        drawCircle("blue");
    }

    // Selection statement
    if (guessCount >= maxGuesses) {
        resultText.textContent = "Sorry, you've run out of guesses. The number was " + randomNumber + ".";
        document.getElementById("guessButton").disabled = true;
        drawCircle("gray");
    }
}

function drawCircle(color) {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.stroke();
}

// Event listener and function call
document.getElementById("guessButton").addEventListener("click", checkGuess);
