let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let EUR = 4.69;
let USD = 4.37;
let GBP = 5.32;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
   
    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {

        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;
    }
    formElement.addEventListener("reset", (event) => {
        resultElement.innerText = "";
      });

    resultElement.textContent = result.toFixed(2) + " " + currency;
});