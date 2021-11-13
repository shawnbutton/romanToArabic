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

  describe('powers of ten', () => {
    it.each([
      ['XX', 20],
      ['XXX', 30],
      ['XL', 40],
      ['L', 50],
      ['LX', 60],
      ['LXX', 70],
      ['LXXX', 80],
      ['XC', 90]
    ])('converts %s to %i', (given, expected) => {
      expect(sut.romanToArabic(given)).toEqual(expected)
    })
  })

  describe('random numbers in the tens range', () => {
    it.each([
      ['XXIII', 23],
      ['XXXIV', 34],
      ['XLVIII', 48],
      ['LXIX', 69],
      ['XCIX', 99]
    ])('converts %s to %i', (given, expected) => {
      expect(sut.romanToArabic(given)).toEqual(expected)
    })
  })

  describe('powers of hundred', () => {
    it.each([
      ['C', 100],
      ['CC', 200],
      ['CD', 400],
      ['D', 500],
      ['DC', 600],
      ['CM', 900]
    ])('converts %s to %i', (given, expected) => {
      expect(sut.romanToArabic(given)).toEqual(expected)
    })
  })


})
