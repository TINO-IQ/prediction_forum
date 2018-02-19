import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: []
    }
  }

  render() {
    return (
      <div>
      <p>Multiple predictions will be rendered here</p>
      <button>Refresh</button>
      </div>
    )
  }
}

export default Feed;