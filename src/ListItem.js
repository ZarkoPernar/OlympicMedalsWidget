import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => {
  return <li>{props.country.code}</li>
}

ListItem.propTypes = {}

export default ListItem
