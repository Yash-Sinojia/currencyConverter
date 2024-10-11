# currencyConverter

This is a web-based Currency Converter application that allows users to convert between different currencies in real-time. The app fetches live exchange rate data from a currency API and displays the conversion results.

Features
  -> Real-time Conversion: Users can input an amount and select currencies to convert between. The app fetches live exchange rates from the API and displays the result immediately.
  -> User-Friendly Interface: Simple and intuitive design for easy use.
  -> Theme Toggle (Optional): Users can toggle between light and dark themes (if implemented).
  -> LocalStorage Support (Optional): The app can remember the user's last selected currencies (if implemented).

Technologies Used
  -> HTML: Provides the structure of the app.
  -> CSS: Adds styling and layout to the page.
  -> JavaScript: Handles the logic for fetching data from the currency API, performing calculations, and updating the DOM.

How to Use
  1. Input an Amount: Enter the amount of money you want to convert.
  2. Select Currencies: Choose the currencies you want to convert from and to, using the dropdown menus.
  3. Get Conversion: Click the Convert button, and the converted amount will be displayed below.
  4. Setup Instructions

To run this project locally, follow these steps:

  1. Clone the Repository:
    -> Copy code
    -> git clone 
  
  2. Open the Project: Open the index.html file in your browser to view the app.
  
  3. Install Dependencies (Optional): If you're using any package manager for this project, be sure to run the necessary commands, although this project likely does not require any external libraries or dependencies.
  
  4.API Setup:
  
  -> You will need to sign up for a currency API (e.g., ExchangeRate-API) to get an API key.
  -> Replace the placeholder YOUR-API-KEY in the script.js file with your actual API key.
  -> Copy the below code in javaScript.
    const apiKey = 'YOUR-API-KEY'; // Replace with your actual API key
  5. Run the App: Once the API key is set, open index.html in your browser and start using the currency converter.

Future Enhancements
Theme Toggle: Add a feature to switch between light and dark modes.
LocalStorage: Store the user's last selected currencies in localStorage to remember their preferences between sessions.
API
This app fetches exchange rate data from a third-party currency API. You can register for an API key at the following site:
ExchangeRate-API
