// Import the functions you need from the SDKs you need
import { collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseApiKey = import.meta.env.FIREBASE_API_KEY;
const firebaseAuthDomain = import.meta.env.FIREBASE_AUTH_DOMAIN;
const firebaseProjectId = import.meta.env.FIREBASE_PROJECT_ID;
const firebaseStorageBucket = import.meta.env.FIREBASE_STORAGE_BUCKET;
const firebaseMessagingSenderId = import.meta.env.FIREBASE_MESSAGING_SENDER_ID;
const firebaseAppId = import.meta.env.FIREBASE_APP_ID;
const firebaseDatabaseURL = import.meta.env.FIREBASE_DATABASE_URL;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
  databaseURL: firebaseDatabaseURL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")