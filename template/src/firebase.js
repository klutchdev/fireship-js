// import firebase from 'firebase/app';
// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';

// const firebaseConfig = {
//   apiKey: '',
//   authDomain: '',
//   databaseURL: '',
//   projectId: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   appId: '',
//   measurementId: '',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// firebase.analytics();

// export const auth = firebase.auth();
// export const db = firebase.firestore();
// export const storage = firebase.storage();

// // Google auth
// const provider = new auth.GoogleAuthProvider();

// export const googleSignIn = async () => {
//   await auth
//     .signInWithPopup(provider)
//     .catch(error => console.log(error));
// };

// export const signIn = async (email, pass) => {
//   await auth
//     .signInWithEmailAndPassword(email, pass)
//     .catch(error => alert(error));
// };

// export const signOut = () => auth.signOut();

// export const increment = firebase.firestore.FieldValue.increment(1);
// export const decrement = firebase.firestore.FieldValue.increment(-1);
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
// export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
// export const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
