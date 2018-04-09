import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  backgroundColor: 'transparent',
  border: 0,
  padding: '.5rem 1rem',
}
const MenuButton = props => {
  return <button style={styles}>{props.children}</button>
}

MenuButton.propTypes = {}

export default MenuButton
