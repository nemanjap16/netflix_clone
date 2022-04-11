import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import {
  getAuth,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase with the config
initializeApp(firebaseConfig)

// Get a reference to the database service
const db = getFirestore()

// Get auth
const auth = getAuth()

// Export the database for components to use.
export {
  db,
  auth,
  getDocs,
  signOut,
  collection,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
