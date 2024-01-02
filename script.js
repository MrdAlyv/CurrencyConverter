import data from "./data.json" assert { type: "json"};

const container = document.querySelector(".container");
const rates = data.rates;

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

Object.keys(rates).forEach(currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    fromCurrency.appendChild(option);
    toCurrency.appendChild(option.cloneNode(true));
});

convertBtn.addEventListener("click", () => {
    const fromRate = rates[fromCurrency.value];
    const toRate = rates[toCurrency.value];
    const convertedAmount = (amount.value * toRate) / fromRate;
    const result_input = ` ${convertedAmount.toFixed(2)} ${toCurrency.value}`;
    result.value = result_input
});
