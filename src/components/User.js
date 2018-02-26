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
          <li>Welcome back, {this.state.userName}</li>
          <li>Here are your current Predictions : {this.state.pastPredictions}</li>
          <li>Here are your past Predictions: {this.state.pastPredictions}</li>
          <li>Your total profits made playing against TinoIQ: {this.state.userProfits}</li>
        </ul>
      </div>
    )
  }
}

export default User;
