import React from 'react'

class TinoIQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      analytics: [],
      profits: 1337
    }
  }

  render() {
    return (
      <div>
        <br/>
        <ul>
          <ul>Statistics Here</ul>
          <ul>Analytics of TinoIQ</ul>
          <ul>Total Profit made with TinoIQ: {this.state.profits}</ul>
        </ul>
      </div>
    )
  }
}

export default TinoIQ;
