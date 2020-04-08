import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBwCtX0bhdooYHNbMCAP9dlpq-l8DGjIpA',
    authDomain: 'e-commerce-sandbox.firebaseapp.com',
    databaseURL: 'https://e-commerce-sandbox.firebaseio.com',
    projectId: 'e-commerce-sandbox',
    storageBucket: 'e-commerce-sandbox.appspot.com',
    messagingSenderId: '914467350168',
    appId: '1:914467350168:web:ad41c7e1ab9e1c413b52ed',
    measurementId: 'G-NXM8ZYC4MY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
