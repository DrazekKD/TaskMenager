import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</FirebaseContext.Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
