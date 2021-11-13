const romanToArabic = roman => {
  let arabic = 0

  if (roman.startsWith('X')) {
    arabic = 10
    roman = roman.slice(1)
  }

  if (roman.startsWith('V')) {
    arabic = arabic + 5
    roman = roman.slice(1)
  }

  if (roman === 'IV') {
    return arabic + 4
  }

  if (roman === 'IX') {
    return arabic + 9
  }

  return arabic + roman.length
}

module.exports = {
  romanToArabic
}
