// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4r1ZjiSVKrMVUUz69SG61JWzG3v3toQg",
    authDomain: "myproject2007me.firebaseapp.com",
    projectId: "myproject2007me",
    storageBucket: "myproject2007me.firebasestorage.app",
    messagingSenderId: "663309814960",
    appId: "1:663309814960:web:fe6f4b969d20d55600ff75",
    measurementId: "G-WYGCQFVH95",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);