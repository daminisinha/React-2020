import firebase from 'firebase/app';
import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4aFOw9Xww-WCVdjW_ZDSq6MXxtl6BK5s",
    authDomain: "crwn-db-64510.firebaseapp.com",
    databaseURL: "https://crwn-db-64510.firebaseio.com",
    projectId: "crwn-db-64510",
    storageBucket: "crwn-db-64510.appspot.com",
    messagingSenderId: "1027776541297",
    appId: "1:1027776541297:web:05e0580522780996ce21d0",
    measurementId: "G-5X9Q1XX0CM"
  };



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const sanpShot = await userRef.get();

    if(!sanpShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error){
          console.log('error creating user', error.message);
      }
    }

    return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;