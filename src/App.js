import React, { Component } from 'react';
import './App.scss';
import DashBoard from "./components/DashBoard/DashBoard";
import NavBar from "./components/NavBar/NavBar";

import { composeWithDevTools} from "redux-devtools-extension";
import { createStore } from "redux"

const initialTasks = {
	project:['Dev','Msw'],
	tasks: [
		'Work', 'House', 'Job'
	]
};

function tasks(state = initialTasks , action) {
	switch (action.type){
		case 'ADD':
			return{...state, tasks:[...state.tasks, action.movie]}
			break;
		case 'RESET':
			return {...state,tasks:[]};
		default:
			return state
	}
}

const store = createStore(tasks, composeWithDevTools());

window.store = store;

class App extends Component {
  render() {
    return (
		<div className="App">
			<NavBar/>
			<DashBoard/>
		</div>
    );
  }
}

export default App;
