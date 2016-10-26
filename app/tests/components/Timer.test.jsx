import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.count).toBe(1);
			expect(timer.state.countStatus).toBe('started');
			done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');

		setTimeout(() => {
			expect(timer.state.count).toBe(10);
			expect(timer.state.countStatus).toBe('paused');
			done();
		}, 1001);
	});

	it('should clear count on stopped status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			expect(timer.state.countStatus).toBe('stopped');
			done();
		}, 1001);
	});
});