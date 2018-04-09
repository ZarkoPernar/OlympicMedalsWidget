import React from 'react'
import { shallow } from 'enzyme'

import Menu from './index'
import MenuButton from './MenuButton'

const fn = () => {}

describe('Menu', () => {
  describe('when activeSortOption prop passed is "gold"', () => {
    it('should have the gold Menu button isActive prop set to true', () => {
      const wrapper = shallow(
        <Menu onMenuSelect={fn} activeSortOption="gold" />
      )
      const firstButton = wrapper.find(MenuButton).first()

      expect(firstButton.props().isActive).toBe(true)
    })
  })

  it('should pass the onMenuSelect fn to the children buttons as onClick prop', () => {
    const wrapper = shallow(<Menu onMenuSelect={fn} activeSortOption="gold" />)
    const firstButton = wrapper.find(MenuButton).first()

    expect(firstButton.props().onClick).toBe(fn)
  })
})
