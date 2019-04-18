import React from 'react';
import {connect} from 'react-redux';
// import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';
import actions from '../duck/actions'


const Project = ({del,projects}) => {
	const deleteProject = (project) => del({project});

	return (
		<div>
			{projects.list.map(project => <div key={project.id}>
				{project.name}
				{/*<DeleteButton name={project.id}/>*/}
				<div>
					<input key={project.id} type="button" value={project.id} onClick={() => deleteProject(project)}/>
				</div>
			</div>)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
	del: (project) => dispatch(actions.del(project))
});

export default connect(mapStateToProps,mapDispatchToProps)(Project);
