import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {getStorage} from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "re-vents-80000.firebaseapp.com",
  projectId: "re-vents-80000",
  storageBucket: "re-vents-80000.appspot.com",
  messagingSenderId: "1084069093336",
  appId: "1:1084069093336:web:f3a34089c86ab3d3f91cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);