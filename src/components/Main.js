import React from 'react';
import Feed from './Feed';
import Header from './Header';

const Main = () => (
  <div>
    <Header />
    <p className="App-intro">
    Make predictions, submit analysis, and discuss with other users
    </p>
    <Feed />
  </div>
);

export default Main;
