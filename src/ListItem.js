import React from 'react'
import PropTypes from 'prop-types'

import CountryFlag from './CountryFlag'

const medalStyle = {
  textAlign: 'center',
}

const ListItem = ({ index, country }) => {
  return (
    <tr>
      <td>{index + 1}.</td>
      <td>
        <CountryFlag countryCode={country.code} />
      </td>
      <td>{country.code}</td>
      <td style={medalStyle}>{country.gold}</td>
      <td style={medalStyle}>{country.silver}</td>
      <td style={medalStyle}>{country.bronze}</td>
      <td style={medalStyle}>
        <strong>{country.total}</strong>
      </td>
    </tr>
  )
}

ListItem.propTypes = {}

export default ListItem
