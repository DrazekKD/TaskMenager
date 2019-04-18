import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../duck/actions';

class AddProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state ={
			disabledSubmit: true
		}
	}

	render() {
		const AddProjectInput = React.createRef();
		const getLastElementId = (projects) => {
			if (projects.list.length !== 0)
				return projects.list[projects.list.length - 1].id;
			else
				return 0;
		};
		const addProject = (event) => {
			event.preventDefault();
			this.props.add({
				id: getLastElementId(this.props.projects) + 1,
				name: AddProjectInput.current.value,
			});
			AddProjectInput.current.value = '';
		};
		const setDisabledSubmit = (event) => this.setState({disabledSubmit:event.target.value.length === 0});

		return (
			<form onSubmit={addProject}>
				<input ref={AddProjectInput} onChange={(e)=>setDisabledSubmit(e)}/>
				<button type='submit' disabled={this.state.disabledSubmit}>Add Project</button>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	add: (project) => dispatch(actions.add(project)),
});

const mapStateToProps = (state) => ({
	projects: state.projects,
});


export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm);
