import React, { Component } from 'react';
import './App.scss';
import DashBoard from "./components/DashBoard/DashBoard";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
		<div className="App">
			<NavBar/>
			<DashBoard/>
			<Header/>
		</div>
    );
  }
}

export default App;
