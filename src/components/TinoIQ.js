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
          <li>Statistics Here</li>
          <li>Analytics of TinoIQ</li>
          <li>Total Profit made with TinoIQ: {this.state.profits}</li>
        </ul>
      </div>
    )
  }
}

export default TinoIQ;
