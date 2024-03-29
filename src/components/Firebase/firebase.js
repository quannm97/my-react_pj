import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-Qs2fcVrLuXpiTmu33u9HEuxZDyvdHaw",
  authDomain: "auth-redux-6ebfd.firebaseapp.com",
  projectId: "auth-redux-6ebfd",
  storageBucket: "auth-redux-6ebfd.appspot.com",
  messagingSenderId: "457723656789",
  appId: "1:457723656789:web:589c07b4e083396e0c72dc"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}