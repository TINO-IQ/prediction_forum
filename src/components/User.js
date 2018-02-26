import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      userName: 'Jeff Bezos',
      pastPredictions: [],
      currentPredictions: [],
      analytics: [],
      userProfits: 0
    }
  }
    
  componentDidMount() {
    // upon logging in, we can change state and render to client
    // pull in data from database to render company names
    // each company will have information regarding Active Predictions and Historic Predictions
  }

  render() {
    return (
      <div>
        <br/>
        <ul>
          <ul>Welcome back, {this.state.userName}</ul>
          <ul>Here are your current Predictions : {this.state.pastPredictions}</ul>
          <ul>Here are your past Predictions: {this.state.pastPredictions}</ul>
          <ul>Your total profits made playing against TinoIQ: {this.state.userProfits}</ul>
        </ul>
      </div>
    )
  }
}

export default User;
