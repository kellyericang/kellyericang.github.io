import React, {Component} from 'react';
import 'tachyons';
// import './Card.css';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shibe: "",
		}
	}

	async componentDidMount() {
		const response = await fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false', {
			mode: "no-cors"
		})
		console.log('response:', response);
		const obj = await JSON.parse(response); 
		await console.log('object', obj);
	}

	render() {
		// const {shibe} = this.state;
		const shibe = "http://cdn.shibe.online/shibes/23efb1e47e0c860724a333aba56aaca24be97b9f.jpg";
		console.log('state', this.state);
		console.log('shibe', shibe);
		return (
			<div className="ba br4 w-10">
				<img alt="shibe" src={shibe} height="100" width="100"/>
				<p>hello shibe</p>
			</div>
		)
	}
}

export default Card;