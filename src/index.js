import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Hello greeting={"sleep tight pupper"}/>
		<div className='puppers'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		
	</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
