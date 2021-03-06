import React from 'react';
import './Tasks.scss'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const Tasks = ({tasks}) => {
	return (
		<div className="Tasks-container">
			{tasks.list.map(task =>
					<Link to={`/MyTasks/${task.id}`} key={task.id}>
						<div key={task.id}>
							<p>{task.name}</p>
						</div>
					</Link>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});


export default connect(mapStateToProps)(Tasks);
