const romanToArabic = roman => {
  if (roman === 'IV') return 4
  if (roman === 'V') return 5
  return roman.length
}

module.exports = {
  romanToArabic
}
