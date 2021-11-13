/* eslint-env jest */

const sut = require('../src/roman')

describe('Roman to Arabic Number Convertor', () => {
  it.each([
    ['I', 1],
    ['II', 2],
    ['III', 3],
    ['IV', 4],
    ['V', 5],
    ['VI', 6],
    ['VII', 7],
    ['VIII', 8],
    ['IX', 9],
    ['X', 10]
  ])('converts %s to %i', (given, expected) => {
    expect(sut.romanToArabic(given)).toEqual(expected)
  })

})
