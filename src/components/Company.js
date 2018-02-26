import React from 'react';
import { Link } from 'react-router-dom';
import SingleStock from './SingleStock';

class Company extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companies: ['APPL', 'GOOGL', 'FB', 'AMZN', 'JPM']
		}
	}

	handleClick = (stock) => {
		return <SingleStock predictions={stock} key={stock.key}/>
	}

	componentDidMount() {
		// pull in data from database to render company names
		// each company will have information regarding Active Predictions and Historic Predictions
	}

	render(){
		return (
			<div>
				<br/>
				<ul>
				{this.state.companies.map((stock, index) => (
					<li key={index}>
						<h3 onClick={this.handleClick.bind(this)}>{stock}</h3>
						<Link to={`/stocks/${stock}/active`}>Active Predictions for {stock}</Link>
						<br/>
						<Link to={`/stocks/${stock}/historic`}>Historic Predictions for {stock}</Link>             
					</li>
				))
				}
				</ul>
			</div>
		)
	}
}
  
export default Company;