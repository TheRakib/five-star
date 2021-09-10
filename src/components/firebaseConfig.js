import dotenv from 'dotenv'
import firebase from 'firebase/app';

dotenv.config();
console.log(process.env.REACT_APIKEY)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVAjvtvhzLde28Gz4u8MOc-JUSvM6C5N8",
    authDomain: "wie20sproject-26f3c.firebaseapp.com",
    projectId: "wie20sproject-26f3c",
    storageBucket: "wie20sproject-26f3c.appspot.com",
    messagingSenderId: "829110343938",
    appId: "1:829110343938:web:66acb6ae94b470ccc38a1b",
    measurementId: "G-JB29G4VLCK"
  };
  



  firebase.initializeApp(firebaseConfig);




