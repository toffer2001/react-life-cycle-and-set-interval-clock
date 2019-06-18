import React, { Component } from 'react'

class Market extends Component {
  state = { coins: [], loading: true }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then( res => res.json() )
      .then( coins => {
        this.setState({ coins, loading: false })
      })
  }

  render() {
    const { coins, loading } = this.state; 

    if (loading) {
      return <p>Loading...</p>
    } else {
      return(
        <ol>
          { coins.map( c => 
              <li key={c.id}>{c.symbol} - {c.name}</li>
            )
          }
        </ol>
      )
    }
  }
}

export default Market;