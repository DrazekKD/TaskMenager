import React from 'react'
import { connect } from 'react-redux'

const Project = ({projects}) =>(
	<ul>
		{projects.list.map(project => <li>{project.name}</li>)}
	</ul>);

const mapStateToProps = (state) => ({
	projects: state.projects
});

export default connect(mapStateToProps)(Project)
