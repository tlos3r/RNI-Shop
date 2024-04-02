// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMVeH41b9t5TFS1baMCkOdv_hBJN7ZBR8',
  authDomain: 'morcell-product-shop.firebaseapp.com',
  projectId: 'morcell-product-shop',
  storageBucket: 'morcell-product-shop.appspot.com',
  messagingSenderId: '356374669614',
  appId: '1:356374669614:web:8a2c0b56d926e4ca97f2bf'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
