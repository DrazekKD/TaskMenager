import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import MyTasks from "./MyTasks/MyTasks";
import Projects from "./Projects/Projects";
import Registration from "./Registration/Registration";
import SignIn from "./SignIn/SignIn";
import SignOut from "./SignOut/SignOut";
import * as ROUTES from "./../constants/routes"

class DashBoard extends Component {
	render() {
		return (
			<div className="DashBoard">
				<Switch>
					<Route path={ROUTES.MY_TASK} component={MyTasks}></Route>
					<Route path={ROUTES.PROJECTS} component={Projects}></Route>
					<Route path={ROUTES.SIGN_IN} component={SignIn}></Route>
					<Route path={ROUTES.SIGN_OUT} component={SignOut}></Route>
					<Route path={ROUTES.REGISTRATION} component={Registration}></Route>
				</Switch>
			</div>
		);
	}
}

export default DashBoard;