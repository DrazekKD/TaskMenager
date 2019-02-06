import React, { Component } from 'react';
import Logo from '../img/logo-white.svg'
import '../css/scss/utils/_settings.scss'
import '../css/scss/utils/_utilsClass.scss'
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
								Projects
							</li>
							<li className="Navbar-menu-item">My Tasks</li>
							<li className="Navbar-menu-item">
								Sign in
							</li>
							<li className="Navbar-menu-item">Sign Out</li>
							<li className="Navbar-menu-item outstandingColor">Registration</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default NavBar;
