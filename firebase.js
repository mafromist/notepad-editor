// Import the functions you need from the SDKs you need
import { collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUlYv7HwfBscR1sYT18e6hDOLgk3YNMac",
  authDomain: "react-scrimba-notepad.firebaseapp.com",
  projectId: "react-scrimba-notepad",
  storageBucket: "react-scrimba-notepad.appspot.com",
  messagingSenderId: "982759502726",
  appId: "1:982759502726:web:6630384ec5874b1b7e7207",
  databaseURL: "https://react-scrimba-notepad.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
