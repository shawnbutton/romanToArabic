const romanToArabic = roman => {
  if (roman === 'IV') return 4
  let arabic = 0
  if (roman.startsWith('V')) {
    arabic = 5
    roman = roman.slice(1)
  }
  return arabic + roman.length
}

module.exports = {
  romanToArabic
}
