// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFGJC4aUKg7o78GtBXsJBHeyLli5BGh8Y",
  authDomain: "authentic-4fa12.firebaseapp.com",
  projectId: "authentic-4fa12",
  storageBucket: "authentic-4fa12.appspot.com",
  messagingSenderId: "1046887202389",
  appId: "1:1046887202389:web:afb31638fa1c8664459edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
