import React, { Component } from 'react';
import Project from './Project/Project';
import AddProject from './AddProject/AddProject';

class Projects extends Component {
	render() {
		return (
			<div className="Projects">
				<h1>Projects</h1>
				<Project/>
				<AddProject/>
			</div>
		);
	}
}

export default Projects;
