import React from 'react'
import { shallow } from 'enzyme'

import Menu from './index'
import MenuButton from './MenuButton'

describe('Menu', () => {
  describe('when activeSortOption prop passed is "gold"', () => {
    it('should have the gold Menu button isActive prop set to true', () => {
      const wrapper = shallow(<Menu activeSortOption="gold" />)
      const firstButton = wrapper.find(MenuButton).first()

      expect(firstButton.props().isActive).toBe(true)
    })
  })
})
