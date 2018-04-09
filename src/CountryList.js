import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

class CountryList extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.listData.map((country, index) => {
            return (
              <ListItem country={country} index={index} key={country.code} />
            )
          })}
        </ol>
      </div>
    )
  }
}

CountryList.propTypes = {
  listData: PropTypes.array.isRequired,
}

export default CountryList
