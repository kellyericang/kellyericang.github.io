import React, {Component} from 'react';
import './Card';

class Spin extends Component {
	render() {
		return (
			<div>
				<button onClick={newBoard}>spin!</button>
			</div>
		)
	}
}

export default Spin;

function newBoard() {
	console.log("spin button clicked!");
}