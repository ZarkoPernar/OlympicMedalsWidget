import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

const countryStyle = {
  width: '100%',
}

class CountryList extends PureComponent {
  render() {
    return (
      <div>
        <table style={countryStyle}>
          <thead>
            <tr>
              <th style={{ width: 1 }} />
              <th style={{ width: 28 }} />
              <th style={{ width: '35%' }} />
              <th style={{ width: 44 }} />
              <th style={{ width: 44 }} />
              <th style={{ width: 44 }} />
            </tr>
          </thead>
          <tbody>
            {this.props.listData
              .map(addTotals)
              .sort(sortCountries(this.props.sortBy))
              .slice(0, 10)
              .map((country, index) => {
                return (
                  <ListItem
                    country={country}
                    index={index}
                    key={country.code}
                  />
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

CountryList.propTypes = {
  listData: PropTypes.array.isRequired,
}

export default CountryList

export function addTotals(country) {
  return {
    ...country,
    total: country.gold + country.silver + country.bronze,
  }
}

export function sortCountries(sortBy) {
  return function sort(a, b) {
    const secondarySortBy = sortBy === 'gold' ? 'silver' : 'gold'

    if (a[sortBy] === b[sortBy]) {
      return b[secondarySortBy] - a[secondarySortBy]
    }

    return b[sortBy] - a[sortBy]
  }
}
