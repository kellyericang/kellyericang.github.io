import React, {Component} from 'react';
import './Row.css';
import Card from './Card';

class Row extends Component {
	render() {
		return (
			<div>
				<div className='puppers'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		)
	}
}

export default Row;
