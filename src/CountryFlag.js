import React from 'react'
import PropTypes from 'prop-types'

const flagsUrl =
  'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png'

const flagYOffset = [
  'AUT',
  'BLR',
  'CAD',
  'CHN',
  'FRA',
  'GER',
  'ITA',
  'NED',
  'FIN',
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

console.log(flagYOffset)

const style = countryCode => ({
  display: 'inline-block',
  width: 28,
  height: 17,
  backgroundImage: `url(${flagsUrl})`,
  backgroundPositionX: 0,
  backgroundPositionY: `-${flagYOffset[countryCode]}px`,
})

const CountryFlag = ({ countryCode }) => {
  return <span style={style(countryCode)} />
}

CountryFlag.propTypes = {
  countryCode: PropTypes.string.isRequired,
}

export default CountryFlag
