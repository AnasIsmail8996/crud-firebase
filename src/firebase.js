// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4iUkcodexxjbYnqOFqoXsh-ebyPc3vL8",
  authDomain: "post-app-89749.firebaseapp.com",
  projectId: "post-app-89749",
  storageBucket: "post-app-89749.appspot.com",
  messagingSenderId: "1091255567008",
  appId: "1:1091255567008:web:8250b2515eb7a3d7297fc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
