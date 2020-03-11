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

export const createCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    // doc => snapshot, doc.data() => actual data
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  transformedCollection.reduce((accumulator, collection) => 
  {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})

  return transformedCollection;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
