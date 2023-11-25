// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "ase-blog-app.firebaseapp.com",
  projectId: "ase-blog-app",
  storageBucket: "ase-blog-app.appspot.com",
  messagingSenderId: "250428976308",
  appId: "1:250428976308:web:0eecaf9c0ce95859f3bbe1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
