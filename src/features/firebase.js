// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVg0INPFOhi9V9JRoaWuGiKCNrIMxwiWU",
  authDomain: "mediabudy-bb265.firebaseapp.com",
  projectId: "mediabudy-bb265",
  storageBucket: "mediabudy-bb265.appspot.com",
  messagingSenderId: "25092390310",
  appId: "1:25092390310:web:55b49d367fafe81694e367",
  measurementId: "G-8YCQ729JVT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db