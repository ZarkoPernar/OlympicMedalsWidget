import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuButton from './MenuButton'
import MedalIcon from './MedalIcon'

const styles = {
  display: 'flex',
  justifyContent: 'flex-end',
}

class Menu extends Component {
  render() {
    return (
      <div style={styles}>
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
