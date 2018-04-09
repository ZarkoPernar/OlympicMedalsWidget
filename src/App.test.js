import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import { App } from './App'

const fakeFetch = url => {
  return Promise.resolve({
    json() {
      return Promise.resolve([
        {
          code: 'USA',
          gold: 12,
          silver: 20,
          bronze: 11,
        },
      ])
    },
  })
}

it('renders without crashing', () => {
  const div = document.createElement('div')

  mount(<App fetch={fakeFetch} />)
})
