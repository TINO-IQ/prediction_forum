import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import Prediction from './Prediction';
import AllStock from './AllStock';
import SingleStock from './SingleStock';


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
        console.log('api loaded');
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/stocks' component={AllStock} predictions={this.state.predictions}/>
        <Route path='/stocks/:symbol' component={SingleStock}/>
      </Switch>

      // <div>
      //   <ul>
      //     {this.state.predictions.map(prediction => {
      //       return <Prediction prediction={prediction} />
      //     })}
      //   </ul>
      //   <button>Refresh</button>
      // </div>
    )
  }
}

export default Feed;