import React from 'react';
import {IndexLink, Link} from 'react-router';

var Navigation = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Time App</li>
					<li>
						<IndexLink activeClassName="active-link" to="/">Timer</IndexLink>
					</li>
					<li>
						<Link activeClassName="active-link" to="/countdown">Countdown</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li>
						<a href="#">Copyright</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Navigation;