var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}/>
			<Route path="/" component={Timer}/>
			<Route path="countdown" component={Countdown}/>
		</Route>
	</Router>,
	document.getElementById('app')
);