import React, { Component } from 'react';
import './App.scss';
import NavBar from "./NavBar/NavBar";
import DashBoard from "./DashBoard/DashBoard";

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
