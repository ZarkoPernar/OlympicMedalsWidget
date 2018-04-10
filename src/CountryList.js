import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'
import { addTotal, sortCountries } from './utils'

const countryStyle = {
  width: '100%',
}

class CountryList extends PureComponent {
  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    listData: PropTypes.array.isRequired,
  }

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
              .map(addTotal)
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

export default CountryList
