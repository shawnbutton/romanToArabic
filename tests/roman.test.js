/* eslint-env jest */

const sut = require('../src/roman')

describe('Roman to Arabic Number Convertor', () => {
  it.each([
    ['I', 1],
    ['II', 2],
    ['III', 3],
    ['IV', 4],
    ['V', 5]
  ])('converts %s to %i', (given, expected) => {
    expect(sut.romanToArabic(given)).toEqual(expected)
  })

})
