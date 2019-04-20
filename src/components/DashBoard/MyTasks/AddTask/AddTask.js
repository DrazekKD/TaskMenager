import React from 'react';
import { connect } from 'react-redux'
import actions from '../duck/actions'

const AddTaskForm = ({add, tasks}) => {
		const getLastElementId = (projects) => {
			if (projects.list.length !== 0)
				return projects.list[projects.list.length - 1].id;
			else
				return 0;
		};
		const addTask = () => {
			add({
				id:(parseInt(getLastElementId(tasks))+1).toString(),
				name:'dddddd',
				projects:'',
				description:'',
				isConnected: false
			});
		};


		return <input type={'button'} value={'Add new Task'} onClick={addTask}/>

};

const mapDispatchToProps = dispatch => ({
	add: (task) => dispatch(actions.add(task))
});

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm)
