import React from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../../../Utils/DeleteButton/DeleteButton';


const Project = ({del,projects}) => {

	return (
		<div>
			{projects.list.map(project => <div key={project.id}>
				{project.name}
				<DeleteButton name={project.id}/>
			</div>)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	projects: state.projects,
});


export default connect(mapStateToProps)(Project);
