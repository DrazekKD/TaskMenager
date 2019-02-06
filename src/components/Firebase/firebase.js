import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCy9aHmxPBKmX3_78c0ViDZN9rB1yFqDEo",
	authDomain: "taskmenager-1c6de.firebaseapp.com",
	databaseURL: "https://taskmenager-1c6de.firebaseio.com",
	projectId: "taskmenager-1c6de",
	storageBucket: "taskmenager-1c6de.appspot.com",
	messagingSenderId: "1029545889004"
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}
	// *** Auth API ***

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = password =>
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;