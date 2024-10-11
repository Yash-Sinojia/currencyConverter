// Fetch exchange rates from API
const apiKey = 'ADD_YOUR_APKI_KEY_HERE'; // Replace with your ExchangeRate-API key
const apiURL = 'https://v6.exchangerate-api.com/v6/YOUR-API-KEY-WITHOUT-SPACES/latest/USD'; //Add you api key in its respective space without any spaces

let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let amount = document.getElementById("amount");
let result = document.getElementById("result");
let convertBtn = document.getElementById("convertBtn");
let themeSwitch = document.getElementById("themeSwitch");

// Get exchange rates and populate currency dropdowns
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const rates = data.conversion_rates;
        populateDropdowns(rates);
        loadSavedSettings();
    });

function populateDropdowns(rates) {
    for (let currency in rates) {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.text = option2.text = currency;
        fromCurrency.add(option1);
        toCurrency.add(option2);
    }
}

convertBtn.addEventListener("click", () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    if (!isNaN(amountValue)) {
        convertCurrency(amountValue, from, to);
    } else {
        result.innerText = "Please enter a valid amount.";
    }
});

function convertCurrency(amount, from, to) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const rateFrom = data.conversion_rates[from];
            const rateTo = data.conversion_rates[to];
            const convertedAmount = (amount / rateFrom) * rateTo;
            result.innerText = `Result: ${convertedAmount.toFixed(2)} ${to}`;
            saveSettings(from, to);
        });
}

// Toggle theme
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    saveTheme();
});

// Save selected currencies and theme to localStorage
function saveSettings(from, to) {
    localStorage.setItem("fromCurrency", from);
    localStorage.setItem("toCurrency", to);
}

function saveTheme() {
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem("theme", theme);
}

function loadSavedSettings() {
    const savedFrom = localStorage.getItem("fromCurrency");
    const savedTo = localStorage.getItem("toCurrency");
    const savedTheme = localStorage.getItem("theme");

    if (savedFrom) fromCurrency.value = savedFrom;
    if (savedTo) toCurrency.value = savedTo;
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
}
