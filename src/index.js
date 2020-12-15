import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import Scrollbar from "react-scrollbars-custom";
import './index.css';
import profilePic from "./profilepic.jpg";
import capstonePic from "./capstone.png";
import cookiePic from "./cookies.JPG";
import cardPic from "./cards.JPG";

ReactDOM.render(
	<Scrollbar style={{ position: "" }}>
		<div className="index">
			<Header />
			<body> 
				<div className="section">
					<h2>About Me</h2>
					<row>
						<img className="profile" src={profilePic} alt="profile"></img>
						<p>Hello! My name is Kelly Ng and this is my personal website! I'm currently looking for a full-time position in web/app development either fully remote or in the Hamilton, ON area. I'm a hardworking, well-rounded person and enjoy learning new things that I can put to use. I'm a quick learner and work well independently and as a part of a team. I enjoy making things (crafts, food, programs) and this website will showcase some of my projects. Feel free to reach out at <a href="mailto:klly.ng@hotmail.com">klly.ng@hotmail.com</a>! 
						</p>
						<img className="cookie" src={cookiePic} alt="pumpkin design sugar cookie"></img>
					</row>
				</div>

				<div className="section">
					<h2>My Experience</h2>
					<row>
						<p> I graduated from McMaster University with a B.Eng in Biomedical and Electrical Engineering in 2020 with 20 months of co-op experience. I made drawings in AutoCAD and instruction manuals for projection screens at my first co-op. My second co-op involved working with customers in TV broadcasting to provide solutions with their workflow with the web app being used. This included troubleshooting, implementing new features, testing, setting up new servers/equipment, and more. My final year capstone project was a MeVisLab program to calculate brain volumes from MRI images. I have experience coding in JavaScript, Python, MATLAB, React, and CSS as well as experience working in Unix command line. 
						</p>
						<img className="capstone" src={capstonePic} alt="flowchart for skull stripping MRI head scan"></img>
					</row>
				</div>

				<div className="section">
					<h2>Current Projects</h2>
					<row>
						<img className="cards" src={cardPic} alt="christmas tree pop-up"></img>
						<p>I'm currently making templates for some holiday themed pop-up cards! I've always made cards growing up and constantly learning new techniques to use and improve my cards. I'm also trying to make a Python app to make papercutting stencils from images. 
						</p>
					</row>
				</div>

				<div className="section">
					<h2>Website Info</h2>
					<row>
						<p>I made this website using React and CSS and it's hosted on Github Pages. IMy Instagram page showcases some of the crafts I've made and uses Facebook's Graph API to pull the images from my account so the page doesn't need to be manually updated for each post. The Doggo Slot Machine and Jeopardy pages are games that I made to practice my coding and to learn React. All code is available on my <a href="https://github.com/kellyericang">GitHub</a>.
						</p>
					</row>
				</div>
			</body>
			<Footer />
		</div>
	</Scrollbar>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
