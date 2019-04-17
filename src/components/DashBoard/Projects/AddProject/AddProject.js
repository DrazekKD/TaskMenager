import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/actions'

const AddProjectForm = ({add,projects}) => {
	const AddProjectInput = React.createRef();
	const getLastElementId = (projects) => {
		return projects.list[projects.list.length-1].id
	};
	const addProject = (event) => {
		event.preventDefault();
		add({
			id:getLastElementId(projects)+1,
			name:AddProjectInput.current.value
		});
		AddProjectInput.current.value = ''
	};

	return <form onSubmit={addProject}>
		<input ref={AddProjectInput}/>
		<button type='submit'>Add Project</button>
	</form>
};

const mapDispatchToProps = dispatch => ({
	add: (project) => dispatch(actions.add(project))
});

const mapStateToProps = (state) => ({
	projects: state.projects
});


export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm)
