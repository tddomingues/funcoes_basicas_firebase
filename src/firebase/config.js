// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_-Nwude_WzGtaJLHRlCm8jMUZ_wZUfVQ",
  authDomain: "treino-61876.firebaseapp.com",
  projectId: "treino-61876",
  storageBucket: "treino-61876.appspot.com",
  messagingSenderId: "949310197011",
  appId: "1:949310197011:web:cdd814b852de41a0041ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}