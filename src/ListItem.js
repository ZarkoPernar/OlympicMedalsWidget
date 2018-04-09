import React from 'react'
import PropTypes from 'prop-types'

import CountryFlag from './CountryFlag'

const defaultStyle = {
  borderBottom: '1px solid #E0E0E0',
  paddingBottom: '.1em',
}

const ListItem = ({ index, country }) => {
  return (
    <tr>
      <td style={defaultStyle}>{index + 1}.</td>
      <td style={defaultStyle}>
        <CountryFlag countryCode={country.code} />
      </td>
      <td style={defaultStyle}>{country.code}</td>
      <td style={defaultStyle} align="center">
        {country.gold}
      </td>
      <td style={defaultStyle} align="center">
        {country.silver}
      </td>
      <td style={defaultStyle} align="center">
        {country.bronze}
      </td>
      <td style={defaultStyle} align="center">
        <strong>{country.total}</strong>
      </td>
    </tr>
  )
}

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  country: PropTypes.object.isRequired,
}

export default ListItem
