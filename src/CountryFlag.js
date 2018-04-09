import React from 'react'
import PropTypes from 'prop-types'

const flagsUrl =
  'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png'

const flagOffsetY = [
  'AUT',
  'BLR',
  'CAN',
  'CHN',
  'FRA',
  'GER',
  'ITA',
  'NED',
  'NOR',
  'RUS',
  'SUI',
  'SWE',
  'USA',
].reduce(
  (acc, code, index) =>
    Object.assign(acc, {
      [code]: index * 17,
    }),
  {}
)

const style = countryCode => ({
  display: 'inline-block',
  width: 28,
  height: 17,
  backgroundImage: `url(${flagsUrl})`,
  backgroundPositionX: 0,
  backgroundPositionY: `-${flagOffsetY[countryCode]}px`,
})

const CountryFlag = ({ countryCode }) => {
  return <span style={style(countryCode)} />
}

CountryFlag.propTypes = {
  countryCode: PropTypes.string.isRequired,
}

export default CountryFlag
