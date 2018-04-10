import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Fetch extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string,
    body: PropTypes.string,
  }

  static defaultProps = {
    method: 'GET',
  }

  state = {
    data: null,
    isLoading: true,
    error: null,
  }

  componentDidMount() {
    fetch(this.props.url, {
      method: this.props.method,
      body: this.props.body ? JSON.stringify(this.props.body) : undefined,
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          data,
          error: null,
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          data: null,
          error,
        })
      })
  }

  render() {
    return this.props.children(this.state)
  }
}
