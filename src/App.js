import React, { Component } from 'react';
import './App.scss';
import DashBoard from "./components/DashBoard/DashBoard";
import NavBar from "./components/NavBar/NavBar";

import { composeWithDevTools} from "redux-devtools-extension";
import { createStore, combineReducers } from "redux"

const initialTasks = {
	list: [
		'Work', 'House', 'Job'
	]
};

const insitailProjects = {
	list: [
		'Dev','Msw'
	]
};

function tasks(state = initialTasks, action) {
	switch (action.type){
		case 'ADD':
			return {...state, list:[...state.list, action.movie]};
		case 'RESET':
			return {...state,list:[]};
		default:
			return state
	}
}

function projects(state = insitailProjects, action) {
	switch (action.type) {
		case 'ADD_PROJECT':
			return {...state, list:[...state.list, action.movie]};
		case  'RESET_PROJECT':
			return {...state, list:[]};
		default:
			return state
	}
}

const allReducers = combineReducers({tasks, projects});

const store = createStore(allReducers, composeWithDevTools());

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
