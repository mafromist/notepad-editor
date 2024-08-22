// Import the functions you need from the SDKs you need
import { collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import dotenv from 'dotenv';

dotenv.config();

const firebaseApiKey = process.env.FIREBASE_API_KEY;
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const firebaseAppId = process.env.FIREBASE_APP_ID;
const firebaseDatabaseURL = process.env.FIREBASE_DATABASE_URL;

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


FIREBASE_API_KEY="AIzaSyAUlYv7HwfBscR1sYT18e6hDOLgk3YNMac"
FIREBASE_AUTH_DOMAIN="react-scrimba-notepad.firebaseapp.com"
FIREBASE_PROJECT_ID="react-scrimba-notepad"
FIREBASE_STORAGE_BUCKET="react-scrimba-notepad.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="982759502726",
FIREBASE_APP_ID="1:982759502726:web:6630384ec5874b1b7e7207"
FIREBASE_DATABASE_URL="https://react-scrimba-notepad.firebaseio.com"
