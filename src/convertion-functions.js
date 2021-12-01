const initialCurrencyToUSD = (amount, initialCurrency, currencyRates) =>  {
    return amount*currencyRates[initialCurrency]    
}

const targetCurrencyFromUSD = (amount, finalCurrency, currencyRates) =>  {
    return amount/currencyRates[finalCurrency]    
}

const initialCurrencyToTargetCurrency = (amount, initialCurrency, finalCurrency, currencyRates) =>  {
    usdAmount = initialCurrencyToUSD(amount, initialCurrency, currencyRates)
    targetCurrencyAmount = targetCurrencyFromUSD(usdAmount, finalCurrency, currencyRates)
    return targetCurrencyAmount;
}

module.exports = {
    initialCurrencyToTargetCurrency,
};