const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanToArabic = roman => {
  const characterValues = roman
    .split('')
    .map(symbol => symbols[symbol])

  return convertValues(characterValues)
}

const convertValues = values => {
  if (values.length === 0) {
    return 0
  }

  if (values.length === 1) {
    return values[0]
  }

  if (values[0] < values[1]) {
    return values[1] - values[0] + convertValues(values.slice(2))
  } else {
    return values[0] + convertValues(values.slice(1))
  }
}

module.exports = {
  romanToArabic
}
