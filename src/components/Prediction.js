import React from 'react';
import UserInput from './UserInput';

class Prediction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log('button clicked');
  }

  render() {
    return (
      <div>
      <h3>{this.props.prediction.ticker}</h3>
      <p>{this.props.prediction.company} | Start: {this.props.prediction.startDate} | {this.props.prediction.window} Day | End: {this.props.prediction.endDate} | Votes: {this.props.prediction.votes}</p>
      <button onClick={this.handleClick}>Your prediction</button>
      </div>
    )
  }
}

export default Prediction;
