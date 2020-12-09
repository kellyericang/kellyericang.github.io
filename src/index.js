import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
	<div className="index">
		<Header />
		<body> 
			<h2>About Me</h2>
			<p>Hello! My name is Kelly Ng and this is my personal website! I graduated from McMaster University with a B.Eng in Biomedical and Electrical Engineering in 2020 with 20 months of co-op experience. I enjoy making things and this website will showcase some of my projects. </p>
			<h3>Making of this Website</h3>
			<p>I made this website using React and CSS and it's hosted on Github Pages. My Instagram page showcases some of the crafts I've made.</p>
		</body>
		<Footer />
	</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
