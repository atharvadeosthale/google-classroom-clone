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
// Sign in and check or create account in firestore
const signInWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    console.log(response.user);
    const user = response.user;
    console.log(`User ID - ${user.uid}`);
    const querySnapshot = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (querySnapshot.docs.length === 0) {
      // create a new user
      await db.collection("users").add({
        uid: user.uid,
        enrolledClassrooms: [],
      });
    }
  } catch (err) {
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };
