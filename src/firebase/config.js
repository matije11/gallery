import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUcbFy_zG6OFnSc-kZV8trhH5tcMSZtWU",
  authDomain: "gallery-e4c3c.firebaseapp.com",
  projectId: "gallery-e4c3c",
  storageBucket: "gallery-e4c3c.appspot.com",
  messagingSenderId: "108578115485",
  appId: "1:108578115485:web:cbee6b95d89be42cc3e974",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
