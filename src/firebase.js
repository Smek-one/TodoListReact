// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCyCfr4-D7t0MWVs2raxufMGA54UkPxW0",

  authDomain: "todo-crud-51f5a.firebaseapp.com",

  projectId: "todo-crud-51f5a",

  storageBucket: "todo-crud-51f5a.appspot.com",

  messagingSenderId: "866921595925",

  appId: "1:866921595925:web:da4cd5f926e9d6cd8cba1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
