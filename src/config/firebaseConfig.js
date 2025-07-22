// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your actual Firebase Web App configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_60Ih6Wou4Ra7xENptWvaG-PQjF4lJ34",
  authDomain: "phoenix-bdd7d.firebaseapp.com",
  projectId: "phoenix-bdd7d",
  storageBucket: "phoenix-bdd7d.firebasestorage.app",
  messagingSenderId: "183044576730",
  appId: "1:183044576730:web:4bdfb1ce26ee5992065ce3",
  measurementId: "G-45SSZVJ41Q"
};

// Initialize Firebase App and Auth service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }; // Export both auth and app if needed elsewhere