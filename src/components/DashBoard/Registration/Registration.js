import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from "../../../constants/routes"
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';
const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class Registration extends Component {
	render() {
		return (
			<div className="Registration">
				<h1>Registration</h1>
				<RegistrationForm/>

			</div>
		);
	}
}

class RegistrationFormBase extends Component{
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE}
	}

	onSubmit = event => {
		const {username, email ,passwordOne} = this.state;

		this.props.firebase
			.doCreateUserWithEmailAdnPAswords(email,passwordOne)
			.then(authUser =>{
				this.setState({...INITIAL_STATE});
				// this.props.history.push(ROUTES.MY_TASK)
				console.log('test')
			})
			.catch(error => {
					this.setState({error})
				});
		event.preventDefault();
	};

	onChange = event => {
		this.setState({[event.target.name]: event.target.value});
	};

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '';
		return(
			<form onSubmit={this.onSubmit}>
				<input
					name="username"
					value={username}
					onChange={this.onChange}
					type="text"
					placeholder="Full Name"/>
				<input
					name="email"
					value={email}
					onChange={this.onChange}
					type="text"
					placeholder="Email"/>
				<input
					name="passwordOne"
					value={passwordOne}
					onChange={this.onChange}
					type="password"
					placeholder="Password"/>
				<input
					name="passwordTwo"
					value={passwordTwo}
					onChange={this.onChange}
					type="password"
					placeholder="Confirm Password"/>

				<button type="submit" disabled={isInvalid}>Register</button>
				{error && <p>{error.massage}</p>}
			</form>
		)
	}
}

const RegistrationForm = compose(
	withRouter,
	withFirebase,
)(RegistrationFormBase);
export default Registration;
export {RegistrationForm}
