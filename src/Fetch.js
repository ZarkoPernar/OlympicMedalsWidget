import React, { Component } from 'react'
import PropTypes from 'prop-types'

export function injectFetch(Component, fetch = window.fetch) {
  return class WithFetch extends Component {
    render() {
      return <Component {...this.props} fetch={fetch} />
    }
  }
}

export function createFetch(fetch) {
  return class Fetch extends Component {
    state = {
      data: null,
      isLoading: true,
      error: null,
    }
    componentDidMount() {
      fetch(this.props.url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            data,
          })
        })
    }

    render() {
      return this.props.children(this.state)
    }
  }

  Fetch.propTypes = {
    url: PropTypes.string.isRequired,
  }
}
