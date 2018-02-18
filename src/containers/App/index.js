import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from '../Home/home.js';
import Feed from '../Feed/feed.js';
import NotFound from '../NotFound/notFound.js';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/feed' component={Feed} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       predictions: []
//     };
//   }

//   componentWillMount() {
//     console.log('hello from component will mount');
//   }

//   render() {
//     return (
//       <div className="App">
//         TINO IQ Prediction Forum
//       </div>
//     );
//   }
// }

export default App;
