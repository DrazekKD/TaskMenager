import React, {Component}from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';
import CompletedButton from '../CompletedButton/CompletedButton'
import actions from "../duck/actions";



class Task extends Component  {
	render() {
		const taskId =this.props.match.params.id;
		const task = this.props.tasks.list.find(item => item.id === taskId? item: null);
		const ProjectsSelect = React.createRef();

		const deleteTask = (task) => this.props.del({task});
		const changeTaskName = (e, task) => this.props.changeElement({...task, name: e.target.value});
		const changeTaskDescription = (e, task) => this.props.changeElement({...task, description: e.target.value});
		const changeTaskProject = (e, task) => this.props.changeElement({...task, project: ProjectsSelect.current.value});
		const completedTask = (task) => this.props.completed({...task, isCompeted: !task.isCompeted});

		if(task){
			return (
				<div key={task.id}>
					<input
						key={task.id}
						value={task.name}
						onChange={(e) => changeTaskName(e, task)}
					/>
					<textarea
						key={task.id}
						cols="30"
						rows="10"
						value={task.description}
						onChange={()=>(changeTaskDescription(task))}
					/>
					<select ref={ProjectsSelect} onChange={(e)=>changeTaskProject(e,task)}>
						{this.props.projects.list.map((project)=>(
							<option
								value={project.name}
								key={project.id}
								selected={project.name === task.project}
							>{project.name}</option>
						))}
					</select>
					<DeleteButton
						id={task.id}
						click={() => deleteTask(task)}
					/>
					<CompletedButton
						isCompeted={task.isCompeted}
						click={() => completedTask(task)}/>

				</div>
			)
		}else {
			return(
				<div><p>This task is not exist</p></div>
			)
		}


	}
};

const mapStateToProps = (state) => ({
	tasks: state.tasks,
	projects: state.projects
});
const mapDispatchToProps = dispatch => ({
	del: (task) => dispatch(actions.del(task)),
	changeElement: (task) => dispatch(actions.changeElement(task)),
	completed: (task) => dispatch(actions.completed(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);