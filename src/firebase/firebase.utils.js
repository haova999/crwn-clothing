import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCexWpqThIWfpLGoEm0vFSYmv8AX_hvFoA",
  authDomain: "crwn-db-1ec0b.firebaseapp.com",
  databaseURL: "https://crwn-db-1ec0b.firebaseio.com",
  projectId: "crwn-db-1ec0b",
  storageBucket: "crwn-db-1ec0b.appspot.com",
  messagingSenderId: "189816224191",
  appId: "1:189816224191:web:bcb294b91545fe9505890a",
  measurementId: "G-0CFNY328MP"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createAt = new Date();
      userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user" + error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const prov`ider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
