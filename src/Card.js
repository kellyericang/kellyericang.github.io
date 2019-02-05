import React, {Component} from 'react';
// import './Card.css';


		// let resp = await fetch('http://shibe.online/api/shibes?count=1');
		// let result = await resp.json(); 

		console.log('test');
		// var shibe = fetch('http://shibe.online/api/shibes?count=1')
		const shibe = "https://cdn.shibe.online/shibes/ae4aab8ea13dad8bd591afa83285bb6bebb07fbb.jpg";


class Card extends Component {
	constructor() {
		super();
		this.state = {
			pictures: []
		}
	}

	componentDidMount() {
		fetch('http://shibe.online/api/shibes?count=1')
		.then(results => {
			return results.json();
		}).then(data => {
			let shibe = data.results.map((pic) => {
				return <img src={shibe[0]}/>
			})
		this.setState({pictures: pictures});
		console.log('state', this.state.pictures);
		})
	}

	render() {

		return (
			<div className='f1 w-third grow'>
				{this.state.pictures}
			</div>
		)
	}
}

export default Card;