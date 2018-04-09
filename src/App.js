import React, { Component } from 'react'

import './App.css'
import Menu from './Menu'

const styles = {
  display: 'inline-block',
  width: '800px',
  border: '1px solid #ccc',
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="App-header">
          <h2>Medal Count</h2>
          <Menu />
        </div>

        <div className="App-main">{/* List */}</div>
      </div>
    )
  }
}

export default App
