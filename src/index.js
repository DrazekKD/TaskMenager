import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
	<Provider store={store}>
		<FirebaseContext.Provider value={new Firebase()}>
			<Router>
				<App/>
			</Router>
		</FirebaseContext.Provider>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
