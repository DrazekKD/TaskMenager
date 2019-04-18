import React from 'react';
import {connect} from 'react-redux';
import actions from "../duck/actions";

const Tasks = ({del, tasks}) => {
	const deleteTask = (task) => del({task});
	return (
		<div>
			{tasks.list.map(task =>
				<div key={task.id}>{task.name}
					<div>
						<input key={task.id} type="button" value={task.id} onClick={() => deleteTask(task)}/>
					</div>
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
