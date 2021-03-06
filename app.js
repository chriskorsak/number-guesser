// game variables
let min = 1,
    max = 10,
    winningNumber = getRandomNumber(min, max),
    guessesLeft = 3;

//interface elements
const game = document.querySelector('.game'),
      guessInput = document.querySelector('input[type="number"]'),
      form = document.querySelector('form');
      guessButton = document.querySelector('input[type="submit"]'),
      minNumberSpan = document.querySelector('#min-number'),
      maxNumberSpan = document.querySelector('#max-number'),
      message = document.querySelector('#message');

//assign min and max numbers to UI spans
minNumberSpan.textContent = min;
maxNumberSpan.textContent = max;

//add event listener to form submit
form.addEventListener('submit', guess);
//add event listener to form for new game
form.addEventListener('mousedown', function(e) {
  if (e.target.classList.contains('new-game')) {
    location.reload();
  }
})


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
    gameOver(true, `You win! The correct number is ${winningNumber}!`);
  } else {  
    //pick inccorect number  
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `You lose! Game over. The correct number is ${winningNumber}.`);
    } else {
      setMessage(`Incorrect. You have ${guessesLeft} guesses left.`, 'red');
      guessInput.style.borderColor = 'red';
    }
  }
}

//won is a boolean val. did they win? ex. true.
function gameOver(won, message) {
  let color;
  won === true ? color = 'green' : color = 'red';
  setMessage(message, color);
  guessInput.style.borderColor = color;
  guessInput.disabled = 'true';

  //change submit button text
  guessButton.value = 'New Game';
  //add class to button
  guessButton.classList.add('new-game');
}

function setMessage(msgText, msgColor) {
  message.textContent = msgText;
  message.style.color = msgColor;
}

function getRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1) + min));
}