// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8s7EVC2wC8CuQ85KdWL_rG2ou3cogdw",
  authDomain: "fir-9be60.firebaseapp.com",
  projectId: "fir-9be60",
  storageBucket: "fir-9be60.appspot.com",
  messagingSenderId: "1054070562630",
  appId: "1:1054070562630:web:9961c01b435cfb20fc0f47",
  measurementId: "G-G31PK8X93S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
