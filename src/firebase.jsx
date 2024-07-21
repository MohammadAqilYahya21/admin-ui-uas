import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "uas-3b8e8.firebaseapp.com",
  projectId: "uas-3b8e8",
  storageBucket: "uas-3b8e8.appspot.com",
  messagingSenderId: "371352664355",
  appId: "1:371352664355:web:d28c7c815ca221b9047496",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);