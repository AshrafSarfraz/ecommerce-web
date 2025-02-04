// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCswbfAfzhw_ALZAm8bongp-VYt4O6fmnI",
  authDomain: "e-pakistan-8dfae.firebaseapp.com",
  projectId: "e-pakistan-8dfae",
  storageBucket: "e-pakistan-8dfae.firebasestorage.app",
  messagingSenderId: "19143773573",
  appId: "1:19143773573:web:6db9c8265c49a09510c8ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Add these 3 lines 1st For Firebase Firestore 2nd For Firebase Authentication 3rd For Firebase Realtime Database
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;