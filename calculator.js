
function readInput() {
  return [
    document.querySelector('[name=elso-szam]').value,
    document.querySelector('[name=masodik-szam]').value
  ]
}
 
function validateInput(firstInputString, secondInputString) {
  let errorMessage = '';
  let isValid = true;

  let firstNumber = Number(firstInputString);
  let secondNumber = Number(secondInputString);

  if (firstInputString === '') {
    errorMessage = 'Add meg az első számot! '
  }
  if (secondInputString === '') {
    errorMessage += 'Add meg a második számot!'
  }

  return {
    isValid: errorMessage.length === 0, 
    errorMessage
  }
}

function displayResult(operationSymbol, operationFunction) {
    let [firstInputString, secondInputString] = readInput();
    let {isValid, errorMessage} = validateInput(firstInputString, secondInputString);
    let innerTextValue = '';

    let firstNumber = Number(firstInputString);
    let secondNumber = Number(secondInputString);

    if (isValid) {
      let result = operationFunction(firstNumber, secondNumber);
      innerTextValue = `${ firstNumber } ${operationSymbol} ${ secondNumber } = ${result}`; 
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