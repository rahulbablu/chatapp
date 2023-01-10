import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5gIRnGTf0lU8dU_3QGLKEZuku9cBLCOg",
  authDomain: "chat-48850.firebaseapp.com",
  projectId: "chat-48850",
  storageBucket: "chat-48850.appspot.com",
  messagingSenderId: "274682958933",
  appId: "1:274682958933:web:34248e8f088c873f76b0dc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
