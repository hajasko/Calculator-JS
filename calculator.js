
function displayResult(operationSymbol, operationFunction) {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    let result = operationFunction(firstNumber, secondNumber)
    document.querySelector(".js-container").innerText = `${ firstNumber } ${operationSymbol} ${ secondNumber } = ${result}`;
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