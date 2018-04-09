import React from 'react'
import PropTypes from 'prop-types'

export const activeBorderColor = '#ccc'

const styles = {
  backgroundColor: 'transparent',
  border: 0,
  padding: '.5rem 1rem',
  borderTopStyle: 'solid',
  borderTopWidth: '2px',
  borderTopColor: 'transparent',
}
const stylesWithActive = {
  ...styles,
  borderTopColor: activeBorderColor,
}
const MenuButton = props => {
  return (
    <button
      role="menuitem"
      type="button"
      style={props.isActive ? stylesWithActive : styles}
      onClick={e => props.onClick(props.name)}
    >
      {props.children}
    </button>
  )
}

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuButton
