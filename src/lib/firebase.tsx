import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Aapki Firebase Project Config details
const firebaseConfig = {
  apiKey: "AIzaSyCxtu92OASIcBNHxjcm8Z15v1spWUCa2VA",
  authDomain: "cyber-nova-web-app.firebaseapp.com",
  projectId: "cyber-nova-web-app",
  storageBucket: "cyber-nova-web-app.firebasestorage.app",
  messagingSenderId: "1013837713302",
  appId: "1:1013837713302:web:73a17fb67350bcffc117b7",
  measurementId: "G-91GSGQFK7M"
};

// Fast-refresh handling for Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Yahan se auth export ho raha hai
export const auth = getAuth(app);