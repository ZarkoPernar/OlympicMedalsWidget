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
        <MenuButton
          name="gold"
          isActive={this.props.activeSortOption === 'gold'}
          onClick={this.props.onMenuSelect}
        >
          <MedalIcon name="gold" />
        </MenuButton>
        <MenuButton
          name="silver"
          isActive={this.props.activeSortOption === 'silver'}
          onClick={this.props.onMenuSelect}
        >
          <MedalIcon name="silver" />
        </MenuButton>
        <MenuButton
          name="bronze"
          isActive={this.props.activeSortOption === 'bronze'}
          onClick={this.props.onMenuSelect}
        >
          <MedalIcon name="bronze" />
        </MenuButton>
        <MenuButton
          name="total"
          isActive={this.props.activeSortOption === 'total'}
          onClick={this.props.onMenuSelect}
        >
          Total
        </MenuButton>
      </div>
    )
  }
}

Menu.propTypes = {
  activeSortOption: PropTypes.oneOf(['gold', 'silver', 'bronze', 'total'])
    .isRequired,
  onMenuSelect: PropTypes.func.isRequired,
}

export default Menu
