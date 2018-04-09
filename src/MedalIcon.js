import React from 'react'
import PropTypes from 'prop-types'

const MedalIcon = props => {
  return (
    <span
      style={{backgroundColor: getBackgroundColor(props.name)}}
      className="App-menu__button__icon"
    />
  )
}

MedalIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default MedalIcon

function getBackgroundColor(medalName) {
  switch (medalName) {
    case
  }
}