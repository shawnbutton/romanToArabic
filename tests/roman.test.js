/* eslint-env jest */

const sut = require('../src/roman')

describe('Roman to Arabic Number Convertor', () => {
  describe('single digit numbers', () => {
    it.each([
      ['I', 1],
      ['II', 2],
      ['III', 3],
      ['IV', 4],
      ['V', 5],
      ['VI', 6],
      ['VII', 7],
      ['VIII', 8],
      ['IX', 9]
    ])('converts %s to %i', (given, expected) => {
      expect(sut.romanToArabic(given)).toEqual(expected)
    })
  })

  describe('ten and teens', () => {
    it.each([
      ['X', 10],
      ['XI', 11],
      ['XIV', 14],
      ['XV', 15],
      ['XVI', 16],
      ['XIX', 19]
    ])('converts %s to %i', (given, expected) => {
      expect(sut.romanToArabic(given)).toEqual(expected)
    })



  })
})
