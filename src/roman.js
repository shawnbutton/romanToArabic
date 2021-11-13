const romanToArabic = roman => {
  let arabic = 0

  if (roman === 'XL') {
    arabic = arabic + 40
    roman = roman.slice(2)
  }

  while (roman.startsWith('X')) {
    arabic = arabic + 10
    roman = roman.slice(1)
  }

  if (roman.startsWith('V')) {
    arabic = arabic + 5
    roman = roman.slice(1)
  }

  if (roman === 'IV') {
    arabic = arabic + 4
    roman = roman.slice(2)
  }

  if (roman === 'IX') {
    arabic = arabic + 9
    roman = roman.slice(2)
  }

  return arabic + roman.length
}

module.exports = {
  romanToArabic
}
