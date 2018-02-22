import React from 'react';
import Main from './components/Main';
import Header from './components/Header';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
