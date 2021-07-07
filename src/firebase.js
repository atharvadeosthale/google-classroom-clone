import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwC3qO_f1vXK2C7KdmbXt3XIYMk7qeREY",
  authDomain: "classroom-clone-ed3cd.firebaseapp.com",
  projectId: "classroom-clone-ed3cd",
  storageBucket: "classroom-clone-ed3cd.appspot.com",
  messagingSenderId: "846495130260",
  appId: "1:846495130260:web:565176629f57de3e010a81",
  measurementId: "G-8SR3368XL1",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((response) => console.log(response.user))
    .catch((err) => console.log(`Error authenticating, ${err.message}`));
};
const logout = () => {
  auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };
