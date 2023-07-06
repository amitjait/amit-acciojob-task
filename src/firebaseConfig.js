import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxcdWwL_4ZieyXyZYS77kAesmPvtwVLaU",
  authDomain: "unicornready-tasklist-task.firebaseapp.com",
  projectId: "unicornready-tasklist-task",
  storageBucket: "unicornready-tasklist-task.appspot.com",
  messagingSenderId: "339447403423",
  appId: "1:339447403423:web:0a882ed780d9f0a928e3aa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db  = firebaseApp.firestore();

export {auth, db};