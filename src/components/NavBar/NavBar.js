import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logo from '../../img/logo-white.svg'
import './NavBar.scss'

class NavBar extends Component {
	 render() {
		return (
			<div className="Navbar-container">
				<div className="Navbar">
					<div className="Navbar-logo">
						<img src={Logo} alt="Logo company" className="Navbar-logo-img"/>
					</div>
					<nav>
						<ul className="Navbar-menu">
							<li className="Navbar-menu-item">
								<Link to='/Projects'>Projects</Link>
							</li>
							<li className="Navbar-menu-item">
								<Link to='/MyTasks'>My Tasks</Link>
							</li>
							<li className="Navbar-menu-item">
								<Link to='/SignIn'>Sign in</Link>
							</li>
							<li className="Navbar-menu-item">
								<Link to='/SignOut'>Sign Out</Link>
							</li>
							<li className="Navbar-menu-item outstandingColor">
								<Link to='/Registration'>Registration</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default NavBar;
