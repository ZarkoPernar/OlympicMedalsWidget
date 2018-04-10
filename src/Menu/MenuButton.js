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
const MenuButton = ({ name, isActive, onClick, children }) => {
  return (
    <button
      role="menuitem"
      type="button"
      aria-label={name}
      data-test-active={isActive}
      style={isActive ? stylesWithActive : styles}
      onClick={e => onClick(name)}
    >
      {children}
    </button>
  )
}

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuButton
