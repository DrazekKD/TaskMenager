import React, { Component } from 'react';
import './App.scss';
import DashBoard from "./components/DashBoard/DashBoard";
import NavBar from "./components/NavBar/NavBar";

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
