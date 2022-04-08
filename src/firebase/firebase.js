import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE__FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE__FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE__FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase with the config
initializeApp(firebaseConfig)
// Get a reference to the database service
const db = getFirestore()
// Get auth and user
const auth = getAuth()
// collection reference
// const movies = collection(db, 'films')
// document reference
// const movie = getDocs(movies).then((snapshot) => {
//   snapshot.docs.map((doc) => console.log(doc.data()))
// })
// Export the database for components to use.
export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword }
