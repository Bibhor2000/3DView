// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/database';
import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKQjC4-WYtuAEQDtR5LRYGl2h3wVjj5bg",
  authDomain: "view-5a6a6.firebaseapp.com",
  databaseURL: "https://view-5a6a6-default-rtdb.firebaseio.com",
  projectId: "view-5a6a6",
  storageBucket: "view-5a6a6.appspot.com",
  messagingSenderId: "916014327766",
  appId: "1:916014327766:web:07cd0a3b03c72616e9e677",
  measurementId: "G-SW50LTRLHN"
};

// Initialize Firebase & other Variables
if (!firebase.apps.length) {
  firebase.initializeApp({});
}

export const database = firebase.database()
export const storage = firebase.storage()