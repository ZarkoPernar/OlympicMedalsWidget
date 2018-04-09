import React from 'react'
import PropTypes from 'prop-types'

const MenuButton = props => {
  return <button className="App-menu__button">{props.children}</button>
}

MenuButton.propTypes = {}

export default MenuButton
