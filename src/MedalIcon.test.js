import React from 'react'
import { shallow } from 'enzyme'

import MedalIcon, { medalColors } from './MedalIcon'

describe('MedalIcon', () => {
  it('should have a corresponding color according to name', () => {
    const wrapper = shallow(<MedalIcon name="gold" />)

    expect(wrapper.props().style.backgroundColor).toBe(medalColors.gold)
  })
})
