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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;
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

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  Object.keys(objectsToAdd).forEach(objKey => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectsToAdd[objKey]);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });

export default firebase;
