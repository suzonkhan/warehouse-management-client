import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDl3jxKjdK97L2zAelAcwHnIkjM4Y-9Y",
  authDomain: "dresses-warehouse.firebaseapp.com",
  projectId: "dresses-warehouse",
  storageBucket: "dresses-warehouse.appspot.com",
  messagingSenderId: "300033083807",
  appId: "1:300033083807:web:10c2558ee7c5a14f6b95aa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export default auth; 