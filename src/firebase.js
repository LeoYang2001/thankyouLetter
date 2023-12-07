// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChxqgcGjkS7BUv-MCS-EvCYK7ZuvDmiqA",
  authDomain: "thankyouletter-cf51d.firebaseapp.com",
  projectId: "thankyouletter-cf51d",
  storageBucket: "thankyouletter-cf51d.appspot.com",
  messagingSenderId: "357225437413",
  appId: "1:357225437413:web:bb02d4bee0c20182a5dc0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app , db}