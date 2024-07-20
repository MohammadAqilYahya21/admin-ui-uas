import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-649be.firebaseapp.com",
  projectId: "store-tutorial-649be",
  storageBucket: "store-tutorial-649be.appspot.com",
  messagingSenderId: "187681742020",
  appId: "1:187681742020:web:ee964bb6b1b17fbd563d91"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);