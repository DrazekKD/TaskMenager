import React from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';
import actions from "../duck/actions";

const Tasks = ({del, tasks}) => {
	const deleteTask = (task) => del({task});
	return (
		<div>
			{tasks.list.map(task =>
				<div key={task.id}>{task.name}
					<DeleteButton id={task.id} click={() => deleteTask(task)}/>
				</div>,
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});
const mapDispatchToProps = dispatch => ({
	del: (project) => dispatch(actions.del(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
