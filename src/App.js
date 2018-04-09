import React, { Component } from 'react'

import './App.css'
import Menu from './Menu/index'

const styles = {
  textTransform: 'uppercase',
  display: 'inline-block',
  width: '800px',
  border: '1px solid #ccc',
}

class App extends Component {
  state = {
    activeSortOption: this.props.activeSortOption || 'gold',
  }

  onMenuSelect = menuOptionName => {
    this.setState({
      activeSortOption: menuOptionName,
    })
  }

  render() {
    return (
      <div style={styles}>
        <div className="App-header">
          <h2>Medal Count</h2>
          <Menu
            onMenuSelect={this.onMenuSelect}
            activeSortOption={this.state.activeSortOption}
          />
        </div>

        <div className="App-main">{/* List */}</div>
      </div>
    )
  }
}

export default App
