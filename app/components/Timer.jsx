import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

var Timer = React.createClass({
	getInitialState() {
		return {
			count: 0,
			countStatus: 'stopped'
		};
	},

	componentDidUpdate(prevProps, prevState) {
		if (this.state.countStatus !== prevState.countStatus) {
			switch(this.state.countStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	startTimer() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},

	handleStatusChange(newStatus) {
		this.setState({countStatus: newStatus});
	},

	render() {
		var {count, countStatus} = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;