import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxtu92OASIcBNHxjcm8Z15v1spWUCa2VA",
  authDomain: "cyber-nova-web-app.firebaseapp.com",
  projectId: "cyber-nova-web-app",
  storageBucket: "cyber-nova-web-app.firebasestorage.app",
  messagingSenderId: "1013837713302",
  appId: "1:1013837713302:web:73a17fb67350bcffc117b7",
  measurementId: "G-91GSGQFK7M"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);