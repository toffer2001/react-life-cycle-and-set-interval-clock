import React, { Component } from 'react';
import Clock from './components/clock/Clock';
import Market from './components/market/Market';

class App extends Component {
  state = { showClock: false, showMarket: false }

  toggleShowClock = () => {
    const { showClock } = this.state
    this.setState({ showClock: !showClock })
  }

  toggleShowMarket = () => {
    const { showMarket } = this.state
    this.setState({ showMarket: !showMarket })
  }

  render() {
    const { showClock, showMarket } = this.state 
    return (
      <div>
        { showClock && <Clock /> }
        <button onClick={this.toggleShowClock}>Clock</button>

        { showMarket && <Market /> }
        <button onClick={this.toggleShowMarket}>Market</button>
      </div>
    )
  }
}

export default App;