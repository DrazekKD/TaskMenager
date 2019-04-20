import React from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';
import CompletedButton from './CompletedButton/CompletedButton'
import actions from "../duck/actions";
import {Link} from "react-router-dom";

const Tasks = ({del,rename, tasks,completed}) => {
	const deleteTask = (task) => del({task});
	const changeTaskName = (e,task) => rename({...task, name: e.target.value});
	const completedTask = (task) => completed({...task, isCompeted: !task.isCompeted});
	return (
		<div>
			{tasks.list.map(task =>
				<Link to={}>
					<div key={task.id}>
						<input
							key={task.id}
							value={task.name}
							onChange={(e)=> changeTaskName(e,task)}/>
						<DeleteButton id={task.id} click={() => deleteTask(task)}/>
						<CompletedButton isCompeted={task.isCompeted} click={() => completedTask(task)}/>
					</div>
				</Link>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});
const mapDispatchToProps = dispatch => ({
	del: (task) => dispatch(actions.del(task)),
	rename: (task) => dispatch(actions.rename(task)),
	completed: (task) => dispatch(actions.completed(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
