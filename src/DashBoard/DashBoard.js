import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import MyTasks from "./MyTasks/MyTasks";
import Projects from "./Projects/Projects";
import Registration from "./Registration/Registration";
import SignIn from "./SignIn/SignIn";
import SignOut from "./SignOut/SignOut";


class DashBoard extends Component {
	render() {
		return (
			<div className="DashBoard">
				<Switch>
					<Route path='/MyTask' component={MyTasks}></Route>
					<Route path='/Projects' component={Projects}></Route>
					<Route path='/SignIn' component={SignIn}></Route>
					<Route path='/SignOut' component={SignOut}></Route>
					<Route path='/Registration' component={Registration}></Route>
				</Switch>
			</div>
		);
	}
}

export default DashBoard;