// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

const { isAmountInvalid, isCurrencyInvalid } = require('../src/validation-functions.js');
const { initialCurrencyToTargetCurrency } = require('../src/convertion-functions.js');

describe('isAmountInvalid()', () => {
  test('should return true when the amount is undefined"', () => {
    let amount = undefined;
    const result = isAmountInvalid(amount);
    expect(result).toBe(true);
  });
  test('should return true when the amount is negative"', () => {
    let amount = -5;
    const result = isAmountInvalid(amount);
    expect(result).toBe(true);
  });
  test('should return false when the amount is a positive number"', () => {
    let amount = 5;
    const result = isAmountInvalid(amount);
    expect(result).toBe(false);
  });
});

describe('isCurrencyInvalid()', () => {
  test('should return true when the currency is undefined"', () => {
    let currency = undefined;
    const result = isCurrencyInvalid(currency);
    expect(result).toBe(true);
  });
  test('should return false when the currency is a string"', () => {
    let currency = "CAD";
    const result = isCurrencyInvalid(currency);
    expect(result).toBe(false);
  });
});

describe('initialCurrencyToTargetCurrency()', () => {
  test('should return 20 when exchanging 1USD to MXN"', () => {
    let currencyRates = {
      'USD': 1,
      'CAD': .85,
      'MXN': .05,
    };
    const result = initialCurrencyToTargetCurrency(1, 'USD', 'MXN', currencyRates)
    expect(result).toBe(20);
  });
  test('should return 170 when exchanging 10CAD to MXN"', () => {
    let currencyRates = {
      'USD': 1,
      'CAD': .85,
      'MXN': .05,
    };
    const result = initialCurrencyToTargetCurrency(10, 'CAD', 'MXN', currencyRates)
    expect(result).toBe(170);
  });
});
