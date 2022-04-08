import React from 'react'
import ReactDOM from 'react-dom'
import {
  db,
  auth,
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
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
      }}
    >
      <App />
    </firebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
