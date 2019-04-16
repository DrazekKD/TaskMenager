import React, { Component } from 'react';
import './MyTasks.scss';
import Tasks from './Tasks/Tasks'
class MyTasks extends Component{
	render() {
		return (
			<div className="MyTasks">
				<h1>MyTasks</h1>
			<Tasks/>
			</div>
		);
	}
}

export default MyTasks;
