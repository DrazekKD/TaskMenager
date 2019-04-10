import React, { Component } from 'react';
import './App.scss';
import DashBoard from "./components/DashBoard/DashBoard";
import NavBar from "./components/NavBar/NavBar";

import { composeWithDevTools} from "redux-devtools-extension";
import { createStore } from "redux"
import rootReducer from'./reducers'
import { projectActions } from './app/projects/duck'

const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

store.dispatch(projectActions.add('adasa'));
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
