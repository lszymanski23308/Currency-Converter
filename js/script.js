{
    const calculateResult = (amount, currency) => {
        const EUR = 4.69;
        const USD = 4.37;
        const GBP = 5.32;
        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "GBP":
                return amount / GBP;
        }
    };
    const onFormSubmit = (event, resultElement) => {
        event.preventDefault();
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        result = calculateResult(amount, currency);
        resultElement.textContent = result.toFixed(2) + "" + currency;
    };
    const onFormReset = (event, resultElement) => {
        resultElement.innerText = "";
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resultElement = document.querySelector(".js-result");
        formElement.addEventListener("submit", (event) => { onFormSubmit(event, resultElement) });
        formElement.addEventListener("reset", (event) => { onFormReset(event, resultElement) });
    };
    init();
} 