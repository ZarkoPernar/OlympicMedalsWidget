import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  backgroundColor: 'transparent',
  border: 0,
  padding: '.5rem 1rem',
  borderTop: '2px solid transparent',
}
const stylesWithActive = {
  ...styles,
  borderTopColor: '#ccc',
}
const MenuButton = props => {
  return (
    <button style={props.isActive ? stylesWithActive : styles}>
      {props.children}
    </button>
  )
}

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default MenuButton
