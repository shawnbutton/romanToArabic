const romanToArabic = roman => {
  let arabic = 0

  const symbols = {
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  for (const symbol in symbols) {
    while (roman.startsWith(symbol)) {
      arabic += symbols[symbol]
      roman = roman.slice(symbol.length)
    }
  }

  return arabic
}

module.exports = {
  romanToArabic
}
