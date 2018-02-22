import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SingleStock from './SingleStock';

class AllStock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        predictions: []
      }
    }

    handleClick = (stock) => {
        return <SingleStock predictions={stock} key={stock.key}/>
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

    render(){
        return (
            <div>
                <br/>
                <ul>
                {this.state.predictions.map((stock, index) => (
                    <li key={index}>
                        <h3 onClick={this.handleClick.bind(this)}>{stock.ticker}</h3>
                        <Link to={`/stocks/${stock.ticker}`}>Send us your predictions for {stock.company}</Link>
                        <p>{stock.company} | Start: {stock.startDate} | {stock.window} Day | End: {stock.endDate} | Votes: {stock.votes}</p>               
                    </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
  

  export default AllStock;