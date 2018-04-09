import { addTotal, sortCountries } from './utils'

import testData from './testData.json'

const toCountryCode = country => country.code

describe('addTotal', () => {
  it('should add combined number of medals as totals', () => {
    const country = { code: 'USA', gold: 12, silver: 2, bronze: 3 }
    const countryWithTotal = addTotal(country)

    expect(countryWithTotal.total).toBe(17)
  })
})

describe('sortCountries', () => {
  describe('when sorting by gold', () => {
    it('should sort by gold and silver when gold is equal', () => {
      const countries = [
        { code: 'RUS', gold: 12, silver: 2, bronze: 3 },
        { code: 'NED', gold: 3, silver: 12, bronze: 1 },
        { code: 'USA', gold: 12, silver: 7, bronze: 3 },
      ]
      const sorted = countries.sort(sortCountries('gold'))

      expect(sorted.map(toCountryCode)).toEqual(['USA', 'RUS', 'NED'])
    })
  })

  describe('when sorting by total', () => {
    it('should sort by total and gold when total is equal', () => {
      const countries = [
        { code: 'RUS', gold: 12, silver: 2, bronze: 10 },
        { code: 'NED', gold: 3, silver: 12, bronze: 7 },
        { code: 'USA', gold: 12, silver: 7, bronze: 3 },
      ]
      const sorted = countries.map(addTotal).sort(sortCountries('total'))

      expect(sorted.map(toCountryCode)).toEqual(['RUS', 'USA', 'NED'])
    })
  })
})
