// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd_GHrQlzcKaZZlir8I8uL-YdWfRQ7ZtA",
  authDomain: "linkedin-db9d4.firebaseapp.com",
  projectId: "linkedin-db9d4",
  storageBucket: "linkedin-db9d4.appspot.com",
  messagingSenderId: "699357344450",
  appId: "1:699357344450:web:e67d8638bdbb824e83415b",
  measurementId: "G-T6KB6MGG7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
