/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let currentInput = ''; 
let previousInput = ''; 
let operator = ''; 


/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button'); 
const display = document.querySelector('.display');


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (!isNaN(value) || value === '.') { 
      currentInput += value;
      updateDisplay(currentInput);
    } else if (value === 'C') {
      clear();
    } else if (value === '=') { 
      calculate();
    } else { 
      operator = value;
      previousInput = currentInput;
      currentInput = ''; 
    }
  });
});


/*-------------------------------- Functions --------------------------------*/
function updateDisplay(value) {
  display.innerText = value; 
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return; 

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay(currentInput); 
}

function clear() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0'); 
}
