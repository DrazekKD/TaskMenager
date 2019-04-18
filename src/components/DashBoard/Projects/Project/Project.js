import React from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';
import actions from '../duck/actions'


const Project = ({del,rename,projects}) => {
	const deleteProject = (project) => del({project});
	const changeProjectName = (e,project) => rename({...project,name: e.target.value});
	return (
		<div>
			{projects.list.map(project =>
				<div key={project.id}>
					<input
						key={project.id}
						value={project.name}
						onChange={(e)=> changeProjectName(e,project)}></input>
					<DeleteButton id={project.id} click={() => deleteProject(project)}/>
				</div>)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
	del: (project) => dispatch(actions.del(project)),
	rename: (project) => dispatch(actions.rename(project))
});

export default connect(mapStateToProps,mapDispatchToProps)(Project);
