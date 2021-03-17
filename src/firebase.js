import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDEjB65ro-bbt6hSLAY8gxxGpdm_SvsbFY",
    authDomain: "robotic-instructor.firebaseapp.com",
    projectId: "robotic-instructor",
    storageBucket: "robotic-instructor.appspot.com",
    messagingSenderId: "887424004493",
    appId: "1:887424004493:web:24e842bd145729b8a20dc4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
  
export { db, auth, firebase, storage };