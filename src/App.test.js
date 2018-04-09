import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import testData from './testData.json'
import { App } from './App'

const fetchMock = require('fetch-mock')
const fakeFetch = fetchMock.sandbox().mock('*', testData)

it('renders without crashing', () => {
  const div = document.createElement('div')
  const wrapper = mount(<App fetch={fakeFetch} />)
  fakeFetch()
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res)
    })
  expect(fakeFetch.called('*')).toBe(true)

  expect(
    wrapper
      .find('tbody td')
      .first()
      .text()
  ).toEqual('1.')
})
