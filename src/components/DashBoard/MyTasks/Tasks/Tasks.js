import React from 'react';
import {connect} from 'react-redux';
import {Link,Route,Switch} from "react-router-dom";
import Task from "../Task/Task";

const Tasks = ({tasks}) => {
	return (
		<div>
			{tasks.list.map(task =>
					<Link to={`/MyTasks/${task.id}`} key={task.id}>
						<div key={task.id}>
							<p>{task.name}</p>
						</div>
					</Link>
			)}
			<Switch>
				<Route path={`/MyTasks/:id`} component={Task}/>
			</Switch>
		</div>
	);
};

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});


export default connect(mapStateToProps)(Tasks);
