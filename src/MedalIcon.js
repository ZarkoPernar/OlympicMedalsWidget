import React from 'react'
import PropTypes from 'prop-types'

export const medalColors = {
  gold: '#F3D258',
  silver: '#9DA7AD',
  bronze: '#81552F',
}
const styles = {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
}
const MedalIcon = props => {
  return (
    <span
      style={{ ...styles, backgroundColor: getBackgroundColor(props.name) }}
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
