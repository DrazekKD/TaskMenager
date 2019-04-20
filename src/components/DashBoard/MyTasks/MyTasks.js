import React, { Component } from 'react';
import './MyTasks.scss';
import Tasks from './Tasks/Tasks'
import AddTask from './AddTask/AddTask'
import {Route} from "react-router-dom";
import Task from "./Task/Task";
class MyTasks extends Component{
	render() {
		return (
			<div className="MyTasks">
				<h1>MyTasks</h1>
				<Tasks/>
				<AddTask/>
				<Route path={`/MyTasks/:id`} component={Task}/>
			</div>
		);
	}
}

export default MyTasks;
