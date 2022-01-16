// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: 'instagram-20922.firebaseapp.com',

  projectId: 'instagram-20922',

  storageBucket: 'instagram-20922.appspot.com',

  messagingSenderId: '542072740174',

  appId: '1:542072740174:web:3ba30f11b2a542f01c661f',
}

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
