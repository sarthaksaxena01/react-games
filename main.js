import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Game from './FullGame.jsx';
import Timer from './Interval.jsx';
import MatchingColor from './MatchingColor.jsx';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
//import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

//ReactDOM.render(<App />, document.getElementById('app'));	


ReactDOM.render((
	<Router>
		<div>
			<ul>
            	<li><Link to="/" >Home</Link></li>
            	<li><Link to="/about">About</Link></li>
            	<li><Link to="/contact">Contact</Link></li>
            	<li><Link to="/game">Game</Link></li>
                  <li><Link to="/gameColor">GameColors</Link></li>
            	<li><Link to="/interval">Interval</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path='/game' component={Game}/>
            <Route exact path='/interval' component={Timer}/>
            <Route exact path='/gameColor' component={MatchingColor}/>
		</div>
	</Router>

),document.getElementById('app'));













// function tick() {
// 	const element=(
// 		<div>
// 			<h1>hello world!</h1>
// 			<h2>It is {new Date().toLocaleTimeString()}</h2>
// 		</div>
// 	);
// 	ReactDOM.render(
// 		element,
// 		document.getElementById('app')
// 	);
// }

// setInterval(tick,1000);
