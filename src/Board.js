import React, {Component, useState} from 'react';
import Card from './Card';
// import Spin from './Spin';
import './Board.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 10000,
			urlArray: [],
			breedArray: [],
			boardState: []
		}
	}

	async componentDidMount() {
		const response = await fetch('https://dog.ceo/api/breeds/image/random/50');
		const obj = await response.json(); 

		var urls = obj.message;
		var urls2 = obj.message.slice(0);
		var initialState = [];
		let i=0;
		for(i=0; i<25; i++){
			initialState[i] = Math.floor(Math.random()*50);
		}

		this.setState({
			urlArray: urls,
			breedArray: addBreeds(urls2),
			boardState: initialState
		});
	}

	renderCard(i) {
		let x = this.state.boardState[i];
	    return (
	      <Card 
	        // breed={this.state.breedArray[x]}
	        breed={x}
	        doggo={this.state.urlArray[x]}
	      />
	    );
	  }

	newBoard() {
		console.log("spin button clicked!");
		let newState = [];
		let i=0;
		for(i=0; i<25; i++){
			newState[i] = Math.floor(Math.random()*50);
		}
		this.setState({
			boardState: newState,
			delayState: true
		});
		console.log("after click");
		this.addScore(-1);
	}

	addScore(i) {
		this.setState({
			score: this.state.score + i
		})
	}


	render() {
		console.log("current state:", this.state.boardState);
		return (
			<div className="board">
				<h1 className='tc garamond'>doggo slot machine</h1>
				<div className="scoreboard">Score: {this.state.score}</div>
				<button className='startGameButton' 
					onClick={() => {document.querySelector(".cards").style.display = "grid";
					document.querySelector(".startGameButton").style.display = "none";
					document.querySelector(".spinButton").style.display="inline";
					document.querySelector(".scoreboard").style.display="inline"}}>
					START GAME</button>
				<div className="cards">
					{this.renderCard(0)}{this.renderCard(1)}{this.renderCard(2)}{this.renderCard(3)}{this.renderCard(4)}
					{this.renderCard(5)}{this.renderCard(6)}{this.renderCard(7)}{this.renderCard(8)}{this.renderCard(9)}
					{this.renderCard(10)}{this.renderCard(11)}{this.renderCard(12)}{this.renderCard(13)}{this.renderCard(14)}
					{this.renderCard(15)}{this.renderCard(16)}{this.renderCard(17)}{this.renderCard(18)}{this.renderCard(19)}
					{this.renderCard(20)}{this.renderCard(21)}{this.renderCard(22)}{this.renderCard(23)}{this.renderCard(24)}
				</div>
				<button className='spinButton' onClick={() => this.newBoard()}>spin!</button>
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

// function 