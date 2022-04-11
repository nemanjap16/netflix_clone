import React from 'react'
import ReactDOM from 'react-dom'
import {
  db,
  auth,
  getDocs,
  signOut,
  collection,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from './firebase/firebase'
import { firebaseContext } from './context/firebaseContext'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <firebaseContext.Provider
      value={{
        db,
        auth,
        getDocs,
        signOut,
        collection,
        updateProfile,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
      }}
    >
      <App />
    </firebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
