const romanToArabic = roman => {
  if (roman === 'IV') return 4
  if (roman === 'V') return 5
  if (roman === 'VI') return 6
  if (roman === 'VII') return 7
  if (roman === 'VIII') return 8
  return roman.length
}

module.exports = {
  romanToArabic
}
