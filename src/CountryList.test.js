import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import CountryList from './CountryList'
import testData from './testData'

describe('CountryList', () => {
  it('should have totals on countries', () => {
    const wrapper = mount(<CountryList sortBy="gold" listData={testData} />)
    const russiaTotal = wrapper
      .find('tbody tr')
      .at(0)
      .find('td')
      .at(6)
    expect(russiaTotal.text()).toBe('33')
  })

  it('should have exactly ten rows', () => {
    const wrapper = mount(<CountryList sortBy="gold" listData={testData} />)

    expect(wrapper.find('tbody tr').length).toBe(10)
  })

  describe('when in initial state', () => {
    it('NED should be above GER', () => {
      const wrapper = mount(<CountryList sortBy="gold" listData={testData} />)
      const fifthPlace = wrapper.find('tbody tr').at(4)
      const sixthPlace = wrapper.find('tbody tr').at(5)

      expect(
        fifthPlace
          .find('td')
          .at(2)
          .text()
      ).toBe('NED')

      expect(
        sixthPlace
          .find('td')
          .at(2)
          .text()
      ).toBe('GER')
    })
  })

  describe('when sort by total', () => {
    it('NED should be above GER', () => {
      const wrapper = mount(<CountryList sortBy="total" listData={testData} />)
      const eightPlace = wrapper.find('tbody tr').at(7)
      const ninthtPlace = wrapper.find('tbody tr').at(8)

      expect(
        eightPlace
          .find('td')
          .at(2)
          .text()
      ).toBe('FRA')

      expect(
        ninthtPlace
          .find('td')
          .at(2)
          .text()
      ).toBe('SWE')
    })
  })
})
