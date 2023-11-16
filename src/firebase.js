// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_yATGb26oZ08pnRaSr4xFGNTe_Bz0dYM",
    authDomain: "flextv-react.firebaseapp.com",
    projectId: "flextv-react",
    storageBucket: "flextv-react.appspot.com",
    messagingSenderId: "731284793808",
    appId: "1:731284793808:web:46e67fad73ffa1801d31d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);