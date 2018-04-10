import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.OlympicMedalWidget = function(elementId, initialSortBy) {
  ReactDOM.render(
    <App activeSortOption={initialSortBy} />,
    document.getElementById(elementId)
  )
  registerServiceWorker()
}
