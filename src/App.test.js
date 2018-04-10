import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
const nock = require('nock')

import App from './App'
import testData from './testData'

nock('https://s3-us-west-2.amazonaws.com')
  .get('/reuters.medals-widget/medals.json')
  .reply(200, testData)

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App />)
  })
})
