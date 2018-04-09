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
        <MenuButton isActive={this.props.activeSortOption === 'gold'}>
          <MedalIcon name="gold" />
        </MenuButton>
        <MenuButton isActive={this.props.activeSortOption === 'silver'}>
          <MedalIcon name="silver" />
        </MenuButton>
        <MenuButton isActive={this.props.activeSortOption === 'bronze'}>
          <MedalIcon name="bronze" />
        </MenuButton>
        <MenuButton isActive={this.props.activeSortOption === 'total'}>
          Total
        </MenuButton>
      </div>
    )
  }
}

Menu.propTypes = {
  activeSortOption: PropTypes.oneOf(['gold', 'silver', 'bronze', 'total'])
    .isRequired,
}

export default Menu
