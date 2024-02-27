// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa1Jvfs8fX-P1ilD8qZPJOPVIi4jTX82c",
  authDomain: "mern-todos-app.firebaseapp.com",
  projectId: "mern-todos-app",
  storageBucket: "mern-todos-app.appspot.com",
  messagingSenderId: "855182903283",
  appId: "1:855182903283:web:9cc9d049ea25a0f3ba3486",
  measurementId: "G-JT8JFZSKY8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);