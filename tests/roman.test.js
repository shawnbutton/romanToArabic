/* eslint-env jest */

const sut = require('../src/roman')

describe('Roman to Arabic Number Convertor', () => {
  it('converts I', () => {
    expect(sut.romanToArabic('I')).toEqual(1)
  })
})
