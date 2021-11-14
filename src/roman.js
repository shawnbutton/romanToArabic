const romanToArabic = roman => {

  const symbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  const values = roman
    .split('')
    .map(symbol => symbols[symbol])

  if (values.length === 0) {
    return 0
  }

  if (values.length === 1) {
    return values[0]
  }

  if (values[0] < values[1]) {
    return values[1] - values[0] + romanToArabic(roman.slice(2))
  } else {
    return values[0] + romanToArabic(roman.slice(1))
  }
}

module.exports = {
  romanToArabic
}
