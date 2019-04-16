import React, { Component } from 'react';
import './MyTasks.scss';
import Tasks from './Tasks/Tasks'
import AddTask from './AddTask/AddTask'
class MyTasks extends Component{
	render() {
		return (
			<div className="MyTasks">
				<h1>MyTasks</h1>
				<Tasks/>
				<AddTask/>
			</div>
		);
	}
}

export default MyTasks;
