import React, {Component} from 'react';
import 'tachyons';
// import './Card.css';

class Card extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			shibe: [],
			error: null
		}
	}

	// fetchShibe() {
	// 	fetch('http://shibe.online/api/shibes?count=1', {
	// 		mode: "no-cors"
	// 	})
	// 		.then((response) => {
	// 			console.log('before response.json()');
	// 			response.json();
	// 			console.log('after response.json()');
	// 		})
	// 		.then(data => {
	// 			console.log('got the data');
	// 			console.log(data);
	// 			this.setState({ 
	// 				shibe: data,
	// 				isLoading: false, 
	// 			});
	// 		})
	// 		.catch(error => this.setState({error, isLoading: false}));
	// }

	async componentDidMount() {
		const response = await fetch('http://shibe.online/api/shibes?count=1', {
			mode: "no-cors"
		})
		const data = await response.json();
		this.setState({
			shibe: data,
			isLoading: false
		})
		// this.fetchShibe();
	}

	render() {
		const {isLoading, shibe, error} = this.state;
		console.log(this.state);
		return (
			<div>
				{error ? <p>{error.message}</p> : null}
				{!isLoading ? (
			        shibe.map(picture => {
			            const shibe2 = picture;
			            console.log(shibe2);
			            return (
				            <div>
				              	<p>{shibe2}</p>
				            </div>
				        );
				    })
				    // If there is a delay in data, let's let the user know it's loading
				) : (
				    <h3>Loading...</h3>
			    )}
				{this.state.shibe}
			</div>
		)
	}
}

export default Card;