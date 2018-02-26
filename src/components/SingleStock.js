import React from 'react'
import { Link } from 'react-router-dom'

class SingleStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predictions: []
    }
  }

  render() {
    return (
      <div>
        <br/>  
        <h1>{this.props.match.params.ticker} (Symbol:{this.props.match.params.ticker})</h1>
        <h2>Position: {this.props.predictions}</h2>
          <form>
          <label>
            Price Prediction:
            <input type="text" name="prediction" />
            <br/>
            Analysis:
            <input type="text" name="analysis" />
            <br/>
          </label>
            <input type="submit" value="Submit" />
          </form>
        <br/>  
        <Link to='/stocks'>Back</Link>
      </div>
    )
  }
}

export default SingleStock;