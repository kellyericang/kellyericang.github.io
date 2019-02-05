import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
	render() {
		return (
			<div className='tc garamond'>
				<h1>Hello World!</h1>
				<p>{this.props.greeting}</p>
			</div>
		)
	}
}

export default Hello;