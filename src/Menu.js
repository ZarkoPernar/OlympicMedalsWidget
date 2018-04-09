import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuButton from './MenuButton'
import MedalIcon from './MedalIcon'

class Menu extends Component {
  render() {
    return (
      <div className="App-menu">
        <MenuButton>
          <MedalIcon name="gold" />
        </MenuButton>
        <MenuButton>
          <MedalIcon name="silver" />
        </MenuButton>
        <MenuButton>
          <MedalIcon name="bronze" />
        </MenuButton>
        <MenuButton>Total</MenuButton>
      </div>
    )
  }
}

Menu.propTypes = {}

export default Menu
