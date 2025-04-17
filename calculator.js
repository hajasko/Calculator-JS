
function displayResult(operationSymbol, operationFunction) {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    let result = operationFunction(firstNumber, secondNumber)
    document.querySelector(".js-container").innerText = `${ firstNumber } ${operationSymbol} ${ secondNumber } = ${result}`;
}

function displaySum() {
    let sum = (a, b) => a + b;
    displayResult('+', sum)
  }
  
  function displayDiff() {
    let diff = (a, b) => a - b; 
    displayResult('-', diff);
  }

  function displayProd() {
   let prod = (a, b) => a * b;
   displayResult('*', prod);
  }

  function displayDiv() {
    let div = (a, b) => a / b;
    displayResult('/', div );
  }

  function displayMod() {
    let mod = (a, b) => a % b;
    displayResult('%', mod);
  }

  document.querySelector(".js-plus").addEventListener("click", displaySum);
  document.querySelector(".js-minus").addEventListener("click", displayDiff);
  document.querySelector(".js-times").addEventListener("click", displayProd);
  document.querySelector(".js-division").addEventListener("click", displayDiv);
  document.querySelector(".js-modulus").addEventListener("click", displayMod);
  
  function formSubmitted(event) {
    event.preventDefault();
  }
  
  document.querySelector(".js-form").addEventListener("submit", formSubmitted);