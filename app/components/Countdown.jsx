import React from 'react';
import Clock from 'Clock';

var Countdown = React.createClass({
	render() {
		return (
			<div>
				<Clock totalSeconds={129}/>
			</div>
		);
	}
});

module.exports = Countdown;