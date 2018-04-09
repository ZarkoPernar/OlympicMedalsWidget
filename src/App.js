import React, { Component } from 'react'

import './App.css'
import Menu from './Menu/index'
import CountryList from './CountryList'
import { createFetch, injectFetch } from './Fetch'

const styles = {
  '--primaryColor': '#616161',
  textTransform: 'uppercase',
  display: 'inline-block',
  width: 400,
  border: '1px solid #ccc',
  padding: '.5rem',
  color: 'var(--primaryColor)',
}

const headerStyle = {
  borderBottom: '2px solid #ccc',
}
const headerTitleStyle = {
  color: '#9E9E9E',
  fontSize: '1.35em',
  fontWeight: 400,
  margin: '0 0 .5rem',
}

const dataUrl =
  'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json'

export class App extends Component {
  state = {
    activeSortOption: this.props.activeSortOption || 'gold',
    Fetch: createFetch(this.props.fetch),
  }

  onMenuSelect = menuOptionName => {
    this.setState({
      activeSortOption: menuOptionName,
    })
  }

  render() {
    const { Fetch } = this.state

    return (
      <div style={styles}>
        <div style={headerStyle}>
          <h2 style={headerTitleStyle}>Medal Count</h2>
          <Menu
            onMenuSelect={this.onMenuSelect}
            activeSortOption={this.state.activeSortOption}
          />
        </div>

        <div>
          <Fetch url={dataUrl}>
            {({ isLoading, data, error }) => {
              if (isLoading) {
                return 'Loading...'
              }

              if (error) {
                return 'Error'
              }

              return (
                <CountryList
                  sortBy={this.state.activeSortOption}
                  listData={data}
                />
              )
            }}
          </Fetch>
        </div>
      </div>
    )
  }
}

export default injectFetch(App)
