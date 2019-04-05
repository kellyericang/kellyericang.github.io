import React, {Component} from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import './Board.css';
const   reel0 = [10,9,2,4,8,5,7,9,4,6,3,8,5,9,1,3,6,7,5,0,8,9,2,7,5,10,6,8,4,3,1,6],
		reel1 = [9,3,1,4,7,9,2,6,8,1,4,9,2,0,6,5,7,8,4,3,10,9,6,7,8,5,3,9,1,2,7,8],
		reel2 = [2,6,5,10,7,9,6,2,4,8,1,3,6,9,7,4,5,8,9,3,2,4,8,7,5,0,3,8,6,7,9,1],
		reel3 = [2,7,0,10,6,8,7,4,1,5,8,9,4,7,6,2,9,8,3,4,7,5,6,3,8,9,5,2,4,1,9,8],
		reel4 = [8,10,1,2,7,4,6,8,3,7,4,2,6,1,9,5,4,2,0,6,3,9,5,2,8,6,1,9,4,5,7,3];

const reels = [reel0, reel1, reel2, reel3, reel4];

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
		const response = await fetch('https://dog.ceo/api/breeds/image/random/11');
		const obj = await response.json(); 

		var urls = obj.message;
		var urls2 = obj.message.slice(0);

		this.newBoardState();

		this.setState({
			urlArray: urls,
			breedArray: addBreeds(urls2)
		});
	}

	newBoardState() {
		let newState = [];
		let i, x, column = 1;
		for(i=0; i<5; i++){
			x = Math.floor(Math.random()*32);
			newState[column - 1] = reels[i][getPreviousReel(x)];
			newState[column] = reels[i][x];
			newState[column + 1] = reels[i][getNextReel(x)];
			column += 3;
		}

		this.setState({
			boardState: newState
		});

	}

	addScore(i) {
		console.log("score added:", i);
		this.setState({
			score: this.state.score + i
		})
		// console.log(`new score ${this.state.score}`)
		
	}

	checkWin(){
		const winningLines = [
			[1,4,7,10,13],
			[0,3,6,9,12],
			[2,5,8,11,14],
			[0,4,8,10,12],
			[2,4,6,10,14],
			[2,5,7,9,12],
			[0,3,7,11,14],
			[1,5,7,9,13],
			[1,3,7,11,13],
			[2,4,7,10,12],
			[0,4,7,10,14],
			[1,5,8,10,12],
			[1,3,6,10,14],
			[1,4,8,10,12],
			[1,4,6,10,14]
		]
		let i=0, lineWin=0, totalWin=0;
		let currentState = this.state.boardState.slice(0);
		for(i=0; i<15; i++) {
			if (currentState[winningLines[i][0]] !== currentState[winningLines[i][1]]) continue;
			else if (currentState[winningLines[i][1]] !== currentState[winningLines[i][2]]) continue; 
			else {
				lineWin = 5;
				if (currentState[winningLines[i][0]] === currentState[winningLines[i][3]]) {
					lineWin = 10;
					if (currentState[winningLines[i][0]] === currentState[winningLines[i][4]]) lineWin = 15;	
				}
			}
			if(lineWin !== 0) console.log(`won ${lineWin} on line ${i}`)
			totalWin = totalWin + lineWin;
			lineWin = 0;
		}
		
		if (totalWin !== 0) this.addScore(totalWin);
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

	renderScoreboard(){
		return (
			<Scoreboard score={this.state.score} />
		);
	}

	render() {
		// console.log("current state:", this.state.boardState);
		return (
			<div className="board">
				<h1 className='tc garamond'>doggo slot machine</h1>
				{this.renderScoreboard()}
				<button className='startGameButton' 
					onClick={() => {document.querySelector(".cards").style.display = "grid";
					document.querySelector(".startGameButton").style.display = "none";
					document.querySelector(".spinButton").style.display="inline";
					document.querySelector(".scoreboard").style.display="inline";
					}}>START GAME</button>
				<div className="cards">
					{this.renderCard(0)}{this.renderCard(3)}{this.renderCard(6)}{this.renderCard(9)}{this.renderCard(12)}
					{this.renderCard(1)}{this.renderCard(4)}{this.renderCard(7)}{this.renderCard(10)}{this.renderCard(13)}
					{this.renderCard(2)}{this.renderCard(5)}{this.renderCard(8)}{this.renderCard(11)}{this.renderCard(14)}
				</div>
				<button className='spinButton' onClick={() => {
					sleep(1000);
					this.newBoardState();
					this.addScore(-1);
					this.renderScoreboard();
					this.checkWin();
					
					this.renderScoreboard();
					
				}}>spin!</button>
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

function getPreviousReel(i){
	if(i === 0) {
		return 31; 
	} else {
		return i - 1;
	}
}

function getNextReel(i){
	if(i === 31) {
		return 0; 
	} else {
		return i + 1;
	}
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}