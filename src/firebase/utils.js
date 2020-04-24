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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
