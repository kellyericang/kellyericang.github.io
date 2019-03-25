import React, {Component} from 'react';
import Card from './Card';
import Spin from './Spin';
import './Board.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			urlArray: [],
			breedArray:[]
		}
	}

	async componentDidMount() {
		const response = await fetch('https://dog.ceo/api/breeds/image/random/50');
		const obj = await response.json(); 

		var urls = obj.message;
		var urls2 = obj.message.slice(0);
		this.setState({
			urlArray: urls,
			breedArray: addBreeds(urls2)
		});
	}

	renderCard(i) {
	    return (
	      <Card 
	        breed={this.state.breedArray[i]}
	        doggo={this.state.urlArray[i]}
	      />
	    );
	  }

	render() {
		return (
			<div className="board">
				<div className="cards">
					{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}
					{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}
					{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}
					{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}
					{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}{this.renderCard(Math.floor(Math.random()*50))}
				</div>
				<Spin />
			</div>
		)
	}
}

export default Board;

function addBreeds(breeds) {
	for(let i=0; i<breeds.length; i++) {
		let breed = breeds[i].substring(30, breeds[i].lastIndexOf("/"));

		//removing hyphen and swapping words
		if(breed.search("-") < 0) {
			breeds[i] = breed;
		} else {
			let hyphen = breed.indexOf("-");
			breeds[i] = breed.substring(hyphen+1) + " " + breed.substring(0,hyphen);
		}
		
	}
	return breeds;
}