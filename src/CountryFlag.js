import React from 'react'
import PropTypes from 'prop-types'

const flagsUrl =
  'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png'

const FLAG_HEIGHT = 17

const createOffsetHash = (acc, code, index) =>
  Object.assign(acc, {
    [code]: index * FLAG_HEIGHT,
  })
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
].reduce(createOffsetHash, {})

const getStyle = countryCode => ({
  display: 'inline-block',
  width: 28,
  height: FLAG_HEIGHT,
  backgroundImage: `url(${flagsUrl})`,
  backgroundPositionX: 0,
  backgroundPositionY: `-${flagOffsetY[countryCode]}px`,
})

const CountryFlag = ({ countryCode }) => {
  return <span style={getStyle(countryCode)} />
}

CountryFlag.propTypes = {
  countryCode: PropTypes.string.isRequired,
}

export default CountryFlag
