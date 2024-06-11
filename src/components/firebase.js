import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3jzOzmgOfV70ppx7hF4qTPMq3RALD9wQ",
  authDomain: "clone-c84d0.firebaseapp.com",
  projectId: "clone-c84d0",
  storageBucket: "clone-c84d0.appspot.com",
  messagingSenderId: "131370934010",
  appId: "1:131370934010:web:10f2c2514c429ade057343",
  measurementId: "G-58083H2CDC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
