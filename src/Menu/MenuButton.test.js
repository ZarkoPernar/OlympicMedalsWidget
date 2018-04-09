import React from 'react'
import { shallow } from 'enzyme'

import MenuButton, { activeBorderColor } from './MenuButton'

const fn = () => {}

describe('MenuButton', () => {
  it('should have top border transparent when isActive prop is false', () => {
    const wrapper = shallow(
      <MenuButton isActive={false} name="gold" onClick={fn} />
    )

    expect(wrapper.props().style.borderTopColor).toBe('transparent')
  })

  it('should have top border grey when isActive prop is true', () => {
    const wrapper = shallow(
      <MenuButton isActive={true} name="gold" onClick={fn} />
    )

    expect(wrapper.props().style.borderTopColor).toBe(activeBorderColor)
  })

  it('should call the onClick handler after click event with the name prop', () => {
    const fn = jest.fn()
    const wrapper = shallow(
      <MenuButton isActive={true} name="gold" onClick={fn} />
    )

    wrapper.simulate('click')

    expect(fn).toBeCalledWith('gold')
  })
})
