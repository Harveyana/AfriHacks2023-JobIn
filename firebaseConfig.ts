// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85q0NOcFx5Zyf1kr7UL0k0G2yZ9udocM",
  authDomain: "spacexia-7ffbb.firebaseapp.com",
  projectId: "spacexia-7ffbb",
  storageBucket: "spacexia-7ffbb.appspot.com",
  messagingSenderId: "123108565766",
  appId: "1:123108565766:web:674e266b50dc64bc627487",
  measurementId: "G-Z7MPE6EKDM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getFirestore(app)