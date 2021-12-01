// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

const { isAmountInvalid, isCurrencyInvalid } = require('./validation-functions.js');

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
const DEBUG = true;

const amount = process.argv[2];
const initialCurrency = process.argv[3];
const finalCurrency = process.argv[4];

if( DEBUG ) {
    console.log(`amount: ${amount}, initialCurrency: ${initialCurrency}, finalCurrency: ${finalCurrency}`)
}

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.

if(isAmountInvalid(amount)) {
    console.error("The amount must be a number greater than 0, Received: ", amount)
    process.exit(1);
}

if(isCurrencyInvalid(initialCurrency)) {
    console.error("The initial currency must be a valid symbol, Received: ", initialCurrency)
    process.exit(1);
}

if(isCurrencyInvalid(finalCurrency)) {
    console.error("The target currency must be a valid symbol, Received: ", finalCurrency)
    process.exit(1);
}


// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/

let USD = 1
let CAD = .85
let MXN = 1/20
// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

//#TODO: add conversion matrix from api call or try call to api from template url 
const currencyRates = {
    'USD': 1,
    'CAD': .85,
    'MXN': .05,
};

if( !currencyRates.hasOwnProperty(initialCurrency) ) {
    console.error("The initial currency must be one of: ", supportedCurrencies)
    process.exit(1);
}

if( !currencyRates.hasOwnProperty(finalCurrency) ) {
    console.error("The target currency must be one of: ", supportedCurrencies)
    process.exit(1);
}

// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.


const initialCurrencyToUSD = (amount, initialCurrency, currencyRates) =>  {
    return amount*currencyRates[initialCurrency]    
}

const targetCurrencyFromUSD = (amount, finalCurrency, currencyRates) =>  {
    return amount/currencyRates[finalCurrency]    
}

usdAmount = initialCurrencyToUSD(amount, initialCurrency, currencyRates)

targetCurrencyAmount = targetCurrencyFromUSD(usdAmount, finalCurrency, currencyRates);

if ( DEBUG ) {
    console.log(`usdAmount: ${usdAmount}, targetCurrencyAmount: ${targetCurrencyAmount}`)
}

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.

console.log(`${amount} ${initialCurrency} is ${targetCurrencyAmount} ${finalCurrency}`);