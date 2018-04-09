import React, { Component } from 'react'

import './App.css'
import Menu from './Menu'

const styles = {
  display: 'inline-block',
  width: '800px',
  border: '1px solid #ccc',
}

class App extends Component {
  state = {
    activeSortOption: this.props.activeSortOption || 'gold',
  }

  render() {
    return (
      <div style={styles}>
        <div className="App-header">
          <h2>Medal Count</h2>
          <Menu activeSortOption={this.state.activeSortOption} />
        </div>

        <div className="App-main">{/* List */}</div>
      </div>
    )
  }
}

export default App
