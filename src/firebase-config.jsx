// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqXv9LfZ96KL-ajtBil8-uQJJGbFLY4M",
  authDomain: "saaaa-2e27d.firebaseapp.com",
  projectId: "saaaa-2e27d",
  storageBucket: "saaaa-2e27d.appspot.com",
  messagingSenderId: "1042770920665",
  appId: "1:1042770920665:web:c48ba1ebd8a25b1d85eac8",
  measurementId: "G-2RDKXVBFX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);