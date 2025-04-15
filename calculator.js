function displaySum() {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    document.querySelector(".js-container").innerText = `${ firstNumber } + ${ secondNumber } = ${ firstNumber + secondNumber }`;
  }
  
  function displayDiff() {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    document.querySelector(".js-container").innerText = `${ firstNumber } - ${ secondNumber } = ${ firstNumber - secondNumber }`;
  }

  function displayProd() {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    document.querySelector(".js-container").innerText = `${ firstNumber } * ${ secondNumber } = ${ firstNumber * secondNumber }`;
  }

  function displayDiv() {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    document.querySelector(".js-container").innerText = `${ firstNumber } / ${ secondNumber } = ${ firstNumber / secondNumber }`;
  }

  function displayMod() {
    let firstNumber = Number(document.querySelector('[name=elso-szam]').value);
    let secondNumber = Number(document.querySelector('[name=masodik-szam]').value);
    document.querySelector(".js-container").innerText = `${ firstNumber } % ${ secondNumber } = ${ firstNumber % secondNumber }`;
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