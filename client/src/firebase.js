// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ccdaf.firebaseapp.com",
  projectId: "mern-estate-ccdaf",
  storageBucket: "mern-estate-ccdaf.appspot.com",
  messagingSenderId: "497192323475",
  appId: "1:497192323475:web:44f07e29021b1accb38066"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);