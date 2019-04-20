import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../duck/actions'

class AddTaskForm extends Component{
	constructor(props){
		super(props);
		this.state ={
			disabledSubmit: true
		}
	}
	render(){
		const AddTaskNameInput = React.createRef();
		const ProjectsSelect = React.createRef();
		const getLastElementId = (projects) => {
			if (projects.list.length !== 0)
				return projects.list[projects.list.length - 1].id;
			else
				return 0;
		};
		const addTask = (event) => {
			event.preventDefault();
			this.props.add({
				id:getLastElementId(this.props.tasks)+1,
				name:AddTaskNameInput.current.value,
				projects:ProjectsSelect.current.value,
				isConnected: false
			});
			AddTaskNameInput.current.value = ''
		};

		const setDisabledSubmit = (event) => this.setState({disabledSubmit:event.target.value.length === 0});

		return (
			<form onSubmit={addTask}>
				<input ref={AddTaskNameInput} onChange={(e)=>setDisabledSubmit(e)}/>
				<button type='submit' disabled={this.state.disabledSubmit}>Add movie</button>
				<select ref={ProjectsSelect}>
					{this.props.projects.list.map((project)=>(
						<option value={project.name} key={project.id}>{project.name}</option>
					))}
				</select>
			</form>
		)
	}
};

const mapDispatchToProps = dispatch => ({
	add: (task) => dispatch(actions.add(task))
});

const mapStateToProps = (state) => ({
	tasks: state.tasks,
	projects: state.projects
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm)
