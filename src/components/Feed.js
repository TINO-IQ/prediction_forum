import React from 'react';
import axios from 'axios';
import Prediction from './Prediction';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:1337/predictions')
      .then(response => {
        this.setState({ predictions: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.predictions.map(prediction => {
            return <Prediction prediction={prediction} />
          })}
        </ul>
        <button>Refresh</button>
      </div>
    )
  }
}

export default Feed;