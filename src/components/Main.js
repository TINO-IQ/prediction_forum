import React from 'react';
import Feed from './Feed';
import Header from './Header';

const Main = () => (
  <div>
    <Header />
    <h2 className="App-intro">
    Make predictions, submit analysis, and discuss with other users.
    </h2>
    <Feed />
  </div>
);

export default Main;
