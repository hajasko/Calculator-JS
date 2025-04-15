function displaySum() {
    let firstNumber = document.querySelector('[name=elso-szam]').value;
    let secondNumber = document.querySelector('[name=masodik-szam]').value;
    document.querySelector(".js-container").innerText = `${ firstNumber } + ${ secondNumber } = ${ firstNumber + secondNumber }`;
  }
  
  document.querySelector(".js-plus").addEventListener("click", displaySum);
  
  function formSubmitted(event) {
    event.preventDefault();
  }
  
  document.querySelector(".js-form").addEventListener("submit", formSubmitted);