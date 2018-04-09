import React from 'react'
import PropTypes from 'prop-types'

export const medalColors = {
  gold: '#F3D258',
  silver: '#9DA7AD',
  bronze: '#81552F',
}

const MedalIcon = props => {
  return (
    <span
      style={{ backgroundColor: getBackgroundColor(props.name) }}
      className="App-menu__button__icon"
    />
  )
}

MedalIcon.propTypes = {
  name: PropTypes.oneOf(['gold', 'silver', 'bronze']).isRequired,
}

export default MedalIcon

function getBackgroundColor(medalName) {
  return medalColors[medalName]
}
