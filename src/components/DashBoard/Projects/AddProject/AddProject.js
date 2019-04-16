import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/actions'

const AddProjectForm = ({add,projects}) => {
	const AddProjectInput = React.createRef();
	const getLastElementId = (projects) => {
		return projects.list[projects.list.length-1].id
	};
	const addTask = (event) => {
		event.preventDefault();
		add({name:AddProjectInput.current.value,id:getLastElementId(projects)+1});
		AddProjectInput.current.value = ''
	};

	return <form onSubmit={addTask}>
		<input ref={AddProjectInput}/>
		<button type='submit'>Add movie</button>
	</form>
};

const mapDispatchToProps = dispatch => ({
	add: (project) => dispatch(actions.add(project))
});

const mapStateToProps = (state) => ({
	projects: state.projects
});


export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm)
