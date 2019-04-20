import React, {Component}from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';
import CompletedButton from '../CompletedButton/CompletedButton'
import actions from "../duck/actions";



class Task extends Component  {
	render() {
		const taskId =this.props.match.params.id;
		const task = this.props.tasks.list.find(item => item.id === taskId? item: null);
		const deleteTask = (task) => this.props.del({task});
		const changeTaskName = (e, task) => this.props.rename({...task, name: e.target.value});
		const completedTask = (task) => this.props.completed({...task, isCompeted: !task.isCompeted});

		if(task){
			return (
				<div key={task.id}>
					<input
						key={task.id}
						value={task.name}
						onChange={(e) => changeTaskName(e, task)}
					/>
					<DeleteButton id={task.id} click={() => deleteTask(task)}/>
					<CompletedButton isCompeted={task.isCompeted} click={() => completedTask(task)}/>
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
});
const mapDispatchToProps = dispatch => ({
	del: (task) => dispatch(actions.del(task)),
	rename: (task) => dispatch(actions.rename(task)),
	completed: (task) => dispatch(actions.completed(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);