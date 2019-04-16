import React from 'react'
import { connect } from 'react-redux'

const MyTasks = ({tasks}) =>
	<ul>
		{tasks.list.map(tasks => <li>{tasks}</li>)}
	</ul>

const mapStateToProps = (state) => ({
	tasks: state.tasks
})

export default connect(
	mapStateToProps, {}
)(MyTasks)

