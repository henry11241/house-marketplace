// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQhgqXLZN2-KyiKFmfKup4_5wVrJ4n0Mw',
  authDomain: 'house-marketplace-app-be51e.firebaseapp.com',
  projectId: 'house-marketplace-app-be51e',
  storageBucket: 'house-marketplace-app-be51e.appspot.com',
  messagingSenderId: '57730601576',
  appId: '1:57730601576:web:0d33423d0961b1ff5821dd',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
