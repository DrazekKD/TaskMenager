import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/actions'

const AddTaskForm = ({add,tasks,projects}) => {
	const AddTaskNameInput = React.createRef();
	const ProjectsSelect = React.createRef();
	const getLastElementId = (tasks) => {
		return tasks.list[tasks.list.length-1].id
	};
	const addTask = (event) => {
		event.preventDefault();
		add({
			id:getLastElementId(tasks)+1,
			name:AddTaskNameInput.current.value,
			projects:ProjectsSelect.current.value

		});
		AddTaskNameInput.current.value = ''
	};
	//@todo Add disabled verification in submit button
	return <form onSubmit={addTask}>
		<input ref={AddTaskNameInput}/>
		<button type='submit' disabled={false}>Add movie</button>
		<select ref={ProjectsSelect}>
			{projects.list.map((project)=>(
				<option value={project.name}>{project.name}</option>
			))}
		</select>
	</form>
};

const mapDispatchToProps = dispatch => ({
	add: (task) => dispatch(actions.add(task))
});

const mapStateToProps = (state) => ({
	tasks: state.tasks,
	projects: state.projects
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm)
