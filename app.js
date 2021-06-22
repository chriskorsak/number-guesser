// game variables
let min = 1,
    max = 10,
    winningNumber = 2,
    guessesLeft = 3;

//interface elements
const game = document.querySelector('.game'),
      guessInput = document.querySelector('input[type="number"]'),
      form = document.querySelector('form');
      minNumberSpan = document.querySelector('#min-number'),
      maxNumberSpan = document.querySelector('#max-number'),
      message = document.querySelector('#message');

//assign min and max numbers to UI spans
minNumberSpan.textContent = min;
maxNumberSpan.textContent = max;

//add event listener to form submit
form.addEventListener('submit', guess);

function guess(e) {
  e.preventDefault();
  // assign user input value
  const guess = Number(guessInput.value);
  
  //validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  }

  //pick winning number
  if (guess === winningNumber) {
    setMessage(`You win! The correct number is ${winningNumber}!`, 'green');
    guessInput.style.borderColor = 'green';
    guessInput.disabled = 'true';
  } else {  
    //pick inccorect number  
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      guessInput.disabled = 'true';
      setMessage(`You lose! Game over. The correct number is ${winningNumber}.`, 'red');
    } else {
      setMessage(`Incorrect. You have ${guessesLeft} guesses left.`, 'red');
      guessInput.style.borderColor = 'red';
    }
  }

}

function setMessage(msgText, msgColor) {
  message.textContent = msgText;
  message.style.color = msgColor;
}

