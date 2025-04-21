
function readInput() {
  return [
    document.querySelector('[name=elso-szam]').value,
    document.querySelector('[name=masodik-szam]').value
  ]
}

function validateStringInput (firstInputString, secondInputString) {
  let errorMessage = '';

  if (firstInputString === '') {
    errorMessage += 'Add meg az első számot! '
  }
  if (secondInputString === '') {
    errorMessage += 'Add meg a második számot!'
  }

  return errorMessage;
}
 
function validate(firstInputString, secondInputString,operationFunction) {
  let errorMessage = validateStringInput(firstInputString, secondInputString) + 
          validateResult(firstInputString,secondInputString, operationFunction);


  return {
    isValid: errorMessage.length === 0, 
    errorMessage
  }
}

function calculateResult (firstInputString, secondInputString, operationFunction) {
  let firstNumber = Number(firstInputString);
  let secondNumber = Number(secondInputString);
  return operationFunction(firstNumber, secondNumber);
}

function validateResult (firstInputString, secondInputString, operationFunction) {
  let result = calculateResult(firstInputString, secondInputString, operationFunction);

  if (Number.isNaN(result)) {
    return 'Az eredmény nem értelmezhető. ';
  }
  return '';
}

let history = [];

function updateHistory(value) {
  history = [value, ...history];
}

function renderHistory() {
  document.querySelector('.js-history-container').innerHTML = history.map((x, i) => `<li>${x} <a href="#" data-index="${i}">Delete</a></li>` ).join("");
}

function historyClicked(event) {
  let currentIndex = event.target.dataset.index;
  if (typeof currentIndex !== 'undefined') {
    history.splice(currentIndex, 1);
    renderHistory();
  }
}

document.querySelector('.js-history-container').addEventListener('click', historyClicked)

function displayResult(operationSymbol, operationFunction) {
    let [firstInputString, secondInputString] = readInput();
    let {isValid, errorMessage} = validate(firstInputString, secondInputString, operationFunction);
    let innerTextValue = ''; 
    
    if (isValid) {  
      let result = calculateResult(firstInputString, secondInputString, operationFunction);
      innerTextValue = `${ firstInputString } ${operationSymbol} ${ secondInputString } = ${result}`; 
      updateHistory(innerTextValue);
      renderHistory();
    } else {
      innerTextValue = errorMessage;
    }

    
    document.querySelector(".js-container").innerText = innerTextValue;
}

  document.querySelector(".js-plus").addEventListener("click", () => displayResult('+', (a, b) => a + b));
  document.querySelector(".js-minus").addEventListener("click", () => displayResult('-', (a, b) => a - b));
  document.querySelector(".js-times").addEventListener("click", () => displayResult('*', (a, b) => a * b));
  document.querySelector(".js-division").addEventListener("click", () => displayResult('/', (a, b) => a / b ));
  document.querySelector(".js-modulus").addEventListener("click", () => displayResult('%', (a, b) => a % b));
  
  function formSubmitted(event) {
    event.preventDefault();
  }
  
  document.querySelector(".js-form").addEventListener("submit", formSubmitted);