import React, { Component } from 'react'

class Clock extends Component {
  state = { date: new Date()}

  componentDidMount() {
    setInterval( () => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.tick)
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  render() {
    const { date } = this.state
    return (
      <div>
        { date.toLocaleTimeString() }
      </div>
    )
  }
}

export default Clock;

