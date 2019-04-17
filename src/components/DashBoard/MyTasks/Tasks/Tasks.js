import React from 'react'
import { connect } from 'react-redux'

const Tasks = ({tasks}) =>(
  <ul>
    {tasks.list.map(tasks => <li key={tasks.id}>{tasks.name}</li>)}
  </ul>);

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(Tasks)
