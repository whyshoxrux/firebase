// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe5qYlHFGgrXH73lsLguxsnQNoJda2Ncc",
  authDomain: "signup-cd111.firebaseapp.com",
  projectId: "signup-cd111",
  storageBucket: "signup-cd111.firebasestorage.app",
  messagingSenderId: "995156244944",
  appId: "1:995156244944:web:0ad530c3a8762a22d521d5",
  measurementId: "G-WHCB3SRP6G",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
